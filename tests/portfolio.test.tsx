import { render, screen, fireEvent, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import axe from "axe-core";
import { existsSync, readFileSync } from "node:fs";
import Home from "@/app/page";
import { Navbar } from "@/components/Navbar";
import { CaseStudy } from "@/components/CaseStudy";
import { projects } from "@/content/projects";
import { profile, skillGroups, awards, research } from "@/content/profile";
import { getSiteUrl } from "@/lib/site";
import { generateMetadata, generateStaticParams } from "@/app/projects/[slug]/page";
import sitemap from "@/app/sitemap";

vi.mock("next/navigation", () => ({ usePathname: () => "/" }));
vi.mock("next/image", () => ({
  default: ({ fill, preload, ...props }: React.ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean; preload?: boolean }) =>
    {
      void fill; void preload;
      // eslint-disable-next-line @next/next/no-img-element
      return <img {...props} alt={props.alt ?? ""} />;
    },
}));

describe("Public portfolio", () => {
  it("renders all sections and resolves homepage anchors", () => {
    const { container } = render(<Home />);
    for (const id of ["home", "about", "projects", "skills", "education", "research", "contact"]) {
      expect(container.querySelector(`#${id}`)).toBeInTheDocument();
    }
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Priynka Roy");
    for (const link of container.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')) {
      expect(container.querySelector(link.getAttribute("href")!)).not.toBeNull();
    }
    expect(screen.getByRole("link", { name: /Read the publication/ })).toHaveAttribute("href", "https://doi.org/10.1186/s12982-024-00311-w");
  });

  it("opens the mobile menu and restores toggle focus on Escape", () => {
    render(<Navbar />);
    const toggle = screen.getByRole("button", { name: "Open navigation" });
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    fireEvent.keyDown(document, { key: "Escape" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(toggle).toHaveFocus();
    fireEvent.click(toggle);
    fireEvent.click(screen.getByRole("link", { name: "Projects" }));
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  it.each(projects)("renders the $name case study and the verified links", (project) => {
    render(<CaseStudy project={project} />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(project.name);
    expect(screen.getAllByRole("link", { name: /Open live app/ })[0]).toHaveAttribute("href", project.live);
    expect(screen.getAllByRole("link", { name: /View source/ })[0]).toHaveAttribute("href", project.github);
    expect(existsSync(`public${project.image}`)).toBe(true);
    const glance = screen.getByRole("region", { name: "Project at a Glance" });
    for (const label of ["Problem", "Dataset", "Main methods", "Key findings", "Technologies"]) {
      expect(within(glance).getByText(label, {exact:true})).toBeInTheDocument();
    }
    expect(glance).toHaveTextContent(project.glance.finding);
  });

  it("shows four featured projects in order with the exact public destinations", () => {
    const { container } = render(<Home />);
    const cards = [...container.querySelectorAll(".project-card")];
    expect(cards).toHaveLength(4);
    expect(cards.map(card => card.querySelector(".eyebrow")?.textContent)).toEqual([
      "01IndustrialGuard AI", "02EnerTwin AI", "03CreditRisk AI", "04ActuaryLab AI",
    ]);
    expect(screen.getByRole("link", { name: /Live demo.*CreditRisk AI/ })).toHaveAttribute("href", "https://creditrisk-ai-asquvlbgrsfevfur938zrk.streamlit.app/");
    expect(screen.getByRole("link", { name: "CreditRisk AI on GitHub (opens in a new tab)" })).toHaveAttribute("href", "https://github.com/Priynka-Roy/Credit-Risk-Analytics-and-Model-Validation");
    expect(cards[2].querySelectorAll('a[href="/projects/creditrisk-ai"]')).toHaveLength(3);
    expect(screen.getByRole("link", { name: /Live demo.*ActuaryLab AI/ })).toHaveAttribute("href", "https://actuarylab-ai-insurance-pricing-risk-hr7wfi9w5xtdycwvvyjuxp.streamlit.app/");
    expect(screen.getByRole("link", { name: "ActuaryLab AI on GitHub (opens in a new tab)" })).toHaveAttribute("href", "https://github.com/Priynka-Roy/Insuarance-and-Actuarial-Analytics");
    expect(cards[3].querySelectorAll('a[href="/projects/actuarylab-ai"]')).toHaveLength(3);
    expect(cards.map(card => card.querySelector("a.button-primary")?.getAttribute("href"))).toEqual([
      "https://industrialguard-predictive-maintenance-fm5zvs3pfvs.streamlit.app/",
      "https://enertwin-industrial-energy-digital-twin-a2rgv4nwanli6udcl9egvr.streamlit.app/",
      "https://creditrisk-ai-asquvlbgrsfevfur938zrk.streamlit.app/",
      "https://actuarylab-ai-insurance-pricing-risk-hr7wfi9w5xtdycwvvyjuxp.streamlit.app/",
    ]);
  });

  it.each(["creditrisk-ai", "actuarylab-ai"])("renders accessible %s evidence, local visuals and contents anchors", async (slug) => {
    const project = projects.find(project => project.slug === slug)!;
    const { container } = render(<CaseStudy project={project} />);
    expect(screen.getAllByRole("table").length).toBeGreaterThanOrEqual(3);
    if (slug === "creditrisk-ai") {
      expect(container.textContent).toContain("0.7804");
      expect(container.textContent).toContain("retrospective");
    } else {
      expect(container.textContent).toContain("15.49%");
      expect(container.textContent).toContain("SMU");
      expect(container.textContent).toContain("668,896");
      expect(container.textContent).toContain("conditional");
    }
    for (const image of container.querySelectorAll("img")) {
      expect(image.alt.length).toBeGreaterThan(15);
      expect(existsSync(`public${image.getAttribute("src")}`)).toBe(true);
    }
    for (const link of container.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')) {
      expect(container.querySelector(link.getAttribute("href")!)).not.toBeNull();
    }
    const result = await axe.run(container, { rules: { "color-contrast": { enabled: false } } });
    expect(result.violations.map(({ id }) => id)).toEqual([]);
  });

  it.each(["creditrisk-ai", "actuarylab-ai"])("generates %s metadata and sitemap on the real portfolio origin", async (slug) => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://data-science-portfolio-olive.vercel.app");
    try {
      expect(generateStaticParams()).toContainEqual({ slug });
      const metadata = await generateMetadata({ params: Promise.resolve({ slug }) });
      expect(metadata.title).toContain(slug === "creditrisk-ai" ? "CreditRisk AI" : "ActuaryLab AI");
      expect(metadata.alternates?.canonical).toBe(`https://data-science-portfolio-olive.vercel.app/projects/${slug}`);
      expect(metadata.openGraph).toMatchObject({ url: `https://data-science-portfolio-olive.vercel.app/projects/${slug}` });
      expect(sitemap().map(entry => entry.url)).toContain(`https://data-science-portfolio-olive.vercel.app/projects/${slug}`);
    } finally { vi.unstubAllEnvs(); }
  });

  it("provides real public assets and keeps the original files ignored", () => {
    expect(existsSync("public/resume/priynka-roy-cv.pdf")).toBe(false);
    expect(existsSync(`public${profile.portrait.src}`)).toBe(true);
    const ignore = readFileSync(".gitignore", "utf8");
    expect(ignore).toContain("Priynka-Roy-Resume.pdf");
    expect(ignore).toContain("Profilep.jpg");
  });

  it("presents capabilities without public CV links or repeated academic hero copy", () => {
    const { container } = render(<Home />);
    const hero = container.querySelector("#home")! as HTMLElement;
    expect(within(hero).getByRole("heading", { level: 1 })).toHaveTextContent("Turning data into meaningful insights.");
    expect(hero).toHaveTextContent("Statistics • Data Science • Machine Learning • Analytics");
    expect(hero).toHaveTextContent(profile.intro);
    expect(hero).not.toHaveTextContent("Turku, Finland");
    expect(hero).not.toHaveTextContent("University of Turku");
    expect(within(hero).getByRole("link", { name: /Google Scholar/ })).toHaveAttribute("href", profile.scholar);
    expect(within(hero).getByRole("link", { name: /View my projects/ })).toHaveAttribute("href", "#projects");
    expect(container.querySelector('a[download], a[href*="/resume/"], .intro-strip')).toBeNull();
    expect(screen.queryByRole("link", { name: /Download CV|Explore my research|Google Scholar profile/ })).not.toBeInTheDocument();
    expect(container.querySelector("#about")).toHaveTextContent("AI-assisted development tools");
    expect(container.querySelector("#projects")).not.toHaveTextContent("Four independent projects");
    expect(container.querySelector("#contact")).toHaveTextContent("quantitative analytics");
  });

  it("keeps compact card summaries separate from the complete technical case studies", () => {
    const { container } = render(<Home />);
    for (const [index, card] of [...container.querySelectorAll(".project-card")].entries()) {
      const project = projects[index];
      expect(card.querySelector("h3")).toHaveTextContent(project.card.title);
      expect(card.querySelectorAll(".project-highlights li")).toHaveLength(2);
      expect(card.querySelectorAll(".tags li")).toHaveLength(3);
      expect(card).toHaveTextContent(project.card.description);
      expect(project.sections.length).toBeGreaterThanOrEqual(5);
      expect(project.limitations.length).toBeGreaterThanOrEqual(3);
    }
  });

  it("uses evidence-based skills, scholarship ordering and the supplied ongoing thesis", () => {
    const { container } = render(<Home />);
    expect(skillGroups).toHaveLength(6);
    expect(screen.getByText("SQL (Basic)", {exact:true})).toBeInTheDocument();
    expect(screen.getByText("Data preparation pipelines", {exact:true})).toBeInTheDocument();
    expect(awards.map(a => a.title)).toEqual(["Merit Scholarship", "Research Scholarship"]);
    expect(awards.every(a => !("period" in a))).toBe(true);
    const section = container.querySelector("#research")! as HTMLElement;
    expect(within(section).getByRole("heading", {name:research.mastersTitle})).toBeInTheDocument();
    expect(section).toHaveTextContent("September 2026 – Present");
    expect(section).toHaveTextContent("Ongoing master's thesis");
    expect(section.querySelector('a[href*="scholar.google"]')).toBeNull();
    expect(container.querySelector("#education")).toHaveTextContent("A foundation in Statistics and Data Analytics.");
  });

  it("uses the renamed GitHub repositories for every project and technical reference", () => {
    const expected = [
      "Predictive-Maintenance-and-Equipment-Health-Monitoring",
      "Industrial-Energy-Analytics-and-Operations-Optimization",
      "Credit-Risk-Analytics-and-Model-Validation",
      "Insuarance-and-Actuarial-Analytics",
    ];
    projects.forEach((p,i) => {
      expect(p.github).toBe(`https://github.com/Priynka-Roy/${expected[i]}`);
      for (const source of p.sources.filter(s=>s.url.startsWith("https://github.com/Priynka-Roy/"))) {
        expect(source.url).toMatch(new RegExp(`^${p.github}/`));
      }
    });
  });

  it("has no detectable structural accessibility violations", async () => {
    const { container } = render(<><Navbar /><Home /></>);
    const result = await axe.run(container, { rules: { "color-contrast": { enabled: false } } });
    expect(result.violations.map(({ id }) => id)).toEqual([]);
  });

  it("uses only HTTPS origins and falls back when the optional setting is empty", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "");
    vi.stubEnv("VERCEL_ENV", "production");
    vi.stubEnv("VERCEL_PROJECT_PRODUCTION_URL", "example.vercel.app");
    expect(getSiteUrl()).toBe("https://example.vercel.app");
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "http://example.com");
    expect(() => getSiteUrl()).toThrow();
    vi.unstubAllEnvs();
  });
});
