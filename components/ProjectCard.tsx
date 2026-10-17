import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CodeXml } from "lucide-react";
import type { Project } from "@/content/projects";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className="project-card">
      <Link
        className="project-image-link"
        href={`/projects/${project.slug}`}
        aria-label={`Read the ${project.name} case study`}
      >
        <div className="project-preview">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 700px) 100vw, (max-width: 1439px) 50vw, 25vw"
          />
          <span className="preview-label">
            Explore the case study
            <ArrowUpRight size={16} aria-hidden="true" />
          </span>
        </div>
      </Link>
      <div className="project-copy">
        <p className="eyebrow">
          <span>{String(index + 1).padStart(2, "0")}</span>
          {project.name}
        </p>
        <h3>
          <Link href={`/projects/${project.slug}`}>{project.card.title}</Link>
        </h3>
        <p>{project.card.description}</p>
        <ul className="project-highlights">
          {project.card.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <ul className="tags" aria-label="Technologies">
          {project.card.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="project-actions">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            Live demo
            <ArrowUpRight size={16} aria-hidden="true" />
            <span className="sr-only">
              {" "}
              for {project.name} (opens in a new tab)
            </span>
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-github"
            aria-label={`${project.name} on GitHub (opens in a new tab)`}
          >
            <CodeXml size={19} aria-hidden="true" />
            GitHub
          </a>
          <Link
            href={`/projects/${project.slug}`}
            className="text-link case-link"
            aria-label={`View the ${project.name} case study`}
          >
            Case study
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
