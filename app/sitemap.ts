import type { MetadataRoute } from "next";
import { servicePages } from "@/lib/service-pages";
import { absoluteUrl } from "@/lib/seo";

const staticPages: Array<{
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/servizi", changeFrequency: "weekly", priority: 0.9 },
  { path: "/processo", changeFrequency: "monthly", priority: 0.7 },
  { path: "/perche-noi", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contatti", changeFrequency: "monthly", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const core: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const services: MetadataRoute.Sitemap = servicePages.map((page) => ({
    url: absoluteUrl(`/servizi/${page.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...core, ...services];
}
