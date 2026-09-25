"use client";
import Link from "next/link";
import { MessageCircle, Phone, Send } from "lucide-react";
import { company, waLink } from "@/lib/site";
import { track } from "@/lib/track";

/** Sticky bottom bar on phones: the three actions Indian B2B buyers actually use. */
export function MobileActionBar() {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-lg lg:hidden">
        <div className="grid grid-cols-3">
          <a href={company.phoneHref} onClick={() => track("click_call", { place: "mobile_bar" })} className="flex flex-col items-center gap-0.5 py-2.5 text-[12px] font-semibold text-ink-soft active:bg-slate-50">
            <Phone className="h-5 w-5 text-brand-600" /> Call
          </a>
          <a href={waLink()} target="_blank" rel="noopener" onClick={() => track("click_whatsapp", { place: "mobile_bar" })} className="flex flex-col items-center gap-0.5 py-2.5 text-[12px] font-semibold text-ink-soft active:bg-slate-50">
            <MessageCircle className="h-5 w-5 text-[#25D366]" /> WhatsApp
          </a>
          <Link href="/request-sample" onClick={() => track("click_cta", { cta: "mobile_bar_quote" })} className="m-1.5 flex flex-col items-center justify-center gap-0.5 rounded-xl bg-brand-600 py-1.5 text-[12px] font-semibold text-white">
            <Send className="h-5 w-5" /> Get Quote
          </Link>
        </div>
      </div>
      {/* Desktop floating WhatsApp */}
      <a
        href={waLink()}
        target="_blank"
        rel="noopener"
        aria-label="Chat with Enlace Polymers on WhatsApp"
        onClick={() => track("click_whatsapp", { place: "fab" })}
        className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lift transition hover:scale-105 lg:grid"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </>
  );
}
