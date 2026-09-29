import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://andremograph.com", changeFrequency: "monthly", priority: 1 }];
}
