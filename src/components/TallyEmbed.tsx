import { useEffect } from "react";

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
    gtag?: (...args: unknown[]) => void;
  }
}

export const TallyEmbed = () => {
  useEffect(() => {
    const src = "https://tally.so/widgets/embed.js";
    const load = () => window.Tally?.loadEmbeds();

    if (document.querySelector(`script[src="${src}"]`)) {
      load();
    } else {
      const s = document.createElement("script");
      s.src = src;
      s.async = true;
      s.onload = load;
      s.onerror = load;
      document.body.appendChild(s);
    }

    const onMessage = (e: MessageEvent) => {
      if (typeof e.data !== "string") return;
      if (!e.data.includes("Tally.FormSubmitted")) return;
      window.gtag?.("event", "conversion", {
        send_to: "AW-18205815889/SUBMIT_LEAD_FORM",
      });
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <iframe
      data-tally-src="https://tally.so/embed/KYJ8zD?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
      loading="lazy"
      width="100%"
      height="648"
      frameBorder={0}
      marginHeight={0}
      marginWidth={0}
      title="Nepřeplácejme – kontrola faktury"
      style={{ border: 0, display: "block", width: "100%", touchAction: "pan-y" }}
    />
  );
};

export default TallyEmbed;
