export type Industry = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  intro: string;
  pains: { title: string; text: string }[];
  solutions: { product: string; href: string; why: string }[];
  articles: string[];
  cta: string;
};

export const industries: Industry[] = [
  {
    slug: "furniture-woodworking",
    name: "Furniture & Woodworking",
    metaTitle: "Wood Adhesive for Furniture Manufacturers & Carpenters | Enfixx D2 & D3 Wood Glue",
    metaDescription:
      "Wood adhesives for modular furniture manufacturers, interior contractors and carpentry workshops. Enfixx D1, D2 and D3 synthetic resin adhesives with dealer and bulk pricing across Kerala & South India.",
    keywords: ["wood adhesive for furniture", "modular furniture adhesive", "carpenter glue", "interior contractor adhesive", "woodworking adhesive Kerala"],
    h1: "Wood Adhesives for Furniture Manufacturers, Carpenters & Interior Contractors",
    intro:
      "From a single-carpenter workshop in Perumbavoor to a modular kitchen factory in Bengaluru, every joint depends on the adhesive. Enfixx gives furniture makers a clear three-grade system — so the right glue goes into the right job, every time.",
    pains: [
      { title: "Joints failing in kitchens & bathrooms", text: "Interior-grade glue used in wet zones is the #1 cause of delamination complaints. D3 MARINO solves it." },
      { title: "Inconsistent drums", text: "Variable viscosity slows spreading and wastes adhesive. In-house resin keeps every batch consistent." },
      { title: "Margin pressure", text: "Premium national brands squeeze contractor margins. Enfixx offers competitive project and bulk pricing." },
    ],
    solutions: [
      { product: "Enfixx MARINO (D3)", href: "/products/enfixx/marino", why: "Kitchens, vanities, bathroom cabinets, coastal homes" },
      { product: "Enfixx HD (D2)", href: "/products/enfixx/hd", why: "Wardrobes, beds, panel furniture, edge banding" },
      { product: "Enfixx SD (D1)", href: "/products/enfixx/sd", why: "Dry-interior joinery and general carpentry" },
    ],
    articles: ["wood-adhesive-buying-guide-modular-furniture", "why-wood-joints-fail", "best-waterproof-wood-adhesive-for-kitchen-and-bathroom"],
    cta: "Get a free Enfixx trial pack for your workshop",
  },
  {
    slug: "plywood-laminates",
    name: "Plywood & Laminates",
    metaTitle: "Adhesive for Plywood & Laminate Pasting | Hot Press & Cold Press Laminate Adhesive",
    metaDescription:
      "Synthetic resin adhesives for plywood bonding, decorative laminate pasting, veneer lamination and board processing — for hot press and cold press lines. Bulk supply from Kochi, Kerala.",
    keywords: ["laminate adhesive", "plywood adhesive", "veneer adhesive", "hot press adhesive", "cold press adhesive", "sunmica adhesive"],
    h1: "Adhesives for Plywood, Veneer & Decorative Laminate Pasting",
    intro:
      "Kerala's plywood belt is minutes from our plant. Enfixx adhesives are built for laminate pasting and veneer lamination on cold press and hot press lines, with smooth machine spreading and reliable wet tack.",
    pains: [
      { title: "Laminate bubbling & edge lift", text: "Usually caused by uneven spread, wrong pressure or low-grade adhesive. See our troubleshooting guide." },
      { title: "Press cycle time", text: "Adhesive open and closed times must match your press. Our team helps tune it." },
      { title: "Freight costs", text: "Local manufacturing in Kochi cuts delivery time and cost for bulk drums." },
    ],
    solutions: [
      { product: "Enfixx HD (D2)", href: "/products/enfixx/hd", why: "Laminate & veneer pasting for interior boards" },
      { product: "Enfixx MARINO (D3)", href: "/products/enfixx/marino", why: "Laminate on boards for kitchens and wet zones" },
    ],
    articles: ["laminate-pasting-adhesive-hot-press-cold-press", "how-to-apply-wood-adhesive-plywood-laminate"],
    cta: "Request bulk pricing for your press line",
  },
  {
    slug: "paints-coatings",
    name: "Paints & Coatings",
    metaTitle: "Emulsion Binder Supplier for Paint Manufacturers | Acrylic Emulsion South India",
    metaDescription:
      "Acrylic and styrene acrylic emulsion binders for paint manufacturers in Kerala, Tamil Nadu and Karnataka. Formulation support, samples and custom grades from Enlace Polymers, Kochi.",
    keywords: ["emulsion for paint manufacturers", "paint binder supplier", "acrylic emulsion South India", "paint raw material supplier Kerala"],
    h1: "Acrylic Emulsion Binders for Paint & Coating Manufacturers",
    intro:
      "Regional paint brands compete on price and performance at the same time. Enlace gives you a nearby emulsion partner with R&D support — so you can reformulate, cost-optimise and launch faster.",
    pains: [
      { title: "Long lead times", text: "Binders shipped from western India add days and freight. We are in Kochi." },
      { title: "No technical support", text: "Traders sell drums, not formulations. Our chemists help with ladder studies." },
      { title: "Cost pressure", text: "Right-sized binder selection can cut formula cost without losing scrub or sheen." },
    ],
    solutions: [
      { product: "Styrene Acrylic Emulsions", href: "/products/paint-coatings-emulsions", why: "Interior emulsions, primers, putty, distemper" },
      { product: "Pure Acrylic Emulsions", href: "/products/paint-coatings-emulsions", why: "Premium exterior emulsions" },
      { product: "Specialty Additives", href: "/products/additives", why: "Dispersants, defoamers, rheology" },
    ],
    articles: ["styrene-acrylic-vs-pure-acrylic-emulsion", "emulsion-paint-formulation-basics", "how-to-evaluate-new-emulsion-supplier"],
    cta: "Request an emulsion sample + TDS",
  },
  {
    slug: "construction-chemicals",
    name: "Construction Chemicals",
    metaTitle: "Polymer Emulsion for Construction Chemical Manufacturers | Waterproofing & Tile Adhesive",
    metaDescription:
      "Acrylic polymer emulsions for waterproofing compounds, repair mortars, tile adhesives and putty. Supplier to construction chemical manufacturers across South India.",
    keywords: ["polymer for construction chemicals", "waterproofing polymer supplier", "tile adhesive polymer", "cement modifier supplier"],
    h1: "Polymer Emulsions for Construction Chemical & Waterproofing Manufacturers",
    intro:
      "Kerala's monsoon makes waterproofing a year-round business. Enlace supplies the polymer that goes into your cementitious coatings, repair mortars and tile adhesives.",
    pains: [
      { title: "Coating cracks", text: "Insufficient polymer flexibility leads to cracking over thermal cycles." },
      { title: "Poor adhesion to old concrete", text: "Polymer modification improves bond to aged substrates." },
    ],
    solutions: [{ product: "Construction Resins", href: "/products/construction-resins", why: "Waterproofing, repair mortar, tile adhesive" }],
    articles: ["polymer-modified-mortar-sbr-vs-acrylic", "acrylic-polymer-for-tile-adhesive-and-wall-putty"],
    cta: "Discuss your waterproofing formulation",
  },
  {
    slug: "textile-printing",
    name: "Textile Printing",
    metaTitle: "Pigment Printing Binder Supplier for Textile Printers | Tiruppur, Erode, Kerala",
    metaDescription:
      "Water-based acrylic binders for textile pigment printing and finishing with strong rub and wash fastness and soft hand. Supplying printers and processors across South India.",
    keywords: ["pigment printing binder supplier", "textile binder Tiruppur", "soft binder for printing", "textile chemicals Kerala"],
    h1: "Pigment Printing Binders for Textile Printers & Processors",
    intro:
      "Rub fastness, wash fastness and a soft hand — without choking screens. Enlace textile binders are built for South India's garment and home-textile printers.",
    pains: [
      { title: "Poor rub fastness", text: "Under-performing binders fail buyer tests. Right binder + curing fixes it." },
      { title: "Stiff hand", text: "Film hardness must be balanced against fastness." },
    ],
    solutions: [{ product: "Textile Binders & Emulsions", href: "/products/textile-binders", why: "Pigment printing, finishing, non-woven" }],
    articles: ["textile-pigment-printing-binder-guide", "apeo-free-formaldehyde-free-textile-binders"],
    cta: "Request a binder sample for bulk trials",
  },
  {
    slug: "coir-natural-fibre",
    name: "Coir & Natural Fibre",
    metaTitle: "Coir Binder & Emulsion Supplier | Coir Mat, Rubberised Coir & Geotextile Binders Kerala",
    metaDescription:
      "Water-based emulsions for coir mats, rubberised coir, coir boards and geotextiles. Kerala-made alternative and complement to natural latex with local trial support in Alappuzha.",
    keywords: ["coir binder supplier", "coir mat backing emulsion", "latex alternative coir", "coir industry chemicals Alappuzha"],
    h1: "Binders & Emulsions for Coir Mats, Rubberised Coir and Natural Fibre Products",
    intro:
      "Natural latex prices move with the rubber market. A well-designed synthetic emulsion gives coir manufacturers consistency and cost control — and it's made just up the road in Kochi.",
    pains: [
      { title: "Latex price swings", text: "Blending or replacing with emulsion stabilises cost." },
      { title: "Export quality", text: "Consistent binders mean consistent finish for export buyers." },
    ],
    solutions: [{ product: "Coir & Natural Fibre Emulsions", href: "/products/coir-emulsions", why: "Mats, sheets, boards, geotextiles" }],
    articles: ["latex-vs-synthetic-emulsion-for-rubberised-coir", "binders-for-coir-mats-and-geotextiles"],
    cta: "Book a line trial at your coir unit",
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
