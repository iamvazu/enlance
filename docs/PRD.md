# PRD — Enlace Polymers Website & Learning Center

**Product:** enlacepolymers.com (v2)
**Owner:** Enlace Polymers Private Limited
**Status:** v1.0 codebase delivered. Phase 2 and 3 are outlined below.
**Last updated:** September 2026

---

## 1. Summary

Replace the current WordPress/Elementor site with a fast, mobile-first Next.js web app. The new site has three jobs:

1. **Generate qualified B2B leads** for two different businesses:
   - **Industrial emulsions:** paint, construction chemicals, textiles, coir
   - **Enfixx wood adhesives:** carpenters, furniture makers, contractors, dealers
2. **Rank on Google** for high-intent product and technical keywords in India, and Kerala and South India in particular. It does this through keyword-targeted product and industry pages plus a large Learning Center.
3. **Build trust** through technical depth, documentation (TDS/MSDS), clear product grading (D1/D2/D3) and a frictionless path to talk to a human (call, WhatsApp, form).

## 2. Problems with the current site (audit, Sep 2026)

| # | Issue | Impact | Fixed in v1 |
|---|---|---|---|
| 1 | Theme placeholder text in the hero ("High-Tech Industrial Edge / next level", "Smart-Ready Machine Zone / Fast Track") | Destroys credibility at first glance | ✅ |
| 2 | Homepage counters render "0" | Looks broken to crawlers and some users | ✅ Server renders real values |
| 3 | Privacy and Terms links point to About Us | Trust and legal gap | ✅ Real pages (legal review pending) |
| 4 | Phone shown only on the Contact page, no WhatsApp | The main contact channels for Indian B2B buyers are hidden | ✅ Sticky mobile bar, top bar, FAB |
| 5 | No enquiry form | Almost zero conversion path | ✅ 4 form types plus the API |
| 6 | Copy errors ("Construction -Resin" on Additives, stray "ENCRYL", "complimented") | Unprofessional | ✅ |
| 7 | No specs, TDS or MSDS | Formulators won't sample | ✅ Spec tables + gated TDS library (PDFs pending) |
| 8 | Every page ends in "Perfect Adhesive" even for paint and textiles | Confuses the emulsion buyer | ✅ Contextual CTAs |
| 9 | No meta descriptions, generic titles | Poor SEO | ✅ Per-page keyword metadata |
| 10 | Stock images, "No alt text", WhatsApp-named files | SEO and trust | ⚠️ Branded placeholder art. Real photography pending |
| 11 | No blog or learning content | Nothing to rank for | ✅ 25 articles + glossary |
| 12 | "Waterproof" (FAQ) vs "water-resistant" (product) for Marino D3 | Claim risk | ✅ Consistent D3 = water-resistant language |
| 13 | Map link goes to google.com/maps; malformed mailto | Friction | ✅ |

## 3. Goals & KPIs

| Goal | KPI | 6-month target (suggested) |
|---|---|---|
| Lead generation | Form leads + WhatsApp clicks + call clicks / month | 10× current baseline |
| Lead quality | % of leads with company + product + volume | > 60% |
| SEO visibility | Non-brand organic clicks / month (GSC) | Steady month-on-month growth, top-10 for 20+ target keywords |
| Learning Center | Organic entrances to articles | 40%+ of organic traffic |
| Dealer network | Dealer applications / month | Track from launch |
| Performance | Lighthouse mobile performance / SEO / a11y | ≥ 90 / 100 / ≥ 95 |
| Core Web Vitals | LCP / INP / CLS (p75 mobile) | < 2.5 s / < 200 ms / < 0.1 |

## 4. Audiences

