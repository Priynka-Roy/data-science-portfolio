import { ArrowUpRight, Download, CodeXml } from "lucide-react";
import type { ReactNode } from "react";
import { profile } from "@/content/profile";

export function ExternalLink({
  href,
  children,
  className = "text-link",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
      <ArrowUpRight size={16} aria-hidden="true" />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
export function CVLink({
  className = "button button-outline",
}: {
  className?: string;
}) {
  return (
    <a className={className} href={profile.cvUrl} download>
      <Download size={17} aria-hidden="true" />
      Download CV
    </a>
  );
}
export function GithubLink({ href }: { href: string }) {
  return (
    <ExternalLink href={href} className="button button-outline">
      <CodeXml size={17} aria-hidden="true" />
      GitHub
    </ExternalLink>
  );
}
export function SectionHeading({
  number,
  eyebrow,
  title,
  description,
}: {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        <span>{number}</span>
        {eyebrow}
      </p>
      <h2>{title}</h2>
      {description && <p className="section-intro">{description}</p>}
    </div>
  );
}
