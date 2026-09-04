import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  BatteryCharging,
  Building2,
  Check,
  Factory,
  FileCheck2,
  Gauge,
  Handshake,
  HelpCircle,
  Home,
  Network,
  PlugZap,
  Send,
  ShieldCheck,
  Sun,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import TallyEmbed from "@/components/TallyEmbed";
import { captureEvent } from "@/lib/posthog";

const producerBenefits = [
  "Lepší využití volné výroby a přetoků",
  "Odběratele nemusíte hledat sami",
  "Posouzení podle skutečných dat o výrobě",
  "Koordinace smluvního a administrativního procesu",
];

const consumerBenefits = [
  "Část spotřeby z konkrétního výrobního zdroje",
  "Předem známé podmínky sdílené části elektřiny",
  "Běžná dodávka dál kryje elektřinu, kterou sdílení nepokryje",
  "Posouzení podle skutečného průběhu spotřeby",
];

const faqs = [
  {
    question: "Musím kvůli sdílení změnit dodavatele?",
    answer:
      "Záleží na konkrétním modelu a smluvních podmínkách. Běžný dodavatel zpravidla dál zajišťuje část spotřeby, kterou sdílení nepokryje. Přesný postup ověřím před zapojením.",
  },
  {
    question: "Pokryje sdílení celou moji spotřebu?",
    answer:
      "Obvykle ne. Výsledek závisí na tom, kolik elektřiny výrobce vyrobí ve stejných časových intervalech, ve kterých ji odběrné místo spotřebovává.",
  },
  {
    question: "Co se stane, když výrobce nevyrábí?",
    answer:
      "Odběrné místo nezůstane bez elektřiny. Potřebnou dodávku dál zajistí jeho běžný dodavatel podle platné smlouvy.",
  },
  {
    question: "Co se stane s výrobou, která se nenasdílí?",
    answer:
      "Nenapárovaná část se vypořádá podle stávajícího režimu výrobce a jeho smlouvy o výkupu nebo převzetí odpovědnosti za odchylku.",
  },
  {
    question: "Je nutné budovat nový kabel?",
    answer:
      "Ne. Sdílení probíhá prostřednictvím stávající distribuční sítě a vyhodnocuje se z naměřených dat.",
  },
  {
    question: "Je sdílení vhodné pro firmy a obce?",
    answer:
      "Ano. Zajímavá bývají zejména odběrná místa s pravidelnou denní spotřebou nebo větší počet míst pod jedním vlastníkem či správcem.",
  },
  {
    question: "Mohu sdílet elektřinu z bioplynové stanice?",
    answer:
      "Může jít o velmi vhodný zdroj díky stabilnější výrobě. Vždy je ale potřeba individuálně posoudit podporu zdroje, stávající smlouvy a dostupná odběrná místa.",
  },
  {
    question: "Ovlivní sdílení zelený bonus nebo jinou podporu?",
    answer:
      "Bez znalosti konkrétního režimu podpory a smluv výrobce to nelze spolehlivě určit. Před zapojením proto tyto podmínky individuálně ověříme.",
  },
];

