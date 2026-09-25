import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import { categories, categoryName, type CategorySlug } from "./categories";
export { categories, categoryName };


export type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  category: CategorySlug;
  keywords: string[];
  date: string;
  updated?: string;
  readMinutes: number;
  faqs?: { q: string; a: string }[];
  products?: string[];
};

export type Article = ArticleMeta & { html: string; toc: { id: string; text: string }[] };

const DIR = path.join(process.cwd(), "content", "learning-center");

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

function load(file: string): Article {
  const raw = fs.readFileSync(path.join(DIR, file), "utf8");
  const { data, content } = matter(raw);
  const words = content.split(/\s+/).length;
  const toc: { id: string; text: string }[] = [];
  const renderer = new marked.Renderer();
  renderer.heading = function ({ tokens, depth }) {
    const inner = this.parser.parseInline(tokens);
    const text = inner.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&");
    const id = slugify(text);
    if (depth === 2) toc.push({ id, text });
    return `<h${depth} id="${id}">${inner}</h${depth}>`;
  };
  renderer.table = function (token) {
    // wrap tables for horizontal scroll on phones
    const html = marked.Renderer.prototype.table.call(this, token);
    return `<div class="table-wrap">${html}</div>`;
  };
  const html = marked.parse(content, { renderer, async: false }) as string;
  return {
    slug: file.replace(/\.md$/, ""),
    title: data.title,
    description: data.description,
    category: data.category,
    keywords: data.keywords || [],
    date: data.date,
    updated: data.updated,
    faqs: data.faqs,
    products: data.products,
    readMinutes: Math.max(3, Math.round(words / 220)),
    html,
    toc,
  };
}

let cache: Article[] | null = null;
export function getAllArticles(): Article[] {
  if (cache && process.env.NODE_ENV === "production") return cache;
  const files = fs.readdirSync(DIR).filter((f) => f.endsWith(".md"));
  cache = files.map(load).sort((a, b) => (a.date < b.date ? 1 : -1));
  return cache;
}

export const getArticle = (slug: string) => getAllArticles().find((a) => a.slug === slug);

export const getArticleMetas = (): ArticleMeta[] =>
  getAllArticles().map(({ html, toc, ...m }) => m);

