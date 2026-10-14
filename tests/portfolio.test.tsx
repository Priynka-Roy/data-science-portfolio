import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import axe from "axe-core";
import { existsSync, readFileSync } from "node:fs";
import Home from "@/app/page";
import { Navbar } from "@/components/Navbar";
import { CaseStudy } from "@/components/CaseStudy";
import { projects } from "@/content/projects";
import { profile } from "@/content/profile";
import { getSiteUrl } from "@/lib/site";

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
  });

  it("provides real public assets and keeps the original files ignored", () => {
    expect(readFileSync(`public${profile.cvUrl}`).subarray(0, 4).toString()).toBe("%PDF");
    expect(existsSync(`public${profile.portrait.src}`)).toBe(true);
    const ignore = readFileSync(".gitignore", "utf8");
    expect(ignore).toContain("Priynka-Roy-Resume.pdf");
    expect(ignore).toContain("Profilep.jpg");
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
