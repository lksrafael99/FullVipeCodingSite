import assert from "node:assert/strict";
import test from "node:test";
import { resolveCheckoutUrl, safeCheckoutUrl, withBrRegion } from "../lib/checkout-url.ts";

test("aceita só HTTPS + host oficial da Kiwify", () => {
  assert.equal(safeCheckoutUrl("https://pay.kiwify.com.br/YYXev3B"), "https://pay.kiwify.com.br/YYXev3B");
  assert.equal(safeCheckoutUrl("https://pay.kiwify.com/abc"), "https://pay.kiwify.com/abc");
  // rejeitados
  assert.equal(safeCheckoutUrl("http://pay.kiwify.com.br/x"), null);
  assert.equal(safeCheckoutUrl("https://evil.com/x"), null);
  assert.equal(safeCheckoutUrl("https://pay.kiwify.com.br.evil.com/x"), null);
  assert.equal(safeCheckoutUrl("javascript:alert(1)"), null);
  assert.equal(safeCheckoutUrl("data:text/html,<script>"), null);
  assert.equal(safeCheckoutUrl("não é url"), null);
  assert.equal(safeCheckoutUrl(""), null);
  assert.equal(safeCheckoutUrl(undefined), null);
});

test("region=br anexado sem duplicar ? ou & e sem sobrescrever query existente", () => {
  assert.equal(withBrRegion("https://pay.kiwify.com.br/x"), "https://pay.kiwify.com.br/x?region=br");
  assert.equal(withBrRegion("https://pay.kiwify.com.br/x?utm=abc"), "https://pay.kiwify.com.br/x?utm=abc&region=br");
  // não duplica nem troca um region já presente
  assert.equal(withBrRegion("https://pay.kiwify.com.br/x?region=us"), "https://pay.kiwify.com.br/x?region=us");
  // sem ?? nem && soltos
  assert.doesNotMatch(withBrRegion("https://pay.kiwify.com.br/x?a=1"), /\?\?|&&/);
});

test("resolveCheckoutUrl = validação + region, null quando base não confiável", () => {
  assert.equal(resolveCheckoutUrl("https://pay.kiwify.com.br/KY705Vn"), "https://pay.kiwify.com.br/KY705Vn?region=br");
  assert.equal(resolveCheckoutUrl("https://evil.com/x"), null);
  assert.equal(resolveCheckoutUrl(undefined), null);
});
