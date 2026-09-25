"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Calculator } from "lucide-react";

// Indicative spread rates for PVAc synthetic resin adhesives (g/m², single glue line).
// TODO(content): replace with Enfixx TDS values once confirmed by R&D.
const RATES: Record<string, { label: string; min: number; max: number }> = {
  laminate: { label: "Laminate / sunmica on ply or MDF", min: 150, max: 200 },
  veneer: { label: "Veneer lamination", min: 120, max: 180 },
  joinery: { label: "Wood-to-wood joinery (per glued face)", min: 180, max: 250 },
  board: { label: "Board to board (panel lamination)", min: 150, max: 220 },
};
const SQFT_PER_SHEET = 32; // 8 ft × 4 ft
const M2_PER_SQFT = 0.092903;

export function CoverageCalculator() {
  const [app, setApp] = useState("laminate");
  const [mode, setMode] = useState<"sheets" | "sqft" | "m2">("sheets");
  const [qty, setQty] = useState(10);
  const [sides, setSides] = useState(1);
  const [waste, setWaste] = useState(10);

  const out = useMemo(() => {
    const m2 = mode === "sheets" ? qty * SQFT_PER_SHEET * M2_PER_SQFT : mode === "sqft" ? qty * M2_PER_SQFT : qty;
    const r = RATES[app];
    const f = sides * (1 + waste / 100);
    return { m2, min: (m2 * r.min * f) / 1000, max: (m2 * r.max * f) / 1000 };
  }, [app, mode, qty, sides, waste]);

  return (
    <div className="card grid gap-0 overflow-hidden lg:grid-cols-[1.2fr_1fr]">
      <div className="grid gap-5 p-5 sm:p-8">
        <div>
          <label className="label" htmlFor="app">Application</label>
          <select id="app" className="input" value={app} onChange={(e) => setApp(e.target.value)}>
            {Object.entries(RATES).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
          </select>
        </div>
        <div>
          <span className="label">Measure by</span>
          <div className="grid grid-cols-3 gap-2">
            {(["sheets", "sqft", "m2"] as const).map((m) => (
              <button key={m} onClick={() => setMode(m)} className={`rounded-xl border py-2.5 text-sm font-semibold ${mode === m ? "border-brand-600 bg-brand-600 text-white" : "border-slate-200"}`}>
                {m === "sheets" ? "8×4 sheets" : m === "sqft" ? "sq ft" : "m²"}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="label" htmlFor="qty">Quantity ({mode === "sheets" ? "sheets" : mode === "sqft" ? "sq ft" : "m²"})</label>
          <input id="qty" type="number" inputMode="decimal" min={0} className="input" value={qty} onChange={(e) => setQty(Math.max(0, Number(e.target.value)))} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="label" htmlFor="sides">Glue lines per sheet</label>
            <select id="sides" className="input" value={sides} onChange={(e) => setSides(Number(e.target.value))}>
              <option value={1}>1 (one face)</option>
              <option value={2}>2 (both faces)</option>
            </select>
          </div>
          <div>
            <label className="label" htmlFor="waste">Wastage allowance</label>
            <select id="waste" className="input" value={waste} onChange={(e) => setWaste(Number(e.target.value))}>
              {[5, 10, 15, 20].map((w) => <option key={w} value={w}>{w}%</option>)}
            </select>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col justify-center bg-brand-950 p-6 text-white sm:p-8">
        <Calculator className="h-8 w-8 text-sky-accent" />
        <p className="mt-4 text-sm uppercase tracking-widest text-white/60">Estimated adhesive needed</p>
        <p className="mt-2 font-display text-4xl font-semibold sm:text-5xl">
          {out.min.toFixed(1)}–{out.max.toFixed(1)} <span className="text-2xl text-white/70">kg</span>
        </p>
        <p className="mt-2 text-white/70">for {out.m2.toFixed(1)} m² ({(out.m2 / M2_PER_SQFT).toFixed(0)} sq ft) of bonded area</p>
        <p className="mt-6 text-xs leading-relaxed text-white/50">
          Indicative estimate using typical spread rates for synthetic resin wood adhesives. Actual consumption depends on substrate porosity,
          spreading method and adhesive grade — confirm with the Enfixx technical data sheet.
        </p>
        <Link href="/request-sample" className="btn-accent mt-6">Get a quote for this quantity</Link>
      </div>
    </div>
  );
}
