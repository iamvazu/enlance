// Product catalogue + SEO keyword map. Copy adapted from enlacepolymers.com and expanded.
// Numbers in `specs` are deliberately left as "On TDS" until R&D confirms them — never publish guessed specs.

export type Faq = { q: string; a: string };
export type Grade = {
  name: string;
  slug?: string;
  summary: string;
  bestFor: string[];
};
export type ProductCategory = {
  slug: string;
  name: string;
  short: string;
  icon: "adhesive" | "paint" | "construction" | "textile" | "coir" | "additive";
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  keywords: string[];
  h1: string;
  intro: string;
  body: string[];
  grades: Grade[];
  benefits: { title: string; text: string }[];
  applications: string[];
  specs: { label: string; value: string }[];
  industries: string[]; // industry slugs
  articles: string[]; // learning-center slugs
  faqs: Faq[];
};

const onTds = "On TDS";

export const products: ProductCategory[] = [
  {
    slug: "enfixx-wood-adhesives",
    name: "Enfixx Wood Adhesives",
    short: "D1, D2 & D3 synthetic resin wood adhesives for carpentry, plywood, laminates and modular furniture.",
    icon: "adhesive",
    metaTitle: "Enfixx Wood Adhesive | D3 Waterproof Wood Glue & Synthetic Resin Adhesive Manufacturer Kerala",
    metaDescription:
      "Enfixx wood adhesives by Enlace Polymers — D1, D2 and D3 synthetic resin wood glue for plywood, laminates, veneer, MDF and modular furniture. Made in Kochi, Kerala. Get dealer price.",
    primaryKeyword: "wood adhesive manufacturer in Kerala",
    keywords: [
      "wood adhesive",
      "wood glue",
      "synthetic resin adhesive",
      "D3 wood adhesive",
      "waterproof wood adhesive",
      "PVA wood glue",
      "plywood adhesive",
      "laminate adhesive",
      "carpentry adhesive",
      "wood adhesive manufacturer Kerala",
      "Fevicol alternative",
    ],
    h1: "Enfixx Wood Adhesives — D1, D2 & D3 Synthetic Resin Wood Glue",
    intro:
      "Enfixx is the wood adhesive brand of Enlace Polymers, engineered with in-house resin manufacturing for modern woodworking, plywood bonding, laminate pasting and interior fit-out. Three purpose-built grades — SD, HD and MARINO — cover everything from everyday carpentry to kitchens, bathrooms and coastal homes.",
    body: [
      "Most wood adhesive brands buy their base polymer from a resin supplier. Enfixx does not. Because Enlace Polymers manufactures its own water-based synthetic resin emulsions at KINFRA Petrochemical Park, Kochi, every batch of Enfixx wood glue is formulated from the molecule up — giving carpenters, plywood manufacturers and modular furniture makers consistent bond strength, predictable open time and reliable spreading, drum after drum.",
      "Enfixx adhesives are single-component, solvent-free, low-odour white synthetic resin adhesives. They bond plywood, solid wood, decorative laminates, veneers, MDF, particle board, block board and hard board, and also work on porous substrates such as paper, handicrafts and textiles. Choose Enfixx SD (D1) for economical interior joinery, Enfixx HD (D2) for professional and industrial woodwork, and Enfixx MARINO (D3) where moisture resistance matters — kitchens, bathrooms, terraces and humid coastal regions.",
    ],
    grades: [
      { name: "Enfixx SD", slug: "sd", summary: "Economical D1 synthetic resin adhesive for daily carpentry and joinery.", bestFor: ["Interior joinery", "General carpentry", "Handicrafts & paper"] },
      { name: "Enfixx HD", slug: "hd", summary: "Premium D2 high-performance white adhesive for professional woodwork.", bestFor: ["Modular furniture", "Edge banding & panel joinery", "Laminate & veneer"] },
      { name: "Enfixx MARINO", slug: "marino", summary: "Premium D3 water-resistant adhesive for high-moisture applications.", bestFor: ["Kitchens & bathrooms", "Marine plywood", "Coastal & humid areas"] },
    ],
    benefits: [
      { title: "In-house resin", text: "Complete control of polymer quality — no third-party base emulsion." },
      { title: "D1 · D2 · D3 range", text: "A grade for every moisture exposure, as defined by EN 204 durability classes." },
      { title: "Solvent-free & low odour", text: "Water-based, safe for indoor workshops and occupied interiors." },
      { title: "Hand & machine application", text: "Smooth consistency for brush, spreader, roller and glue-spreader machines." },
      { title: "12-month shelf life", text: "When stored in a cool, shaded place away from direct sunlight." },
      { title: "Local supply", text: "Manufactured in Kochi for fast dispatch across Kerala and South India." },
    ],
    applications: [
      "Plywood to plywood & solid wood joinery",
      "Decorative laminate (sunmica) pasting",
      "Veneer lamination",
      "MDF, particle board, block board & hard board",
      "Edge banding & panel joinery",
      "Kitchen cabinets, wardrobes & vanity units",
      "Doors, frames & modular furniture",
      "Paper, handicrafts & porous substrates",
    ],
    specs: [
      { label: "Type", value: "Single-component synthetic resin (PVAc-based) emulsion adhesive" },
      { label: "Appearance", value: "White, ready-to-use" },
      { label: "Durability classes", value: "SD – D1 · HD – D2 · MARINO – D3" },
      { label: "Solvent content", value: "Solvent-free, water-based" },
      { label: "Shelf life", value: "12 months (cool, shaded storage)" },
      { label: "Solids / viscosity / open time", value: onTds },
      { label: "Pack sizes", value: "Available on request" }, // TODO(content): e.g. 250 g, 1 kg, 5 kg, 20 kg, 50 kg
    ],
    industries: ["furniture-woodworking", "plywood-laminates"],
    articles: [
      "d1-d2-d3-d4-wood-adhesive-classes-en-204-explained",
      "best-waterproof-wood-adhesive-for-kitchen-and-bathroom",
      "how-to-apply-wood-adhesive-plywood-laminate",
      "pva-wood-glue-vs-synthetic-resin-adhesive",
    ],
    faqs: [
      { q: "What is Enfixx and who manufactures it?", a: "Enfixx is a high-performance wood adhesive brand manufactured by Enlace Polymers Private Limited at KINFRA Petrochemical Industrial Park, Kochi, Kerala, using resin produced in-house." },
      { q: "What is the difference between Enfixx MARINO, HD and SD?", a: "Enfixx MARINO is a premium D3 water-resistant adhesive for wet areas; Enfixx HD is a high-performance D2 adhesive for professional and industrial woodwork; Enfixx SD is an economical D1 adhesive for daily carpentry and general interior work." },
      { q: "Which Enfixx adhesive is best for kitchens and bathrooms?", a: "Enfixx MARINO (D3) is recommended for kitchens, bathrooms, terraces and coastal regions where wood is frequently exposed to moisture and humidity." },
      { q: "Is Enfixx a good alternative to Fevicol?", a: "Enfixx offers an equivalent D1/D2/D3 grade structure made from in-house resin with local manufacturing in Kerala. Request a free trial pack to compare bond strength and spreading on your own jobs." },
      { q: "How should Enfixx be stored?", a: "Store in a cool, shaded place away from direct sunlight or high temperature. All grades have a 12-month shelf life when stored properly. Do not allow the adhesive to freeze." },
    ],
  },
  {
    slug: "paint-coatings-emulsions",
    name: "Paint & Coatings Emulsions",
    short: "Styrene acrylic, pure acrylic and specialty acrylic emulsion binders for decorative and industrial paints.",
    icon: "paint",
    metaTitle: "Acrylic Emulsion Manufacturer | Styrene Acrylic & Pure Acrylic Binder for Paints – Kerala, India",
    metaDescription:
      "Styrene acrylic emulsion, pure acrylic emulsion and specialty acrylic binders for interior, exterior and texture paints. Water-based paint binders manufactured in Kochi for South India's paint makers.",
    primaryKeyword: "acrylic emulsion manufacturer",
    keywords: [
      "acrylic emulsion",
      "styrene acrylic emulsion",
      "pure acrylic emulsion",
      "paint binder",
      "emulsion for paint",
      "acrylic copolymer emulsion",
      "exterior paint binder",
      "texture paint binder",
      "polymer emulsion manufacturer India",
      "acrylic emulsion supplier Kerala",
    ],
    h1: "Acrylic Emulsions for Paints & Coatings — Styrene Acrylic, Pure Acrylic & Specialty Binders",
    intro:
      "Enlace Polymers manufactures water-based acrylic emulsion binders that enhance the performance, aesthetics and longevity of paints and coatings. From economical interior emulsions and wall primers to premium exterior finishes and texture coatings, our polymer emulsions deliver adhesion, scrub resistance, weatherability and colour retention.",
    body: [
      "The binder is the backbone of every emulsion paint. It holds pigment and extender together, bonds the film to the substrate and decides how the finish survives sun, rain, washing and time. Enlace offers three families of paint emulsions — styrene acrylic copolymer emulsions, pure acrylic emulsions and specialty acrylic emulsions — so formulators can match binder chemistry to price point and performance target.",
      "Because our plant is in Kochi, paint manufacturers across Kerala, Tamil Nadu and Karnataka get shorter lead times, lower freight and direct access to our R&D team for formulation support, ladder studies and custom grades — without the minimum-order hurdles of multinational suppliers.",
    ],
    grades: [
      { name: "Styrene Acrylic Emulsions", summary: "Versatile, cost-effective binders for water-based paints with good scrub resistance and durability.", bestFor: ["Interior emulsions", "Distempers & primers", "Wall putty", "Texture paints"] },
      { name: "Pure Acrylic Emulsions", summary: "Premium resins with superior UV resistance, gloss retention and flexibility.", bestFor: ["Exterior emulsions", "Premium sheen finishes", "Elastomeric coatings"] },
      { name: "Specialty Acrylic Emulsions", summary: "Resins engineered for unique performance specifications and application challenges.", bestFor: ["Roof & waterproof coatings", "Industrial coatings", "Custom formulations"] },
    ],
    benefits: [
      { title: "Formulation support", text: "Our chemists help with starting-point formulations and ladder trials." },
      { title: "Consistent batches", text: "Automated, precision-engineered processes for batch-to-batch consistency." },
      { title: "Low VOC", text: "Water-based systems for low-odour, low-VOC paint formulations." },
      { title: "South India logistics", text: "Faster dispatch and lower freight than suppliers in western India." },
    ],
    applications: [
      "Interior & exterior emulsion paints",
      "Wall primers & sealers",
      "Distempers & economy emulsions",
      "Texture & decorative finishes",
      "Wall putty & fillers",
      "Roof coatings & waterproof paints",
    ],
    specs: [
      { label: "Chemistry", value: "Styrene acrylic / pure acrylic / specialty acrylic copolymers" },
      { label: "Carrier", value: "Water" },
      { label: "Solids %, viscosity, pH", value: onTds },
      { label: "MFFT / Tg", value: onTds },
      { label: "Packing", value: "Drums / IBC — on request" },
    ],
    industries: ["paints-coatings", "construction-chemicals"],
    articles: [
      "styrene-acrylic-vs-pure-acrylic-emulsion",
      "how-to-choose-acrylic-emulsion-binder-for-exterior-paint",
      "mfft-and-tg-emulsion-polymers-explained",
      "emulsion-paint-formulation-basics",
      "how-to-evaluate-new-emulsion-supplier",
    ],
    faqs: [
      { q: "What is the difference between styrene acrylic and pure acrylic emulsion?", a: "Styrene acrylic emulsions are cost-effective binders with good water and alkali resistance, ideal for interior paints, primers and putty. Pure acrylic emulsions offer superior UV resistance, gloss retention and flexibility for premium exterior paints." },
      { q: "Do you provide samples of paint emulsions?", a: "Yes. Request a sample with your application details and our technical team will recommend a grade and send a sample with its technical data sheet." },
      { q: "Can you develop a custom emulsion grade?", a: "Yes. Our R&D team develops custom polymer emulsions for specific performance targets such as higher PVC tolerance, faster water resistance or improved dirt pickup resistance." },
    ],
  },
  {
    slug: "construction-resins",
    name: "Construction Resins",
    short: "Polymer modifiers for cement, mortar, tile adhesive, waterproofing and repair systems.",
    icon: "construction",
    metaTitle: "Construction Chemical Polymers | Acrylic Polymer for Waterproofing, Mortar & Tile Adhesive",
    metaDescription:
      "Construction resins and acrylic polymer emulsions for cement modification, waterproofing, repair mortar, tile adhesive and flooring. Supplier to construction chemical manufacturers in South India.",
    primaryKeyword: "acrylic polymer for waterproofing",
    keywords: [
      "construction chemical polymer",
      "acrylic polymer for waterproofing",
      "polymer modified mortar",
      "cement modifier",
      "tile adhesive polymer",
      "SBR alternative",
      "waterproofing emulsion",
      "repair mortar polymer",
      "construction resin manufacturer",
    ],
    h1: "Construction Resins & Acrylic Polymers for Waterproofing, Mortar and Tile Adhesive",
    intro:
      "Our construction resins are engineered to improve the strength, durability and workability of building materials, contributing to more resilient and sustainable infrastructure.",
    body: [
      "Adding a polymer emulsion to cement changes how concrete, mortar and grout behave: better adhesion to old substrates, lower water permeability, improved flexural strength and fewer shrinkage cracks. Enlace supplies acrylic and styrene acrylic polymer emulsions to construction chemical manufacturers who produce waterproofing compounds, repair mortars, tile adhesives, wall putty and flooring systems.",
      "We work with formulators to match polymer chemistry, solids and film properties to the application — from brush-applied cementitious waterproof coatings on terraces to polymer-modified plasters in humid coastal climates.",
    ],
    grades: [
      { name: "Resins for Concrete & Cement", summary: "Enhance concrete, mortar and grout for increased strength, reduced permeability and improved bond.", bestFor: ["Bonding agents", "Polymer-modified mortar", "Grout"] },
      { name: "Specialised Durability Resins", summary: "Solutions for flooring, waterproofing, repair mortars and high-performance construction adhesives.", bestFor: ["Cementitious waterproofing", "Repair mortars", "Tile adhesives", "Flooring"] },
    ],
    benefits: [
      { title: "Lower permeability", text: "Polymer films block capillary pores to reduce water ingress." },
      { title: "Better bond", text: "Improves adhesion of new mortar to old concrete and tiles to substrates." },
      { title: "Flexibility", text: "Reduces cracking in coatings and renders subject to thermal movement." },
      { title: "Workability", text: "Improves spreading, trowelling and water retention." },
    ],
    applications: [
      "Cementitious waterproofing coatings",
      "Terrace, bathroom & basement waterproofing",
      "Polymer-modified repair mortars",
      "Tile adhesives & grouts",
      "Bonding agents & primers",
      "Wall putty & skim coats",
    ],
    specs: [
      { label: "Chemistry", value: "Acrylic / styrene acrylic copolymer emulsions" },
      { label: "Solids %, viscosity, pH, MFFT", value: onTds },
      { label: "Cement compatibility", value: "Designed for cementitious systems" },
    ],
    industries: ["construction-chemicals"],
    articles: ["polymer-modified-mortar-sbr-vs-acrylic", "acrylic-polymer-for-tile-adhesive-and-wall-putty"],
    faqs: [
      { q: "Can acrylic polymer replace SBR latex in waterproofing?", a: "In many cementitious waterproofing and repair applications, acrylic polymers offer better UV and ageing resistance than SBR. The right choice depends on exposure, cost and required flexibility — our team can advise on trials." },
      { q: "Do you supply construction chemical brands?", a: "Yes. We supply polymer emulsions to manufacturers of waterproofing compounds, tile adhesives, repair mortars and putty." },
    ],
  },
  {
    slug: "textile-binders",
    name: "Textile Binders & Emulsions",
    short: "Water-based binders for pigment printing, finishing and coating of textiles.",
    icon: "textile",
    metaTitle: "Textile Binder Manufacturer | Pigment Printing Binder & Textile Emulsions – India",
    metaDescription:
      "Water-based textile binders and emulsions for pigment printing, finishing and fabric coating — strong pigment fixation, soft hand feel and wash fastness. Supplier to Tiruppur, Erode & Kerala textile units.",
    primaryKeyword: "textile binder manufacturer",
    keywords: [
      "textile binder",
      "pigment printing binder",
      "textile emulsion",
      "acrylic binder for textile",
      "soft hand binder",
      "APEO free binder",
      "fabric coating emulsion",
      "textile auxiliaries",
    ],
    h1: "Textile Binders & Emulsions for Pigment Printing and Finishing",
    intro:
      "Enlace textile emulsions and binders are high-performance, water-based polymer systems designed to deliver excellent bonding, durability and finish in modern textile applications — with strong pigment fixation, a smooth hand feel and long-lasting fabric performance.",
    body: [
      "In pigment printing, the binder is what keeps colour on the fabric through rubbing and washing. A good textile binder balances rub fastness and wash fastness against softness of hand, clarity of print and runnability on the machine — no screen choking, no build-up on rollers.",
      "Our water-based acrylic binders serve textile printers, processors and non-woven manufacturers. We also work with units aiming to meet buyer compliance programmes for restricted substances; ask our team for current compliance documentation on each grade.",
    ],
    grades: [
      { name: "Pigment Printing Binders", summary: "Acrylic binders for pigment printing on cotton and blends with good rub and wash fastness.", bestFor: ["Table & rotary printing", "Garment printing"] },
      { name: "Finishing & Coating Emulsions", summary: "Emulsions for stiffening, coating and finishing woven and non-woven fabrics.", bestFor: ["Fabric finishing", "Non-woven bonding", "Coating"] },
    ],
    benefits: [
      { title: "Strong fixation", text: "Pigment stays put through rubbing and repeated washing." },
      { title: "Soft hand", text: "Film properties tuned for comfort and drape." },
      { title: "Runnability", text: "Designed to minimise screen choking and roller build-up." },
    ],
    applications: ["Pigment printing", "Fabric finishing", "Non-woven bonding", "Textile coating", "Flock adhesive base"],
    specs: [
      { label: "Chemistry", value: "Water-based acrylic copolymer emulsions" },
      { label: "Ionic nature, solids %, viscosity", value: onTds },
      { label: "Compliance documentation", value: "Available on request" },
    ],
    industries: ["textile-printing"],
    articles: ["textile-pigment-printing-binder-guide", "apeo-free-formaldehyde-free-textile-binders"],
    faqs: [
      { q: "What does a textile binder do in pigment printing?", a: "Pigments have no affinity for fibres. The binder forms a thin, flexible polymer film that locks pigment particles onto the fabric surface, delivering rub and wash fastness." },
    ],
  },
  {
    slug: "coir-emulsions",
    name: "Coir & Natural Fibre Emulsions",
    short: "Water-based emulsions for bonding coir and natural fibres in mats, sheets and geotextiles.",
    icon: "coir",
    metaTitle: "Emulsion for Coir Industry | Coir Binder & Natural Fibre Bonding Emulsion – Kerala",
    metaDescription:
      "High-performance water-based emulsions for coir and natural fibre applications — fibre bonding, flexibility and durability for coir mats, rubberised coir sheets, geotextiles and handicrafts. Made in Kerala.",
    primaryKeyword: "emulsion for coir industry",
    keywords: [
      "coir binder",
      "emulsion for coir",
      "coir mat backing",
      "rubberised coir binder",
      "natural fibre binder",
      "coir geotextile binder",
      "latex alternative for coir",
      "coir industry Alappuzha",
    ],
    h1: "Emulsions for Coir & Natural Fibre Industries",
    intro:
      "Enlace Polymers offers high-performance, water-based emulsions specially formulated for coir and natural fibre applications. These emulsions provide strong fibre bonding, flexibility, durability and long service life for traditional and modern coir-based products.",
    body: [
      "Kerala is the heart of India's coir industry, and Enlace is one of the few polymer emulsion manufacturers located right next to it. Our coir emulsions are designed to bond coconut fibre into mats, sheets, boards and handicrafts, and to improve the finish and durability of coir products for domestic and export markets.",
      "For manufacturers who currently rely only on natural rubber latex, a synthetic emulsion — alone or blended — can bring price stability when rubber prices swing, better batch consistency and properties tuned to the product. Talk to us about trials on your line.",
    ],
    grades: [
      { name: "Coir Bonding Emulsions", summary: "Water-based emulsions for fibre-to-fibre bonding in coir products.", bestFor: ["Coir mats", "Coir boards", "Handicrafts"] },
      { name: "Backing & Finishing Emulsions", summary: "Emulsions for backing, stiffening and finishing coir and natural fibre goods.", bestFor: ["Mat backing", "Geotextiles", "Export finishing"] },
    ],
    benefits: [
      { title: "Strong fibre bonding", text: "Holds coir fibres firmly together without brittleness." },
      { title: "Flexibility & durability", text: "Maintains flexibility and long service life." },
      { title: "Local support", text: "On-site trial support across Alappuzha, Kollam and the coir belt." },
    ],
    applications: ["Coir mats & mattings", "Rubberised coir sheets (blends)", "Coir geotextiles", "Coir boards & panels", "Natural fibre handicrafts"],
    specs: [
      { label: "Chemistry", value: "Water-based polymer emulsions" },
      { label: "Solids %, viscosity, film properties", value: onTds },
    ],
    industries: ["coir-natural-fibre"],
    articles: ["latex-vs-synthetic-emulsion-for-rubberised-coir", "binders-for-coir-mats-and-geotextiles"],
    faqs: [
      { q: "Can a synthetic emulsion replace natural latex in coir products?", a: "Depending on the product, a synthetic emulsion can partially or fully replace natural rubber latex, often improving price stability and consistency. Trials on your line are the best way to confirm performance." },
    ],
  },
  {
    slug: "additives",
    name: "Specialty Additives",
    short: "Rheology modifiers, defoamers, dispersants and wetting agents for coatings and construction.",
    icon: "additive",
    metaTitle: "Paint Additives Supplier | Dispersant, Defoamer, Rheology Modifier & Wetting Agent – India",
    metaDescription:
      "Specialty additives for paints, coatings and construction chemicals — rheology modifiers, defoamers, dispersants and wetting agents, plus custom additive packages developed with your formulation team.",
    primaryKeyword: "paint additives supplier",
    keywords: ["paint additives", "dispersing agent", "defoamer for paint", "rheology modifier", "wetting agent", "coating additives India"],
    h1: "Specialty Additives — Rheology Modifiers, Defoamers, Dispersants & Wetting Agents",
    intro:
      "Our specialty additives are designed to fine-tune material properties, offering critical enhancements that optimise performance and efficiency in numerous applications.",
    body: [
      "Additives are used at small doses but decide whether a paint grinds efficiently, stays stable in the can, brushes smoothly and levels without foam. Enlace supplies rheology modifiers, defoamers, dispersants and wetting agents that complement our emulsion binders.",
      "We also collaborate with clients to develop unique additive packages that solve specific formulation challenges and unlock new performance capabilities.",
    ],
    grades: [
      { name: "Rheology Modifiers", summary: "Control viscosity, sag and levelling.", bestFor: ["Emulsion paints", "Putty"] },
      { name: "Defoamers", summary: "Knock down and prevent foam during manufacture and application.", bestFor: ["Paints", "Adhesives"] },
      { name: "Dispersants & Wetting Agents", summary: "Improve pigment wetting, grind efficiency and colour strength.", bestFor: ["Pigment grinds", "Tinting"] },
    ],
    benefits: [
      { title: "Binder-matched", text: "Tested alongside our emulsions for compatibility." },
      { title: "Custom packages", text: "Co-developed additive blends for your formulation." },
    ],
    applications: ["Emulsion paints", "Primers & putty", "Adhesives", "Construction chemicals"],
    specs: [{ label: "Grades & dosage", value: onTds }],
    industries: ["paints-coatings", "construction-chemicals"],
    articles: ["emulsion-paint-formulation-basics"],
    faqs: [],
  },
];

