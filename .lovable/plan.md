
## Cíl

Dotáhnout stávající homepage `src/pages/Index.tsx` — sjednotit rytmus, spacing, karty a decentně pročistit texty. Žádný redesign, žádné nové sekce, stejná paleta i tón. Změny pouze v `src/pages/Index.tsx` (a případně drobnost v `src/index.css`, pokud bude potřeba token pro alternující pozadí).

## Úpravy po sekcích

### 1. Hero (řádky 84–208)
- Sjednotit vertikální mezery: `space-y-8` → `space-y-6`, pt-2 buffery pročistit; hero už neobsahuje sekundární sub-bloky bez důvodu.
- Podnadpis omezit na `max-w-2xl` (dnes `max-w-3xl`) pro lepší řádkování.
- Sociální proof (3 odrážky) — zkrátit a odlehčit: dnes vypadají jako věty odstavce. Přeformulovat na 3 stručné, paralelně stavěné položky (≤ ~8 slov každá) a zmenšit na jednotné `text-sm`.
- CTA tlačítka: sjednotit padding s ostatními (`size="lg"` bez extra `py-6`), ikony nechat.
- 3 karty situací (Faktura / Přepis / Nové OM) — sjednotit výšku (`h-full` na kartě, `min-h` na titulku 2 řádky) a mírně snížit `p-6` → jednotné s ostatními kartami; `shadow-glow` na hoveru je moc, dát `shadow-md`.
- Callout „malá spotřeba" — decentnější (`bg-muted/40` místo `bg-primary/5` + border `border-border`), aby nesplýval s Trust bannerem.

### 2. Trust banner (řádky 210–229)
- Ponechat jako jediný „silný" navy blok. Zmenšit padding na desktopu (`p-8`), stín zmírnit (`shadow-soft`) — aktuálně příliš dominuje.
- Odstín kopie: zkrátit druhou větu, ať se motiv „podpis přímo s dodavatelem" neopakuje 3× po stránce (zůstane v Trust banneru + jednou v footeru; jinde vypustit).

### 3. Dual offering B2C/B2B (řádky 231–342)
- Přidat společný nadpis sekce („Komu pomáhám") + krátký podnadpis, aby sekce nezačínala rovnou dvěma kartami bez kontextu.
- Sjednotit obě karty: stejný padding (`p-8`), stejný odstup `mb-6`, obě CTA tlačítka `variant="default"` **nebo** obě `outline` — teď je jedno plné a druhé outline, což vytváří falešnou hierarchii mezi B2C a B2B. Sjednotit na `default` (primární), rozdíl komunikuje ikona + label.
- Uppercase eyebrow (`Pro domácnosti` / `Pro firmy a obce`) sjednotit se stejnou třídou i velikostí.

### 4. „Jak probíhá spolupráce" (řádky 344–397)
- Vizuálně kroky napojit — přidat jemnou horizontální linku mezi kroky na desktopu (`hidden md:block` absolute) nebo aspoň sjednotit ikony a velikost číselného kolečka. Zmenšit `shadow-glow` na kolečku na `shadow-md`.
- Sjednotit padding karet s ostatními sekcemi (`p-6`).

### 5. Pilíře (řádky 399–440)
- Zredukovat vertikální mezery uvnitř karet (`space-y-4` → `space-y-3`), sjednotit `p-6`.
- Přeformulovat druhý pilíř tak, aby se neopakovalo slovo „nezávislý" (už je v hero, tagline, footer, Trust banneru). Např. „Doporučení podle vašich čísel" nebo „Řešení šité na míru vaší spotřebě".
- Přeformulovat třetí pilíř, aby se opakovaně neobjevoval „nátlak" — např. „Rozhodnutí necháváme vždy na vás" + kratší popis.

### 6. Blog preview (řádky 442–463)
- Ponechat, jen sjednotit padding (`p-8` místo `p-10`) a mezery, ať sekce nepůsobí příliš velká vůči obsahu.

### 7. Formulářová sekce (řádky 465–509)
- Snížit padding sekce (`py-16 md:py-20`), aby závěr netrhal rytmus.
- Levý sloupec: zmenšit odsazení mezi textem a medailonkem (`pt-2` → 0, `space-y-8` → `space-y-6`).
- Text vedle formuláře: mírně zkrátit — první dvě věty jsou redundantní.
- Wrapper kolem Tally (`p-4 md:p-6`) — na desktopu má formulář kolem sebe padding zbytečně, snížit na `p-2 md:p-4`, aby iframe nevisel v prázdném rámu.

### 8. Footer (řádky 512–570)
- Rozložit na 2-sloupcový layout na desktopu (levá: navigace + kontakt, pravá: legální disclaimery), na mobilu zůstane stack.
- Sjednotit velikosti (`text-sm` navigace, `text-xs` disclaimery), rovnoměrný `gap-y`.
- Sloučit dva disclaimer odstavce do jednoho vizuálního bloku s decentním horním borderem, aby footer nepůsobil jako 4 volné odstavce pod sebou.
- Ponechat kompletně všechna povinná data (Jakub Melka, IČO 22516280, IKAS GROUP s.r.o., ERÚ 742543078, GDPR odkaz, e-mail).

### 9. Text — pročištění opakování napříč stránkou
Zredukovat, aby se motivy neopakovaly:
- „Nezávislý / nezávislé" — nechat v tagline + Trust banneru + pilíři, jinde nahradit synonymem nebo vypustit.
- „Bez nátlaku / bez tlaku" — nechat v hero podnadpisu + pilíři.
- „Podpis přímo s dodavatelem" — nechat v Trust banneru + footer disclaimer, z ostatních míst vypustit.
- „Administrativa / papírování" — sjednotit terminologii, nepoužívat oba výrazy vedle sebe.

## Co se NEmění
- Barvy, tokeny, fonty, logo, komponenty shadcn, routing, `TallyEmbed`, tracking, blog, GDPR, `index.html` meta, Google Analytics/Ads.
- Struktura sekcí (žádná se nepřidává ani neubírá).
- Hlavní H1 ani hlavní message.

## Technická poznámka
Všechny úpravy jsou tailwind classy a textové řetězce v `src/pages/Index.tsx`. Žádné nové závislosti, žádné nové komponenty, žádné změny v backendu ani buildu.