| Persona | Needs | Primary path |
|---|---|---|
| **Carpenter / site contractor** (Malayalam, Tamil or English, mobile, WhatsApp-first) | Which glue, price, where to buy | Home → Enfixx → Selector → WhatsApp |
| **Modular furniture / interior firm** | Consistent quality, D3 for kitchens, bulk price | Industry page → Grade page → Sample form |
| **Hardware / plywood dealer** | Margin, stock support, carpenter pull | Become a Dealer → form |
| **Paint formulator / purchase head** | Specs, TDS, sample, local supply, R&D support | Product page → Downloads (gated) → Sample |
| **Construction chemical brand** | Polymer for waterproofing, tile adhesive | Industry page → Articles → Sample |
| **Textile printer (Tiruppur/Erode)** | Fastness, soft hand, compliance docs | Textile page → Articles → Sample |
| **Coir manufacturer (Alappuzha)** | Latex alternative, cost stability, trials | Coir page → Article → Line-trial CTA |

## 5. Information architecture

```
/
├── /products
│   ├── /products/enfixx-wood-adhesives
│   │   ├── /products/enfixx/sd      (D1)
│   │   ├── /products/enfixx/hd      (D2)
│   │   └── /products/enfixx/marino  (D3)
│   ├── /products/paint-coatings-emulsions
│   ├── /products/construction-resins
│   ├── /products/textile-binders
│   ├── /products/coir-emulsions
│   └── /products/additives
├── /industries  (+6 industry landing pages)
├── /learning-center
│   ├── /learning-center/[article]  (25 at launch)
│   ├── /learning-center/category/[6 categories]
│   └── /learning-center/glossary   (50 terms)
├── /tools
│   ├── /tools/adhesive-selector
│   └── /tools/coverage-calculator
├── /downloads        (gated TDS/MSDS)
├── /request-sample   (primary conversion page, ?product= prefill)
├── /become-a-dealer
├── /contact, /about, /faq, /privacy-policy, /terms
└── sitemap.xml, robots.txt, manifest.webmanifest
```

Old URLs permanently redirect (308, treated like 301 by Google) to new ones (see `next.config.mjs`).

## 6. Functional requirements

### 6.1 Global
- **FR-1** Sticky header with mega-dropdowns (desktop) and a full-screen accordion menu (mobile).
- **FR-2** Mobile sticky action bar: **Call · WhatsApp · Get Quote** on every page. Desktop gets a floating WhatsApp button and a top utility bar with phone, email and WhatsApp.
- **FR-3** Footer with full product, industry and resource links, address, phone, email and WhatsApp.
- **FR-4** Breadcrumbs with BreadcrumbList schema on every inner page.
- **FR-5** First-touch attribution (UTM, gclid, landing, referrer) captured in sessionStorage and attached to every lead.

### 6.2 Lead capture
- **FR-6** `EnquiryForm` variants:
  - `enquiry`
  - `sample` (adds city, volume and application)
  - `dealer` (shop, city, monthly sales, current brands)
  - `tds` (email required; unlocks the downloads)
- **FR-7** Zod validation on client and server, honeypot anti-spam, per-IP rate limit.
- **FR-8** On success, show a confirmation and a **"Continue on WhatsApp"** deep link with a pre-filled summary.
- **FR-9** Leads are forwarded to `LEAD_WEBHOOK_URL` (Sheets, Zapier, Make or a CRM) and logged locally in dev.
- **FR-10** `?product=` query prefills the product select from any CTA.

### 6.3 Products
- **FR-11** Each product family page has:
  - keyword H1, intro, body, grade cards, benefits, applications
  - typical-properties table (unconfirmed values link to TDS)
  - industries, FAQs with FAQPage schema, related articles
  - sticky sample form
  - Product schema
- **FR-12** Each Enfixx grade page has:
  - pack visual, D-class badge, applications, "not for" warning
  - 4-step application guide, D1/D2/D3 comparison table, FAQs
  - cross-sell to the other grades, WhatsApp price CTA

