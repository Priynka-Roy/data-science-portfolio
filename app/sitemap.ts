import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { getSiteUrl } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getSiteUrl();
  if (!origin) return [];
  return [
    { url: origin, changeFrequency: "monthly", priority: 1 },
    ...projects.map(project => ({ url: `${origin}/projects/${project.slug}`, changeFrequency: "monthly" as const, priority: 0.8 }))
  ];
}
