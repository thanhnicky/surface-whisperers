import { readFileSync, writeFileSync } from "node:fs";

const BASE = "https://mocdienstudio.com";
const src = readFileSync("src/content/blog/index.ts", "utf8");

const posts = [];
const re = /slug:\s*"([^"]+)"[\s\S]*?date:\s*"([^"]+)"[\s\S]*?status:\s*"([^"]+)"/g;
let m;
while ((m = re.exec(src))) {
  if (m[3] === "published") posts.push({ slug: m[1], date: m[2] });
}

const urls = [
  { loc: `${BASE}/`, priority: "1.0" },
  { loc: `${BASE}/blog`, priority: "0.8" },
  ...posts.map((p) => ({ loc: `${BASE}/blog/${p.slug}`, lastmod: p.date, priority: "0.7" })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ""}<priority>${u.priority}</priority></url>`).join("\n")}
</urlset>
`;

writeFileSync("public/sitemap.xml", xml);
console.log(`sitemap.xml generated: ${posts.length} published posts`);
