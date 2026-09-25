import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { PolymerCanvas } from "./PolymerCanvas";
import { waLink } from "@/lib/site";
import { Reveal } from "./Reveal";

export function CtaBand({
  title = "Have a project? Let's find the right polymer for it.",
  text = "Tell us what you're making. Our technical team will recommend a grade, send a sample with its TDS and quote within one working day.",
  primary = { label: "Request a Free Sample", href: "/request-sample" },
}: { title?: string; text?: string; primary?: { label: string; href: string } }) {
  return (
    <section className="container my-16 sm:my-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[28px] bg-brand-950 px-6 py-12 text-white sm:px-12 sm:py-16">
          <PolymerCanvas className="absolute inset-0 h-full w-full opacity-60" density={0.7} />
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-accent/30 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-[28px] font-semibold leading-tight text-white sm:text-4xl">{title}</h2>
            <p className="mt-4 text-white/75 sm:text-lg">{text}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={primary.href} className="btn-accent">{primary.label} <ArrowRight className="h-5 w-5" /></Link>
              <a href={waLink()} target="_blank" rel="noopener" className="btn-ghost-dark"><MessageCircle className="h-5 w-5" /> WhatsApp our team</a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
