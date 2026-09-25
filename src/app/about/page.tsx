import Link from "next/link";
import { Factory, FlaskConical, Lightbulb, ShieldCheck, Target, Users } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { LogoMarkAnimated } from "@/components/LogoMarkAnimated";
import { CtaBand } from "@/components/CtaBand";
import { company } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About Enlace Polymers — Polymer Emulsion & Synthetic Resin Manufacturer, Kochi",
  description:
    "Enlace Polymers Private Limited is a technology-driven, ISO certified manufacturer of water-based resins, acrylic emulsions and Enfixx wood adhesives at KINFRA Petrochemical Park, Kochi, Kerala.",
  path: "/about",
  keywords: ["Enlace Polymers", "polymer manufacturer Kochi", "synthetic resin manufacturer Kerala", "KINFRA Petrochemical Park", "acrylic emulsion company India"],
});

export default function About() {
  return (
    <>
      <section className="container py-10 sm:py-16">
        <Breadcrumbs items={[{ name: "About Us", path: "/about" }]} />
        <div className="mt-6 grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="eyebrow">About our company</p>
            <h1 className="h-section mt-3">Engineered for performance. Built for excellence.</h1>
            <p className="lead mt-5">
              <strong className="text-ink">{company.legalName}</strong> is a technology-driven company committed to developing innovative polymer solutions that
              elevate performance, productivity and reliability. With advanced R&D capabilities, state-of-the-art manufacturing facilities and a team of expert
              scientists and engineers, we deliver high-quality water-based resins tailored for modern industrial needs.
            </p>
            <p className="lead mt-4">
              Through precision-engineered processes and automated systems, Enlace ensures consistency, quality and innovation in every product it manufactures —
              from styrene acrylic and pure acrylic emulsions to specialty acrylics and Enfixx wood adhesives.
            </p>
          </div>
          <div className="mx-auto w-56 sm:w-72"><LogoMarkAnimated className="w-full" /></div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 sm:py-20">
        <div className="container grid gap-5 md:grid-cols-3">
          {[
            { I: Target, t: "Our mission", d: "Develop revolutionary polymer technologies that enable customers to improve performance and productivity, enter new markets and refine new applications." },
            { I: Lightbulb, t: "Our approach", d: "Expert advice in formulation development, complemented by in-house R&D and the flexibility to customise grades for specific needs." },
            { I: ShieldCheck, t: "Our standard", d: `An innovation-led, ${company.iso} company with a dedicated focus on value-added products and services customised to each customer.` },
          ].map(({ I, t, d }, i) => (
            <Reveal key={t} delay={i * 0.06} className="card p-7">
              <I className="h-8 w-8 text-brand-600" />
              <h2 className="mt-4 text-xl font-semibold">{t}</h2>
              <p className="mt-2 text-[15px] text-ink-soft">{d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container py-14 sm:py-20">
        <h2 className="h-section max-w-3xl">A trailblazer in synthetic resin manufacturing</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { I: Factory, t: "Manufacturing", d: `Our plant is located at ${company.address.full} — inside Kerala's dedicated petrochemical industrial park.` },
            { I: FlaskConical, t: "Research & development", d: "Our chemists design polymers from the molecule up: styrene acrylic, pure acrylic, specialty acrylic and PVAc-based adhesive systems." },
            { I: Users, t: "Customers", d: "Paint and coating manufacturers, construction chemical brands, textile processors, coir units, plywood factories, furniture makers, contractors and dealers." },
          ].map(({ I, t, d }) => (
            <div key={t}>
              <I className="h-7 w-7 text-sky-accent" />
              <h3 className="mt-3 text-lg font-semibold">{t}</h3>
              <p className="mt-1.5 text-[15px] text-ink-soft">{d}</p>
            </div>
          ))}
        </div>
        {/* TODO(content): founders/leadership, founding year, capacity (MT/month), plant photos, ISO certificate image, client logos */}
        <div className="mt-12 rounded-2xl border border-dashed border-brand-200 bg-brand-50/50 p-6 text-[15px] text-ink-soft">
          <p className="font-semibold text-ink">Visit our plant</p>
          <p className="mt-1">Customers and dealers are welcome to visit our facility at KINFRA Petrochemical Park. <Link href="/contact" className="font-semibold text-brand-600 underline">Book a visit</Link>.</p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
