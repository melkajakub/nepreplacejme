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
            <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Navigace v zápatí">
              <a href={homeAnchor("#domacnosti", isHome)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Pro domácnosti
              </a>
              <a href={homeAnchor("#firmy", isHome)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Pro firmy a obce
              </a>
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
              Jakub Melka · IČO: 22516280 ·{" "}
              <a href="mailto:info@nepreplacejme.cz" className="hover:text-foreground transition-colors">
                info@nepreplacejme.cz
              </a>
            </p>
          </div>

          <div className="md:border-l md:border-border md:pl-8 space-y-3">
            <p className="text-xs text-muted-foreground/80 leading-relaxed">
              Nejsem dodavatel energií – jsem nezávislý zprostředkovatel a poradce.
              Smlouvu vždy podepisujete přímo s vybraným licencovaným dodavatelem
              nebo odborným partnerem. Odesláním formuláře nedochází k uzavření smlouvy.
            </p>
            <p className="text-xs text-muted-foreground/70 leading-relaxed">
              Analýzu podmínek a zprostředkování služeb provádí Jakub Melka jako
              obchodní zástupce společnosti IKAS GROUP s.r.o. (zapsané v registru
              zprostředkovatelů Energetického regulačního úřadu pod číslem 742543078).
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
