## Cíl

Zachovat stávající vizuál (navy + bílá, kulaté logo, sekce, karty, Tally formulář, patička s legálkou) a **přepsat obsah** homepage tak, aby projekt komunikoval novou myšlenku: **nezávislý nákupčí a poradce pro energie pro domácnosti, firmy a obce** — ne "kontrola faktur". Copy v první osobě (já, Jakub), bez vymyšlených čísel a bez agresivního prodeje.

## Co se změní (jen text a struktura sekcí)

### 1. `index.html` — SEO / meta
- **Title:** `Nepřeplácejme.cz | Nezávislý nákup a poradce pro energie`
- **Description:** `Srovnání ceníků pro domácnosti a individuální velkoobchodní nákup energií pro firmy a obce. Transparentně, bez skrytých háčků a bez nátlaku.`
- Sladit OG a Twitter title/description se stejným zněním.
- Odstranit staré zmínky o "kontrole faktur" z meta.

### 2. `src/pages/Index.tsx` — hlavička
- Přidat pod název tagline `Nezávislý nákup a poradce pro energie`.
- Navigace: `Pro domácnosti` (kotva `#domacnosti`), `Pro firmy a obce` (kotva `#firmy`), `Jak to funguje` (kotva `#jak-to-funguje`), Blog (zachovat).
- Header CTA vpravo: tlačítko `Nezávazná konzultace` → `#formular`.

### 3. Hero
- H1: `Energie pro domov i podnikání. Srozumitelně, férově a bez tlaku.`
- Podtitulek: `Pomáhám domácnostem, firmám a obcím vyznat se v možnostech na trhu s energiemi. Srovnám nabídky předních dodavatelů, u větších odběrů vyjednám individuální podmínky – bez skrytých háčků a zbytečného papírování.`
- Dvě tlačítka (zachovat stávající styl variantů `default` + `outline`):
  1. `Chci řešení pro domácnost` → `#domacnosti`
  2. `Poptat nabídku pro firmu / obec` → `#firmy`
- Zachovat řádek s audience badges (domácnosti / firmy / obce).
- Zachovat 3 karty situací (faktura / přepis / nové odběrné místo) i callout o bytech s malou spotřebou — jen mírně sladit s novým tónem (ne "kontrola faktury", ale "nezávazné posouzení podmínek").

### 4. NOVĚ: Trust banner (pod hero)
Výrazný, ale klidný callout (styl jako stávající callout o malé spotřebě, jen na plnou šířku):
> **Nejsem dodavatel energií. Jsem váš nezávislý partner pro jejich nákup.**
> Smlouvu o dodávkách vždy podepisujete přímo s prověřenými a stabilními dodavateli na českém trhu. Mým úkolem je vyjednat u nich pro vás ty nejlepší možné podmínky, pohlídat smlouvy a ušetřit vám čas i peníze.

### 5. NOVĚ: Sekce Dvojí nabídka (`#domacnosti` + `#firmy`)
Dvě velké karty vedle sebe ve stylu stávajících karet (bílé pozadí, border, subtle stín):

**Karta 1 — 🏠 Pro Domácnosti** (`id="domacnosti"`)
- Nadpis: `Klid a jistota pro váš domov`
- Podtitulek: `Nezávislé srovnání ceníků od prověřených a stabilních českých dodavatelů.`
- 3 body: srovnání TOP dodavatelů / srozumitelně a polopatě / přechod a papírování vyřídím za vás
- CTA: `Nezávazně posoudit smlouvu` → `#formular`

**Karta 2 — 🏢 Pro Firmy a Obce** (`id="firmy"`)
- Nadpis: `Individuální velkoobchodní nákup`
- Podtitulek: `Řešení na míru pro větší odběry navázané na reálný vývoj trhu.`
- 3 body: přístup k individuálním nabídkám / konkurenceschopnost / kompletní energetický servis
- CTA: `Poptat B2B řešení` → `#formular`

### 6. NOVĚ: Jak probíhá spolupráce (`#jak-to-funguje`)
Nahradí (nebo doplní) stávající sekci "Pilíře spolupráce" — 3 kroky horizontálně:
1. **Pošlete podklady** — poslední vyúčtování nebo roční spotřeba
2. **Připravím přehled** — porovnám trh nebo poptám individuální nabídku
3. **Vyberete si a šetříte** — administrativu vyřídím, když ne, nic se neděje

### 7. Sekce Pilíře důvěry
Ponechat stávající sekci pilířů, ale přepsat texty na 4 body podle briefu:
- 🔒 100% bezpečnost — spolupráce s licencovanými dodavateli
- ⚖️ Plná legálnost a etika — v souladu s energetickým zákonem a ERÚ
- 🤝 Nezávislost — doporučuji to, co vychází nejlépe pro vaše OM
- 🛑 Nulový nátlak — rozhodnutí je 100 % na vás

### 8. Sekce formulář (`#formular`)
- Ponechat dvousloupcový layout + Tally embed beze změny.
- Nadpis přepsat na: `Nezávazná poptávka / Konzultace`
- Podtitulek: `Ozvu se vám zpět s konkrétním návrhem.`
- Ponechat medailonek Jakuba Melky (`Váš nezávislý energetický poradce` → **`Nezávislý nákupčí a poradce pro energie`**).

### 9. Patička
- Zachovat kompletně stávající legální patičku (Jakub Melka, IČO 22516280, IKAS GROUP s.r.o., ERÚ 742543078, GDPR odkaz).
- Přidat větu: `Nejsem dodavatel energií — jsem nezávislý zprostředkovatel a poradce. Smlouvu vždy podepisujete přímo s vybraným licencovaným dodavatelem.`

## Co se NEmění

- Vizuální styl, barvy, typografie, komponenty, logo.
- Blog, GDPR stránka, routing, Tally formulář, tracking (GA / Ads / OG image).
- Struktura projektu, závislosti.

## Otevřená otázka

Sekce "Aktuálně z projektu" (blog preview na homepage) — nechat tak, jak je, nebo přepsat její jediný odstavec do nového tónu (nezávislý nákupčí místo "kontrola faktur")? Defaultně **přepíšu** stejným tónem, ať to nezní jako z jiného webu.