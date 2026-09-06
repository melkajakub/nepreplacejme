import { Check, HandCoins, Scale, ShieldCheck } from "lucide-react";

type TransparentPricingProps = {
  sharing?: boolean;
};

export const TransparentPricing = ({ sharing = false }: TransparentPricingProps) => (
  <section className="px-4 py-16 md:py-20">
    <div className="container mx-auto max-w-5xl rounded-2xl bg-primary text-primary-foreground p-7 md:p-10 shadow-soft">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-start">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/70">Bez skrytých poplatků</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-4">Kolik vás moje pomoc stojí?</h2>
          <p className="text-lg font-semibold">Jako klient mi neplatíte vůbec nic.</p>
          <p className="text-primary-foreground/80 leading-relaxed mt-3">
            {sharing
              ? "U sdílení elektřiny je moje odměna podílem z rozdílu mezi cenou pro výrobce a cenou, kterou platí odběratel. Podmínky znáte předem."
              : "Pokud si na základě nabídky zvolíte nového dodavatele, dostanu provizi od dodavatele. Kontrola, srovnání i vyřízení změny jsou pro vás bez poplatku."}
          </p>
        </div>
        <ul className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: HandCoins, title: "0 Kč od klienta", text: "Nevystavuji vám fakturu za kontrolu ani sjednání." },
            { icon: Scale, title: "Rozhodnutí je na vás", text: "Pokud nabídka nedává smysl, nic měnit nemusíte." },
            { icon: ShieldCheck, title: "Smlouva přímo", text: "Smlouvu uzavíráte přímo s licencovaným dodavatelem." },
            { icon: Check, title: "Bez telefonního tlaku", text: "Výsledek můžete v klidu posoudit písemně." },
          ].map(({ icon: Icon, title, text }) => (
            <li key={title} className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/10 p-4">
              <Icon className="h-5 w-5 mb-3" aria-hidden="true" />
              <p className="font-semibold mb-1">{title}</p>
              <p className="text-sm text-primary-foreground/75 leading-relaxed">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default TransparentPricing;
