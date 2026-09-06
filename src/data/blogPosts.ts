export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  updatedAt?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "jak-overit-cenu-elektriny-na-burze",
    title: "Jak číst cenu elektřiny na burze a rozhodovat se o fixaci",
    excerpt: "Burzovní cena je vodítko, ne hotová nabídka pro vaše odběrné místo. Co při porovnání sledovat a proč s fixací nerozhoduje jediný graf.",
    date: "2026-04-16",
    updatedAt: "2026-09-06",
    content: `Velkoobchodní cena pomáhá orientovat se na trhu. Samotný rozdíl mezi cenou na burze a vaším ceníkem ale neříká, kolik dodavatel vydělává ani jaká nabídka je pro vás vhodná.

## Kde sledovat velkoobchodní ceny

Výchozím bodem může být [PXE Market Data Hub](https://pxe.cz/cs/derivatovy-trh/market-data-hub). Sledujte, pro kterou zemi a období dodávky je produkt určen. Cenu na příští rok nelze přímo zaměňovat s cenou na dnešním krátkodobém trhu. U hodnot v EUR/MWh záleží při přepočtu také na použitém kurzu.

## Fixace není sázka na jediný pohyb grafu

Růst ceny na burze není sám o sobě pokynem k okamžitému podpisu. Stejně tak pokles nezaručuje, že dodavatel brzy nabídne levnější ceník. [ERÚ upozorňuje](https://eru.gov.cz/smlouva-s-dodavatelem), že výkyvy cen nelze předvídat a vhodnou délku fixace nelze určit univerzálně.

Při rozhodování porovnejte konkrétní nabídky, začátek dodávky, dobu závazku a podmínky předčasného ukončení. Důležitá je také vaše potřeba předvídatelných výdajů.

## Burzovní cena není celá faktura

Cena na vyúčtování zahrnuje obchodní část, regulované platby a daně. Obchodní cenu stanovuje dodavatel; nelze ji jednoduše ztotožnit s burzovní cenou navýšenou o jednu přirážku. Podrobnosti vysvětluje [ERÚ v přehledu cen energií](https://eru.gov.cz/ceny-energii).

**Chcete porovnat konkrétní nabídku?** Pošlete poslední vyúčtování a případně nový ceník. Podívám se na ceny, spotřebu a smluvní podmínky a navrhnu další postup.`,
  },
  {
    slug: "uspora-pro-vecerky-bistra-kinh-doanh-tiem-tap-hoa-quan-an",
    title: "Máte večerku nebo bistro? / Bạn đang kinh doanh tiệm tạp hóa hoặc quán ăn?",
    excerpt: "Co zkontrolovat v nákladech na elektřinu u prodejny nebo bistra. / Những điểm cần kiểm tra trong chi phí điện của cửa hàng hoặc quán ăn.",
    date: "2026-04-14",
    updatedAt: "2026-09-06",
    content: `Lednice, mrazáky a kuchyňské vybavení mohou tvořit významnou část spotřeby provozovny. Při porovnání nabídek proto záleží na ceně elektřiny, stálých platbách i způsobu provozu.
Tủ lạnh, tủ đông và thiết bị nhà bếp có thể chiếm phần lớn lượng điện tiêu thụ của cửa hàng. Khi so sánh các đề nghị, cần xem xét giá điện, phí cố định và cách vận hành.

## Modelový výpočet / Ví dụ tính toán minh họa

Při spotřebě **30 MWh ročně** a rozdílu v obchodní ceně **1 000 Kč/MWh bez DPH** vychází rozdíl **30 000 Kč ročně bez DPH**. Jde o modelový výpočet, nikoli o výsledek konkrétního klienta nebo příslib úspory. Nezahrnuje rozdíly ve stálých platbách, regulovaných položkách ani případné náklady na ukončení smlouvy.
Với mức tiêu thụ **30 MWh mỗi năm** và chênh lệch giá điện **1.000 Kč/MWh chưa VAT**, chênh lệch chi phí là **30.000 Kč mỗi năm chưa VAT**. Đây là ví dụ minh họa, không phải kết quả của một khách hàng cụ thể hay cam kết tiết kiệm. Phép tính chưa bao gồm chênh lệch phí cố định, các khoản phí do cơ quan quản lý quy định hoặc chi phí chấm dứt hợp đồng nếu có.

## Co porovnám / Tôi sẽ so sánh những gì

Z posledního vyúčtování zjistím cenu a spotřebu. S přihlédnutím ke smluvním podmínkám porovnám dostupné nabídky spolupracujících dodavatelů a připravím návrh dalšího postupu.
Từ hóa đơn gần nhất, tôi sẽ xác định giá điện và mức tiêu thụ. Dựa trên các điều khoản hợp đồng, tôi sẽ so sánh những đề nghị hiện có từ các nhà cung cấp hợp tác và đề xuất các bước tiếp theo.

**Pošlete poslední vyúčtování ke kontrole. / Hãy gửi hóa đơn gần nhất để kiểm tra.**

Stačí PDF nebo čitelná fotografie. Kontrola vyúčtování je zdarma a nezávazná.
Chỉ cần tệp PDF hoặc ảnh rõ nét. Việc kiểm tra hóa đơn là miễn phí và không ràng buộc.`,
  },
  {
    slug: "uspora-pro-firmy-obce-a-zivnostniky",
    title: "Energie pro firmy a obce: co zkontrolovat ve smlouvách",
    excerpt: "Cena za MWh, stálé platby, distribuční sazba a termíny smluv. Základní přehled pro jedno i více odběrných míst.",
    date: "2026-04-12",
    updatedAt: "2026-09-06",
    content: `U firmy nebo obce se vyplatí posuzovat odběrná místa jednotlivě. Kancelář, obchod a provozovna s elektrickým vytápěním mají odlišné potřeby. Samotný počet míst ani vysoká spotřeba ještě neurčují, kolik lze ušetřit.

## Co má smysl prověřit

- **Ceny a stálé platby:** Jaké náklady vycházejí při vaší spotřebě za celé porovnávané období.
- **Smluvní termíny:** Kdy končí závazek a jaké jsou podmínky dalšího období nebo ukončení smlouvy.
- **Nastavení odběru:** Zda distribuční sazba a parametry připojení odpovídají využití místa.

## Od podkladů k porovnání nabídek

Pošlete vyúčtování a informace o smlouvách. U menších odběrů porovnám dostupné ceníky spolupracujících dodavatelů, u větších poptám individuální podmínky.

U obcí zohledníme také pravidla, kterými se řídí výběr dodavatele. Nabídka je podklad pro vaše rozhodnutí, nikoli náhrada případného zadávacího postupu.

**Řešíte jedno nebo více odběrných míst?** K vyúčtování připište jejich počet a termíny konce smluv, pokud je znáte. Připravím návrh dalšího postupu.`,
  },
  {
    slug: "sazba-d02d-zbytecne-draha",
    title: "Máte správně nastavenou distribuční sazbu?",
    excerpt: "U malé spotřeby mohou být důležité i stálé platby. Vhodnost distribuční sazby záleží na odběru, spotřebičích a podmínkách připojení.",
    date: "2026-04-10",
    updatedAt: "2026-09-06",
    content: `Při kontrole elektřiny nestačí sledovat jen cenu za MWh. U menší spotřeby mohou významnou část ročních nákladů tvořit pravidelné platby. Proto posuzuji také distribuční sazbu a velikost hlavního jističe.

## D01d není automaticky lepší než D02d

Vhodnost sazby záleží na spotřebě, cenách pro dané distribuční území, jističi i splnění podmínek sazby. Nelze doporučit jednu variantu každému bytu pouze podle toho, že má malou spotřebu. Přehled podmínek pro domácnosti zveřejňuje [ČEZ Distribuce](https://www.cezdistribuce.cz/cs/pro-zakazniky/potrebuji-vyresit/stavajici-pripojeni/zmena-distribucni-sazby/jednoduchy-prehled-distribucnich-sazeb/domacnost).

## Co obnáší změna

Postup závisí na současné a požadované sazbě i technickém stavu odběrného místa. Změna může vyžadovat další podklady nebo technické úpravy. Konkrétní požadavky ověříme u vašeho distributora; příklad postupu nabízí [ČEZ Distribuce](https://www.cezdistribuce.cz/cs/pro-zakazniky/potrebuji-vyresit/stavajici-pripojeni/zmena-distribucni-sazby).

**Chcete posoudit svou sazbu?** Pošlete poslední vyúčtování a napište, zda elektřinou topíte, ohříváte vodu nebo nabíjíte elektromobil. Porovnám možnosti podle vašeho odběru.`,
  },
  {
    slug: "ceska-pokuta-za-vernost",
    title: "Věrnost dodavateli energií: kdy znovu porovnat nabídky?",
    excerpt: "Před koncem smlouvy porovnejte podmínky dalšího období. Důležitá je cena, délka závazku i pravidla prodloužení.",
    date: "2026-04-08",
    updatedAt: "2026-09-06",
    content: `Dlouhodobá spolupráce s dodavatelem může mít své výhody. Neznamená ale, že podmínky sjednané před několika lety odpovídají dnešní nabídce nebo vašemu současnému odběru.

## Pohlídejte si další smluvní období

Před prodloužením si projděte novou cenu, stálé platby a dobu závazku. Podmínky automatického prodloužení a práva spotřebitele vysvětluje [ERÚ](https://eru.gov.cz/smlouva-s-dodavatelem). Samotné prodloužení smlouvy není automaticky nevýhodné; rozhodují konkrétní podmínky.

## Porovnávejte celou nabídku

Nižší cena za MWh může být doprovázena vyšším stálým platem nebo jinou délkou závazku. Při rozhodování proto zohledněte více než reklamní cenu. Na význam obchodních podmínek upozorňuje také [průvodce změnou dodavatele od ERÚ](https://eru.gov.cz/jak-zmenit-dodavatele).

**Blíží se konec smlouvy?** Pošlete vyúčtování a nabídku na další období, pokud ji už máte. Porovnám podmínky s dostupnými nabídkami a navrhnu další postup.`,
  },
  {
    slug: "jak-se-vyznat-ve-vyuctovani",
    title: "Jak se vyznat ve vyúčtování energií?",
    excerpt: "Jak porovnat cenu za MWh, stálé platby a celkové roční náklady. S DPH nebo bez ní, ale vždy na stejném základě.",
    date: "2026-04-05",
    updatedAt: "2026-09-06",
    content: `Vyúčtování obsahuje více položek a nejnižší cena za MWh nemusí znamenat nejnižší celkové náklady. Pro srovnání si připravte poslední fakturu, platný ceník a podmínky nové nabídky.

## S DPH, nebo bez DPH?

Pro výdaje domácnosti je podstatná konečná cena včetně daně. Nabídky lze početně porovnat i bez DPH, pokud jsou všechny částky na stejném základě. **Nemíchejte ceny s DPH a bez DPH ani cenu za kWh a MWh.** Jedna MWh odpovídá 1 000 kWh.

## Co na vyúčtování rozlišit

- **Obchodní cenu a stálý plat dodavatele.** Sledujte cenu za odebranou energii i poplatky účtované bez ohledu na spotřebu.
- **Regulované položky.** Změna dodavatele sama o sobě neznamená jinou distribuční sazbu ani jiného distributora. Náklady ale závisí také na parametrech vašeho odběru.
- **Daně a celkovou částku.** Pro domácí rozpočet porovnávejte výsledné výdaje, ne jen jednu položku.

Rozdělení ceny na obchodní a regulovanou část a daně popisuje [ERÚ](https://eru.gov.cz/ceny-energii).

## Porovnejte stejné období a spotřebu

Použijte stejnou předpokládanou roční spotřebu a připočtěte stálé platby za celé období. Zohledněte délku závazku a případné náklady související se změnou. Další body pro srovnání shrnuje [ERÚ v průvodci změnou dodavatele](https://eru.gov.cz/jak-zmenit-dodavatele).

Vyúčtování popisuje minulé období. Pokud od té doby dodavatel změnil cenu, přiložte také aktuální ceník nebo oznámení o změně.

**Chcete s porovnáním pomoci?** Pošlete poslední vyúčtování. Zjistím z něj ceny a spotřebu a navrhnu další postup.`,
  },
];
