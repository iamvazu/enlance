import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { company, waLink } from "@/lib/site";
import { products } from "@/lib/products";
import { industries } from "@/lib/industries";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-brand-950 pb-28 pt-16 text-white/75 lg:pb-10">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-50" aria-hidden />
      <div className="container relative">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo white />
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed">
              {company.legalName} is an innovation-led, {company.iso} manufacturer of water-based polymer emulsions,
              resins and Enfixx wood adhesives, with advanced R&D and in-house resin manufacturing in Kochi, Kerala.
            </p>
            <ul className="mt-6 space-y-3 text-[15px]">
              <li className="flex gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-sky-accent" />
                <a href={company.mapsUrl} target="_blank" rel="noopener" className="hover:text-white">{company.address.full}</a></li>
              <li className="flex gap-3"><Phone className="h-5 w-5 shrink-0 text-sky-accent" /><a href={company.phoneHref} className="hover:text-white">{company.phone}</a></li>
              <li className="flex gap-3"><Mail className="h-5 w-5 shrink-0 text-sky-accent" /><a href={`mailto:${company.email}`} className="hover:text-white">{company.email}</a></li>
              <li className="flex gap-3"><MessageCircle className="h-5 w-5 shrink-0 text-sky-accent" /><a href={waLink()} target="_blank" rel="noopener" className="hover:text-white">Chat on WhatsApp</a></li>
            </ul>
          </div>
          <FooterCol title="Products" links={[...products.map((p) => ({ label: p.name, href: `/products/${p.slug}` })), { label: "Enfixx MARINO (D3)", href: "/products/enfixx/marino" }]} />
          <FooterCol title="Industries" links={industries.map((i) => ({ label: i.name, href: `/industries/${i.slug}` }))} />
          <FooterCol
            title="Company & Resources"
            links={[
              { label: "About Us", href: "/about" },
              { label: "Learning Center", href: "/learning-center" },
              { label: "Glossary", href: "/learning-center/glossary" },
              { label: "Adhesive Selector", href: "/tools/adhesive-selector" },
              { label: "Coverage Calculator", href: "/tools/coverage-calculator" },
              { label: "TDS & MSDS Downloads", href: "/downloads" },
              { label: "Become a Dealer", href: "/become-a-dealer" },
              { label: "FAQs", href: "/faq" },
              { label: "Contact", href: "/contact" },
            ]}
          />
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-[13px] sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {company.legalName}. All rights reserved. Enfixx is a brand of Enlace Polymers.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms & Conditions</Link>
            <Link href="/sitemap.xml" className="hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="font-display text-sm font-semibold uppercase tracking-[.16em] text-white">{title}</h3>
      <ul className="mt-5 space-y-2.5 text-[15px]">
        {links.map((l) => (
          <li key={l.href}><Link href={l.href} className="transition hover:text-white">{l.label}</Link></li>
        ))}
      </ul>
    </div>
  );
}
