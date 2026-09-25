"use client";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MessageCircle, RotateCcw, Sparkles } from "lucide-react";
import { enfixxGrades } from "@/lib/products";
import { waLink } from "@/lib/site";
import { track } from "@/lib/track";
import { GradePack } from "./GradePack";

type Ans = { env?: string; job?: string; priority?: string };

const steps = [
  {
    key: "env" as const,
    q: "Where will the finished piece be used?",
    opts: [
      { v: "dry", label: "Dry interior", hint: "Bedrooms, living rooms, offices" },
      { v: "humid", label: "Interior, occasional humidity", hint: "Monsoon humidity, occasional splashes" },
      { v: "wet", label: "Kitchen, bathroom or wet zone", hint: "Frequent short-term water exposure" },
      { v: "coastal", label: "Coastal / very humid region", hint: "Sea air, high year-round humidity" },
      { v: "exterior", label: "Outdoors, exposed to rain", hint: "Weather-exposed exterior joints" },
    ],
  },
  {
    key: "job" as const,
    q: "What are you bonding?",
    opts: [
      { v: "joinery", label: "Wood-to-wood joinery", hint: "Frames, joints, solid wood" },
      { v: "laminate", label: "Laminate / sunmica on ply or MDF", hint: "Cold or hot press" },
      { v: "veneer", label: "Veneer lamination", hint: "Decorative veneer on boards" },
      { v: "edge", label: "Edge banding & panel joinery", hint: "Modular furniture" },
      { v: "craft", label: "Paper, handicrafts, porous items", hint: "Light-duty bonding" },
    ],
  },
  {
    key: "priority" as const,
    q: "What matters most on this job?",
    opts: [
      { v: "cost", label: "Lowest cost per job", hint: "Budget carpentry" },
      { v: "balanced", label: "Balance of cost & performance", hint: "Most furniture work" },
      { v: "max", label: "Maximum durability", hint: "Premium projects, zero callbacks" },
    ],
  },
];

function recommend(a: Ans) {
  const reasons: string[] = [];
  let slug: "sd" | "hd" | "marino" = "hd";
  let note = "";
  if (a.env === "wet" || a.env === "coastal" || a.env === "exterior") {
    slug = "marino";
    reasons.push("Wet zones and humid/coastal climates need a D3 water-resistant adhesive.");
    if (a.env === "exterior") note = "Joints permanently exposed to rain need a D4-class system with a protective surface coat. Talk to our team before using any D3 adhesive outdoors.";
  } else if (a.env === "humid") {
    slug = a.priority === "max" ? "marino" : "hd";
    reasons.push(slug === "marino" ? "You chose maximum durability — D3 adds a safety margin in humid interiors." : "D2 handles occasional humidity and short-term moisture in interiors.");
  } else {
    if (a.priority === "cost" && (a.job === "joinery" || a.job === "craft")) {
      slug = "sd";
      reasons.push("Dry-interior joinery with a focus on cost is exactly what D1 is designed for.");
    } else if (a.priority === "max") {
      slug = "hd";
      reasons.push("D2 gives stronger, more forgiving bonds for premium dry-interior work.");
    } else {
      slug = a.job === "craft" ? "sd" : "hd";
      reasons.push(slug === "sd" ? "Light-duty porous bonding doesn't need more than D1." : "Professional furniture and panel work benefits from D2 performance.");
    }
  }
  if (a.job === "laminate" || a.job === "veneer") reasons.push("Smooth consistency spreads evenly by hand or glue-spreader for laminate and veneer.");
  if (a.job === "edge") reasons.push("Suitable for wood edge banding and panel joinery in modular furniture.");
  return { grade: enfixxGrades.find((g) => g.slug === slug)!, reasons, note };
}

export function AdhesiveSelector() {
  const [step, setStep] = useState(0);
  const [ans, setAns] = useState<Ans>({});
  const done = step >= steps.length;
  const res = done ? recommend(ans) : null;

  const choose = (k: keyof Ans, v: string) => {
    const next = { ...ans, [k]: v };
    setAns(next);
    setStep((s) => s + 1);
    if (step === steps.length - 1) track("selector_complete", { ...next });
  };

  return (
    <div className="card overflow-hidden">
      <div className="h-1.5 bg-slate-100">
        <motion.div className="h-full bg-gradient-to-r from-brand-600 to-sky-accent" animate={{ width: `${(Math.min(step, 3) / 3) * 100}%` }} />
      </div>
      <div className="p-5 sm:p-8">
        <AnimatePresence mode="wait">
          {!done ? (
            <motion.div key={step} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.25 }}>
              <p className="text-sm font-semibold text-brand-600">Question {step + 1} of {steps.length}</p>
              <h2 className="mt-2 text-2xl font-semibold">{steps[step].q}</h2>
              <div className="mt-6 grid gap-3">
                {steps[step].opts.map((o) => (
                  <button
                    key={o.v}
                    onClick={() => choose(steps[step].key, o.v)}
                    className={`flex items-center justify-between rounded-2xl border p-4 text-left transition hover:border-brand-400 hover:bg-brand-50 ${
                      ans[steps[step].key] === o.v ? "border-brand-500 bg-brand-50" : "border-slate-200"
                    }`}
                  >
                    <span>
                      <span className="block font-semibold">{o.label}</span>
                      <span className="block text-sm text-ink-mute">{o.hint}</span>
                    </span>
                    <ArrowRight className="h-5 w-5 shrink-0 text-brand-500" />
                  </button>
                ))}
              </div>
              {step > 0 && (
                <button onClick={() => setStep((s) => s - 1)} className="mt-5 flex items-center gap-1 text-sm font-medium text-ink-mute hover:text-ink">
                  <ArrowLeft className="h-4 w-4" /> Back
                </button>
              )}
            </motion.div>
          ) : (
            res && (
              <motion.div key="result" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="grid items-center gap-6 sm:grid-cols-[180px_1fr]">
                <GradePack name={res.grade.name} dClass={res.grade.dClass} colour={res.grade.colour} className="mx-auto w-40 sm:w-full" />
                <div>
                  <p className="flex items-center gap-1.5 text-sm font-semibold text-brand-600"><Sparkles className="h-4 w-4" /> Our recommendation</p>
                  <h2 className="mt-1 text-3xl font-semibold">{res.grade.name} <span className="text-brand-500">({res.grade.dClass})</span></h2>
                  <p className="mt-1 text-ink-soft">{res.grade.tagline}</p>
                  <ul className="mt-4 space-y-2 text-[15px]">
                    {res.reasons.map((r) => <li key={r} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-accent" />{r}</li>)}
                  </ul>
                  {res.note && <p className="mt-4 rounded-xl bg-amber-50 p-3 text-sm text-amber-900">{res.note}</p>}
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <Link href={`/request-sample?product=${encodeURIComponent(res.grade.name)}`} className="btn-primary">Get a free trial pack</Link>
                    <a href={waLink(`Hi, the Enfixx selector recommended ${res.grade.name} (${res.grade.dClass}) for my job. Can you share price & pack sizes?`)} target="_blank" rel="noopener" className="btn-ghost">
                      <MessageCircle className="h-5 w-5" /> Price on WhatsApp
                    </a>
                    <Link href={`/products/enfixx/${res.grade.slug}`} className="btn-ghost">View {res.grade.name}</Link>
                  </div>
                  <button onClick={() => { setStep(0); setAns({}); }} className="mt-5 flex items-center gap-1 text-sm font-medium text-ink-mute hover:text-ink">
                    <RotateCcw className="h-4 w-4" /> Start again
                  </button>
                </div>
              </motion.div>
            )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
