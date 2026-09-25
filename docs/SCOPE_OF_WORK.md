# Scope of Work — Enlace Polymers Website v2

## 1. Objective

Design, build and launch a mobile-first, SEO-optimised, lead-generating website and Learning Center for Enlace Polymers and the Enfixx brand. It replaces the current WordPress site.

## 2. Work packages & status

| # | Work package | Deliverables | Status |
|---|---|---|---|
| WP1 | Discovery & audit | Business analysis, competitor map, website audit, lead-gen strategy | ✅ Done |
| WP2 | Architecture & design system | Next.js App Router architecture, IA / sitemap, brand tokens from logo, typography, components, motion system | ✅ Done |
| WP3 | Core pages | Home, Products index + 6 families, 3 Enfixx grade pages, Industries index + 6, About, Contact, FAQ, Privacy, Terms, 404 | ✅ Done |
| WP4 | Conversion system | 4 form variants, `/api/lead`, webhook forwarding, WhatsApp continuation, sticky mobile action bar, desktop FAB, attribution capture, GA4 events | ✅ Done |
| WP5 | Interactive tools | Adhesive Selector, Coverage Calculator, gated TDS/MSDS library | ✅ Done (PDFs pending) |
| WP6 | Learning Center | Search + filter index, 6 categories, 25 long-form articles, 50-term glossary, TOC, progress bar, share bar, related content | ✅ Done |
| WP7 | Technical SEO | Metadata, canonical, OG, JSON-LD (7 types), sitemap, robots, manifest, 301 redirects, SSG | ✅ Done |
| WP8 | QA | Build verification, mobile / desktop visual QA, overflow checks, link validation | ✅ Done (repeat on staging) |
| WP9 | Content & assets | Photography, TDS/MSDS PDFs, specs, pack sizes, ISO cert, testimonials, legal review | ⏳ Enlace to supply |
| WP10 | Launch | Vercel deploy, domain/DNS, env vars, GSC + GA4, lead webhook (Sheet + alert), redirect verification, Lighthouse audit | ⏳ Next |
| WP11 | Local & marketplace presence | Google Business Profile, IndiaMART / TradeIndia listings, LinkedIn page | ⏳ Phase 2 |
| WP12 | Localisation | Malayalam + Tamil for Enfixx / dealer pages, hreflang | ⏳ Phase 2 |
| WP13 | CMS & CRM | Headless CMS migration, CRM integration, lead scoring | ⏳ Phase 3 |
| WP14 | Ongoing content | 4–8 articles per month, video demos, case studies | ⏳ Ongoing |

## 3. Responsibilities

| Item | Developer / agency | Enlace |
|---|---|---|
| Code, design, SEO build | ✔ | |
| Hosting account (Vercel), domain DNS access | Set-up | Owns accounts |
| Product data, specs, PDFs, photos | Integrates | ✔ Supplies |
| Claims approval (D3, ISO, "in-house resin") | | ✔ Approves |
| Legal pages review | | ✔ Counsel |
| Lead follow-up SLA (≤ 1 working day) | | ✔ Sales team |
| Monthly content | Drafts | ✔ Technical review |

## 4. Suggested launch timeline

| Week | Activities |
|---|---|
| 1 | Enlace supplies assets and PDFs. Staging deploy on Vercel. Webhook to a Google Sheet with an email/WhatsApp alert |
| 2 | Asset integration. Stakeholder review. Copy approval. Legal review |
| 3 | Go-live. DNS switch. GSC + sitemap. Redirect checks. GA4 conversions |
| 4–6 | Google Business Profile, IndiaMART/TradeIndia, first 4 new articles, Malayalam Enfixx pages |

## 5. Out of scope (v1)

- E-commerce checkout or online payments
- Dealer portal with login
- Multi-language (Phase 2)
- CMS admin UI (Phase 3; content is currently in Markdown and TypeScript files)
- Paid ads management

## 6. Handover checklist

- [ ] Repo transferred to Enlace GitHub organisation
- [ ] `.env` values documented in the host (not in git)
- [ ] Lead webhook tested end-to-end (form → sheet → alert)
- [ ] GA4 key events configured
- [ ] GSC verified, sitemap submitted, old URLs checked for 301
- [ ] Team trained: adding articles (Markdown), editing `src/lib/*.ts`
