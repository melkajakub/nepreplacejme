export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "jak-overit-cenu-elektriny-na-burze",
    title: "Jak si sami ověříte cenu elektřiny na burze? Návod, jak poznat férovou nabídku a kdy fixovat",
    excerpt: "Naučte se číst tržní data na burze PXE, odhadnout trend cen a využít setrvačnost ceníků dodavatelů při volbě fixace.",
    date: "2026-04-16",
    content: `Když vám dodavatel energií pošle novou nabídku, návrh fixace nebo ceník na příští období, většina lidí se podívá jen na měsíční zálohy nebo finální částku za megawatthodinu (MWh). Jenže z čeho se tato cena vlastně skládá? A jak poznat, zda se trh chystá spíše zlevňovat, nebo zdražovat?

Klíč k odpovídající ceníkové ceně i k odhadu budoucího vývoje leží na energetické burze. Právě tam nakupují elektřinu všichni významní dodavatelé v České republice.

Tyto údaje jsou veřejně dostupné a vy si je můžete vyhledat během minuty.

## Kde sledovat reálná data z trhu?

Pro český trh jsou klíčová data z derivátového trhu **PXE (POWER EXCHANGE CENTRAL EUROPE)**. Můžete si je kdykoliv otevřít přímo v jejich oficiálním přehledu:

**[Zobrazit aktuální tržní data na PXE Market Data Hub](https://pxe.cz/cs/derivatovy-trh/market-data-hub)**

V tomto přehledu uvidíte, za kolik se aktuálně obchoduje čistá silová elektřina na nadcházející roky (např. na příští rok nebo roky následující).

*Poznámka: Ceny na burze se uvádějí v eurech za megawatthodinu (€/MWh). Pro přibližný přepočet na koruny stačí cenu vynásobit aktuálním kurzem eura (např. 25 Kč).*

## Jak z burzovních dat poznat trend a zvolit strategii fixace?

Sledování burzy vám nedává jen přehled o dnešní ceně, ale ukazuje především **střednědobý trend**. Stačí se podívat, jak se liší ceny pro různé roky dodávky.

Je tu ale jedno velké **ALE**, na které většina zákazníků doplácí: **Ceníky dodavatelů nereagují na burzu okamžitě.** Na trhu funguje určitá setrvačnost.

- **Klesající trend na burze nemusí znamenat nejlevnější ceník:** Pokud burza mírně klesá, lidé mají tendenci čekat a nefixovat. Jenže vybraní dodavatelé často drží skvělé ceníky díky tomu, že nakoupili komoditu s předstihem za velmi výhodné ceny. Pokud takový dodavatel doplňuje zásoby nebo doprodává výhodné nákupy, může vám nabídnout fixovanou cenu, na kterou se burza po svém poklesu možná ani nedostane. V takové situaci dává smysl výhodnou fixaci uzamknout, i když grafy ukazují lehký pokles.
- **Rostoucí trend (Trh očekává zdražování):** Pokud ceny na vzdálenější roky na burze postupně rostou, trh signalizuje riziko. Zde platí, že čím dříve výhodnou cenu zafixujete, tím více ušetříte, než dodavatelé přecení své nabízené produkty směrem nahoru.

**Pravidlo z praxe:** Sledovat jen samotnou burzu nestačí. Vždy je potřeba porovnat *aktuální burzovní trend* s tím, *za kolik doplňují zásoby konkrétní dodavatelé*. Právě v tomto mezidobí vznikají ty nejvýhodnější nabídky na trhu.

## Z burzy až k vám do zásuvky: Z čeho se skládá výsledná cena?

Burzovní cena představuje čistou surovinovou cenu (tzv. silovou elektřinu). Aby se dostala až k vám do domu, firmy nebo obecní budovy, dodavatel k ní připočítává:

- **Marži dodavatele:** Náklady na provoz, zákaznický servis, administrativu a přiměřený zisk.
- **Náklady na odchylku:** Riziko spojené s tím, že vaši reálnou spotřebu nelze předem odhadnout na kilowatt přesně.
- **DPH (21 %):** Zákonná daň z přidané hodnoty.

*(Vedle toho platíte na faktuře ještě regulovanou složku za distribuci a jističe, kterou stanovuje Energetický regulační úřad a žádný dodavatel ji nemůže ovlivnit.)*

## Shrnutí: Jak se rozhodovat s chladnou hlavou?

Před podpisem jakékoliv nové smlouvy si vždy položte dvě základní otázky:

1. **Je nabízená cena férová vůči dnešní burze i historickým nákupům dodavatele?**
2. **Jaká délka fixace dává smysl vzhledem k trendu trhu a dostupným akčním ceníkům?**

## Nechce se vám burzovní grafy a přehledy studovat?

Rád to udělám za vás. Pošlete mi vaše stávající vyúčtování nebo novou nabídku přes formulář níže. Vaše podklady osobně projdu, porovnám je s aktuálním vývojem na burze a na rovinu vám řeknu, zda máte férové podmínky a jakou strategii se vám vyplatí zvolit.`,
  },
  {
    slug: "uspora-pro-vecerky-bistra-kinh-doanh-tiem-tap-hoa-quan-an",
    title: "Máte večerku nebo bistro? / Bạn đang kinh doanh tiệm tạp hóa hoặc quán ăn?",
    excerpt: "Průvodce úsporami a férovými cenami pro majitele prodejen a bister. / Hướng dẫn tiết kiệm và giá cả công bằng cho chủ cửa hàng và quán ăn.",
    date: "2026-04-14",
    content: `# Úspora pro večerky a bistra / Tiết kiệm chi phí cho tiệm tạp hóa và quán ăn

Provozovatelé večerek a bister mají specifický problém: jejich mrazáky, lednice a kuchyňské spotřebiče běží neustále. Náklady na elektřinu jsou jedním z největších výdajů hned po nájmu. 
Các chủ tiệm tạp hóa và quán ăn có một vấn đề đặc thù: tủ đông, tủ lạnh và các thiết bị nhà bếp chạy liên tục. Chi phí tiền điện là một trong những khoản chi lớn nhất ngay sau tiền thuê mặt bằng.

## Příklad z praxe / Ví dụ thực tế

Máte provozovnu se spotřebou **30 MWh** ročně a jedete na běžném ceníku? V takovém případě můžete přeplácet **okolo 30 000 Kč bez DPH ročně** oproti optimálnímu nastavení vašich podmínek a aktuálním tržním cenám.
Bạn có cửa hàng hoặc quán ăn với mức tiêu thụ **30 MWh** mỗi năm và đang sử dụng bảng giá thông thường? Trong trường hợp đó, bạn có thể đang trả thừa khoảng **30.000 Kč (chưa VAT) mỗi năm** so với thiết lập tối ưu và giá thị trường hiện tại.

## Dlouhodobě férové podmínky / Điều kiện công bằng lâu dài

Mým cílem není jen jednorázová změna, ale zajištění dlouhodobé stability. Chci, abyste měli jistotu, že vaše ceny odpovídají realitě trhu a neplatíte zbytečné poplatky navíc.
Mục tiêu của tôi không chỉ là thay đổi một lần, mà là đảm bảo sự ổn định lâu dài. Tôi muốn bạn chắc chắn rằng giá cả của mình khớp với thực tế thị trường và bạn không phải trả thêm các khoản phí không cần thiết.

## Moje odborná pomoc / Sự trợ giúp chuyên nghiệp của tôi

Prověřím vaši fakturu a zjistím, zda zbytečně nepřeplácíte. Pokud najdeme prostor pro úsporu, pomohu vám s veškerou administrativou spojenou s nastavením lepších podmínek.
Tôi sẽ kiểm tra hóa đơn của bạn và xem liệu bạn có đang trả thừa một cách không cần thiết hay không. Nếu tìm thấy cơ hội tiết kiệm, tôi sẽ giúp bạn hoàn tất mọi thủ tục giấy tờ liên quan đến việc thiết lập các điều kiện tốt hơn.

---

**Chcete platit méně? / Bạn muốn trả tiền điện ít hơn?**

Nahrajte mi poslední fakturu za elektřinu přes formulář níže. Spočítám vám úsporu a navrhnu optimální řešení.
Hãy gửi cho tôi hóa đơn tiền điện mới nhất của bạn qua mẫu dưới đây. Tôi sẽ tính toán mức tiết kiệm và đề xuất giải pháp tối ưu cho bạn.`,
  },
  {
    slug: "uspora-pro-firmy-obce-a-zivnostniky",
    title: "Firmy a obce: Neplatíte za energie víc, než budovy vyžadují?",
    excerpt: "U firemních a obecních odběrů se nevhodné nastavení tarifů může prodražit o desítky tisíc korun ročně.",
    date: "2026-04-12",
    content: `# Úspory pro firmy, obce a živnostníky

V podnikání i ve správě veřejného majetku se počítá každá koruna. U podnikatelských tarifů (kategorie C) je prostor pro úsporu mnohem větší než u domácností, zejména díky správné volbě distribučních sazeb a revizi obchodních cen u stabilních dodavatelů.

## Kde vznikají zbytečné náklady?

Často se setkávám s tím, že tarify jsou nastaveny podle starých potřeb, které už neodpovídají realitě. Výsledkem je zbytečně drahá distribuce nebo nevýhodná cena za silovou elektřinu. Moje role je prověřit, zda zbytečně nepřeplácíte.

---

**Řídíte firmu nebo obec?** Nahrajte mi poslední fakturu za elektřinu v PDF. Podívám se na vaše nastavení a odhadnu potenciál vašich úspor.`,
  },
  {
    slug: "sazba-d02d-zbytecne-draha",
    title: "Máte správně nastavenou distribuční sazbu?",
    excerpt: "Zjistěte, jak prostá změna tarifu může domácnosti ušetřit i přes tisíc korun ročně.",
    date: "2026-04-10",
    content: `# Nepřeplácíte zbytečně na poplatcích?

Při kontrole vyúčtování u domácností opakovaně vidím jeden a ten samý vzorec: nízká spotřeba, ale nevhodně zvolený tarif. To vede k tomu, že platíte zbytečně vysoké fixní poplatky každý měsíc.

## Malá změna, reálná úspora

Pokud elektřinou neohříváte vodu ani netopíte, existují tarify určené přímo pro vás. Přechod na vhodnější variantu nevyžaduje technické zásahy. Prověřím vaši fakturu a zjistím, zda zbytečně nepřeplácíte.

---

**Chcete si nechat prověřit svou sazbu?** Nahrajte mi svou poslední fakturu za elektřinu a já vám napíšu, zda je vaše nastavení optimální.`,
  },
  {
    slug: "ceska-pokuta-za-vernost",
    title: 'Česká „pokuta za věrnost": Proč se energie prodražují?',
    excerpt: "Proč loajální klienti často platí víc než ti noví a jak se tomu bránit.",
    date: "2026-04-08",
    content: `## Věrnost se u energií často nevyplácí

Většina dodavatelů energií nabízí novým zákazníkům lákavé ceny. Problém nastává po skončení fixace – smlouva se často automaticky prodlouží za podmínek, které už nejsou výhodné. 

## Dlouhodobě férový přístup

Cílem mé analýzy je prověřit, zda zbytečně nepřeplácíte a najít pro vás partnera, který se k vám bude chovat fér dlouhodobě. Stabilita a transparentnost jsou v energetice důležitější než krátkodobé akční nabídky.

---

**Nejste si jistí svou aktuální cenou?** Nahrajte mi svou poslední fakturu a já prověřím, zda odpovídá aktuálním možnostem trhu.`,
  },
  {
    slug: "jak-se-vyznat-ve-vyuctovani",
    title: "Jak se vyznat ve vyúčtování energií?",
    excerpt: "Vyúčtování je přehledné, ale srovnání nabídek už méně. Naučte se, proč sledovat výhradně obchodní složku bez DPH.",
    date: "2026-04-05",
    content: `## Proč srovnávat ceny bez DPH?

Samotné vyúčtování je jako dokument jasné – máte v něm srozumitelně oddělené položky s DPH i bez DPH. Problém nastává ve chvíli, kdy chcete srovnat svou stávající cenu s novou nabídkou nebo s tím, co platí soused. Jeden dodavatel se prezentuje cenou s daní, druhý bez daně, a někdo do toho zaplete i poplatky za distribuci.

**Aby bylo vaše srovnání objektivní, naučte se sledovat výhradně obchodní složku bez DPH.**

## Proč je to jediný správný metr?

DPH je pro všechny stejné a určuje ho stát. Distribuce je také pevně daná a u každého dodavatele v daném regionu bude identická. Pokud chcete zjistit, kdo vám dává lepší nabídku, musíte porovnávat „motor“ celého vyúčtování – tedy čistou cenu od dodavatele.

## Na co se zaměřit při srovnávání:

1. **Obchodní cena za silovou elektřinu (bez DPH):** To je částka za každou odebranou MWh. Porovnáváním této ceny bez daně získáte okamžitý přehled o férovosti nabídky.
2. **Stálý měsíční plat (bez DPH):** Fixní poplatek, který platíte dodavateli bez ohledu na spotřebu. Je důležité ho srovnávat opět v ceně bez DPH, abyste viděli reálný rozdíl v nákladech na správu vašeho odběrného místa.

Tím, že si zvyknete pracovat s cenami bez DPH, získáte jistotu, že porovnáváte vždy stejné a objektivní údaje, ať už máte v ruce fakturu od kohokoliv.

---

**Chcete mít ve srovnání jasno?** Nahrajte mi poslední fakturu v PDF přes formulář níže. Já z ní vytáhnu čistou obchodní složku i stálý plat bez DPH a narovinu vám řeknu, jak si stojíte oproti trhu.`,
  },
];
