# Content Guide — adding Learning Center articles

## 1. Create the file

Add `content/learning-center/your-keyword-slug.md`. The filename becomes the URL: `/learning-center/your-keyword-slug`.

```markdown
---
title: "Primary Keyword: Benefit-Led Title (≤ 65 chars ideal)"
description: "140–160 characters. Include the primary keyword naturally and a reason to click."
category: wood-adhesives   # wood-adhesives | paint-emulsions | construction-chemicals | textiles | coir-natural-fibre | buying-guides
date: "2026-10-01"
updated: "2026-10-15"      # optional
keywords: ["primary keyword", "secondary 1", "secondary 2"]
products: ["enfixx-wood-adhesives"]  # product slugs from src/lib/products.ts
faqs:                                # optional → FAQPage rich results
  - q: "Question people Google?"
    a: "Direct 1–3 sentence answer."
---

Intro paragraph with the primary keyword in the first 100 words.

## H2 sections become the table of contents
...
```

The article is automatically added to the index, search, category page, sitemap, related-article blocks and TechArticle schema.

## 2. Writing rules

- **Search intent first.** Answer the question in the first two paragraphs.
- **One primary keyword per article.** Check `docs/SEO_KEYWORD_MAP.md` so two articles don't compete.
- **800–1,500 words.** Use H2s every 150–300 words, plus tables, numbered steps and a "Key takeaways" list.
- **Internal links:**
  - at least 1 product page
  - at least 2 other articles
  - 1 tool or conversion page (`/request-sample`, `/tools/...`)
- **Natural language.** No keyword stuffing. Write for a carpenter or chemist, not a bot.
- **Accuracy:**
  - never invent specs, test results, certifications or customer names
  - use "typical" and link to the TDS
  - get R&D sign-off on technical claims
- **Local relevance.** Mention Kerala, South India, the monsoon and local industries where it's genuinely relevant.
- **End with a CTA.** Sample, selector, WhatsApp or dealer.

## 3. Publishing cadence

4–8 articles per month. Rotate categories so both businesses (Enfixx and emulsions) grow. Refresh the top-10 articles every 6 months and bump `updated`.