export const enfixxGrades = [
  {
    slug: "sd",
    name: "Enfixx SD",
    dClass: "D1",
    colour: "#3d93cf",
    tagline: "Economical synthetic resin adhesive for everyday carpentry",
    metaTitle: "Enfixx SD – D1 Wood Adhesive for Carpentry & Joinery | Economical Wood Glue",
    metaDescription:
      "Enfixx SD is a cost-effective single-component D1 synthetic resin wood adhesive for daily carpentry, interior joinery and general woodwork. Made in Kerala by Enlace Polymers.",
    keywords: ["D1 wood adhesive", "economical wood glue", "carpentry adhesive", "white glue for wood"],
    description:
      "Enfixx SD is a cost-effective, single-component synthetic resin adhesive designed for reliable performance in everyday carpentry and joinery applications. It delivers dependable bond strength for interior woodwork where the joint will stay dry.",
    applications: [
      "Everyday carpentry and interior joinery",
      "Furniture assembly in dry interiors",
      "Plywood, block board and particle board bonding",
      "Paper, handicrafts and porous materials",
    ],
    notFor: "Not recommended for wet areas — choose Enfixx MARINO for kitchens, bathrooms and exteriors.",
  },
  {
    slug: "hd",
    name: "Enfixx HD",
    dClass: "D2",
    colour: "#0067ac",
    tagline: "High-performance white adhesive for wood & porous materials",
    metaTitle: "Enfixx HD – D2 High-Performance Wood Adhesive for Furniture, Laminate & Veneer",
    metaDescription:
      "Enfixx HD is a premium D2 synthetic resin white adhesive for plywood, laminates, veneer, MDF, edge banding and modular furniture. Strong adhesion, excellent coverage, easy handling.",
    keywords: ["D2 wood adhesive", "furniture adhesive", "laminate adhesive", "veneer glue", "edge banding adhesive"],
    description:
      "Enfixx HD is a premium-grade, single-component synthetic resin adhesive formulated for superior bonding in woodwork and porous substrates. Ideal for both industrial and artisan applications, it offers strong adhesion, excellent coverage and user-friendly handling. Its white, ready-to-use formulation ensures reliability across a wide range of materials — a versatile choice for carpenters, furniture makers and craft professionals.",
    applications: [
      "Plywood, solid wood, laminates, veneers, MDF, particle boards, block boards and hard boards",
      "Wood edge banding and panel joinery",
      "Porous materials such as paper, handicrafts and related industries",
      "General-purpose woodwork in furniture, décor and interiors",
    ],
    notFor: "For areas with frequent water exposure, upgrade to Enfixx MARINO (D3).",
  },
  {
    slug: "marino",
    name: "Enfixx MARINO",
    dClass: "D3",
    colour: "#00b7eb",
    tagline: "Premium water-resistant adhesive for high-moisture wood applications",
    metaTitle: "Enfixx MARINO – D3 Waterproof Wood Adhesive for Kitchen, Bathroom & Marine Plywood",
    metaDescription:
      "Enfixx MARINO is a premium D3 water-resistant synthetic resin wood adhesive for kitchens, bathrooms, terraces, marine plywood and coastal homes. Made in Kerala for humid climates.",
    keywords: ["D3 wood adhesive", "waterproof wood adhesive", "marine plywood adhesive", "kitchen cabinet adhesive", "water resistant wood glue"],
    description:
      "Enfixx MARINO is a high-performance, water-resistant synthetic resin adhesive specially formulated for bonding wood and wood-based substrates. Designed to withstand extreme humidity and harsh conditions, it delivers exceptional bonding strength on marine-grade plywood and is ideal for furniture construction in high-moisture environments such as kitchens, bathrooms and terraces. Its advanced formulation ensures long-lasting durability, excellent coverage and consistent performance across all types of wood, ply, laminates, veneers and engineered boards.",
    applications: [
      "Lamination work",
      "Bonding plywood, laminates, veneers, MDF, particle boards, block boards and hard boards",
      "Wooden fixtures in wet zones: kitchens, bathrooms, walls, terraces and coastal areas",
      "Marine-grade plywood furniture",
    ],
    notFor: "D3 is water-resistant for interiors with frequent short-term water exposure. For permanently exterior, weather-exposed joints use a D4-class system.",
  },
] as const;

export type EnfixxGrade = (typeof enfixxGrades)[number];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getGrade = (slug: string) => enfixxGrades.find((g) => g.slug === slug);
