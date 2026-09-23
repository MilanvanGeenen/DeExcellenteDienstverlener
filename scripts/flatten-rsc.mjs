// De statische export schrijft __next.<route>/__PAGE__.txt, maar de browser vraagt
// __next.<route>.__PAGE__.txt op. Zonder deze kopieën geeft navigeren 404's en valt
// Next.js terug op volledige paginaladingen.
import fs from "node:fs";
import path from "node:path";

const outDir = path.resolve("out");

function flatten(dir, parent, name) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    const flatName = `${name}.${entry.name}`;
    if (entry.isDirectory()) flatten(full, parent, flatName);
    else fs.copyFileSync(full, path.join(parent, flatName));
  }
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const full = path.join(dir, entry.name);
    if (entry.name.startsWith("__next.")) flatten(full, dir, entry.name);
    else walk(full);
  }
}

if (fs.existsSync(outDir)) walk(outDir);
