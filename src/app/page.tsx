import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Beaker,
  Calculator,
  Factory,
  FlaskConical,
  Hammer,
  Leaf,
  MapPin,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Truck,
  Wand2,
} from "lucide-react";
import { PolymerCanvas } from "@/components/PolymerCanvas";
import { LogoMarkAnimated } from "@/components/LogoMarkAnimated";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { GradePack } from "@/components/GradePack";
import { CountUp } from "@/components/CountUp";
import { ArticleCard } from "@/components/ArticleCard";
import { FaqList } from "@/components/FaqList";
import { EnquiryForm } from "@/components/EnquiryForm";
import { products, enfixxGrades } from "@/lib/products";
import { industries } from "@/lib/industries";
import { getArticleMetas } from "@/lib/articles";
import { company } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Enlace Polymers | Acrylic Emulsion, Wood Adhesive & Polymer Resin Manufacturer in Kerala",
  description:
    "Enlace Polymers manufactures water-based acrylic emulsions, styrene acrylic paint binders, construction resins, textile binders, coir emulsions and Enfixx D1/D2/D3 wood adhesives in Kochi, Kerala. Request a free sample.",
  path: "/",
  keywords: [
    "acrylic emulsion manufacturer",
    "polymer emulsion manufacturer Kerala",
    "wood adhesive manufacturer",
    "styrene acrylic emulsion",
    "synthetic resin adhesive",
    "D3 wood adhesive",
    "paint binder supplier",
    "construction chemical polymer",
    "textile binder",
    "coir emulsion",
    "Enfixx",
  ],
});

const marquee = [
  "Styrene acrylic emulsion",
  "Pure acrylic emulsion",
  "D3 wood adhesive",
  "Laminate pasting adhesive",
  "Waterproofing polymer",
  "Tile adhesive polymer",
  "Pigment printing binder",
  "Coir binder",
  "Paint additives",
  "Synthetic resin adhesive",
];

const homeFaqs = [
  { q: "What does Enlace Polymers manufacture?", a: "Enlace Polymers manufactures water-based polymer emulsions — styrene acrylic, pure acrylic and specialty acrylic emulsions for paints and coatings, construction resins, textile binders, coir and natural fibre emulsions, specialty additives — and the Enfixx range of D1, D2 and D3 synthetic resin wood adhesives." },
  { q: "Where is Enlace Polymers located?", a: `Our manufacturing facility is at ${company.address.full}.` },
  { q: "Do you supply outside Kerala?", a: "Yes. We supply paint, construction chemical, textile and furniture manufacturers across Kerala, Tamil Nadu, Karnataka and the rest of India. Contact us for freight-inclusive pricing to your location." },
  { q: "Can I get a free sample before ordering?", a: "Yes. Use the Request a Sample form with your application and expected monthly volume. Our technical team will recommend a grade and send a sample along with its technical data sheet." },
  { q: "How do I become an Enfixx dealer?", a: "Apply through the Become a Dealer page. Our channel team will contact you about territory, margins, starter stock and carpenter-meet support." },
];

