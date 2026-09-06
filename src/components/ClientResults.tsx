import { ArrowDown, CheckCircle2, Gauge, PiggyBank } from "lucide-react";

const results = [
  {
    name: "Blažena",
    icon: ArrowDown,
    headline: "Plyn: 1 700 → 940 Kč/MWh bez DPH",
    detail: "Při spotřebě 17 MWh odpovídá rozdíl v ceně plynu přibližně 12 920 Kč za rok bez DPH.",
  },
  {
    name: "Milan",
    icon: PiggyBank,
    headline: "Elektřina: 3 950 → 2 400 Kč/MWh bez DPH",
    detail: "Při spotřebě kolem 4 MWh odpovídá rozdíl v ceně elektřiny přibližně 6 200 Kč za rok bez DPH.",
  },
  {
    name: "Lukáš",
    icon: Gauge,
    headline: "Úspora přes 1 000 Kč ročně",
    detail: "U spotřeby pod 1 MWh pomohla změna dodavatele i distribuční sazby.",
  },
];

type ClientResultsProps = {
  compact?: boolean;
};

export const ClientResults = ({ compact = false }: ClientResultsProps) => (
  <section className={`${compact ? "py-12" : "py-16 md:py-20"} px-4 bg-[hsl(220_20%_98%)]`}>
    <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-10 space-y-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Skutečné příklady</span>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Kolik může udělat kontrola podmínek</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Výsledky vždy závisí na smlouvě, spotřebě a aktuální nabídce trhu. Tohle jsou konkrétní případy klientů.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {results.map(({ name, icon: Icon, headline, detail }) => (
          <article key={name} className="rounded-xl border border-border bg-background p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4 mb-5">
              <div className="h-11 w-11 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                Vyřešený případ
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-1">{name}</p>
            <h3 className="text-xl font-bold text-foreground mb-3">{headline}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{detail}</p>
          </article>
        ))}
      </div>
      <p className="text-xs text-muted-foreground text-center mt-5">
        U Blaženy a Milana jde o rozdíl v obchodní ceně za MWh při uvedené roční spotřebě,
        bez započtení případných změn stálých plateb a regulovaných položek.
        Výsledky jednotlivých klientů nejsou příslibem stejné úspory v jiném odběrném místě.
      </p>
    </div>
  </section>
);

export default ClientResults;