### 6.4 Tools
- **FR-13** **Adhesive Selector:** a 3-question quiz (environment, job, priority) that recommends SD, HD or MARINO with reasons, plus CTAs for trial pack, WhatsApp price and grade page. Warns about D4 for weather-exposed use.
- **FR-14** **Coverage Calculator:**
  - inputs: application, unit (8×4 sheets, sq ft or m²), quantity, glue lines, wastage
  - output: kg range
  - rates configurable in code, labelled indicative until the TDS confirms them

### 6.5 Learning Center
- **FR-15** Markdown articles with frontmatter: title, description, category, keywords, date, updated, products, faqs.
- **FR-16** Index page with instant client-side search (title, description, keywords), category chips and animated filtering. `?q=` is supported, which is also the WebSite SearchAction target.
- **FR-17** Article page has:
  - reading-progress bar, TOC (sticky on desktop, collapsible on mobile), share bar (WhatsApp, LinkedIn, copy)
  - FAQ with FAQPage schema, "products mentioned" block
  - inline sample form and related articles
  - TechArticle schema
- **FR-18** Category pages and an A–Z glossary with DefinedTermSet schema and deep-link anchors.

### 6.6 Downloads
- **FR-19** Document list locked until the TDS form is submitted. PDFs placed in `/public/docs` become downloadable (`available: true`). Otherwise the page shows "emailed to you".

## 7. SEO requirements

**Approach: topical authority, not keyword stuffing.** The brief asked for "high keyword density" on every page. We implemented this as dense *topical coverage*:

- every page targets one primary keyword and a cluster of secondary keywords
- keywords appear in the title, H1, first paragraph, subheadings, alt text and schema
- internal links use keyword-rich anchor text

Repeating keywords artificially is penalised by Google's spam policies, so copy stays natural and readable. See `docs/SEO_KEYWORD_MAP.md`.

- **SEO-1** Unique `<title>` and meta description per page. Canonical URL, OG and Twitter tags. `en-IN` locale.
- **SEO-2** JSON-LD:
  - `Organization + Manufacturer + LocalBusiness`
  - `WebSite` with SearchAction
  - `BreadcrumbList`, `Product`, `TechArticle`, `FAQPage`, `DefinedTermSet`
- **SEO-3** `sitemap.xml` (every route and article, auto-generated) and `robots.txt` (blocks `/api/`).
- **SEO-4** 301 redirects from every legacy WordPress URL.
- **SEO-5** Static generation (SSG) for all content pages for speed and crawlability. Final values are server-rendered (no "0" counters). No-JS fallback for reveal animations.
- **SEO-6** Hub-and-spoke internal linking:
  - product pages ↔ articles ↔ industries ↔ tools
  - every article links to at least one product and one other article
- **SEO-7** Local SEO: NAP (name, address, phone) kept consistent in schema, footer and contact page. Google Business Profile to be set up (Phase 2).

## 8. Design system & motion

- **Colours:**
  - brand blue `#0067ac` and accent cyan `#00b7eb`, both sampled from the logo
  - deep navy `#06223a` for dark sections
  - neutral ink scale for text
- **Type:** Sora (display) and Inter (body), self-hosted via `@fontsource`, so there are no layout shifts.
- **Components:** rounded-2xl cards, pill buttons at 48 px minimum touch height, chips, eyebrow labels.
- **Motion principles:** purposeful, fast (≤ 600 ms) and disabled under `prefers-reduced-motion`.
  - **Signature:** the logo diamond assembles from four shards, and a canvas "polymer network" of monomers linking into chains. It pauses when off-screen.
  - **Micro-interactions:** scroll reveals, count-up stats, mega-menu fades, the selector's step slide and progress bar, and Learning Center filter re-layout.
- **Mobile-first:**
  - 16 px inputs, so iOS doesn't zoom
  - thumb-reachable action bar that respects the safe area
  - horizontally scrollable category chips and tables
  - no horizontal page scroll (verified at 390 px)

## 9. Non-functional requirements

