import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Check,
  MessageCircle,
  UserCheck,
  FileSearch,
  KeyRound,
  HardHat,
  ArrowRight,
  Home,
  Building2,
  Landmark,
  Handshake,
  Ban,
  FileText,
  BarChart3,
  CheckCircle2,
  Sun,
  PlugZap,
  Network,
} from "lucide-react";

import { TallyEmbed } from "@/components/TallyEmbed";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ClientResults from "@/components/ClientResults";
import TransparentPricing from "@/components/TransparentPricing";
import { captureEvent } from "@/lib/posthog";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto max-w-5xl text-center space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight">
              Zjistěte, jestli vaše cena energií dává smysl.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Pošlete mi vyúčtování nebo základní údaje o spotřebě a obchodní ceně. Porovnám dostupné nabídky a ukážu vám, jestli a kolik můžete ušetřit. Bez vyúčtování půjde nejprve o orientační posouzení.
            </p>

            {/* Audience badges */}
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { icon: Home, label: "Pro domácnosti" },
                { icon: Building2, label: "Pro firmy a podnikatele" },
                { icon: Landmark, label: "Pro obce a samosprávy" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-sm font-medium text-primary"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </span>
              ))}
            </div>

            {/* Social proof row */}
            <ul className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>Osobní posouzení vašich podkladů</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>Srozumitelná komunikace, prostor na rozhodnutí</span>
              </li>
              <li className="flex items-center gap-2">
                <UserCheck className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>Srovnání nabídek spolupracujících dodavatelů</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Button variant="default" size="lg" className="text-base px-8 w-full sm:w-auto" asChild>
                <a href="#formular" onClick={() => captureEvent("invoice_check_cta_clicked", { location: "homepage_hero" })}>
                  <FileText className="mr-2 h-4 w-4" />
                  Poslat vyúčtování nebo údaje
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8 w-full sm:w-auto" asChild>
                <a href="#jak-to-funguje">
                  Jak to funguje
                </a>
              </Button>
            </div>

            <p className="text-base text-primary font-medium">
              Posouzení vyúčtování i zaslaných údajů je zdarma a nezávazné.
            </p>

          </div>
        </section>

        {/* Long-term care: a clear benefit beyond the initial comparison */}
        <section className="px-4 pb-10 md:pb-14">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-7 rounded-2xl border border-primary/15 bg-primary/5 p-6 md:p-9">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Handshake className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-snug">
                  Moje práce podpisem smlouvy nekončí.
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Nejde jen o jednorázové srovnání. Podle naší dohody pohlídám konec fixace, budu sledovat dostupné nabídky na trhu a včas se ozvu, abychom další období řešili s předstihem. Vy si tak nemusíte sami hlídat každý termín.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Primary action: easy hand-off after a conversation */}
        <section id="formular" className="py-12 md:py-16 px-4 scroll-mt-24 bg-[hsl(220_20%_98%)]">
          <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
            <div className="space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">Nezávazné posouzení</span>
                <h2 className="text-2xl md:text-4xl font-bold text-foreground">Vyúčtování, nebo pár údajů? Začít můžeme obojím.</h2>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  Vyúčtování umožní přesnější srovnání. Pokud máte jen základní údaje, připravím nejprve orientační posouzení a případně se doptám na podrobnosti.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="rounded-xl border border-border bg-background p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <FileText className="h-5 w-5 text-primary shrink-0" />
                    <h3 className="font-semibold text-lg text-foreground">Mám vyúčtování</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Nahrajte PDF nebo fotografii posledního vyúčtování elektřiny či plynu. Ověřím z něj spotřebu, účtované ceny a další položky. Pro aktuální nabídku může být potřeba také platný ceník nebo smlouva.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-background p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <BarChart3 className="h-5 w-5 text-primary shrink-0" />
                    <h3 className="font-semibold text-lg text-foreground">Své podmínky znám</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Napište roční spotřebu, obchodní cenu elektřiny nebo plynu v Kč/MWh (ideálně bez DPH), u elektřiny distribuční sazbu a konec smlouvy. U dvoutarifu uveďte ceny vysokého a nízkého tarifu (VT/NT); hodí se i stálý měsíční plat. Pokud znáte jen cenu s DPH nebo celkovou částku, napište, co zahrnuje. Chybějící údaje spolu upřesníme.
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Aby srovnání dávalo smysl:</strong> obchodní cenu za energii nelze zaměňovat s celkovou cenou včetně distribuce a daní. Porovnávám stejné období, spotřebu a ceny na stejném základě; stálé a regulované platby posuzuji zvlášť.
              </p>
              <div className="rounded-xl border border-primary/20 bg-background p-5 space-y-2">
                <h3 className="font-semibold text-foreground">Smlouva končí až za několik měsíců?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Někdy lze sjednat novou nabídku s předstihem a zahájením dodávek až po skončení stávající smlouvy. Záleží na dodavateli a konkrétních podmínkách. Podívám se, jestli to pro vás dává smysl – ceny se mohou vyvíjet oběma směry.
                </p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Posouzení je zdarma a k žádné změně vás nezavazuje. Pokud pro vás teď lepší řešení nenajdu, řeknu vám to.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center overflow-hidden shrink-0">
                  <img
                    src="/lovable-uploads/dcd1b256-2e06-4aca-963c-251ffd8dee20.png"
                    alt="Logo Nepřeplácejme.cz"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Jakub Melka</p>
                  <p className="text-sm text-muted-foreground">Osobní pomoc s nákupem a správou energií</p>
                </div>
              </div>
            </div>
            <div className="bg-background border border-border rounded-lg p-2 md:p-4 shadow-sm overflow-hidden">
              <TallyEmbed />
            </div>
          </div>
        </section>

        <ClientResults compact />

        {/* Additional services for visitors who need a different kind of help */}
        <section className="px-4 py-12 md:py-16">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">S čím dalším vám mohu pomoci</h2>
            {/* Three paths cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 md:pt-14 text-left">
              {[
                {
                  icon: FileSearch,
                  title: "Chci nezávazně posoudit své podmínky",
                  desc: "Pošlete poslední vyúčtování. Prověřím účtované položky, spotřebu a smluvní podmínky a srovnám dostupné nabídky na stejném základě.",
                },
                {
                  icon: KeyRound,
                  title: "Koupil jsem nemovitost / Řeším přepis",
                  desc: "Pomohu s přepisem energií na nové jméno, potřebnými podklady a výběrem nabídky pro vaše odběrné místo.",
                },
                {
                  icon: HardHat,
                  title: "Stavím dům / Nové odběrné místo",
                  desc: "Řešíte připojení nového domu? Pomohu vám zorientovat se v postupu a připravit podklady pro distributora i dodavatele.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <a
                  key={title}
                  href="#formular"
                  onClick={() => captureEvent("service_path_clicked", { service: title })}
                  className="group flex flex-col h-full gap-3 p-6 rounded-xl bg-background border border-border shadow-sm hover:shadow-md hover:border-primary/40 transition-all"
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground leading-snug">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-1">
                    Začít nezávazně
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              ))}
            </div>

            {/* Low consumption callout */}
            <div className="mt-10 md:mt-14 max-w-3xl mx-auto text-left">
              <div className="relative p-6 md:p-7 rounded-xl bg-muted/50 border border-border overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary/40" />
                <div className="relative space-y-2">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground leading-snug">
                    I při malé spotřebě má smysl vyúčtování zkontrolovat.
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    U menší spotřeby hrají důležitou roli také stálé měsíční platby a distribuční sazba. Podívám se na tyto položky společně s cenou elektřiny a posoudím možnosti úspory podle vašeho odběru.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Energy sharing */}
        <section className="py-16 md:py-20 px-4 bg-[hsl(220_20%_98%)]">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-10 space-y-3 max-w-3xl mx-auto">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Sdílení elektřiny</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Elektřinu už nemusíte jen nakupovat nebo prodávat
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Pomohu posoudit možnosti, získat potřebné podklady a propojit výrobce
                s vhodnými domácnostmi, firmami nebo obcemi.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <article className="flex flex-col rounded-xl border border-border bg-background p-7 md:p-8 shadow-sm">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <Sun className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">Mám výrobnu elektřiny</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  Máte fotovoltaickou elektrárnu, bioplynovou stanici nebo jiný zdroj?
                  Prověřím možnosti lepšího využití volné výroby a pomohu najít odběratele.
                </p>
                <ul className="space-y-3 mb-6 text-sm text-muted-foreground">
                  {["Odběratele nemusíte hledat sami", "Posouzení skutečné výroby a přetoků", "Koordinace dalšího postupu"].map((item) => (
                    <li key={item} className="flex gap-3"><Check className="h-5 w-5 text-primary shrink-0" />{item}</li>
                  ))}
                </ul>
                <Button asChild className="mt-auto w-full sm:w-fit">
                  <Link to="/sdileni-elektriny#vyrobce" onClick={() => captureEvent("sharing_role_selected", { role: "producer", location: "homepage" })}>Chci nabídnout výrobu<ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </article>

              <article className="flex flex-col rounded-xl border border-border bg-background p-7 md:p-8 shadow-sm">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <PlugZap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">Chci sdílenou elektřinu odebírat</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  Jste domácnost, firma nebo obec? Prověřím váš odběrový profil
                  a možnost pokrýt část spotřeby elektřinou od zapojeného výrobce.
                </p>
                <ul className="space-y-3 mb-6 text-sm text-muted-foreground">
                  {["Běžná dodávka dál kryje zbytek spotřeby", "Posouzení časového průběhu odběru", "Předem známé podmínky zapojení"].map((item) => (
                    <li key={item} className="flex gap-3"><Check className="h-5 w-5 text-primary shrink-0" />{item}</li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="mt-auto w-full sm:w-fit">
                  <Link to="/sdileni-elektriny#odberatel" onClick={() => captureEvent("sharing_role_selected", { role: "consumer", location: "homepage" })}>Chci sdílenou elektřinu<ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </article>
            </div>
            <p className="text-xs text-muted-foreground text-center leading-relaxed mt-6 max-w-3xl mx-auto">
              Sdílení se vyhodnocuje podle skutečné výroby a spotřeby v jednotlivých
              časových intervalech. Nelze proto předem slíbit pokrytí celé spotřeby.
            </p>
          </div>
        </section>

        {/* Dual offering - B2C & B2B */}
        <section className="py-16 md:py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 space-y-3 max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Komu pomáhám
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Dvě odlišné cesty podle toho, jestli řešíte energie pro domov nebo pro provoz firmy či obce.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* B2C */}
              <div
                id="domacnosti"
                className="flex flex-col p-8 rounded-xl bg-background border border-border shadow-sm scroll-mt-24"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Home className="h-6 w-6 text-primary" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary/80">
                    Pro domácnosti
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-snug mb-3">
                  Klid a jistota pro váš domov
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Porovnání cen a smluvních podmínek spolupracujících dodavatelů podle vaší spotřeby.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    {
                      title: "Srovnání dostupných ceníků",
                      desc: "Porovnání obchodní ceny, stálých plateb, DPH a délky závazku; pro celkové náklady zohledním i regulované platby.",
                    },
                    {
                      title: "Srozumitelné vysvětlení",
                      desc: "Vysvětlím rozdíly mezi nabídkami a upozorním na důležité podmínky.",
                    },
                    {
                      title: "Bez starostí",
                      desc: "Pomohu s podklady a administrativou při změně dodavatele.",
                    },
                    {
                      title: "Péče i po uzavření smlouvy",
                      desc: "Podle dohody pohlídám konec fixace a včas s vámi proberu nabídky na další období.",
                    },
                  ].map(({ title, desc }) => (
                    <li key={title} className="flex gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground text-sm md:text-base">
                          {title}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Button asChild className="w-full sm:w-auto">
                    <Link to="/kontrola-vyuctovani" onClick={() => captureEvent("invoice_check_cta_clicked", { location: "homepage_audience" })}>
                      Zkontrolovat vyúčtování zdarma
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* B2B */}
              <div
                id="firmy"
                className="flex flex-col p-8 rounded-xl bg-background border border-border shadow-sm scroll-mt-24"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="h-6 w-6 text-primary" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary/80">
                    Pro firmy a obce
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-snug mb-3">
                  Srovnání ceníků i individuální nabídky
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Řešení na míru podle velikosti odběru – pro menší i velké provozovny.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    {
                      title: "Řešení na míru",
                      desc: "Pro menší firmy porovnám ceníky spolupracujících dodavatelů, pro větší poptám individuální podmínky. Vždy na srovnatelném základě.",
                    },
                    {
                      title: "Průběžná péče o odběrná místa",
                      desc: "Podle dohody pomohu s hlídáním fixací, kontrolou nastavení a související administrativou.",
                    },
                  ].map(({ title, desc }) => (
                    <li key={title} className="flex gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground text-sm md:text-base">
                          {title}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Button asChild className="w-full sm:w-auto">
                    <Link to="/energie-pro-firmy" onClick={() => captureEvent("business_cta_clicked", { location: "homepage_audience" })}>
                      Poptat řešení pro firmu nebo obec
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TransparentPricing />

        {/* How it works */}
        <section
          id="jak-to-funguje"
          className="py-16 md:py-20 px-4 bg-[hsl(220_20%_98%)] scroll-mt-24"
        >
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12 space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Jak probíhá spolupráce?
              </h2>
              <p className="text-muted-foreground">
                Od prvního porovnání až po péči o energie v dalších letech.
              </p>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {/* connecting line on desktop */}
              <div className="hidden lg:block absolute top-5 left-[12.5%] right-[12.5%] h-px bg-border" aria-hidden="true" />
              {[
                {
                  step: "1",
                  icon: FileText,
                  title: "Pošlete podklady",
                  desc: "Můžete nahrát vyúčtování, nebo mi napsat cenu, spotřebu, sazbu a konec závazku.",
                },
                {
                  step: "2",
                  icon: BarChart3,
                  title: "Připravím přehled",
                  desc: "Porovnám dostupné ceníky nebo individuální nabídky na stejném cenovém základě a zohledním i stálé platby.",
                },
                {
                  step: "3",
                  icon: CheckCircle2,
                  title: "Vyberete další postup",
                  desc: "Projdeme nabídky a jejich podmínky. S vyřízením zvoleného řešení vám pomohu.",
                },
                {
                  step: "4",
                  icon: Handshake,
                  title: "Zůstáváme v kontaktu",
                  desc: "Podle dohody pohlídám konec fixace a včas navrhnu, kdy se znovu podívat na nabídky.",
                },
              ].map(({ step, icon: Icon, title, desc }) => (
                <div
                  key={step}
                  className="relative p-6 rounded-xl bg-background border border-border shadow-sm"
                >
                  <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center shadow-md">
                    {step}
                  </div>
                  <Icon className="h-6 w-6 text-primary mb-4 mt-2" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Pillars */}
        <section className="py-16 md:py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
              Pilíře, na kterých stavím
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  icon: ShieldCheck,
                  title: "Nabídky licencovaných dodavatelů",
                  desc: "Srovnávám nabídky spolupracujících dodavatelů elektřiny a plynu.",
                },
                {
                  icon: Handshake,
                  title: "Řešení podle vašich čísel",
                  desc: "Při porovnání zohledním vaši spotřebu, využití odběrného místa i smluvní podmínky.",
                },
                {
                  icon: Ban,
                  title: "Rozhodnutí je na vás",
                  desc: "Dostanete podklady k posouzení a sami si vyberete další postup.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="text-center space-y-3 p-6 rounded-lg bg-background border border-border shadow-sm"
                >
                  <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Preview */}
        <section className="py-16 md:py-20 px-4 bg-[hsl(220_20%_98%)]">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              Aktuálně z projektu
            </h2>
            <div className="rounded-lg border border-border bg-background p-6 md:p-8 space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                Jak porovnávat nabídky energií
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Na blogu vysvětluji, co sledovat ve vyúčtování, jak se rozhodovat
                o fixaci a proč při srovnání záleží také na stálých platbách
                a podmínkách smlouvy.
              </p>
              <Button variant="outline" asChild className="mt-2">
                <Link to="/blog">Přečíst rady a články</Link>
              </Button>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
};

export default Index;
