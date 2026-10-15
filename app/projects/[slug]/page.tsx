import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { getSiteUrl } from "@/lib/site";
import { CaseStudy } from "@/components/CaseStudy";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  const siteUrl = getSiteUrl();
  return project
    ? {
        title: project.seoTitle ?? `${project.name} — ${project.title}`,
        description: project.summary,
        ...(siteUrl ? { alternates: { canonical: `${siteUrl}/projects/${slug}` } } : {}),
        openGraph: { title: project.seoTitle ?? `${project.name} — ${project.title}`, description: project.summary, type: "website", images: ["/opengraph-image"], ...(siteUrl ? { url: `${siteUrl}/projects/${slug}` } : {}) },
      }
    : {};
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return <CaseStudy project={project} />;
}
