"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Mail, Menu, MessageCircle, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { company, mainNav, waLink } from "@/lib/site";
import { captureAttribution, track } from "@/lib/track";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const [hover, setHover] = useState<string | null>(null);

  useEffect(() => {
    captureAttribution();
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setHover(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      {/* Utility bar (desktop) */}
      <div className="hidden bg-brand-950 text-[13px] text-white/80 lg:block">
        <div className="container flex h-9 items-center justify-between">
          <p>Manufacturer of water-based polymer emulsions & Enfixx wood adhesives · Kochi, Kerala</p>
          <div className="flex items-center gap-5">
            <a href={company.phoneHref} onClick={() => track("click_call", { place: "topbar" })} className="flex items-center gap-1.5 hover:text-white">
              <Phone className="h-3.5 w-3.5" /> {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="flex items-center gap-1.5 hover:text-white">
              <Mail className="h-3.5 w-3.5" /> {company.email}
            </a>
            <a href={waLink()} target="_blank" rel="noopener" onClick={() => track("click_whatsapp", { place: "topbar" })} className="flex items-center gap-1.5 text-sky-accent hover:text-white">
              <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "border-b border-slate-200/70 bg-white/85 shadow-sm backdrop-blur-xl" : "bg-white"
        }`}
      >
        <div className="container flex h-16 items-center justify-between gap-4 lg:h-[72px]">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {mainNav.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setHover(item.children ? item.href : null)}
                onMouseLeave={() => setHover(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-[15px] font-medium transition hover:bg-brand-50 hover:text-brand-700 ${
                    pathname.startsWith(item.href) ? "text-brand-700" : "text-ink-soft"
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-4 w-4 opacity-60" />}
                </Link>
                <AnimatePresence>
                  {hover === item.href && item.children && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-1/2 top-full w-[380px] -translate-x-1/2 pt-2"
                    >
                      <div className="card p-2">
                        {item.children.map((c) => (
                          <Link key={c.href} href={c.href} className="block rounded-xl px-4 py-3 transition hover:bg-brand-50">
                            <span className="block text-[15px] font-semibold text-ink">{c.label}</span>
                            {c.desc && <span className="block text-[13px] text-ink-mute">{c.desc}</span>}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/request-sample" className="btn-primary hidden !min-h-[44px] !py-2.5 sm:inline-flex" onClick={() => track("click_cta", { cta: "header_sample" })}>
              Get a Quote
            </Link>
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 text-ink lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-16 z-40 overflow-y-auto bg-white lg:hidden"
          >
            <nav className="container pb-40 pt-4" aria-label="Mobile">
              {mainNav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.03 * i }}
                  className="border-b border-slate-100"
                >
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setOpenSub(openSub === item.href ? null : item.href)}
                        className="flex w-full items-center justify-between py-4 text-left font-display text-xl font-semibold"
                        aria-expanded={openSub === item.href}
                      >
                        {item.label}
                        <ChevronDown className={`h-5 w-5 transition ${openSub === item.href ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence initial={false}>
                        {openSub === item.href && (
                          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                            <div className="grid gap-1 pb-4">
                              <Link href={item.href} className="rounded-xl bg-brand-50 px-4 py-3 text-[15px] font-semibold text-brand-700">
                                All {item.label}
                              </Link>
                              {item.children.map((c) => (
                                <Link key={c.href} href={c.href} className="rounded-xl px-4 py-3 text-[15px] text-ink-soft active:bg-brand-50">
                                  {c.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link href={item.href} className="block py-4 font-display text-xl font-semibold">
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <div className="mt-6 grid gap-3">
                <Link href="/request-sample" className="btn-primary w-full">Get a Quote / Free Sample</Link>
                <Link href="/contact" className="btn-ghost w-full">Contact Us</Link>
              </div>
              <div className="mt-8 space-y-2 text-[15px] text-ink-soft">
                <a href={company.phoneHref} className="flex items-center gap-2"><Phone className="h-4 w-4 text-brand-600" /> {company.phone}</a>
                <a href={`mailto:${company.email}`} className="flex items-center gap-2"><Mail className="h-4 w-4 text-brand-600" /> {company.email}</a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
