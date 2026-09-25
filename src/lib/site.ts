// Single source of truth for company facts. Edit here → updates header, footer, schema, forms.
// Everything marked TODO(content) must be confirmed by Enlace before launch.

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://enlacepolymers.com";

export const company = {
  name: "Enlace Polymers",
  legalName: "Enlace Polymers Private Limited",
  tagline: "Water-based polymer emulsions, resins & Enfixx wood adhesives — made in Kerala",
  shortPitch:
    "Manufacturer of acrylic emulsions, styrene acrylic binders, construction resins, textile binders, coir emulsions and Enfixx wood adhesives from KINFRA Petrochemical Park, Kochi.",
  phone: "+91 96057 15594",
  phoneHref: "tel:+919605715594",
  whatsapp: "919605715594", // TODO(content): confirm this number is on WhatsApp Business
  email: "mail@enlacepolymers.com",
  address: {
    street: "EP-088 & EP-09A, KINFRA Petrochemical Industrial Park",
    locality: "Karimugal, Ernakulam",
    region: "Kerala",
    postalCode: "682303",
    country: "IN",
    full: "EP-088 & EP-09A, KINFRA Petrochemical Industrial Park, Karimugal, Ernakulam, Kerala 682303, India",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Enlace+Polymers+KINFRA+Petrochemical+Park+Karimugal+Ernakulam",
  mapsEmbed:
    "https://maps.google.com/maps?q=KINFRA%20Petrochemical%20Industrial%20Park%20Karimugal%20Ernakulam&t=m&z=13&output=embed",
  hours: "Mon–Sat, 9:00 AM – 6:00 PM IST", // TODO(content)
  iso: "ISO certified", // TODO(content): add standard + certificate number, e.g. "ISO 9001:2015 — Cert No. XXXX"
  foundingYear: "", // TODO(content)
  social: {
    linkedin: "", // TODO(content)
    instagram: "",
    youtube: "",
    facebook: "",
  },
};

export const waLink = (text = "Hi Enlace Polymers, I'd like to know more about your products.") =>
  `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`;

export type NavItem = { label: string; href: string; desc?: string; children?: NavItem[] };

export const mainNav: NavItem[] = [
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Enfixx Wood Adhesives", href: "/products/enfixx-wood-adhesives", desc: "D1 · D2 · D3 synthetic resin adhesives" },
      { label: "Paint & Coatings Emulsions", href: "/products/paint-coatings-emulsions", desc: "Styrene acrylic, pure acrylic, specialty" },
      { label: "Construction Resins", href: "/products/construction-resins", desc: "Polymer modifiers for mortar & waterproofing" },
      { label: "Textile Binders", href: "/products/textile-binders", desc: "Pigment printing & finishing binders" },
      { label: "Coir & Natural Fibre Emulsions", href: "/products/coir-emulsions", desc: "Bonding for coir & natural fibre" },
      { label: "Additives", href: "/products/additives", desc: "Dispersants, defoamers, rheology" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Furniture & Woodworking", href: "/industries/furniture-woodworking" },
      { label: "Plywood & Laminates", href: "/industries/plywood-laminates" },
      { label: "Paints & Coatings", href: "/industries/paints-coatings" },
      { label: "Construction Chemicals", href: "/industries/construction-chemicals" },
      { label: "Textile Printing", href: "/industries/textile-printing" },
      { label: "Coir & Natural Fibre", href: "/industries/coir-natural-fibre" },
    ],
  },
  { label: "Learning Center", href: "/learning-center" },
  {
    label: "Tools",
    href: "/tools",
    children: [
      { label: "Adhesive Selector", href: "/tools/adhesive-selector", desc: "Find the right Enfixx grade in 30 seconds" },
      { label: "Coverage Calculator", href: "/tools/coverage-calculator", desc: "Estimate adhesive quantity for a job" },
      { label: "TDS & MSDS Downloads", href: "/downloads", desc: "Technical data sheets" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Dealers", href: "/become-a-dealer" },
];
