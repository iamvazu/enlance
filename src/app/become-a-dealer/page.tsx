import { BadgePercent, GraduationCap, Megaphone, PackageCheck, Truck, Users } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Reveal } from "@/components/Reveal";
import { GradePack } from "@/components/GradePack";
import { FaqList } from "@/components/FaqList";
import { enfixxGrades } from "@/lib/products";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Become an Enfixx Wood Adhesive Dealer / Distributor — Kerala & South India",
  description: "Join the Enfixx dealer network. Attractive margins on D1, D2 and D3 wood adhesives, starter stock, carpenter meets and local supply from Kochi. Apply for dealership or distributorship.",
  path: "/become-a-dealer",
  keywords: ["wood adhesive dealership", "adhesive distributor Kerala", "Enfixx dealer", "hardware dealer adhesive margin", "Fevicol alternative dealership"],
});

const faqs = [
  { q: "Who can apply for an Enfixx dealership?", a: "Hardware stores, plywood and laminate dealers, paint shops and building-material distributors with an existing carpenter and contractor customer base." },
  { q: "Is there a minimum starter order?", a: "Starter stock depends on your territory and store size. Our channel team will suggest a mix of SD, HD and MARINO pack sizes that suits your market." },
  { q: "Do you support carpenter meets and promotions?", a: "Yes. We support carpenter meets, product demos, trial packs and point-of-sale material for active dealers." },
];

export default function Dealer() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <div className="container grid items-center gap-10 py-10 sm:py-16 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <Breadcrumbs items={[{ name: "Become a Dealer", path: "/become-a-dealer" }]} />
            <h1 className="h-section mt-5">Grow your store with Enfixx wood adhesives</h1>
            <p className="lead mt-4">Healthy dealer margins, a clear D1/D2/D3 range carpenters understand, and a manufacturer in Kochi who picks up the phone.</p>
            <a href="#apply" className="btn-primary mt-8">Apply for dealership</a>
          </div>
          <div className="flex justify-center gap-2">
            {enfixxGrades.map((g, i) => <Reveal key={g.slug} delay={i * 0.1} y={40}><GradePack {...g} className="w-24 sm:w-32" /></Reveal>)}
          </div>
        </div>
      </section>
      <section className="container py-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { I: BadgePercent, t: "Healthy margins", d: "Competitive dealer pricing with room for healthy margins." }, // TODO(content): confirm margin structure
            { I: PackageCheck, t: "Complete range", d: "SD, HD and MARINO cover every carpenter job from budget to premium." },
            { I: Truck, t: "Fast replenishment", d: "Manufactured in Kochi — short lead times across Kerala and South India." },
            { I: GraduationCap, t: "Carpenter meets", d: "Live demos and trial packs to convert carpenters in your area." },
            { I: Megaphone, t: "Marketing support", d: "Shop branding, posters and WhatsApp-ready product creatives." },
            { I: Users, t: "Direct manufacturer contact", d: "Talk to the people who make the product — not a middleman." },
          ].map(({ I, t, d }, i) => (
            <Reveal key={t} delay={(i % 3) * 0.05} className="card p-6">
              <I className="h-7 w-7 text-brand-600" />
              <h2 className="mt-3 text-lg font-semibold">{t}</h2>
              <p className="mt-1 text-[15px] text-ink-soft">{d}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section id="apply" className="container grid scroll-mt-24 gap-10 pb-16 lg:grid-cols-2">
        <div className="card p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">Dealer application</h2>
          <div className="mt-6"><EnquiryForm type="dealer" /></div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Dealer FAQs</h2>
          <div className="mt-6"><FaqList faqs={faqs} /></div>
        </div>
      </section>
    </>
  );
}
