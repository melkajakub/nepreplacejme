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
    description: "Pošlete vyúčtování elektřiny nebo plynu. Zdarma prověřím cenu, smlouvu i distribuční sazbu a řeknu vám, zda má změna smysl.",
  },
  {
    path: "energie-pro-firmy",
    title: "Elektřina a plyn pro firmy a obce | Nepřeplácejme.cz",
    description: "Kontrola smluv, individuální nabídky a správa termínů pro firmy, podnikatele a obce. Klient za službu nic neplatí.",
  },
  {
    path: "sdileni-elektriny",
    title: "Sdílení elektřiny pro výrobce i odběratele | Nepřeplácejme.cz",
    description: "Propojení výrobců elektřiny s domácnostmi, firmami a obcemi. Prověření výroby, spotřeby a zajištění dalšího postupu.",
  },
  {
    path: "blog",
    title: "Rady k cenám elektřiny a plynu | Nepřeplácejme.cz",
    description: "Praktické rady k vyúčtování, cenám elektřiny a plynu, fixacím a úsporám pro domácnosti i firmy.",
  },
  {
    path: "blog/jak-overit-cenu-elektriny-na-burze",
    title: "Jak si ověřit cenu elektřiny na burze | Nepřeplácejme.cz",
    description: "Jak číst velkoobchodní ceny elektřiny, posoudit nabídku dodavatele a zvolit vhodný okamžik pro fixaci.",
  },
  {
    path: "blog/uspora-pro-vecerky-bistra-kinh-doanh-tiem-tap-hoa-quan-an",
    title: "Úspora elektřiny pro večerky a bistra | Nepřeplácejme.cz",
    description: "Kontrola ceny elektřiny pro večerky a bistra v češtině a vietnamštině. Praktický příklad a možnost bezplatného posouzení.",
  },
  {
    path: "blog/uspora-pro-firmy-obce-a-zivnostniky",
    title: "Úspora energií pro firmy, obce a živnostníky | Nepřeplácejme.cz",
    description: "Kde firmám a obcím vznikají zbytečné náklady na energie a co prověřit ve smlouvě, ceně a distribuční sazbě.",
  },
  {
    path: "blog/sazba-d02d-zbytecne-draha",
    title: "Máte správně nastavenou distribuční sazbu? | Nepřeplácejme.cz",
    description: "Nevhodná distribuční sazba může zbytečně zdražovat elektřinu i domácnosti s malou spotřebou. Zjistěte, co zkontrolovat.",
  },
  {
    path: "blog/ceska-pokuta-za-vernost",
    title: "Proč se věrnost dodavateli energií může prodražit | Nepřeplácejme.cz",
    description: "Jak automatické prodloužení a staré ceníky zdražují elektřinu a plyn a proč podmínky řešit před koncem fixace.",
  },
  {
    path: "blog/jak-se-vyznat-ve-vyuctovani",
    title: "Jak se vyznat ve vyúčtování energií | Nepřeplácejme.cz",
    description: "Jak správně porovnat obchodní cenu, stálý plat a distribuční část vyúčtování elektřiny nebo plynu.",
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