const Sharing = () => {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = description?.content;
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const previousCanonical = canonical?.href;
    const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    const ogDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    const ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    const previousOgTitle = ogTitle?.content;
    const previousOgDescription = ogDescription?.content;
    const previousOgUrl = ogUrl?.content;
    const pageTitle = "Sdílení elektřiny pro výrobce i odběratele | Nepřeplácejme.cz";
    const pageDescription =
      "Propojení výrobců elektřiny s domácnostmi, firmami a obcemi. Prověření výroby, spotřeby a zajištění celého procesu sdílení.";

    document.title = pageTitle;
    if (description) {
      description.content = pageDescription;
    }
    if (canonical) canonical.href = "https://nepreplacejme.cz/sdileni-elektriny";
    if (ogTitle) ogTitle.content = pageTitle;
    if (ogDescription) ogDescription.content = pageDescription;
    if (ogUrl) ogUrl.content = "https://nepreplacejme.cz/sdileni-elektriny";

    return () => {
      document.title = previousTitle;
      if (description && previousDescription) description.content = previousDescription;
      if (canonical && previousCanonical) canonical.href = previousCanonical;
      if (ogTitle && previousOgTitle) ogTitle.content = previousOgTitle;
      if (ogDescription && previousOgDescription) ogDescription.content = previousOgDescription;
      if (ogUrl && previousOgUrl) ogUrl.content = previousOgUrl;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="px-4 py-16 md:py-24 overflow-hidden">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-12 items-center">
              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
                  <Network className="h-4 w-4" />
                  Sdílení elektřiny
                </span>
                <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight tracking-tight">
                  Propojuji výrobce elektřiny s domácnostmi, firmami a obcemi
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                  Máte volnou výrobu, nebo naopak hledáte možnost výhodnějšího odběru?
                  Pomohu prověřit data, najít vhodné zapojení a zajistit další postup
                  se spolupracujícími odbornými partnery.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" asChild>
                    <a href="#vyrobce" onClick={() => captureEvent("sharing_role_selected", { role: "producer", location: "sharing_hero" })}>
                      <Sun className="mr-2 h-5 w-5" />
                      Mám výrobnu
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="#odberatel" onClick={() => captureEvent("sharing_role_selected", { role: "consumer", location: "sharing_hero" })}>
                      <PlugZap className="mr-2 h-5 w-5" />
                      Chci elektřinu odebírat
                    </a>
                  </Button>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-[hsl(220_20%_98%)] p-6 md:p-8 shadow-soft">
                <div className="grid gap-4">
                  {[
                    { icon: Factory, label: "Výrobce", detail: "volná výroba" },
                    { icon: BarChart3, label: "Vyhodnocení", detail: "výroba a spotřeba ve stejném čase" },
                    { icon: Building2, label: "Odběrné místo", detail: "skutečně přidělená elektřina" },
                  ].map(({ icon: Icon, label, detail }, index) => (
                    <div key={label}>
                      <div className="flex items-center gap-4 rounded-xl border border-border bg-background p-4">
                        <div className="h-11 w-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{label}</p>
                          <p className="text-sm text-muted-foreground">{detail}</p>
                        </div>
                      </div>
                      {index < 2 && <ArrowRight className="h-5 w-5 text-primary/50 rotate-90 mx-auto my-2" aria-hidden="true" />}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mt-5">
                  Nejde o přímý kabel mezi dvěma místy. Elektřina se přenáší veřejnou
                  distribuční sítí a sdílené množství se vyhodnotí z naměřených dat.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 md:py-20 bg-[hsl(220_20%_98%)]">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Jak sdílení elektřiny funguje</h2>
              <p className="text-muted-foreground leading-relaxed">
                Rozhodující není pouze roční počet MWh. Důležitý je časový souběh výroby a spotřeby.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: Zap, title: "Výrobce dodává", text: "Nevyužitou část výroby dodá do distribuční sítě." },
                { icon: Gauge, title: "Odběratel spotřebovává", text: "Ve stejném čase odebírá elektřinu běžným způsobem." },
                { icon: BarChart3, title: "Systém vyhodnotí", text: "Naměřená data určí skutečně nasdílené množství." },
                { icon: FileCheck2, title: "Proběhne vyúčtování", text: "Sdílená část se vypořádá podle sjednaných pravidel." },
              ].map(({ icon: Icon, title, text }, index) => (
                <article key={title} className="relative rounded-xl border border-border bg-background p-6 shadow-sm">
                  <span className="absolute -top-3 -left-2 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">{index + 1}</span>
                  <Icon className="h-6 w-6 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 rounded-xl border border-primary/15 bg-primary/5 p-5 md:p-6 flex gap-4">
              <HelpCircle className="h-6 w-6 text-primary shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Co je důležité vědět</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Skutečný přínos nelze přesně určit jen porovnáním ročního přebytku
                  s roční spotřebou. Posuzuji proto dostupná intervalová data a charakter provozu.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="vyrobce" className="px-4 py-16 md:py-20 scroll-mt-24">
          <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Pro výrobce</span>
              <h2 className="text-2xl md:text-4xl font-bold text-foreground leading-tight">
                Máte výrobnu a chcete elektřinu lépe využít?
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Máte fotovoltaickou elektrárnu, bioplynovou stanici nebo jiný zdroj
                a část výroby dodáváte do sítě? Prověřím možnosti jejího využití
                prostřednictvím sdílení a pomohu najít vhodná odběrná místa.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To, co se v daném čase nenasdílí, se dále vypořádává podle podmínek
                vašeho současného výkupu. U podporovaných zdrojů a zelených bonusů
                je vždy nutné individuální posouzení.
              </p>
              <Button size="lg" asChild>
                <a href="#poptavka" onClick={() => captureEvent("sharing_inquiry_started", { role: "producer" })}>
                  Nechat posoudit výrobnu
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="rounded-2xl border border-border bg-background p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <Sun className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Co můžete získat</h3>
              </div>
              <ul className="space-y-4">
                {producerBenefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-sm md:text-base text-muted-foreground">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="border-t border-border mt-6 pt-6">
                <p className="font-semibold text-foreground mb-2">Pro první posouzení pomůže znát:</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  typ a výkon zdroje, roční výrobu, vlastní spotřebu, objem přetoků,
                  současný způsob výkupu a případný režim podpory.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="odberatel" className="px-4 py-16 md:py-20 bg-[hsl(220_20%_98%)] scroll-mt-24">
          <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-10 items-start">
            <div className="lg:order-2 space-y-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Pro odběratele</span>
              <h2 className="text-2xl md:text-4xl font-bold text-foreground leading-tight">
                Chcete část spotřeby pokrýt sdílenou elektřinou?
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Jste domácnost, firma nebo obec? Prověřím váš odběrový profil
                a možnosti zapojení. Sdílení doplní běžnou dodávku a nemusí pokrýt
                celou spotřebu.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Když výrobce nevyrábí nebo sdílení nestačí, odběrné místo nezůstane
                bez elektřiny. Zbývající dodávku dál zajišťuje váš běžný dodavatel.
              </p>
              <Button size="lg" asChild>
                <a href="#poptavka" onClick={() => captureEvent("sharing_inquiry_started", { role: "consumer" })}>
                  Prověřit odběrné místo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="lg:order-1 rounded-2xl border border-border bg-background p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <BatteryCharging className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Co můžete získat</h3>
              </div>
              <ul className="space-y-4">
                {consumerBenefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-sm md:text-base text-muted-foreground">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="border-t border-border mt-6 pt-6">
                <p className="font-semibold text-foreground mb-2">Pro první posouzení pomůže znát:</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  počet odběrných míst, roční spotřebu, charakter provozu a obvyklou
                  dobu nejvyšší spotřeby. Ideální jsou také intervalové údaje.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 md:py-20">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Pro koho to dává největší smysl</h2>
              <p className="text-muted-foreground">Každý případ posuzuji podle skutečné výroby a spotřeby.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: Factory, title: "Výrobce s přebytky", text: "Chce nabídnout výrobu, kterou sám nevyužije." },
                { icon: Building2, title: "Firma s denním provozem", text: "Spotřebovává v době, kdy zdroje často vyrábějí." },
                { icon: Users, title: "Obec s více budovami", text: "Řeší úřad, školu, školku nebo sportoviště." },
                { icon: Home, title: "Skupina domácností", text: "Chce využít výrobu rodiny nebo jiného výrobce." },
              ].map(({ icon: Icon, title, text }) => (
                <article key={title} className="rounded-xl border border-border p-6 shadow-sm">
                  <Icon className="h-6 w-6 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-5xl">
            <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-10 items-start">
              <div>
                <Handshake className="h-8 w-8 mb-5" />
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Od prvního posouzení až po zapojení</h2>
                <p className="text-primary-foreground/80 leading-relaxed">
                  Pokud se ukáže, že vám sdílení nedává smysl, řeknu to na rovinu
                  a můžeme prověřit jiné možnosti úspory.
                </p>
              </div>
              <ol className="grid sm:grid-cols-2 gap-4">
                {[
                  "Vysvětlíme si váš záměr",
                  "Získám údaje o výrobě nebo spotřebě",
                  "Posoudíme potenciál sdílení",
                  "Najdeme vhodné zapojení a protistrany",
                  "Odborný partner připraví smlouvy a administrativu",
                  "Sdílení se vyhodnocuje podle skutečných dat",
                ].map((step, index) => (
                  <li key={step} className="flex gap-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/15 p-4 text-sm leading-relaxed">
                    <span className="font-bold">{index + 1}.</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 md:py-20">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-10 space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Časté otázky</h2>
              <p className="text-muted-foreground">Nejdůležitější věci před prvním posouzením.</p>
            </div>
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map(({ question, answer }, index) => (
                <AccordionItem key={question} value={`faq-${index}`} className="rounded-lg border border-border px-5 bg-background">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">{question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section id="poptavka" className="px-4 py-16 md:py-20 bg-[hsl(220_20%_98%)] scroll-mt-24">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
              <div className="space-y-6">
                <div className="space-y-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">Nezávazné posouzení</span>
                  <h2 className="text-2xl md:text-4xl font-bold text-foreground">Zjistěte, zda vám sdílení dává smysl</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Ve formuláři napište, zda máte výrobnu, chcete elektřinu odebírat,
                    nebo řešíte obě strany. Přidejte základní údaje o roční výrobě
                    či spotřebě a já se ozvu s dalším postupem.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-border bg-background p-5">
                    <Sun className="h-5 w-5 text-primary mb-3" />
                    <p className="font-semibold text-foreground mb-1">Jsem výrobce</p>
                    <p className="text-sm text-muted-foreground">Uveďte typ zdroje, výkon, výrobu a přetoky.</p>
                  </div>
                  <div className="rounded-xl border border-border bg-background p-5">
                    <PlugZap className="h-5 w-5 text-primary mb-3" />
                    <p className="font-semibold text-foreground mb-1">Jsem odběratel</p>
                    <p className="text-sm text-muted-foreground">Uveďte počet míst, spotřebu a dobu provozu.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
                  Odesláním formuláře nevzniká žádná smlouva ani závazek.
                </div>
                <Button variant="outline" asChild>
                  <a href="mailto:info@nepreplacejme.cz?subject=Sdílení elektřiny – nezávazná poptávka" onClick={() => captureEvent("sharing_email_clicked")}>
                    <Send className="mr-2 h-4 w-4" />
                    Napsat přímo e-mailem
                  </a>
                </Button>
              </div>
              <div className="bg-background border border-border rounded-lg p-2 md:p-4 shadow-sm overflow-hidden">
                <TallyEmbed context="sharing" />
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="container mx-auto max-w-5xl rounded-2xl border border-primary/15 bg-primary/5 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">Řešíte zároveň smlouvu na elektřinu nebo plyn?</h2>
              <p className="text-muted-foreground">Podívám se na sdílení i běžnou dodávku jako na jeden celek.</p>
            </div>
            <Button variant="outline" asChild className="shrink-0">
              <Link to="/#formular">Probrat všechny možnosti</Link>
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Sharing;
