import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, CodeXml } from "lucide-react";
import type { Project } from "@/content/projects";

export function CaseStudy({ project }: { project: Project }) {
  return (
    <main id="main-content" className="case-study">
      <div className="container">
        <nav className="case-breadcrumb" aria-label="Breadcrumb">
          <Link href="/#projects">
            <ArrowLeft size={16} aria-hidden="true" />
            Selected work
          </Link>
          <span aria-hidden="true">/</span>
          <span>{project.name}</span>
        </nav>
        <header className="case-header">
          <p className="eyebrow">{project.category ?? "Independent industrial data science project"}</p>
          <h1>
            {project.name}
            <span>{project.title}</span>
          </h1>
          <p className="case-summary">{project.summary}</p>
          <div className="case-actions">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary"
            >
              Open live app
              <ArrowUpRight size={17} aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-outline"
            >
              <CodeXml size={18} aria-hidden="true" />
              View source<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
          <ul className="tags" aria-label="Technologies">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </header>
        <figure className="case-screenshot">
          <div>
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              preload
              sizes="(max-width: 1200px) 100vw, 1120px"
            />
          </div>
          <figcaption>
            Actual {project.name} application. Explore the live demo for
            interactive analysis.
          </figcaption>
        </figure>
        <div className="case-body">
          <aside className="case-sidebar">
            <p className="eyebrow">Inside the project</p>
            <nav aria-label="Case study contents">
              {project.sections.map((section, index) => (
                <a href={`#study-${index}`} key={section.title}>
                  {section.title}
                </a>
              ))}
              <a href="#study-results">Computed results</a>
              <a href="#study-limitations">Limitations</a>
              <a href="#study-architecture">Architecture</a>
            </nav>
          </aside>
          <div className="case-content">
            {project.sections.map((section, index) => (
              <section
                id={`study-${index}`}
                key={section.title}
                className="case-section"
              >
                <p className="eyebrow">{String(index + 1).padStart(2, "0")}</p>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul className="case-bullets">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
                {section.table && (
                  <div
                    className="case-table-scroll"
                    role="region"
                    aria-label={section.table.caption}
                    tabIndex={0}
                  >
                    <table className="case-table">
                      <caption>{section.table.caption}</caption>
                      <thead>
                        <tr>
                          {section.table.columns.map((column) => (
                            <th key={column} scope="col">{column}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row) => (
                          <tr key={row[0]}>
                            {row.map((cell, cellIndex) =>
                              cellIndex === 0 ? (
                                <th key={cellIndex} scope="row">{cell}</th>
                              ) : (
                                <td key={cellIndex}>{cell}</td>
                              ),
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {section.visual && (
                  <figure className="case-detail-visual">
                    <a
                      href={section.visual.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open full-size image: ${section.visual.alt} (opens in a new tab)`}
                    >
                      <span className="case-detail-image">
                        <Image
                          src={section.visual.src}
                          alt={section.visual.alt}
                          fill
                          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 70vw, 830px"
                        />
                      </span>
                      <span className="case-image-action">
                        View full-size screenshot
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </span>
                    </a>
                    <figcaption>{section.visual.caption}</figcaption>
                  </figure>
                )}
              </section>
            ))}
            <section id="study-results" className="case-section">
              <p className="eyebrow">Computed evidence</p>
              <h2>Computed results</h2>
              <div className="result-grid">
                {project.results.map((result) => (
                  <div className="result" key={result.label}>
                    <strong>{result.value}</strong>
                    <span>{result.label}</span>
                    {result.note && <p>{result.note}</p>}
                  </div>
                ))}
              </div>
            </section>
            <section
              id="study-limitations"
              className="case-section limitation-section"
            >
              <p className="eyebrow">A transparent interpretation</p>
              <h2>What these results mean</h2>
              <ul className="case-bullets">
                {project.limitations.map((limitation) => (
                  <li key={limitation}>{limitation}</li>
                ))}
              </ul>
            </section>
            <section id="study-architecture" className="case-section">
              <p className="eyebrow">From source to application</p>
              <h2>Technical architecture</h2>
              <ol className="architecture-list">
                {project.architecture.map((stage, index) => (
                  <li key={stage}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {stage}
                  </li>
                ))}
              </ol>
              <div className="case-sources">
                <h3>Source documents</h3>
                <ul>
                  {project.sources.map((source) => (
                    <li key={source.url}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-link"
                      >
                        {source.label}
                        <ArrowUpRight size={14} aria-hidden="true" />
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Explore the repository and methodology
                <ArrowUpRight size={16} aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </section>
          </div>
        </div>
        <div className="case-end">
          <div>
            <p className="eyebrow">See the methods in action</p>
            <h2>Explore {project.name}.</h2>
          </div>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            Open live app
            <ArrowUpRight size={16} aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <Link href="/#projects" className="text-link">
            All projects
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </main>
  );
}