export default function Home() {
  const articles = getArticleMetas().slice(0, 6);
  return (
    <>
      {/* ───────────── HERO ───────────── */}
      <section className="relative isolate overflow-hidden bg-brand-950 text-white">
        <PolymerCanvas className="absolute inset-0 -z-10 h-full w-full" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-950/10 via-brand-950/40 to-brand-950" />
        <div className="absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-brand-600/40 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-sky-accent/25 blur-[120px]" />
        <div className="container grid items-center gap-10 pb-16 pt-12 sm:pb-24 sm:pt-20 lg:grid-cols-[1.25fr_1fr] lg:pb-28 lg:pt-24">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-sky-accent" /> Water-based polymer technology · Made in Kochi, Kerala
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 font-display text-[34px] font-semibold leading-[1.08] text-white sm:text-5xl lg:text-[60px]">
                Polymer emulsions & wood adhesives <span className="text-gradient">engineered for performance</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-white/75 sm:text-lg">
                Acrylic emulsions for paints, construction resins, textile binders, coir emulsions and <strong className="text-white">Enfixx D1 · D2 · D3 wood adhesives</strong> —
                built from in-house resin by an ISO certified manufacturer with R&D you can call.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/request-sample" className="btn-accent">Request a free sample <ArrowRight className="h-5 w-5" /></Link>
                <Link href="/tools/adhesive-selector" className="btn-ghost-dark"><Wand2 className="h-5 w-5" /> Find the right adhesive</Link>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-white/70 sm:flex sm:flex-wrap">
                {[
                  [BadgeCheck, "ISO certified"],
                  [FlaskConical, "In-house R&D"],
                  [Factory, "In-house resin"],
                  [MapPin, "KINFRA Petrochemical Park"],
                ].map(([Icon, t]) => {
                  const I = Icon as typeof BadgeCheck;
                  return (
                    <li key={t as string} className="flex items-center gap-2"><I className="h-4 w-4 text-sky-accent" /> {t as string}</li>
                  );
                })}
              </ul>
            </Reveal>
          </div>
          <div className="relative mx-auto hidden w-full max-w-md lg:block">
            <div className="absolute inset-8 rounded-full bg-sky-accent/20 blur-3xl" />
            <div className="relative animate-floaty rounded-[40px] border border-white/10 bg-white/[.04] p-12 backdrop-blur-sm">
              <LogoMarkAnimated className="w-full drop-shadow-[0_20px_40px_rgba(0,183,235,.35)] [&_path:nth-child(-n+3)]:fill-white [&_path:nth-child(-n+3)]:stroke-white" />
            </div>
          </div>
        </div>
        {/* keyword marquee */}
        <div className="relative border-y border-white/10 bg-white/[.03] py-4">
          <div className="flex w-max animate-marquee gap-10 whitespace-nowrap text-sm font-medium text-white/60">
            {[...marquee, ...marquee].map((m, i) => (
              <span key={i} className="flex items-center gap-10">{m}<span className="h-1.5 w-1.5 rotate-45 bg-sky-accent" /></span>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── AUDIENCE ROUTER ───────────── */}
      <section className="container -mt-px py-16 sm:py-20">
        <SectionHeading center eyebrow="Start here" title="What are you looking for?" lead="Two ranges, one polymer expertise. Pick your path — we'll take you straight to what matters." />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Reveal>
            <Link href="/products/enfixx-wood-adhesives" className="group relative block h-full overflow-hidden rounded-[28px] bg-gradient-to-br from-brand-600 to-brand-900 p-7 pb-36 text-white shadow-lift sm:p-10 sm:pb-36 lg:pb-10">
              <Hammer className="h-9 w-9 text-sky-accent" />
              <h3 className="mt-5 font-display text-2xl font-semibold text-white sm:text-3xl">I'm a carpenter, furniture maker, contractor or dealer</h3>
              <p className="mt-3 max-w-md text-white/75">Enfixx synthetic resin wood adhesives for plywood, laminates, veneer, MDF and kitchens — in D1, D2 and D3 grades.</p>
              <span className="mt-6 inline-flex items-center gap-2 font-semibold">Explore Enfixx wood adhesives <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" /></span>
              <div className="absolute -bottom-8 right-4 flex gap-2 opacity-90 transition duration-500 group-hover:-translate-y-2 lg:-bottom-10 lg:-right-6 lg:opacity-40 xl:opacity-90">
                {enfixxGrades.map((g) => <GradePack key={g.slug} {...g} className="w-20" />)}
              </div>
            </Link>
          </Reveal>
          <Reveal delay={0.08}>
            <Link href="/products/paint-coatings-emulsions" className="group relative block h-full overflow-hidden rounded-[28px] border border-brand-100 bg-brand-50 p-7 sm:p-10">
              <Beaker className="h-9 w-9 text-brand-600" />
              <h3 className="mt-5 text-2xl font-semibold sm:text-3xl">I manufacture paints, construction chemicals, textiles or coir products</h3>
              <p className="mt-3 max-w-md text-ink-soft">Acrylic & styrene acrylic emulsions, construction resins, textile binders, coir emulsions and additives — with formulation support.</p>
              <span className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-700">Explore polymer emulsions <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" /></span>
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full border-[28px] border-sky-accent/20" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ───────────── PRODUCT PORTFOLIO ───────────── */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="container">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Product portfolio"
              title="Water-based polymer emulsions, resins & adhesives"
              lead="Our range is developed to address specific industry needs — from paint binders and waterproofing polymers to textile binders and wood glue."
            />
            <Link href="/products" className="btn-ghost shrink-0">All products <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.06}><ProductCard p={p} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── ENFIXX GRADES ───────────── */}
      <section className="container py-16 sm:py-24">
        <SectionHeading
          center
          eyebrow="Enfixx wood adhesives"
          title="One brand. Three grades. The right glue for every joint."
          lead="Graded by EN 204 durability class so you never use interior glue in a wet kitchen again."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {enfixxGrades.map((g, i) => (
            <Reveal key={g.slug} delay={i * 0.08}>
              <Link href={`/products/enfixx/${g.slug}`} className="card group flex h-full flex-col items-center p-7 text-center transition hover:-translate-y-1 hover:shadow-lift">
                <GradePack {...g} className="h-44 transition duration-500 group-hover:-rotate-3 group-hover:scale-105" />
                <span className="mt-4 rounded-full px-3 py-1 text-xs font-bold text-white" style={{ background: g.colour }}>{g.dClass}</span>
                <h3 className="mt-3 text-xl font-semibold">{g.name}</h3>
                <p className="mt-2 text-[15px] text-ink-soft">{g.tagline}</p>
                <span className="mt-auto pt-5 text-sm font-semibold text-brand-600">View specs & uses →</span>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/tools/adhesive-selector" className="btn-primary"><Wand2 className="h-5 w-5" /> Take the 30-second selector</Link>
          <Link href="/tools/coverage-calculator" className="btn-ghost"><Calculator className="h-5 w-5" /> Coverage calculator</Link>
        </div>
      </section>

      {/* ───────────── WHY ENLACE + STATS ───────────── */}
      <section className="relative overflow-hidden bg-brand-950 py-16 text-white sm:py-24">
        <div className="grid-bg absolute inset-0 opacity-60" aria-hidden />
        <div className="container relative">
          <SectionHeading
            dark
            eyebrow="Why Enlace"
            title="Innovation, performance & sustainable development"
            lead="Enlace Polymers was established to develop technologies that help customers improve performance, productivity, enter new markets and refine new applications."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { n: 6, s: "", l: "Product families" },
              { n: 3, s: "", l: "Enfixx durability grades" },
              { n: 12, s: " mo", l: "Adhesive shelf life" },
              { n: 100, s: "%", l: "Water-based systems" },
            ].map((s) => (
              <Reveal key={s.l} className="rounded-2xl border border-white/10 bg-white/[.04] p-5 sm:p-6">
                <p className="font-display text-4xl font-semibold text-white sm:text-5xl"><CountUp to={s.n} suffix={s.s} /></p>
                <p className="mt-1 text-sm text-white/60">{s.l}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { I: Factory, t: "Advanced manufacturing", d: "State-of-the-art facilities with precision-engineered, automated processes for batch-to-batch consistency." },
              { I: FlaskConical, t: "Scientists on call", d: "Highly qualified chemists and engineers support formulation development, ladder trials and custom grades." },
              { I: ShieldCheck, t: "ISO certified quality", d: "Documented quality systems, TDS and MSDS for every grade, and batch-wise QC." },
              { I: Leaf, t: "Water-based & low-VOC", d: "Solvent-free chemistry for safer workshops, factories and healthier indoor air." },
              { I: Truck, t: "South India logistics", d: "Located in KINFRA Petrochemical Park, Kochi — faster, lower-cost delivery across Kerala, Tamil Nadu and Karnataka." },
              { I: PackageCheck, t: "Samples before commitment", d: "Try before you buy. We send samples with full technical documentation." },
            ].map(({ I, t, d }, i) => (
              <Reveal key={t} delay={(i % 3) * 0.06} className="rounded-2xl border border-white/10 p-6 transition hover:border-sky-accent/50 hover:bg-white/[.03]">
                <I className="h-7 w-7 text-sky-accent" />
                <h3 className="mt-4 text-lg font-semibold text-white">{t}</h3>
                <p className="mt-2 text-[15px] text-white/65">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── PROCESS ───────────── */}
      <section className="container py-16 sm:py-24">
        <SectionHeading center eyebrow="How we work" title="From enquiry to production line in four steps" />
        <ol className="relative mt-12 grid gap-6 md:grid-cols-4">
          <div className="absolute left-6 top-6 hidden h-0.5 w-[calc(100%-3rem)] bg-gradient-to-r from-brand-200 via-sky-accent to-brand-200 md:block" aria-hidden />
          {[
            ["Tell us the application", "Share what you're making, current material and target price."],
            ["Get a recommendation", "Our R&D team proposes a grade and sends a sample with its TDS."],
            ["Trial on your line", "Run lab or line trials. We support tweaks and custom grades."],
            ["Scale with confidence", "Consistent batches, dependable dispatch and ongoing technical support."],
          ].map(([t, d], i) => (
            <Reveal as="li" key={t} delay={i * 0.08} className="relative">
              <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full bg-brand-600 font-display text-lg font-semibold text-white ring-8 ring-white">{i + 1}</span>
              <h3 className="mt-4 text-lg font-semibold">{t}</h3>
              <p className="mt-1.5 text-[15px] text-ink-soft">{d}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* ───────────── INDUSTRIES ───────────── */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="container">
          <SectionHeading eyebrow="Industries we serve" title="Trusted partner across a broad spectrum of industries" />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={(i % 3) * 0.05}>
                <Link href={`/industries/${ind.slug}`} className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-brand-300 hover:shadow-card">
                  <span>
                    <span className="block font-semibold">{ind.name}</span>
                    <span className="mt-0.5 block text-sm text-ink-mute">{ind.solutions.map((s) => s.product).join(" · ")}</span>
                  </span>
                  <ArrowRight className="h-5 w-5 shrink-0 text-brand-500 transition group-hover:translate-x-1" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── LEARNING CENTER ───────────── */}
      <section className="container py-16 sm:py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Learning center" title="Technical guides from our R&D team" lead="Practical, no-fluff articles on wood adhesives, paint emulsions, waterproofing, textile binders and coir." />
          <Link href="/learning-center" className="btn-ghost shrink-0">All articles <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a, i) => <Reveal key={a.slug} delay={(i % 3) * 0.05}><ArticleCard a={a} /></Reveal>)}
        </div>
      </section>

      {/* ───────────── FAQ + FORM ───────────── */}
      <section id="enquire" className="bg-slate-50 py-16 sm:py-24">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Common questions" title="Asked questions, trusted answers" />
            <div className="mt-8"><FaqList faqs={homeFaqs} /></div>
            <Link href="/faq" className="mt-5 inline-block text-sm font-semibold text-brand-600">See all FAQs →</Link>
          </div>
          <Reveal>
            <div className="card p-6 sm:p-8">
              <h2 className="text-2xl font-semibold">Get a quote or free sample</h2>
              <p className="mt-2 text-ink-soft">Tell us what you need. We reply within one working day — or call <a className="font-semibold text-brand-600" href={company.phoneHref}>{company.phone}</a>.</p>
              <div className="mt-6"><EnquiryForm type="sample" /></div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
