import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { blogPosts } from "@/data/blogPosts";
import { ArrowRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Blog
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Tipy a rady, jak zbytečně nepřeplácet za energie.
            </p>
          </div>

          {/* Featured article */}
          <div className="rounded-lg border border-border bg-[#f8faff] p-6 md:p-10 mb-10 space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">
              Jak pracuji a co ode mě můžete (a nemůžete) čekat
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Většina lidí má energetické poradce spojené s nekonečnými telefonáty a neustálým tlakem na podpis nové smlouvy. V projektu Nepřeplácejme na to jdu jinak. Chci, abyste věděli, na čem jste, hned od prvního kontaktu.
            </p>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <div>
                <strong className="text-foreground">Dlouhodobý klid místo honění za každou korunou</strong>
                <p className="mt-1">
                  Mým cílem není pravidelně měnit vašeho dodavatele energií. Naopak. Chci pro vás vyjednat takové podmínky, abyste mohli dlouhodobě a pohodlně odebírat za férové ceny. Pomáhám vám vyhnout se pastem v podobě nevýhodných automatických prolongací nebo nevýhodných nabídek dodavatele a hlídám termíny i trh za vás.
                </p>
              </div>
              <div>
                <strong className="text-foreground">Klid na rozhodnutí: Komunikujeme e-mailem</strong>
                <p className="mt-1">
                  Vím, jak dokážou být prodejní hovory nevhodné. Proto zakládám spolupráci na e-mailové komunikaci. Máte čas si vše v klidu rozmyslet a naše dohody máte vždy písemně v poště, abyste se k nim mohli kdykoliv vrátit.
                </p>
              </div>
              <div>
                <strong className="text-foreground">Moje hodnocení je vždy objektivní</strong>
                <p className="mt-1">
                  Když mi pošlete fakturu k posouzení, mým úkolem je dát vám reálný obraz vaší situace. Pokud zjistím, že vaše stávající podmínky jsou nastavené správně a férově, narovinu vám doporučím u současného dodavatele zůstat. Pro mě je cílem hlídat vaše odběrná místa tak, jak hlídám svoje vlastní.
                </p>
              </div>
            </div>
            <Button asChild className="mt-4">
              <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                Chci prověřit fakturu v klidu přes e-mail <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Blog post cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card
                key={post.slug}
                className="flex flex-col hover:shadow-energy transition-shadow duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-lg leading-snug">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 gap-4">
                  <p className="text-muted-foreground text-sm flex-1">
                    {post.excerpt}
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/blog/${post.slug}`}>
                      Číst více <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Blog;
