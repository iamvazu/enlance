import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EnquiryForm } from "@/components/EnquiryForm";
import { company, waLink } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact Enlace Polymers — Phone, WhatsApp, Email & Plant Address (Kochi, Kerala)",
  description: `Contact Enlace Polymers for acrylic emulsions, construction resins, textile binders and Enfixx wood adhesives. Call ${company.phone}, WhatsApp us or email ${company.email}.`,
  path: "/contact",
  keywords: ["Enlace Polymers contact", "Enlace Polymers phone number", "Enfixx dealer contact", "polymer supplier Kochi contact"],
});

export default function Contact() {
  const cards = [
    { I: Phone, t: "Call us", v: company.phone, href: company.phoneHref },
    { I: MessageCircle, t: "WhatsApp", v: "Chat with sales", href: waLink() },
    { I: Mail, t: "Email", v: company.email, href: `mailto:${company.email}` },
    { I: Clock, t: "Hours", v: company.hours },
  ];
  return (
    <section className="container py-10 sm:py-16">
      <Breadcrumbs items={[{ name: "Contact Us", path: "/contact" }]} />
      <h1 className="h-section mt-5">Get in touch</h1>
      <p className="lead mt-3 max-w-2xl">Ask us anything — product selection, pricing, samples, technical data or dealership. We reply within one working day.</p>
      <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {cards.map(({ I, t, v, href }) => {
          const inner = (
            <>
              <I className="h-6 w-6 text-brand-600" />
              <p className="mt-3 text-sm text-ink-mute">{t}</p>
              <p className="mt-0.5 break-words font-semibold">{v}</p>
            </>
          );
          return href ? (
            <a key={t} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener" className="card p-5 transition hover:shadow-lift">{inner}</a>
          ) : (
            <div key={t} className="card p-5">{inner}</div>
          );
        })}
      </div>
      <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div className="card p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">Send us a message</h2>
          <div className="mt-6"><EnquiryForm type="enquiry" /></div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="card flex gap-3 p-5">
            <MapPin className="h-6 w-6 shrink-0 text-brand-600" />
            <div>
              <p className="font-semibold">{company.legalName}</p>
              <p className="text-[15px] text-ink-soft">{company.address.full}</p>
              <a href={company.mapsUrl} target="_blank" rel="noopener" className="mt-2 inline-block text-sm font-semibold text-brand-600">Get directions →</a>
            </div>
          </div>
          <iframe title="Enlace Polymers location map" src={company.mapsEmbed} loading="lazy" className="h-72 w-full flex-1 rounded-2xl border border-slate-200 lg:h-auto" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </section>
  );
}
