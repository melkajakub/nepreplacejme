# Kontrola textů webu — 6. září 2026

## Rozsah a provedené úpravy

Prošly všechny stránky aplikace: úvod, kontrola vyúčtování, firmy a obce, sdílení elektřiny, blog, všech šest článků, GDPR a stránka nenalezeného obsahu. Kontrola zahrnula společné komponenty, starou nepoužívanou komponentu formuláře, metadata a manifest.

- Nasazen schválený úvod o vyúčtování, cenách, spotřebě a návrhu dalšího postupu. Pod tlačítky zůstává informace o bezplatné nezávazné kontrole.
- Patička obsahuje identitu provozovatele, schválené vymezení role obchodního zástupce IKAS GROUP, registraci ERÚ, charakter poptávky a odkaz pro mimosoudní řešení spotřebitelských sporů. Bez rozepisování provizí a marže.
- Nahrazeny absolutní sliby nejvýhodnější nabídky, objektivity a automatické úspory konkrétním popisem služby. U sdílení zachováno předchozí projednání cen a případných poplatků.
- Skutečné případy Blaženy, Milana a Lukáše zachovány podle podkladů provozovatele. Výpočty pro první dva případy označují rozdíl obchodní ceny, nikoli zaručenou celkovou úsporu.
- Blog: odstraněno doporučení okamžité fixace podle jediného pohybu burzy, zjednodušující tvrzení o sazbách a porovnávání výhradně bez DPH. Model pro večerku je výslovně model, v češtině i vietnamštině. URL článků a původní data vydání zachována, datum aktualizace doplněno.
- Sjednoceny popisky pro vyhledávače a sdílení a aktualizována mapa webu. Formulář Tally, jeho pole a integrace se neměnily; formulář nebyl testovacím odesláním použit.

## Zůstává k potvrzení provozovatelem

Tato kontrola není potvrzením právní bezvadnosti celého webu nebo smluvního procesu. Marketingové formulace lze opravit, ale nelze domýšlet skutečné smlouvy, zpracování dat ani podmínky partnerů.

1. **GDPR — skutečný tok dat.** Text uvádí Airtable a Fakturoid včetně existujících zpracovatelských smluv. Web nyní používá vložený formulář Tally. Je třeba potvrdit, kam přijaté podklady pokračují, které systémy se opravdu používají, kdo údaje dostává (včetně případné role IKAS) a jaké smlouvy/transferové záruky jsou skutečně sjednány. Text GDPR nebyl bez těchto podkladů přepsán.
2. **Doba uchování.** Plošné tvrzení o deseti letech po skončení služby a citované paragrafy je třeba ověřit a rozlišit podle účelu a typu dokumentu; nejde automaticky o stejný režim pro každý nezávazný kontakt a jeho vyúčtování.
3. **Analytika a souhlasy.** `index.html` načítá Google Analytics/Ads při otevření stránky; aplikace obsahuje také PostHog. Je třeba prověřit skutečné nastavení cookies/úložišť, souhlasů a informace pro návštěvníky. Měřicí kód se při této textové úpravě neměnil.
4. **Bezpečnostní tvrzení.** GDPR uvádí konkrétní bezpečnostní opatření. Potvrdit je podle reálného nastavení, nikoli podle šablony.
5. **Smluvní role a sdílení.** Veřejný registr dokládá registraci IKAS, nikoli obsah vztahu mezi IKAS a provozovatelem. Schválené vymezení role musí odpovídat skutečné spolupráci. Konkrétní nabídka sdílení musí objasnit ceny, případné poplatky a smluvní strany; tento web tyto individuální podmínky nenahrazuje.

## Použité veřejné podklady

- [Registrace IKAS u ERÚ](https://eru.gov.cz/registr-zprostredkovatelu/742543078)
- [ERÚ: Spor se zprostředkovatelem](https://eru.gov.cz/spor-se-zprostredkovatelem)
- [ERÚ: Ceny energií](https://eru.gov.cz/ceny-energii)
- [ERÚ: Smlouva s dodavatelem](https://eru.gov.cz/smlouva-s-dodavatelem)
- [ERÚ: Jak změnit dodavatele](https://eru.gov.cz/jak-zmenit-dodavatele)
- [ČEZ Distribuce: Změna distribuční sazby](https://www.cezdistribuce.cz/cs/pro-zakazniky/potrebuji-vyresit/stavajici-pripojeni/zmena-distribucni-sazby)
- [PXE: Market Data Hub](https://pxe.cz/cs/derivatovy-trh/market-data-hub)

## Opakovatelné ověření

`npm run build` a poté `npm run test:content` ověřují sestavení, schválený úvod/patičku, zachování šesti URL článků, shodu jejich metadat se statickými vstupy, rozlišení modelu od reference a přítomnost sestavené aplikace v jedenácti podstránkách.
