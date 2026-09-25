"use client";
import { useState } from "react";
import { Check, Link2, Linkedin, MessageCircle } from "lucide-react";

export function ShareBar({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const btn = "grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-ink-soft transition hover:border-brand-300 hover:text-brand-700";
  return (
    <div className="flex items-center gap-2">
      <span className="mr-1 text-sm text-ink-mute">Share</span>
      <a className={btn} href={`https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`} target="_blank" rel="noopener" aria-label="Share on WhatsApp"><MessageCircle className="h-4 w-4" /></a>
      <a className={btn} href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`} target="_blank" rel="noopener" aria-label="Share on LinkedIn"><Linkedin className="h-4 w-4" /></a>
      <button className={btn} aria-label="Copy link" onClick={() => { navigator.clipboard?.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 1800); }}>
        {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Link2 className="h-4 w-4" />}
      </button>
    </div>
  );
}
