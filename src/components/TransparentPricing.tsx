import { Check, HandCoins, Scale, ShieldCheck } from "lucide-react";

type TransparentPricingProps = {
  sharing?: boolean;
};

export const TransparentPricing = ({ sharing = false }: TransparentPricingProps) => (
  <section className="px-4 py-16 md:py-20">
    <div className="container mx-auto max-w-5xl rounded-2xl bg-primary text-primary-foreground p-7 md:p-10 shadow-soft">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-start">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/70">{sharing ? "Podmínky zapojení" : "Bezplatná kontrola"}</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-4">{sharing ? "Přehledné podmínky sdílení" : "Kontrola vyúčtování je zdarma a nezávazná."}</h2>
          <p className="text-lg font-semibold">{sharing ? "Nejdříve posouzení, potom rozhodnutí." : "Stejně tak pomoc se změnou dodavatele."}</p>
          <p className="text-primary-foreground/80 leading-relaxed mt-3">
            {sharing
              ? "Před zapojením projdeme cenu sdílené elektřiny, případné poplatky za zapojení a správu i smluvní podmínky. Přínos posoudíme podle vaší výroby nebo spotřeby."
              : "Dostanete srovnání dostupných nabídek a návrh dalšího postupu. Zvolené řešení vám pomohu vyřídit."}
          </p>
        </div>
        <ul className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: HandCoins, title: sharing ? "Cena a náklady předem" : "Kontrola zdarma", text: sharing ? "Před rozhodnutím získáte přehled ceny a případných souvisejících poplatků." : "Za kontrolu vyúčtování ani pomoc se změnou dodavatele neplatíte." },
            { icon: Scale, title: "Rozhodnutí je na vás", text: "Vyberete si řešení podle předložených nabídek a podmínek." },
            { icon: ShieldCheck, title: sharing ? "Jasná pravidla zapojení" : "Smlouva s dodavatelem", text: sharing ? "Před podpisem projdeme, s kým smlouvy uzavíráte a co upravují." : "Smlouvu o dodávce energií uzavíráte s vybraným dodavatelem." },
            { icon: Check, title: "Prostor na rozhodnutí", text: "Podklady si můžete projít a doptat se na to, co vás zajímá." },
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
