import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Home from "@/app/page";
import { Navbar } from "@/components/Navbar";
import { trainingRecords } from "@/content/training";

vi.mock("next/navigation", () => ({ usePathname: () => "/" }));
vi.mock("next/image", () => ({
  default: ({ fill, preload, ...props }: React.ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean; preload?: boolean }) => {
    void fill;
    void preload;
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt ?? ""} />;
  },
}));

describe("Verified professional training", () => {
  it("places the new semantic section immediately between projects and skills", () => {
    const { container } = render(<Home />);
    const sections = [...container.querySelectorAll("main > section")];
    expect(sections.map(section => section.id)).toEqual([
      "home", "about", "projects", "training", "skills", "education", "research", "contact",
    ]);
    const training = screen.getByRole("region", { name: "Training & Certifications" });
    expect(training).toHaveAttribute("id", "training");
    expect(within(training).getByRole("heading", { level: 2 })).toHaveTextContent("Training & Certifications");
    const ids = [...container.querySelectorAll("[id]")].map(element => element.id);
    expect(new Set(ids).size).toBe(ids.length);
    const numberedSections = sections.slice(1).map(section => section.querySelector(".eyebrow span")?.textContent);
    expect(numberedSections).toEqual(["01", "02", "03", "04", "05", "06", "07"]);
  });

  it("includes a working Training anchor in navigation and closes the mobile menu on selection", () => {
    const { container } = render(<><Navbar /><Home /></>);
    const navigation = screen.getByRole("navigation", { name: "Main navigation" });
    expect(within(navigation).getAllByRole("link").map(link => link.textContent)).toEqual([
      "Home", "About", "Projects", "Training", "Skills", "Education", "Research", "Contact",
    ]);
    const link = within(navigation).getByRole("link", { name: "Training" });
    expect(link).toHaveAttribute("href", "/#training");
    expect(container.querySelector(link.getAttribute("href")!.slice(1))).toBeInTheDocument();
    const toggle = screen.getByRole("button", { name: "Open navigation" });
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    fireEvent.click(link);
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  it("presents the authentic completed DataCamp career track with unambiguous credential details", () => {
    render(<Home />);
    const section = screen.getByRole("region", { name: "Training & Certifications" });
    expect(within(section).getByRole("heading", { level: 3, name: "Data Analyst in Power BI" })).toBeInTheDocument();
    for (const text of ["DataCamp", "DataCamp Statement of Accomplishment", "50 hours", "September 23, 2026", "947,041"]) {
      expect(section).toHaveTextContent(text);
    }
    expect(section).toHaveTextContent(/completed career track/i);
    expect(section.querySelector('time[datetime="2026-09-23"]')).toHaveTextContent("September 23, 2026");
    for (const skill of ["Power BI", "Power Query", "DAX", "Data Transformation", "Data Modeling", "Data Visualization", "Interactive Dashboards", "Business Intelligence Reporting"]) {
      expect(within(section).getByText(new RegExp(`^${skill}$`, "i"))).toBeInTheDocument();
    }
    expect(section.textContent).not.toMatch(/Microsoft Certified|Microsoft-issued|PL-300 Certification|passed.{0,20}PL-300/i);
    expect(trainingRecords).toHaveLength(1);
    expect(trainingRecords[0]).toMatchObject({
      id: "datacamp-power-bi-career-track",
      completedDate: "2026-09-23",
      credentialType: "DataCamp Statement of Accomplishment",
      certificateNumber: "947,041",
    });
  });

  it("opens the original certificate and official public career track safely without forced downloads", () => {
    render(<Home />);
    const section = screen.getByRole("region", { name: "Training & Certifications" });
    const certificate = within(section).getByRole("link", { name: /View Certificate/ });
    const course = within(section).getByRole("link", { name: /Explore Career Track/ });
    expect(certificate).toHaveAttribute("href", "/certificates/datacamp-power-bi-career-track.pdf");
    expect(course).toHaveAttribute("href", "https://www.datacamp.com/tracks/data-analyst-in-power-bi");
    for (const link of [certificate, course]) {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link.getAttribute("rel")?.split(/\s+/)).toEqual(expect.arrayContaining(["noopener", "noreferrer"]));
      expect(link).not.toHaveAttribute("download");
    }
    expect(section.querySelector('a[href*="app.datacamp.com"]')).toBeNull();
  });

  it("publishes the inspected original PDF byte for byte", () => {
    const certificate = readFileSync("public/certificates/datacamp-power-bi-career-track.pdf");
    expect(certificate.subarray(0, 5).toString("ascii")).toBe("%PDF-");
    expect(certificate.length).toBe(153854);
    expect(createHash("sha256").update(certificate).digest("hex")).toBe(
      "82324fbad0d3319a9ce3bae1f92833013682468d022d8ed898ffd34224ed6545",
    );
  });
});
