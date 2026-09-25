import { Breadcrumbs } from "@/components/Breadcrumbs";
import { company } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Terms & Conditions", description: `Terms of use for the ${company.name} website.`, path: "/terms" });

// TODO(legal): review with counsel; add sales terms (payment, delivery, warranty) if published online.
export default function Terms() {
  return (
    <section className="container max-w-3xl py-10 sm:py-16">
      <Breadcrumbs items={[{ name: "Terms & Conditions", path: "/terms" }]} />
      <h1 className="h-section mt-5">Terms & Conditions</h1>
      <div className="prose-enlace mt-8">
        <p>By using this website you agree to these terms.</p>
        <h2>Technical information</h2>
        <p>Product information, typical properties and application guidance are provided in good faith for general guidance. Users should conduct their own tests to determine suitability for their specific application. Typical properties are not specifications.</p>
        <h2>Orders</h2>
        <p>Quotations, prices and availability are confirmed only in writing by {company.legalName}. Commercial terms are governed by the relevant quotation or invoice.</p>
        <h2>Intellectual property</h2>
        <p>&ldquo;Enlace&rdquo;, &ldquo;Enfixx&rdquo;, the Enlace logo and website content are the property of {company.legalName}. Do not reproduce them without permission.</p>
        <h2>Liability</h2>
        <p>To the extent permitted by law, Enlace is not liable for losses arising from the use of information on this website.</p>
        <h2>Governing law</h2>
        <p>These terms are governed by the laws of India, with courts at Ernakulam, Kerala having jurisdiction.</p>
      </div>
    </section>
  );
}
