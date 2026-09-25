import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { products, enfixxGrades } from "@/lib/products";
import { industries } from "@/lib/industries";
import { categories, getArticleMetas } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const u = (path: string, priority = 0.6, freq: "weekly" | "monthly" = "monthly") => ({ url: `${SITE_URL}${path}`, lastModified: now, changeFrequency: freq, priority });
  return [
    u("/", 1, "weekly"),
    u("/products", 0.9),
    ...products.map((p) => u(`/products/${p.slug}`, 0.9)),
    ...enfixxGrades.map((g) => u(`/products/enfixx/${g.slug}`, 0.9)),
    u("/industries", 0.7),
    ...industries.map((i) => u(`/industries/${i.slug}`, 0.8)),
    u("/learning-center", 0.8, "weekly"),
    u("/learning-center/glossary", 0.6),
    ...categories.map((c) => u(`/learning-center/category/${c.slug}`, 0.5)),
    ...getArticleMetas().map((a) => ({ url: `${SITE_URL}/learning-center/${a.slug}`, lastModified: new Date(a.updated ?? a.date), changeFrequency: "monthly" as const, priority: 0.7 })),
    u("/tools", 0.5),
    u("/tools/adhesive-selector", 0.7),
    u("/tools/coverage-calculator", 0.7),
    u("/downloads", 0.6),
    u("/about", 0.6),
    u("/contact", 0.7),
    u("/request-sample", 0.8),
    u("/become-a-dealer", 0.7),
    u("/faq", 0.6),
    u("/privacy-policy", 0.2),
    u("/terms", 0.2),
  ];
}
