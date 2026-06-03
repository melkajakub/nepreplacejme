import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Send, Mail, ShieldCheck, FileCheck, Check, PhoneOff, UserCheck } from "lucide-react";

import { TallyEmbed } from "@/components/TallyEmbed";

const Index = () => {


  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src="/lovable-uploads/dcd1b256-2e06-4aca-963c-251ffd8dee20.png"
              alt="Nepřeplácejme logo"
              className="h-10 w-auto rounded-full"
              width="40"
              height="40"
            />
            <span className="font-semibold text-foreground text-lg hidden sm:inline">
              Nepřeplácejme
            </span>
          </div>
          <nav className="flex items-center gap-6">
            <Link
              to="/blog"
              className="text-sm font-medium text-primary hover:text-primary-glow transition-colors"
            >
              Blog
            </Link>
            <a
              href="#formular"
              className="text-sm font-medium text-primary hover:text-primary-glow transition-colors"
            >
              Poslat vyúčtování
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="py-20 md:py-32 px-4">
          <div className="container mx-auto max-w-2xl text-center space-y-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight">
              Máte jistotu, že za elektřinu a plyn nepřeplácíte? Nechte si zdarma a v klidu prověřit své vyúčtování.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Pomáhám domácnostem, firmám i obcím zorientovat se ve vyúčtování
              za elektřinu a plyn. Pošlete mi svou fakturu ke kontrole – bez
              nátlaku, bez otravných telefonátů a zcela zdarma.
            </p>

            {/* Social proof row */}
            <ul className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-2 text-sm md:text-base text-muted-foreground">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>100% nezávislé posouzení</span>
              </li>
              <li className="flex items-center gap-2">
                <PhoneOff className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>Žádné otravné call centrum</span>
              </li>
              <li className="flex items-center gap-2">
                <UserCheck className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>Osobní kontrola každé faktury</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Button
                variant="default"
                size="lg"
                className="text-base px-8 py-6 w-full sm:w-auto"
                asChild
              >
                <a href="#formular">
                  <Send className="mr-2 h-4 w-4" />
                  Prověřit fakturu zdarma
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base px-8 py-6 w-full sm:w-auto"
                asChild
              >
                <Link to="/blog">
                  Více o projektu Nepřeplácejme
                </Link>
              </Button>
            </div>
          </div>
        </section>


        {/* Trust Pillars */}
        <section className="py-16 md:py-20 px-4 bg-[hsl(220_20%_98%)]">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
              Pilíře spolupráce
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pillar 1 */}
              <div className="text-center space-y-4 p-6 rounded-lg bg-background border border-border shadow-sm">
                <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Komunikace e-mailem
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Žádný nátlak po telefonu. Vše máte v poště, v klidu a písemně.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="text-center space-y-4 p-6 rounded-lg bg-background border border-border shadow-sm">
                <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Energetický dohled
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Hlídám vaše odběrná místa jako svá vlastní. Termíny i pohyby trhu.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="text-center space-y-4 p-6 rounded-lg bg-background border border-border shadow-sm">
                <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Férové posouzení
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Pokud už máte skvělou cenu, narovinu vám doporučím u dodavatele zůstat.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Preview */}
        <section className="py-16 md:py-20 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              Aktuálně z projektu
            </h2>
            <div className="rounded-lg border border-border bg-[hsl(220_30%_98%)] p-6 md:p-10 space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                Jak pracuji a co ode mě můžete čekat
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Většina lidí má energetické poradce spojené s nekonečnými telefonáty
                a neustálým tlakem na podpis nové smlouvy. V projektu Nepřeplácejme
                na to jdu jinak. Chci, abyste věděli, na čem jste, hned od prvního
                kontaktu.
              </p>
              <Button variant="outline" asChild className="mt-2">
                <Link to="/blog">Přečíst celý příběh</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Form section */}
        <section id="formular" className="py-20 md:py-24 px-4 bg-[hsl(220_20%_98%)]">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              {/* Left column: copy + avatar */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Pošlete mi své vyúčtování
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                    Stačí vyplnit základní údaje a přiložit soubor. Vaše
                    dokumenty projdu osobně a na rovinu vám řeknu, zda máte
                    férové podmínky.
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
                      Váš nezávislý energetický poradce
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
              Poslat vyúčtování
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
            Odesláním formuláře nedochází k uzavření smlouvy ani k zahájení
            zprostředkovatelské činnosti. Jedná se o nezávaznou konzultaci.
          </p>
          <p className="text-xs text-muted-foreground/60 max-w-lg mx-auto leading-relaxed mt-3">
            Analýzu faktur a zprostředkování služeb provádí Jakub Melka jako
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
