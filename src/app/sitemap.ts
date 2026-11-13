import type { MetadataRoute } from "next";
import { pages } from "@/config/routes";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: new URL(page.path, siteConfig.url).toString(),
    lastModified: new Date(page.lastModified),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
