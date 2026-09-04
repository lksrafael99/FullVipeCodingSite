import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

async function publicSource() {
  async function sourceFiles(directory) {
    const entries = await readdir(directory, { withFileTypes: true });
    const nested = await Promise.all(entries.map((entry) => {
      const path = `${directory}/${entry.name}`;
      if (entry.isDirectory()) return sourceFiles(path);
      return /\.(ts|tsx)$/.test(entry.name) ? [path] : [];
    }));
    return nested.flat();
  }
  const files = (await Promise.all(["app", "components", "config"].map(sourceFiles))).flat();
  return (await Promise.all(files.map((file) => readFile(file, "utf8")))).join("\n");
}

test("a oferta pública usa somente o posicionamento atual", async () => {
  const source = await publicSource();
  const removedOfferTerms = [/pay\.kiwify\.com\.br/i, /R\$\s*59[,.]99/i, /Extensão para/i, /créditos do Lovable/i];
  for (const term of removedOfferTerms) assert.doesNotMatch(source, term);
  assert.match(source, /Área de Membros/);
  assert.match(source, /R\$ 497/);
  assert.match(source, /LeadHunter/);
});

test("R$497 é o preço do Anual, não do Vitalício — o vitalício não tem valor inventado", async () => {
  const purchaseConfig = await readFile("config/purchase.ts", "utf8");
  assert.match(purchaseConfig, /annual:\s*\{[^}]*price:\s*"R\$ 497"/s);
  assert.match(purchaseConfig, /lifetime:\s*\{[^}]*price:\s*null/s);
});

test("o ecossistema atual (CRM e Criador de Sites) está representado na landing", async () => {
  const source = await publicSource();
  assert.match(source, /\bCRM\b/);
  assert.match(source, /Criador de Sites/);
  assert.match(source, /PWA/);
});
