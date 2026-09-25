# Agent instructions (Antigravity / Claude / Cursor)

Context: marketing + lead-gen site for Enlace Polymers (Kochi, Kerala). Read `docs/PRD.md` first.

Conventions
- Next.js 15 App Router, TypeScript strict, Tailwind. Server components by default; add "use client" only for interactivity.
- Copy and data live in `src/lib/*.ts` and `content/learning-center/*.md` — do not hard-code copy in components.
- `src/lib/articles.ts` uses `fs`; never import it from a client component (use `src/lib/categories.ts` for client-safe helpers).
- Every new page: export `metadata` via `pageMeta()` from `src/lib/seo.ts`, add `<Breadcrumbs>`, add it to `src/app/sitemap.ts` if static.
- Mobile-first: test at 390px, no horizontal scroll, tap targets ≥ 44px, inputs 16px.
- Motion: use `<Reveal>`; keep durations ≤ 600ms; respect reduced motion.
- Never invent specs, certifications, testimonials or client names. Unknowns are marked `TODO(content)`.
- Run `npm run build` before finishing any task.
