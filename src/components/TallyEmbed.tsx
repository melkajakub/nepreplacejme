import { useEffect } from "react";

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

export const TallyEmbed = () => {
  useEffect(() => {
    const src = "https://tally.so/widgets/embed.js";
    const load = () => window.Tally?.loadEmbeds();

    if (document.querySelector(`script[src="${src}"]`)) {
      load();
      return;
    }
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.onload = load;
    s.onerror = load;
    document.body.appendChild(s);
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
