import type { Metadata } from "next";
import { company, SITE_URL } from "./site";

export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
}): Metadata {
  const url = `${SITE_URL}${opts.path}`;
  return {
    title: opts.title,
    description: opts.description,
    keywords: opts.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: company.name,
      type: opts.type ?? "website",
      locale: "en_IN",
      images: [{ url: `${SITE_URL}/images/og-default.png`, width: 1200, height: 630, alt: company.name }],
      ...(opts.publishedTime ? { publishedTime: opts.publishedTime } : {}),
    },
    twitter: { card: "summary_large_image", title: opts.title, description: opts.description },
  };
}

// ---------- JSON-LD builders ----------
export const orgSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["Organization", "Manufacturer", "LocalBusiness"],
  "@id": `${SITE_URL}/#org`,
  name: company.legalName,
  alternateName: [company.name, "Enfixx"],
  url: SITE_URL,
  logo: `${SITE_URL}/images/enlace-logo.png`,
  image: `${SITE_URL}/images/enlace-logo.png`,
  email: company.email,
  telephone: company.phone,
  description: company.shortPitch,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.street,
    addressLocality: company.address.locality,
    addressRegion: company.address.region,
    postalCode: company.address.postalCode,
    addressCountry: company.address.country,
  },
  areaServed: ["Kerala", "Tamil Nadu", "Karnataka", "India"],
  brand: { "@type": "Brand", name: "Enfixx" },
  sameAs: Object.values(company.social).filter(Boolean),
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: company.name,
  publisher: { "@id": `${SITE_URL}/#org` },
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/learning-center?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: `${SITE_URL}${it.path}`,
  })),
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const productSchema = (p: { name: string; description: string; path: string; category: string; brand?: string }) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: p.name,
  description: p.description,
  category: p.category,
  url: `${SITE_URL}${p.path}`,
  image: `${SITE_URL}/images/enlace-mark.png`,
  brand: { "@type": "Brand", name: p.brand ?? company.name },
  manufacturer: { "@id": `${SITE_URL}/#org` },
});

export const articleSchema = (a: { title: string; description: string; path: string; date: string; updated?: string; keywords: string[] }) => ({
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: a.title,
  description: a.description,
  url: `${SITE_URL}${a.path}`,
  datePublished: a.date,
  dateModified: a.updated ?? a.date,
  keywords: a.keywords.join(", "),
  author: { "@type": "Organization", name: `${company.name} R&D Team`, url: SITE_URL },
  publisher: { "@id": `${SITE_URL}/#org` },
  image: `${SITE_URL}/images/og-default.png`,
  mainEntityOfPage: `${SITE_URL}${a.path}`,
});