| Area | Requirement |
|---|---|
| Performance | ~103 kB shared JS. Static pages. Fonts self-hosted. Canvas animation capped to about 90 particles and paused off-screen |
| Accessibility | WCAG 2.1 AA target: skip link, focus rings, aria labels, semantic headings, `details/summary` accordions, colour contrast on dark sections |
| Security | Security headers (nosniff, frame options, referrer policy). Zod server validation. Honeypot and rate limit. No secrets client-side |
| Privacy | Consent text on forms and a privacy policy (DPDP Act 2023 review pending). GA4 only when an ID is set |
| Maintainability | All copy and data in `src/lib/*.ts` and `content/*.md`. Components are presentation-only |

## 10. Analytics & tracking plan

| Event | Trigger | Params |
|---|---|---|
| `generate_lead` | Any successful form submit | lead_type, product |
| `click_whatsapp` | Any WhatsApp link | place (topbar, mobile_bar, fab, form_success…) |
| `click_call` | Any tel: link | place |
| `click_cta` | Header and mobile quote CTAs | cta |
| `selector_complete` | Adhesive selector finished | env, job, priority |

In GA4, mark `generate_lead`, `click_whatsapp` and `click_call` as **key events (conversions)**. Link GA4 to Google Ads for remarketing.

## 11. Content Enlace must supply (blocking for launch polish)

Search the codebase for `TODO(content)` and `TODO(legal)`.

1. Real product photography: packs (all Enfixx sizes), plant, lab, team, dispatch.
2. TDS and MSDS PDFs for every grade, and confirmed typical properties (solids, viscosity, pH, MFFT, open time).
3. Enfixx pack sizes and whether a public MRP or dealer price list can be shown.
4. ISO standard and certificate number, and a certificate image.
5. Founding year, capacity (MT/month), leadership bios.
6. Client logos and testimonials. **Only with written permission; do not publish invented testimonials.**
7. Social profile URLs.
8. Confirmation that +91 96057 15594 is on WhatsApp Business, and office hours.
9. EN 204 D-class test reports for Enfixx (to support the D3 claim).
10. Legal review of the Privacy Policy and Terms.

## 12. Roadmap

### Phase 1 — delivered in this codebase
Everything in sections 6–10: 40+ pages, 25 articles, glossary, 2 tools, 4 lead forms, schema, sitemap, redirects.

### Phase 2 — launch & growth (weeks 1–6)
- Plug in real photos, PDFs and specs. Remove placeholders.
- Deploy to Vercel. Connect the domain. Set up GSC, GA4 and the lead webhook (Google Sheet + WhatsApp alert).
- Google Business Profile for the plant. List on IndiaMART and TradeIndia with links back to product pages.
- **Malayalam and Tamil versions** of the Enfixx and dealer pages (`next-intl`, `hreflang`) for the carpenter audience.
- Dealer locator (map + list from a Google Sheet or CMS).
- Publish 4–8 new articles per month (see the content guide).

### Phase 3 — scale (months 2–6)
- Headless CMS (Sanity, Contentful or Payload) so the marketing team can edit articles and products without code.
- CRM integration (Zoho or HubSpot) with lead scoring by type and volume.
- Carpenter loyalty programme landing page (points via WhatsApp and QR codes on packs).
- Video library: application demos and water-soak tests. Add VideoObject schema.
- A/B tests on hero and CTA copy. Heatmaps (Microsoft Clarity).
- Export pages (Middle East, Sri Lanka, Bangladesh) if export is pursued.

## 13. Acceptance criteria (v1)

- [x] `npm run build` passes with 0 errors and all content pages statically generated
- [x] No horizontal overflow at 390 px on key templates
- [x] Every page has a unique title and description and a canonical URL
- [x] Forms validate, submit to `/api/lead` and show the WhatsApp continuation
- [x] Legacy URLs 301 to new routes
- [x] Sitemap lists every product, industry, article and tool
- [ ] Real assets and PDFs replace placeholders (Enlace)
- [ ] Lighthouse mobile ≥ 90 performance on deployed domain (verify after deploy)
- [ ] GSC verified, sitemap submitted
