import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dist = join(root, "dist");
const template = await readFile(join(dist, "index.html"), "utf8");

const routes = [
  {
    path: "kontrola-vyuctovani",
    title: "Kontrola vyúčtování elektřiny a plynu zdarma | Nepřeplácejme.cz",
    description: "Z vyúčtování zjistím vaše ceny a spotřebu. Navrhnu další postup, abyste za elektřinu a plyn zbytečně nepřepláceli. Kontrola je zdarma.",
  },
  {
    path: "energie-pro-firmy",
    title: "Elektřina a plyn pro firmy a obce | Nepřeplácejme.cz",
    description: "Porovnání cen elektřiny a plynu, individuální nabídky a pomoc s termíny smluv pro firmy a obce. Kontrola vyúčtování je zdarma a nezávazná.",
  },
  {
    path: "sdileni-elektriny",
    title: "Sdílení elektřiny pro výrobce i odběratele | Nepřeplácejme.cz",
    description: "Propojení výrobců elektřiny s domácnostmi, firmami a obcemi. Posouzení výroby, spotřeby a možností zapojení do sdílení.",
  },
  {
    path: "blog",
    title: "Rady k cenám elektřiny a plynu | Nepřeplácejme.cz",
    description: "Praktické rady k vyúčtování, cenám elektřiny a plynu, fixacím a úsporám pro domácnosti i firmy.",
  },
  {
    path: "blog/jak-overit-cenu-elektriny-na-burze",
    title: "Jak číst cenu elektřiny na burze a rozhodovat se o fixaci | Nepřeplácejme.cz",
    description: "Burzovní cena je vodítko, ne hotová nabídka pro vaše odběrné místo. Co při porovnání sledovat a proč s fixací nerozhoduje jediný graf.",
  },
  {
    path: "blog/uspora-pro-vecerky-bistra-kinh-doanh-tiem-tap-hoa-quan-an",
    title: "Máte večerku nebo bistro? / Bạn đang kinh doanh tiệm tạp hóa hoặc quán ăn? | Nepřeplácejme.cz",
    description: "Co zkontrolovat v nákladech na elektřinu u prodejny nebo bistra. / Những điểm cần kiểm tra trong chi phí điện của cửa hàng hoặc quán ăn.",
  },
  {
    path: "blog/uspora-pro-firmy-obce-a-zivnostniky",
    title: "Energie pro firmy a obce: co zkontrolovat ve smlouvách | Nepřeplácejme.cz",
    description: "Cena za MWh, stálé platby, distribuční sazba a termíny smluv. Základní přehled pro jedno i více odběrných míst.",
  },
  {
    path: "blog/sazba-d02d-zbytecne-draha",
    title: "Máte správně nastavenou distribuční sazbu? | Nepřeplácejme.cz",
    description: "U malé spotřeby mohou být důležité i stálé platby. Vhodnost distribuční sazby záleží na odběru, spotřebičích a podmínkách připojení.",
  },
  {
    path: "blog/ceska-pokuta-za-vernost",
    title: "Věrnost dodavateli energií: kdy znovu porovnat nabídky? | Nepřeplácejme.cz",
    description: "Před koncem smlouvy porovnejte podmínky dalšího období. Důležitá je cena, délka závazku i pravidla prodloužení.",
  },
  {
    path: "blog/jak-se-vyznat-ve-vyuctovani",
    title: "Jak se vyznat ve vyúčtování energií? | Nepřeplácejme.cz",
    description: "Jak porovnat cenu za MWh, stálé platby a celkové roční náklady. S DPH nebo bez ní, ale vždy na stejném základě.",
  },
  {
    path: "gdpr",
    title: "Ochrana osobních údajů | Nepřeplácejme.cz",
    description: "Informace o zpracování a ochraně osobních údajů při využívání služeb Nepřeplácejme.cz.",
  },
];

const escapeAttribute = (value) => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;");

for (const route of routes) {
  const url = `https://nepreplacejme.cz/${route.path}`;
  const title = escapeAttribute(route.title);
  const description = escapeAttribute(route.description);
  const html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${description}">`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`)
    .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`)
    .replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${title}">`)
    .replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${description}">`)
    .replace(/<meta name="twitter:title" content="[^"]*">/, `<meta name="twitter:title" content="${title}">`)
    .replace(/<meta name="twitter:description" content="[^"]*">/, `<meta name="twitter:description" content="${description}">`);

  const output = join(dist, route.path, "index.html");
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, html);
}

console.log(`Generated ${routes.length} static route entries.`);
