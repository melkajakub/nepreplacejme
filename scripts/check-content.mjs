import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import ts from "typescript";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const read = (path) => readFile(join(root, path), "utf8");
const normalize = (text) => text.replace(/\s+/g, " ");
const approved = "Z vyúčtování zjistím, jaké ceny za energie platíte a jakou máte spotřebu. Na základě těchto údajů vám navrhnu další postup, abyste zbytečně nepřepláceli.";
for (const page of ["Index", "InvoiceCheck", "Blog"]) {
  assert.ok(normalize(await read(`src/pages/${page}.tsx`)).includes(approved), `${page}: approved intro`);
}

const footer = await read("src/components/SiteFooter.tsx");
for (const required of ["22516280", "21963975", "742543078", "Dětkovice 6", "Věry Pánkové 829/2", "https://eru.gov.cz/spor-se-zprostredkovatelem"]) {
  assert.ok(footer.includes(required), `Footer: ${required}`);
}
const publicFiles = ["src/components/SiteFooter.tsx", "src/components/TransparentPricing.tsx", "src/components/ClientResults.tsx", "src/data/blogPosts.ts", "index.html", "public/manifest.json", "scripts/generate-static-routes.mjs", ...["Index", "InvoiceCheck", "BusinessEnergy", "Sharing", "Blog", "BlogPost"].map((p) => `src/pages/${p}.tsx`)];
for (const path of publicFiles) {
  const source = await read(path);
  assert.doesNotMatch(source, /proviz|moje odměna|mojí odměn|řeknu vám to na rovinu|doporučím vám nic neměnit|vždy objektivní|zafixujte co nejrychleji/i, path);
}

const compiled = ts.transpileModule(await read("src/data/blogPosts.ts"), {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
}).outputText;
const { blogPosts } = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString("base64")}`);
const expectedSlugs = ["jak-overit-cenu-elektriny-na-burze", "uspora-pro-vecerky-bistra-kinh-doanh-tiem-tap-hoa-quan-an", "uspora-pro-firmy-obce-a-zivnostniky", "sazba-d02d-zbytecne-draha", "ceska-pokuta-za-vernost", "jak-se-vyznat-ve-vyuctovani"];
assert.deepEqual(blogPosts.map((p) => p.slug).sort(), expectedSlugs.sort());
const escape = (text) => text.replaceAll("&", "&amp;").replaceAll('"', "&quot;");
for (const post of blogPosts) {
  assert.ok(post.updatedAt >= post.date, `${post.slug}: update date`);
  const html = await read(`dist/blog/${post.slug}/index.html`);
  assert.ok(html.includes(`<title>${escape(post.title)} | Nepřeplácejme.cz</title>`), `${post.slug}: title`);
  assert.ok(html.includes(`<meta name="description" content="${escape(post.excerpt)}">`), `${post.slug}: description`);
  assert.ok(html.includes(`href="https://nepreplacejme.cz/blog/${post.slug}"`), `${post.slug}: canonical`);
}
for (const route of ["kontrola-vyuctovani", "energie-pro-firmy", "sdileni-elektriny", "blog", "gdpr"]) {
  const html = await read(`dist/${route}/index.html`);
  assert.match(html, /src="\/assets\/index-[^"]+\.js"/);
  assert.doesNotMatch(html, /src="\/src\/main\.tsx"/);
}
const model = blogPosts.find((p) => p.slug.includes("vecerky")).content;
assert.match(model, /modelový výpočet, nikoli o výsledek konkrétního klienta/);
assert.match(model, /không phải kết quả của một khách hàng cụ thể/);
assert.match((await read("src/components/ClientResults.tsx")), /12 920/);
assert.equal((1700 - 940) * 17, 12920);
assert.equal((3950 - 2400) * 4, 6200);
console.log("Content checks passed: approved copy, footer, six preserved articles, model labels and 11 built routes.");
