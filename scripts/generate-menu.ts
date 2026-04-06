/**
 * Regenerates src/data/menu.ts from the Excel workbook.
 * Usage: bun scripts/generate-menu.ts [path-to.xlsx]
 * Default: $MENU_XLSX or ~/Downloads/NEW MANU-1.xlsx
 */
import { spawnSync } from "node:child_process";
import * as fs from "node:fs";
import * as path from "node:path";
import * as XLSX from "xlsx";

const defaultPath = path.join(
  process.env.HOME ?? "",
  "Downloads",
  "NEW MANU-1.xlsx",
);

const src = process.argv[2] ?? process.env.MENU_XLSX ?? defaultPath;

function parsePrice(cell: unknown): string | null {
  if (cell === undefined || cell === null) return null;
  const m = String(cell)
    .trim()
    .match(/Rs\.?\s*([\d.]+)/i);
  return m?.[1] ?? null;
}

const wb = XLSX.readFile(src);
const ws = wb.Sheets.Sheet1;
if (!ws) {
  throw new Error("Sheet1 not found in workbook");
}

const raw = XLSX.utils.sheet_to_json<(string | number | undefined)[]>(ws, {
  header: 1,
  defval: "",
});

type MenuItem = { name: string; price: string };
type MenuSection = { title: string; items: MenuItem[] };
type MenuGroup = { title: string; sections: MenuSection[] };

const groups: MenuGroup[] = [];
let currentGroup: MenuGroup = { title: "Menu", sections: [] };
let currentSection: MenuSection | null = null;

function flushSection() {
  if (currentSection && currentSection.items.length > 0) {
    currentGroup.sections.push(currentSection);
  }
  currentSection = null;
}

function flushGroup() {
  flushSection();
  if (currentGroup.sections.length > 0) {
    groups.push(currentGroup);
  }
}

for (const row of raw) {
  const a = String(row[0] ?? "").trim();
  const b = String(row[1] ?? "").trim();
  const price = parsePrice(b);

  if (!a && !b) continue;

  if (price) {
    if (!currentSection) {
      currentSection = { title: "Items", items: [] };
    }
    currentSection.items.push({ name: a, price: `₹${price}` });
    continue;
  }

  const upper = a.toUpperCase();
  if (upper === "INDIAN MENU" || upper === "CHINESE MENU") {
    flushGroup();
    currentGroup = { title: a.replace(/\s+/g, " "), sections: [] };
    currentSection = null;
    continue;
  }

  flushSection();
  currentSection = { title: a, items: [] };
}

flushGroup();

const out =
  "export type MenuItem = { name: string; price: string };\n" +
  "export type MenuSection = { title: string; items: MenuItem[] };\n" +
  "export type MenuGroup = { title: string; sections: MenuSection[] };\n\n" +
  "export const menuGroups: MenuGroup[] = " +
  JSON.stringify(groups, null, 2) +
  ";\n";

const outPath = path.join(process.cwd(), "src/data/menu.ts");
fs.writeFileSync(outPath, out);
console.log(`Wrote ${outPath} (${groups.length} groups) from ${src}`);

const fmt = spawnSync("bunx", ["biome", "format", "--write", outPath], {
  stdio: "inherit",
  cwd: process.cwd(),
});
if (fmt.status !== 0) {
  process.exit(fmt.status ?? 1);
}
