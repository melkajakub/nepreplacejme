import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Send,
  Mail,
  ShieldCheck,
  FileCheck,
  Check,
  PhoneOff,
  UserCheck,
  FileSearch,
  KeyRound,
  HardHat,
  ArrowRight,
  Home,
  Building2,
  Landmark,
  Lock,
  Scale,
  Handshake,
  Ban,
  FileText,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

import { TallyEmbed } from "@/components/TallyEmbed";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <img
              src="/lovable-uploads/dcd1b256-2e06-4aca-963c-251ffd8dee20.png"
              alt="Nepřeplácejme logo"
              className="h-10 w-auto rounded-full shrink-0"
              width="40"
              height="40"
            />
            <div className="hidden sm:flex flex-col leading-tight min-w-0">
              <span className="font-semibold text-foreground text-lg">
                Nepřeplácejme.cz
              </span>
              <span className="text-xs text-muted-foreground truncate">
                Nezávislý nákup a poradce pro energie
              </span>
            </div>
          </div>
          <nav className="flex items-center gap-4 md:gap-6">
            <a
              href="#domacnosti"
              className="hidden md:inline text-sm font-medium text-primary hover:text-primary-glow transition-colors"
            >
              Pro domácnosti
            </a>
            <a
              href="#firmy"
              className="hidden md:inline text-sm font-medium text-primary hover:text-primary-glow transition-colors"
            >
              Pro firmy a obce
            </a>
            <a
              href="#jak-to-funguje"
              className="hidden lg:inline text-sm font-medium text-primary hover:text-primary-glow transition-colors"
            >
              Jak to funguje
            </a>
            <Link
              to="/blog"
              className="text-sm font-medium text-primary hover:text-primary-glow transition-colors"
            >
              Blog
            </Link>
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <a href="#formular">Nezávazná konzultace</a>
            </Button>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="py-20 md:py-28 px-4">
          <div className="container mx-auto max-w-5xl text-center space-y-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight">
              Energie pro domov i podnikání. Srozumitelně, férově a bez tlaku.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Pomáhám domácnostem, firmám a obcím vyznat se v možnostech na trhu s energiemi. Srovnám nabídky předních dodavatelů, u větších odběrů vyjednám individuální podmínky – bez skrytých háčků a zbytečného papírování.
            </p>

            {/* Audience badges */}
            <div className="flex flex-wrap justify-center gap-3 pt-2">
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
            <ul className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-2 text-sm md:text-base text-muted-foreground">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>100% nezávislé posouzení (jsem váš průvodce, nic nepodepisuji za vás)</span>
              </li>
              <li className="flex items-center gap-2">
                <PhoneOff className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>Žádný nátlak a otravné telefonáty z call center</span>
              </li>
              <li className="flex items-center gap-2">
                <UserCheck className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>Většinou vám dokážu nabídnout výhodnější podmínky u známých velkých dodavatelů, než jaké máte teď</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Button
                variant="default"
                size="lg"
                className="text-base px-8 py-6 w-full sm:w-auto"
                asChild
              >
                <a href="#domacnosti">
                  <Home className="mr-2 h-4 w-4" />
                  Chci řešení pro domácnost
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base px-8 py-6 w-full sm:w-auto"
                asChild
              >
                <a href="#firmy">
                  <Building2 className="mr-2 h-4 w-4" />
                  Poptat nabídku pro firmu / obec
                </a>
              </Button>
            </div>

            {/* Three paths cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-10 md:pt-14 text-left">
              {[
                {
                  icon: FileSearch,
                  title: "Chci nezávazně posoudit své podmínky",
                  desc: "Máte pocit, že u svého dodavatele přeplácíte? Vaše vyúčtování osobně projdu a na rovinu vám řeknu, zda máte férové podmínky.",
                },
                {
                  icon: KeyRound,
                  title: "Koupil jsem nemovitost / Řeším přepis",
                  desc: "Provedu vás celým procesem přepisu energií na nové jméno. Připravím pro vás ty nejvýhodnější podmínky a pohlídám, ať nic nepodepíšete špatně.",
                },
                {
                  icon: HardHat,
                  title: "Stavím dům / Nové odběrné místo",
                  desc: "Potřebujete novou přípojku, sloupek nebo elektroměr? Pomohu vám s celým postupem od nuly a navedu vás, jak hladce získat smlouvu s distributorem.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <a
                  key={title}
                  href="#formular"
                  className="group flex flex-col gap-3 p-6 rounded-xl bg-background border border-border shadow-sm hover:shadow-glow hover:border-primary/40 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
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
              <div className="relative p-6 md:p-8 rounded-xl bg-primary/5 border border-primary/15 shadow-sm overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary/30" />
                <div className="relative space-y-3">
                  <h3 className="text-lg md:text-xl font-bold text-foreground leading-snug">
                    Máte byt s malou spotřebou? I tak můžete přeplácet tisíce!
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Spousta lidí v bytech si myslí, že při nízké spotřebě nemá smysl faktury řešit. Opak je pravdou. Velmi často narážím na špatně nastavenou distribuční sazbu a zároveň zbytečně vysokou cenu. Při této kombinaci vám dokážu ušetřit až 2 000 Kč ročně, přestože proudem nijak neplýtváte. Nechte mě vaše fixní platby prověřit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust banner - role clarification */}
        <section className="px-4 pb-4">
          <div className="container mx-auto max-w-5xl">
            <div className="rounded-2xl bg-primary text-primary-foreground p-6 md:p-10 shadow-glow">
              <div className="flex flex-col md:flex-row md:items-start gap-5">
                <div className="shrink-0 w-12 h-12 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center">
                  <Handshake className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="space-y-3">
                  <h2 className="text-xl md:text-2xl font-bold leading-snug">
                    Nejsem dodavatel energií. Jsem váš nezávislý partner pro jejich nákup.
                  </h2>
                  <p className="text-sm md:text-base leading-relaxed text-primary-foreground/85">
                    Smlouvu o dodávkách vždy podepisujete přímo s prověřenými a stabilními dodavateli na českém trhu. Mým úkolem je vyjednat pro vás u těchto firem ty nejlepší možné podmínky, pohlídat smlouvy a ušetřit vám čas i peníze.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dual offering - B2C & B2B */}
        <section className="py-16 md:py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* B2C */}
              <div
                id="domacnosti"
                className="flex flex-col p-8 md:p-10 rounded-xl bg-background border border-border shadow-sm scroll-mt-24"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Home className="h-7 w-7 text-primary" />
                  <span className="text-sm font-medium uppercase tracking-wide text-primary/80">
                    Pro domácnosti
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-snug mb-3">
                  Klid a jistota pro váš domov
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Nezávislé srovnání ceníků od prověřených a stabilních českých dodavatelů.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    {
                      title: "Srovnání TOP dodavatelů",
                      desc: "Průzkum trhu a výběr spolehlivého partnera s férovou cenou.",
                    },
                    {
                      title: "Srozumitelně a polopatě",
                      desc: "Vše vysvětlím lidskou řečí bez složité hantýrky a kliček.",
                    },
                    {
                      title: "Bez starostí",
                      desc: "Přechod k novému dodavateli i veškeré papírování vyřídím kompletně za vás.",
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
                    <a href="#formular">
                      Nezávazně posoudit smlouvu
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* B2B */}
              <div
                id="firmy"
                className="flex flex-col p-8 md:p-10 rounded-xl bg-background border border-border shadow-sm scroll-mt-24"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="h-7 w-7 text-primary" />
                  <span className="text-sm font-medium uppercase tracking-wide text-primary/80">
                    Pro firmy a obce
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-snug mb-3">
                  Individuální velkoobchodní nákup
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Řešení na míru pro větší odběry navázané na reálný vývoj trhu.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    {
                      title: "Přístup k individuálním nabídkám",
                      desc: "Oslovím klíčové hráče na trhu pro ceny odpovídající aktuálnímu vývoji burzy.",
                    },
                    {
                      title: "Maximální konkurenceschopnost",
                      desc: "Díky efektivnímu fungování bez zbytečné režie tlačím výslednou cenu na minimum.",
                    },
                    {
                      title: "Kompletní energetický servis",
                      desc: "Hlídání termínů fixací, kontrola nastavení jističů a správa administrativy.",
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
                  <Button asChild variant="outline" className="w-full sm:w-auto">
                    <a href="#formular">
                      Poptat B2B řešení
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                Čistý a transparentní proces od prvního kontaktu.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  step: "1",
                  icon: FileText,
                  title: "Pošlete podklady",
                  desc: "Stačí poslat poslední vyúčtování nebo roční spotřebu.",
                },
                {
                  step: "2",
                  icon: BarChart3,
                  title: "Připravím přehled",
                  desc: "Porovnám trh nebo poptám individuální nabídku u předních dodavatelů.",
                },
                {
                  step: "3",
                  icon: CheckCircle2,
                  title: "Vyberete si a šetříte",
                  desc: "Pokud se vám nabídka líbí, zařídím veškerou administrativu. Pokud ne, nic se neděje a pokračujete dál.",
                },
              ].map(({ step, icon: Icon, title, desc }) => (
                <div
                  key={step}
                  className="relative p-6 md:p-8 rounded-xl bg-background border border-border shadow-sm"
                >
                  <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center shadow-glow">
                    {step}
                  </div>
                  <Icon className="h-7 w-7 text-primary mb-4" />
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Lock,
                  title: "100% bezpečnost",
                  desc: "Spolupráce výhradně s licencovanými a finančně silnými dodavateli na trhu.",
                },
                {
                  icon: Scale,
                  title: "Plná legálnost a etika",
                  desc: "Veškeré postupy v absolutním souladu s energetickým zákonem a ERÚ.",
                },
                {
                  icon: Handshake,
                  title: "Nezávislost",
                  desc: "Doporučuji vždy to, co vychází nejlépe pro vaše konkrétní odběrné místo.",
                },
                {
                  icon: Ban,
                  title: "Nulový nátlak",
                  desc: "Rozhodnutí je vždy 100 % na vás. Žádné nutitelské praktiky ani skryté závazky.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="text-center space-y-4 p-6 rounded-lg bg-background border border-border shadow-sm"
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
            <div className="rounded-lg border border-border bg-background p-6 md:p-10 space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                Jak pracuji a co ode mě můžete čekat
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Většina lidí má energetické poradce spojené s nekonečnými telefonáty
                a neustálým tlakem na podpis nové smlouvy. Já to dělám jinak. Chci,
                abyste od prvního kontaktu věděli, na čem jste – a rozhodnutí
                nechávám vždy na vás.
              </p>
              <Button variant="outline" asChild className="mt-2">
                <Link to="/blog">Přečíst celý příběh</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Form section */}
        <section id="formular" className="py-20 md:py-24 px-4 scroll-mt-24">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              {/* Left column: copy + avatar */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Nezávazná poptávka / Konzultace
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                    Ozvu se vám zpět s konkrétním návrhem. Stačí vyplnit základní
                    údaje a přiložit soubor. Vaše dokumenty projdu osobně a na
                    rovinu vám řeknu, zda máte férové podmínky.
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center overflow-hidden shrink-0">
                    <img
                      src="/lovable-uploads/dcd1b256-2e06-4aca-963c-251ffd8dee20.png"
                      alt="Jakub Melka"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Jakub Melka</p>
                    <p className="text-sm text-muted-foreground">
                      Nezávislý nákupčí a poradce pro energie
                    </p>
                  </div>
                </div>
              </div>

              {/* Right column: form */}
              <div className="bg-background border border-border rounded-lg p-4 md:p-6 shadow-sm overflow-hidden">
                <TallyEmbed />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-4">
        <div className="container mx-auto max-w-2xl text-center space-y-3">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4">
            <a
              href="#domacnosti"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Pro domácnosti
            </a>
            <a
              href="#firmy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Pro firmy a obce
            </a>
            <Link
              to="/blog"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Blog
            </Link>
            <a
              href="#formular"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Nezávazná konzultace
            </a>
            <Link
              to="/gdpr"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Zásady zpracování osobních údajů (GDPR)
            </Link>
          </div>

          <p className="text-sm text-muted-foreground">
            Nepřeplácejme · Jakub Melka · IČO: 22516280 ·{" "}
            <a href="mailto:info@nepreplacejme.cz" className="hover:text-foreground transition-colors">
              info@nepreplacejme.cz
            </a>
          </p>
          <p className="text-xs text-muted-foreground/70 max-w-lg mx-auto leading-relaxed">
            Nejsem dodavatel energií – jsem nezávislý zprostředkovatel a poradce.
            Smlouvu vždy podepisujete přímo s vybraným licencovaným dodavatelem.
            Odesláním formuláře nedochází k uzavření smlouvy ani k zahájení
            zprostředkovatelské činnosti. Jedná se o nezávaznou konzultaci.
          </p>
          <p className="text-xs text-muted-foreground/60 max-w-lg mx-auto leading-relaxed mt-3">
            Analýzu podmínek a zprostředkování služeb provádí Jakub Melka jako
            obchodní zástupce společnosti IKAS GROUP s.r.o. (zapsané v registru
            zprostředkovatelů Energetického regulačního úřadu pod číslem
            742543078).
          </p>
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
