import { useEffect, useRef } from "react";
import { captureEvent } from "@/lib/posthog";

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
    gtag?: (...args: unknown[]) => void;
  }
}

type TallyEmbedProps = {
  context?: "general" | "invoice" | "business" | "sharing";
};

export const TallyEmbed = ({ context = "general" }: TallyEmbedProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

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
      window.gtag?.("event", "generate_lead", {
        form_context: context,
        method: "tally",
      });
      captureEvent("lead_form_submitted", { context });
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [context]);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    let captured = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!captured && entry.isIntersecting && entry.intersectionRatio >= 0.25) {
          captured = true;
          captureEvent("lead_form_viewed", { context });
          observer.disconnect();
        }
      },
      { threshold: [0.25] },
    );
    observer.observe(iframe);
    return () => observer.disconnect();
  }, [context]);

  return (
    <iframe
      ref={iframeRef}
      data-tally-src={`https://tally.so/embed/KYJ8zD?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&utm_source=nepreplacejme.cz&utm_content=${context}`}
      loading="lazy"
      width="100%"
      height="648"
      frameBorder={0}
      marginHeight={0}
      marginWidth={0}
      title={context === "sharing" ? "Nepřeplácejme – poptávka sdílení elektřiny" : "Nepřeplácejme – kontrola faktury"}
      style={{ border: 0, display: "block", width: "100%", touchAction: "pan-y" }}
    />
  );
};

export default TallyEmbed;
