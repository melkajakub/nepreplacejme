import { ArrowRight, BarChart3, Building2, Check, FileSpreadsheet, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import TransparentPricing from "@/components/TransparentPricing";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import TallyEmbed from "@/components/TallyEmbed";
import { captureEvent } from "@/lib/posthog";
import { usePageMeta } from "@/hooks/use-page-meta";

const BusinessEnergy = () => {
  usePageMeta(
    "Elektřina a plyn pro firmy a obce | Nepřeplácejme.cz",
    "Kontrola smluv, soutěž dodavatelů, individuální nabídky a správa termínů pro firmy, podnikatele a obce. Klient za službu nic neplatí.",
    "/energie-pro-firmy",
  );

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="px-4 py-16 md:py-24">
          <div className="container mx-auto max-w-6xl grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-sm font-medium text-primary mb-6">
                <Building2 className="h-4 w-4" /> Pro firmy, podnikatele a obce
              </span>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
                Prověřím vaše energie a připravím konkrétní nabídku podle spotřeby.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
                U menších odběrů porovnám dostupné ceníky. U větších spotřeb poptám individuální podmínky a pomohu pohlídat fixace i administrativu.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button size="lg" asChild>
                  <a href="#formular" onClick={() => captureEvent("business_cta_clicked", { location: "hero" })}>
                    Nechat připravit nabídku <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="mailto:info@nepreplacejme.cz?subject=Energie pro firmu nebo obec" onClick={() => captureEvent("email_clicked", { page: "business" })}>
                    Napsat e-mailem
                  </a>
                </Button>
              </div>
              <ul className="mt-7 space-y-2 text-sm text-muted-foreground">
                {["Služba bez poplatku od klienta", "Jedno i více odběrných míst", "Rozhodnutí a podpis zůstávají na vás"].map((item) => (
                  <li key={item} className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-[hsl(220_20%_98%)] p-7 md:p-9">
              <h2 className="text-xl font-bold mb-6">Co pro vás zajistím</h2>
              <div className="space-y-5">
                {[
                  { icon: FileSpreadsheet, title: "Kontrola současných smluv", text: "Cena, fixace, prolongace i vhodnost nastavení jednotlivých míst." },
                  { icon: BarChart3, title: "Srovnání a individuální nabídky", text: "Postup odpovídající velikosti a charakteru vašeho odběru." },
                  { icon: ShieldCheck, title: "Dlouhodobé hlídání", text: "Termíny a trh řešíme včas, ne až po automatickém prodloužení." },
                ].map(({ icon: Icon, title, text }) => (
                  <div key={title} className="flex gap-4">
                    <div className="h-10 w-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center"><Icon className="h-5 w-5 text-primary" /></div>
                    <div><h3 className="font-semibold">{title}</h3><p className="text-sm text-muted-foreground mt-1 leading-relaxed">{text}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 md:py-20 bg-[hsl(220_20%_98%)]">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold">Od podkladů ke konkrétnímu rozhodnutí</h2>
            </div>
            <ol className="grid md:grid-cols-3 gap-5">
              {[
                ["1", "Pošlete podklady", "Vyúčtování, roční spotřebu a základní informace o smlouvě."],
                ["2", "Prověřím možnosti", "Podívám se na současné nastavení a získám srovnatelné nabídky."],
                ["3", "Vy rozhodnete", "Dostanete přehledné podmínky. Pokud dávají smysl, pomohu s administrativou."],
              ].map(([number, title, text]) => (
                <li key={number} className="rounded-xl border border-border bg-background p-6">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold mb-4">{number}</span>
                  <h3 className="font-semibold text-lg mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <TransparentPricing />

        <section id="formular" className="px-4 py-16 md:py-20 bg-[hsl(220_20%_98%)] scroll-mt-24">
          <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Nezávazná poptávka</span>
              <h2 className="text-2xl md:text-4xl font-bold">Pošlete poslední vyúčtování</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Do zprávy připište počet odběrných míst, přibližnou roční spotřebu a termín konce smlouvy, pokud ho znáte.
              </p>
              <p className="text-sm text-muted-foreground">Nemáte dokument po ruce? Napište na <a className="text-primary underline" href="mailto:info@nepreplacejme.cz">info@nepreplacejme.cz</a>.</p>
            </div>
            <div className="bg-background border border-border rounded-lg p-2 md:p-4 shadow-sm overflow-hidden"><TallyEmbed context="business" /></div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default BusinessEnergy;
