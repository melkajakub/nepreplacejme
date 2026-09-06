import { Link, useLocation } from "react-router-dom";

const homeAnchor = (anchor: string, isHome: boolean) =>
  isHome ? anchor : `/${anchor}`;

export const SiteFooter = () => {
  const isHome = useLocation().pathname === "/";

  return (
    <footer className="border-t border-border py-12 px-4 bg-[hsl(220_20%_98%)]">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 w-fit">
              <img
                src="/lovable-uploads/dcd1b256-2e06-4aca-963c-251ffd8dee20.png"
                alt=""
                className="h-8 w-auto rounded-full"
                width="32"
                height="32"
              />
              <span className="font-semibold text-foreground">Nepřeplácejme.cz</span>
            </Link>
            <p className="text-sm text-muted-foreground">Osobní pomoc s nákupem a správou energií.</p>
            <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Navigace v zápatí">
              <Link to="/kontrola-vyuctovani" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Pro domácnosti
              </Link>
              <Link to="/energie-pro-firmy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Pro firmy a obce
              </Link>
              <Link to="/sdileni-elektriny" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Sdílení elektřiny
              </Link>
              <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </Link>
              <a href={homeAnchor("#formular", isHome)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Konzultace
              </a>
              <Link to="/gdpr" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                GDPR
              </Link>
            </nav>
            <p className="text-sm text-muted-foreground">
              Provozovatel webu: Jakub Melka<br />
              IČO: 22516280 · Sídlo: Dětkovice 6, 798 04<br />
              <a href="mailto:info@nepreplacejme.cz" className="hover:text-foreground transition-colors">
                info@nepreplacejme.cz
              </a>
            </p>
          </div>

          <div className="md:border-l md:border-border md:pl-8 space-y-3">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Při zprostředkování energií jednám jako obchodní zástupce společnosti
              IKAS GROUP s.r.o., IČO: 21963975, se sídlem Věry Pánkové 829/2,
              779 00 Olomouc, registrované u ERÚ pod číslem{" "}
              <a href="https://eru.gov.cz/registr-zprostredkovatelu/742543078" className="underline underline-offset-2 hover:text-foreground">
                742543078
              </a>.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Formulář slouží k nezávazné poptávce. Smlouvu o dodávce energií
              uzavíráte s vybraným dodavatelem.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Spotřebitelské spory ze smluv o zprostředkování v energetice lze řešit
              mimosoudně u{" "}
              <a href="https://eru.gov.cz/spor-se-zprostredkovatelem" className="underline underline-offset-2 hover:text-foreground">
                Energetického regulačního úřadu
              </a>.
            </p>
            <p className="text-xs text-muted-foreground/60 pt-2">
              © {new Date().getFullYear()} Nepřeplácejme.cz
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
