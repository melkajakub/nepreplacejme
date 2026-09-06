import { ArrowRight, Check, FileSearch, Mail, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import ClientResults from "@/components/ClientResults";
import TransparentPricing from "@/components/TransparentPricing";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import TallyEmbed from "@/components/TallyEmbed";
import { captureEvent } from "@/lib/posthog";
import { usePageMeta } from "@/hooks/use-page-meta";

const InvoiceCheck = () => {
  usePageMeta(
    "Kontrola vyúčtování elektřiny a plynu zdarma | Nepřeplácejme.cz",
    "Pošlete vyúčtování elektřiny nebo plynu. Zdarma prověřím cenu, smlouvu i distribuční sazbu a řeknu vám, zda má změna smysl.",
    "/kontrola-vyuctovani",
  );

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="px-4 py-16 md:py-24">
          <div className="container mx-auto max-w-5xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-sm font-medium text-primary mb-6">
              <FileSearch className="h-4 w-4" /> Kontrola elektřiny a plynu zdarma
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight tracking-tight max-w-4xl mx-auto">
              Pošlete vyúčtování. Zjistím, jestli za energie zbytečně nepřeplácíte.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Osobně prověřím cenu, stálé platby, smluvní podmínky i distribuční sazbu. Pokud máte dobrou smlouvu, řeknu vám, že není důvod ji měnit.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">
              <Button size="lg" asChild className="text-base px-8">
                <a href="#formular" onClick={() => captureEvent("invoice_check_cta_clicked", { location: "hero" })}>
                  Zkontrolovat vyúčtování zdarma <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8">
                <a href="mailto:info@nepreplacejme.cz?subject=Kontrola vyúčtování" onClick={() => captureEvent("email_clicked", { page: "invoice_check" })}>
                  Poslat e-mailem
                </a>
              </Button>
            </div>
            <ul className="flex flex-col sm:flex-row flex-wrap justify-center gap-x-8 gap-y-2 mt-7 text-sm text-muted-foreground">
              {["0 Kč pro klienta", "Bez telefonního nátlaku", "Nic nepodepisujete přes web"].map((item) => (
                <li key={item} className="flex items-center justify-center gap-2"><Check className="h-4 w-4 text-primary" />{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <ClientResults compact />

        <section className="px-4 py-16 md:py-20">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold">Co přesně zkontroluji</h2>
              <p className="text-muted-foreground mt-3">Nejde jen o cenu za jednu MWh.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                ["Cena a stálé platby", "Porovnám obchodní cenu i pravidelné poplatky se spolupracujícími dodavateli."],
                ["Smlouva a fixace", "Prověřím délku závazku, automatické prodloužení a vhodný okamžik pro řešení nabídky."],
                ["Distribuční sazba", "Zkontroluji, zda sazba a nastavení odběrného místa odpovídají skutečnému využití."],
              ].map(([title, text]) => (
                <article key={title} className="rounded-xl border border-border p-6 shadow-sm">
                  <ShieldCheck className="h-6 w-6 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <TransparentPricing />

        <section id="formular" className="px-4 py-16 md:py-20 bg-[hsl(220_20%_98%)] scroll-mt-24">
          <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div className="space-y-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Nezávazná kontrola</span>
              <h2 className="text-2xl md:text-4xl font-bold">Nahrajte poslední vyúčtování</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Stačí PDF nebo fotografie. Pokud dokument nemáte po ruce, napište mi základní údaje do zprávy nebo e-mailem.
              </p>
              <div className="flex gap-3 text-sm text-muted-foreground">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>Komunikuji především e-mailem, takže máte všechno písemně a čas se v klidu rozhodnout.</span>
              </div>
            </div>
            <div className="bg-background border border-border rounded-lg p-2 md:p-4 shadow-sm overflow-hidden">
              <TallyEmbed context="invoice" />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default InvoiceCheck;
