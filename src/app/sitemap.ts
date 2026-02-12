import type { MetadataRoute } from "next";

const BASE_URL = "https://skynologix.com";
const locales = ["ar", "en"];
const pages = ["", "/about", "/services", "/how-it-works", "/contact", "/portfolio"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1 : 0.8,
        alternates: {
          languages: {
            ar: `${BASE_URL}/ar${page}`,
            en: `${BASE_URL}/en${page}`,
          },
        },
      });
    }
  }

  return entries;
}
