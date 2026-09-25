# Enlace Polymers — Website (Next.js)

A mobile-first, SEO-first, lead-generation website for **Enlace Polymers Private Limited** and the **Enfixx** wood adhesive brand.

- **Framework:** Next.js 15 (App Router) · React 19 · TypeScript
- **Styling:** Tailwind CSS 3 with brand tokens pulled from the logo (`#0067ac`, `#00b7eb`)
- **Motion:** Framer Motion plus a lightweight canvas "polymer network" animation. Both honour `prefers-reduced-motion`.
- **Content:** Markdown articles in `content/learning-center/`, rendered with `gray-matter` + `marked`
- **Lead capture:** `/api/lead` validates with Zod, forwards to any webhook, and logs locally in dev
- **SEO:** per-page metadata, canonical URLs, Open Graph, JSON-LD (Organization, Product, TechArticle, FAQPage, BreadcrumbList, DefinedTermSet, WebSite search), `sitemap.xml`, `robots.txt`, and 301 redirects from the old WordPress URLs

---

## 1. Run it locally (Google Antigravity, VS Code, Cursor or any terminal)

Requirements: **Node.js 18.18+** (Node 20 or 22 recommended).

```bash
# 1. open this folder in Antigravity (File → Open Folder → enlace-web)
# 2. in the integrated terminal:
npm install
cp .env.example .env.local     # optional: fill in GA4 + lead webhook
npm run dev                    # http://localhost:3000
```

Production build:

```bash
npm run build && npm start
```

Tip for Antigravity: point the agent at `docs/PRD.md` and `docs/SCOPE_OF_WORK.md`. Every open item is tagged `TODO(content)` or `TODO(legal)` in the code. Ask the agent to search for those tags to pick up remaining work.

---

## 2. Project structure

```
content/learning-center/*.md     ← articles (add a .md file = new article, auto-added to sitemap)
public/images/                   ← logo (colour + white), mark, OG image
src/app/                         ← routes (App Router)
  page.tsx                       ← home
  products/[slug]                ← 6 product family pages
  products/enfixx/[grade]        ← Enfixx SD / HD / MARINO
  industries/[slug]              ← 6 industry landing pages
  learning-center/…              ← index + search, article, category, glossary
  tools/…                        ← adhesive selector, coverage calculator
  request-sample, contact, become-a-dealer, downloads, faq, about, privacy-policy, terms
  api/lead/route.ts              ← form endpoint
  sitemap.ts, robots.ts, manifest.ts
src/components/                  ← UI (Header, Footer, MobileActionBar, EnquiryForm, PolymerCanvas…)
src/lib/                         ← DATA & CONFIG — edit copy here, not in components
  site.ts                        ← company facts, phone, WhatsApp, nav
  products.ts                    ← product catalogue + keywords + FAQs
  industries.ts                  ← industry pages
  glossary.ts                    ← glossary terms
  articles.ts / categories.ts    ← markdown loader + categories
  seo.ts                         ← metadata + JSON-LD helpers
docs/                            ← PRD, scope of work, SEO keyword map, content guide
```

---

## 3. Common edits

| Task | Where |
|---|---|
| Change phone / WhatsApp / email / address | `src/lib/site.ts` |
| Edit product copy, grades, specs, FAQs, keywords | `src/lib/products.ts` |
| Add a learning-center article | New `.md` file in `content/learning-center/` (copy an existing file's frontmatter) |
| Add a glossary term | `src/lib/glossary.ts` |
| Add TDS/MSDS PDFs | Put the PDFs in `public/docs/` and set `available: true` in `src/components/DownloadsGate.tsx` |
| Change brand colours / fonts | `tailwind.config.ts` |
| Replace placeholder product art with photos | Swap `<ProductVisual>` / `<GradePack>` for `next/image` |

---

## 4. Lead capture setup (5 minutes)

All forms (quote, sample, dealer, TDS gate, contact) POST to `/api/lead`. Set `LEAD_WEBHOOK_URL` in `.env.local` (or in your host's env settings) to any of these:

- **Google Sheet (free):** Extensions → Apps Script → `doPost(e)` that appends `JSON.parse(e.postData.contents)` → Deploy as a web app → paste the URL.
- **Zapier / Make:** "Catch Hook" → route to Gmail, WhatsApp Business, Zoho, HubSpot or Slack.
- **CRM inbound webhook:** Zoho CRM, HubSpot, LeadSquared, etc.

Every lead includes `type`, contact fields, `product`, `volume`, `page`, and first-touch attribution (`utm_*`, `gclid`, landing page, referrer).

In dev, leads are also written to `.data/leads.jsonl`.

---

## 5. Deploy

- **Vercel (recommended):** import the repo, set the env vars, deploy. Works out of the box.
- **Netlify / Render / any Node host:** `npm run build && npm start`.
- **Before go-live:** set `NEXT_PUBLIC_SITE_URL=https://enlacepolymers.com`, submit `/sitemap.xml` in Google Search Console, and verify the 301 redirects from the old URLs (see `next.config.mjs`).
