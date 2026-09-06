// Helper seguro para os links de checkout da Kiwify (§4/§5/§6/§7).
//
// - Só aceita HTTPS e host da Kiwify (allowlist). javascript:, data:, http:,
//   qualquer outro domínio ou URL inválida → retorna null (o chamador cai no
//   fallback de WhatsApp).
// - `region=br` é anexado preservando a query existente, sem duplicar ? nem &.
// - Nenhum parâmetro vem do usuário: `region` é fixo, a base vem só de env.
//   Não há como um input do visitante controlar o destino.

const ALLOWED_CHECKOUT_HOSTS = new Set([
  "pay.kiwify.com.br",
  "pay.kiwify.com",
]);

/** Valida a base do checkout. Retorna a URL normalizada ou null se não for confiável. */
export function safeCheckoutUrl(raw: string | undefined | null): string | null {
  if (!raw || typeof raw !== "string") return null;
  let url: URL;
  try {
    url = new URL(raw.trim());
  } catch {
    return null;
  }
  if (url.protocol !== "https:") return null;
  if (!ALLOWED_CHECKOUT_HOSTS.has(url.hostname.toLowerCase())) return null;
  return url.toString();
}

/**
 * Anexa `region=br` sem quebrar a query existente e sem duplicar separador.
 * `URLSearchParams` já resolve o `?` vs `&`; só não sobrescreve um region já
 * presente na URL configurada.
 */
export function withBrRegion(safeUrl: string): string {
  const url = new URL(safeUrl);
  if (!url.searchParams.has("region")) url.searchParams.set("region", "br");
  return url.toString();
}

/** Base validada + region=br. Retorna null quando a base não é confiável. */
export function resolveCheckoutUrl(raw: string | undefined | null): string | null {
  const safe = safeCheckoutUrl(raw);
  return safe ? withBrRegion(safe) : null;
}
