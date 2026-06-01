import { Link } from "react-router-dom";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="space-y-3">
    <h2 className="text-xl md:text-2xl font-semibold text-foreground">{title}</h2>
    <div className="space-y-3 text-muted-foreground leading-relaxed">
      {children}
    </div>
  </section>
);

const Bullets = ({ items }: { items: React.ReactNode[] }) => (
  <ul className="list-disc pl-6 space-y-2">
    {items.map((it, i) => (
      <li key={i}>{it}</li>
    ))}
  </ul>
);

const Gdpr = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
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
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              to="/blog"
              className="text-sm font-medium text-primary hover:text-primary-glow transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/#formular"
              className="text-sm font-medium text-primary hover:text-primary-glow transition-colors"
            >
              Poslat vyúčtování
            </Link>
          </nav>
        </div>
      </header>

      <main className="py-12 md:py-20 px-4">
        <article className="container mx-auto max-w-3xl space-y-10">
          <header className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Informace o zpracování osobních údajů (GDPR)
            </h1>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>
                <strong className="text-foreground">Správce osobních údajů:</strong>{" "}
                Jakub Melka, IČO: 22516280
              </p>
              <p>Sídlo: Dětkovice 6, 798 04</p>
              <p>
                E-mail:{" "}
                <a
                  href="mailto:info@nepreplacejme.cz"
                  className="text-primary hover:underline"
                >
                  info@nepreplacejme.cz
                </a>
              </p>
              <p>Datum poslední aktualizace: 1. června 2026</p>
            </div>
          </header>

          <Section title="1. Úvodní informace">
            <p>
              Tento dokument obsahuje informace o zpracování osobních údajů
              v souladu s nařízením Evropského parlamentu a Rady (EU) 2016/679
              ze dne 27. dubna 2016 o ochraně fyzických osob v souvislosti se
              zpracováním osobních údajů a o volném pohybu těchto údajů
              (obecné nařízení o ochraně osobních údajů, dále jen „GDPR“).
              Správce osobních údajů bere ochranu vašich osobních údajů vážně
              a zavazuje se zpracovávat je v souladu s platnými právními
              předpisy České republiky a Evropské unie.
            </p>
          </Section>

          <Section title="2. Účel zpracování osobních údajů">
            <p>Vaše osobní údaje zpracováváme pro následující účely:</p>
            <Bullets
              items={[
                <><strong className="text-foreground">Posouzení a kontrola vyúčtování</strong> – analýza nahraných faktur a smluv za účelem nezávazného vyhodnocení stávajících podmínek a cen energií.</>,
                <><strong className="text-foreground">Správa odběrných míst</strong> – evidence a správa údajů o vašich odběrných místech energií (elektřina, plyn).</>,
                <><strong className="text-foreground">Vyjednávání podmínek energií</strong> – komunikace s dodavateli energií za účelem získání výhodnějších cenových podmínek a sjednání smluv.</>,
                <><strong className="text-foreground">Vystavování faktur</strong> – vyúčtování poskytnutých služeb a vedení účetní evidence v souladu se zákonem č. 563/1991 Sb., o účetnictví.</>,
                <><strong className="text-foreground">Plnění zákonných povinností</strong> – zejména daňové a účetní povinnosti vyplývající z právních předpisů České republiky.</>,
                <><strong className="text-foreground">Marketingová komunikace (jen se souhlasem)</strong> – zasílání obchodních sdělení, nabídek a informací o službách.</>,
              ]}
            />
          </Section>

          <Section title="3. Právní základ zpracování">
            <p>
              Osobní údaje zpracováváme na základě těchto právních základů podle
              čl. 6 odst. 1 GDPR:
            </p>
            <Bullets
              items={[
                <><strong className="text-foreground">Plnění smlouvy</strong> (čl. 6 odst. 1 písm. b GDPR) – zpracování je nezbytné pro uzavření a plnění smlouvy o poskytování služeb energetického poradenství a vyjednávání cen. Poptávka z webového formuláře se považuje za předsmluvní opatření.</>,
                <><strong className="text-foreground">Plnění právní povinnosti</strong> (čl. 6 odst. 1 písm. c GDPR) – zpracování vyplývá ze zákonných povinností, zejména zákona o účetnictví a daňových předpisů.</>,
                <><strong className="text-foreground">Oprávněný zájem správce</strong> (čl. 6 odst. 1 písm. f GDPR) – efektivní správa klientské databáze, vedení evidence odběrných míst a zajištění kvalitní péče o klienty.</>,
                <><strong className="text-foreground">Souhlas</strong> (čl. 6 odst. 1 písm. a GDPR) – pokud si přejete dostávat marketingová sdělení, vyžádáme si váš výslovný souhlas, který můžete kdykoli odvolat.</>,
              ]}
            />
          </Section>

          <Section title="4. Rozsah zpracovávaných osobních údajů">
            <p>V rámci poskytování služeb zpracováváme následující kategorie osobních údajů:</p>
            <Bullets
              items={[
                "Jméno a příjmení",
                "Datum narození majitele odběrného místa (pro jednoznačnou identifikaci u dodavatelů energií)",
                "Adresa bydliště nebo sídlo firmy",
                "Telefonní číslo",
                "E-mailová adresa",
                "IČO a DIČ (u podnikatelů)",
                "Údaje o odběrných místech (EAN kód, adresa odběrného místa, číslo smlouvy)",
                "Údaje o spotřebě energií z přiložených faktur a vyúčtování",
                "Fakturační údaje (číslo účtu, variabilní symbol)",
              ]}
            />
          </Section>

          <Section title="5. Doba uchování osobních údajů">
            <p>Osobní údaje uchováváme po dobu nezbytně nutnou k naplnění účelu zpracování:</p>
            <Bullets
              items={[
                <><strong className="text-foreground">Po dobu trvání smluvního vztahu</strong> – po celou dobu, kdy využíváte naše služby.</>,
                <><strong className="text-foreground">10 let po skončení služby</strong> – z důvodu zákonných povinností vyplývajících ze zákona o účetnictví (§ 31 zákona č. 563/1991 Sb.) a daňových předpisů (§ 35 zákona č. 280/2009 Sb., daňový řád).</>,
                <><strong className="text-foreground">Marketingový souhlas</strong> – do odvolání souhlasu nebo maximálně 5 let od udělení souhlasu.</>,
              ]}
            />
            <p>Po uplynutí doby uchování budou osobní údaje bezpečně smazány nebo anonymizovány.</p>
          </Section>

          <Section title="6. Příjemci osobních údajů">
            <p>Vaše osobní údaje mohou být předány následujícím kategoriím příjemců:</p>
            <Bullets
              items={[
                <><strong className="text-foreground">Dodavatelé energií</strong> – předáváme pouze nezbytné údaje o odběrných místech (jméno, adresa OM, EAN kód, spotřeba) za účelem vyjednání a sjednání smlouvy o dodávce energií.</>,
                <><strong className="text-foreground">Fakturoid.cz</strong> (Fakturoid s.r.o., Česká republika) – poskytovatel fakturačního systému, se kterým máme uzavřenou smlouvu o zpracování osobních údajů.</>,
                <><strong className="text-foreground">Airtable.com</strong> (Formagrid Inc., USA) – poskytovatel CRM systému pro správu klientské databáze. S tímto zpracovatelem máme uzavřenou smlouvu o zpracování osobních údajů a přenos dat do USA probíhá na základě standardních smluvních doložek schválených Evropskou komisí.</>,
                <><strong className="text-foreground">Účetní, daňový poradce</strong> – v rozsahu nezbytném pro plnění zákonných povinností.</>,
              ]}
            />
            <p>
              Osobní údaje neprodáváme třetím stranám ani je nesdílíme pro jiné
              účely, než jsou uvedeny v tomto dokumentu.
            </p>
          </Section>

          <Section title="7. Přenos osobních údajů do třetích zemí">
            <p>
              V případě využívání služby Airtable.com dochází k přenosu osobních
              údajů do Spojených států amerických (USA). Tento přenos je
              zabezpečen prostřednictvím standardních smluvních doložek
              schválených Evropskou komisí v souladu s čl. 46 GDPR.
              Zpracovatel Airtable.com poskytuje odpovídající záruky ochrany
              osobních údajů.
            </p>
          </Section>

          <Section title="8. Vaše práva jako subjektu údajů">
            <p>
              V souvislosti se zpracováním vašich osobních údajů máte následující
              práva:
            </p>
            <Bullets
              items={[
                "Právo na přístup k osobním údajům (čl. 15 GDPR)",
                "Právo na opravu (čl. 16 GDPR)",
                "Právo na výmaz (čl. 17 GDPR)",
                "Právo na omezení zpracování (čl. 18 GDPR)",
                "Právo na přenositelnost údajů (čl. 20 GDPR)",
                "Právo vznést námitku (čl. 21 GDPR)",
                "Právo odvolat souhlas",
                "Právo podat stížnost u Úřadu pro ochranu osobních údajů",
              ]}
            />
            <p>
              Kontakt pro uplatnění práv:{" "}
              <a
                href="mailto:info@nepreplacejme.cz"
                className="text-primary hover:underline"
              >
                info@nepreplacejme.cz
              </a>
              . Na vaše žádosti odpovíme bez zbytečného odkladu, nejpozději do
              jednoho měsíce od obdržení žádosti.
            </p>
          </Section>

          <Section title="9. Automatizované rozhodování a profilování">
            <p>
              Správce neprovádí automatizované individuální rozhodování včetně
              profilování podle čl. 22 GDPR.
            </p>
          </Section>

          <Section title="10. Zabezpečení osobních údajů">
            <p>
              Přijali jsme vhodná technická a organizační opatření k ochraně
              osobních údajů proti neoprávněnému nebo protiprávnímu zpracování,
              náhodné ztrátě, zničení nebo poškození:
            </p>
            <Bullets
              items={[
                "Šifrování komunikace (HTTPS, SSL/TLS)",
                "Zabezpečený přístup k datům (silná hesla, 2FA)",
                "Pravidelné zálohy dat",
                "Smluvně vázaní zpracovatelé",
              ]}
            />
          </Section>

          <Section title="11. Kontaktní údaje dozorového úřadu">
            <p>
              Úřad pro ochranu osobních údajů
              <br />
              Pplk. Sochora 27, 170 00 Praha 7
              <br />
              Telefon: +420 234 665 111
              <br />
              E-mail:{" "}
              <a
                href="mailto:posta@uoou.cz"
                className="text-primary hover:underline"
              >
                posta@uoou.cz
              </a>
              <br />
              Web:{" "}
              <a
                href="https://www.uoou.cz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.uoou.cz
              </a>
            </p>
          </Section>

          <Section title="12. Závěrečná ustanovení">
            <p>
              Správce si vyhrazuje právo tyto Zásady zpracování osobních údajů
              kdykoli aktualizovat. O podstatných změnách budete informováni
              prostřednictvím e-mailu nebo na webových stránkách
              www.nepreplacejme.cz. Máte-li jakékoli dotazy ohledně zpracování
              osobních údajů, neváhejte nás kontaktovat na{" "}
              <a
                href="mailto:info@nepreplacejme.cz"
                className="text-primary hover:underline"
              >
                info@nepreplacejme.cz
              </a>
              .
            </p>
          </Section>
        </article>
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
            <Link
              to="/#formular"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Poslat vyúčtování
            </Link>
            <Link
              to="/gdpr"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Zásady zpracování osobních údajů (GDPR)
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            Nepřeplácejme · Jakub Melka · IČO: 22516280 ·{" "}
            <a
              href="mailto:info@nepreplacejme.cz"
              className="hover:text-foreground transition-colors"
            >
              info@nepreplacejme.cz
            </a>
          </p>
          <p className="text-xs text-muted-foreground/60">© {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

export default Gdpr;
