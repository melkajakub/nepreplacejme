import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { blogPosts } from "@/data/blogPosts";
import { ArrowRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { captureEvent } from "@/lib/posthog";
import { usePageMeta } from "@/hooks/use-page-meta";

const Blog = () => {
  usePageMeta(
    "Rady k cenám elektřiny a plynu | Nepřeplácejme.cz",
    "Praktické rady k vyúčtování, cenám elektřiny a plynu, fixacím a úsporám pro domácnosti i firmy.",
    "/blog",
  );

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
              Od vyúčtování ke konkrétnímu návrhu
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Z vyúčtování zjistím, jaké ceny za energie platíte a jakou máte spotřebu. Na základě těchto údajů vám navrhnu další postup, abyste zbytečně nepřepláceli.
            </p>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <div>
                <strong className="text-foreground">Cena i podmínky smlouvy</strong>
                <p className="mt-1">
                  Při porovnání sleduji cenu za MWh, stálé platby, délku závazku i podmínky prodloužení. Podle dohody pomohu také s hlídáním termínů a přípravou na další smluvní období.
                </p>
              </div>
              <div>
                <strong className="text-foreground">Podklady přehledně e-mailem</strong>
                <p className="mt-1">
                  Srovnání a návrh dalšího postupu vám pošlu e-mailem. Nabídky si můžete projít, vrátit se k jejich podmínkám a zeptat se na to, co potřebujete vysvětlit.
                </p>
              </div>
              <div>
                <strong className="text-foreground">Návrh podle vašeho odběru</strong>
                <p className="mt-1">
                  Vaše současné podmínky porovnám s nabídkami spolupracujících dodavatelů. Upozorním na rozdíly v ceně a závazku a vysvětlím navržený postup. S vyřízením zvoleného řešení vám pomohu.
                </p>
              </div>
            </div>
            <Button asChild className="mt-4">
              <Link to="/kontrola-vyuctovani#formular" onClick={() => captureEvent("invoice_check_cta_clicked", { location: "blog_intro" })}>
                Zkontrolovat vyúčtování zdarma <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
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
