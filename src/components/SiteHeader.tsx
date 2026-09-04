import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const homeAnchor = (anchor: string, isHome: boolean) =>
  isHome ? anchor : `/${anchor}`;

export const SiteHeader = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <header className="border-b border-border bg-background/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center gap-4">
        <Link to="/" className="flex items-center gap-3 min-w-0" aria-label="Nepřeplácejme.cz – domů">
          <img
            src="/lovable-uploads/dcd1b256-2e06-4aca-963c-251ffd8dee20.png"
            alt=""
            className="h-10 w-auto rounded-full shrink-0"
            width="40"
            height="40"
          />
          <div className="hidden sm:flex flex-col leading-tight min-w-0">
            <span className="font-semibold text-foreground text-lg">Nepřeplácejme.cz</span>
            <span className="text-xs text-muted-foreground truncate">
              Váš nezávislý partner pro nákup a správu energií
            </span>
          </div>
        </Link>

        <nav className="flex items-center gap-3 md:gap-5" aria-label="Hlavní navigace">
          <a
            href={homeAnchor("#domacnosti", isHome)}
            className="hidden lg:inline text-sm font-medium text-primary hover:text-primary-glow transition-colors"
          >
            Pro domácnosti
          </a>
          <a
            href={homeAnchor("#firmy", isHome)}
            className="hidden lg:inline text-sm font-medium text-primary hover:text-primary-glow transition-colors"
          >
            Pro firmy a obce
          </a>
          <Link
            to="/sdileni-elektriny"
            className="text-sm font-medium text-primary hover:text-primary-glow transition-colors"
          >
            Sdílení elektřiny
          </Link>
          <a
            href={homeAnchor("#jak-to-funguje", isHome)}
            className="hidden xl:inline text-sm font-medium text-primary hover:text-primary-glow transition-colors"
          >
            Jak to funguje
          </a>
          <Link
            to="/blog"
            className="hidden sm:inline text-sm font-medium text-primary hover:text-primary-glow transition-colors"
          >
            Blog
          </Link>
          <Button asChild size="sm" className="hidden md:inline-flex">
            <a href={homeAnchor("#formular", isHome)}>Nezávazná konzultace</a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
