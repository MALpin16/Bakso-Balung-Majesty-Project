const GA_ID = import.meta.env.VITE_GA_ID as string | undefined;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function initGA() {
  if (!GA_ID) return;
  if (window.gtag) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  const gtag = (...args: unknown[]) => {
    window.dataLayer!.push(args);
  };
  window.gtag = gtag;

  // use local gtag reference to avoid 'possibly undefined' error
  gtag("js", new Date());
  gtag("config", GA_ID, { send_page_view: false });
}

export function trackPage(path?: string) {
  const page_path = path ?? location.pathname + location.search + location.hash;
  window.gtag?.("event", "page_view", { page_path });
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  window.gtag?.("event", name, params || {});
}

export default { initGA, trackPage, trackEvent };
