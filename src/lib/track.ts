// Tiny analytics helper — sends GA4 events if gtag is loaded, otherwise no-ops.
type Params = Record<string, string | number | undefined>;
export function track(event: string, params: Params = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { gtag?: (...a: unknown[]) => void; dataLayer?: unknown[] };
  if (w.gtag) w.gtag("event", event, params);
  else (w.dataLayer ||= []).push({ event, ...params });
}

// Capture first-touch attribution so every lead records where it came from.
export function captureAttribution() {
  if (typeof window === "undefined") return;
  try {
    const url = new URL(window.location.href);
    const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"];
    const found: Record<string, string> = {};
    keys.forEach((k) => {
      const v = url.searchParams.get(k);
      if (v) found[k] = v;
    });
    if (!sessionStorage.getItem("enl_attr")) {
      sessionStorage.setItem(
        "enl_attr",
        JSON.stringify({ ...found, landing: url.pathname, referrer: document.referrer || "direct" })
      );
    }
  } catch {}
}

export function getAttribution(): Record<string, string> {
  try {
    return JSON.parse(sessionStorage.getItem("enl_attr") || "{}");
  } catch {
    return {};
  }
}
