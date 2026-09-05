export type PlanId = "annual" | "lifetime";

export type PurchasePlan = {
  id: PlanId;
  name: string;
  /** `null` quando o valor ainda não foi decidido — nunca inventar um número (ver Vitalício). */
  price: string | null;
  /** Valor numérico de `price`, em reais — usado só pra derivar o equivalente mensal. */
  priceValue: number | null;
  /** Em quantos meses esse valor é cobrado — usado pra derivar o equivalente mensal. `null` = não recorrente/não aplicável. */
  billingCycleMonths: number | null;
  /** Recorrente (Kiwify recobra automaticamente) ou pagamento único. Muda a copy de "cobrados a cada X" vs "pagamento único". */
  recurring: boolean;
  billingLabel: string;
  checkoutUrl?: string;
  whatsappMessage: string;
};

// Configure somente depois de confirmar o checkout da oferta atual.
// Não há URL antiga como fallback: sem configuração, o botão informa que o canal está sendo preparado.
export const CHECKOUT_URL = process.env.NEXT_PUBLIC_CHECKOUT_URL || undefined;
const ANNUAL_CHECKOUT_URL = process.env.NEXT_PUBLIC_CHECKOUT_URL_ANNUAL || CHECKOUT_URL;
const LIFETIME_CHECKOUT_URL = process.env.NEXT_PUBLIC_CHECKOUT_URL_LIFETIME || CHECKOUT_URL;

// Full Vibe Anual é a oferta principal hoje: assinatura recorrente de R$497 cobrados
// a cada 12 meses (a Kiwify recobra sozinha, o cliente não faz nada). O Vitalício segue
// disponível, mas o valor dele ainda não foi definido pelo negócio — em vez de inventar
// um número, o CTA manda pro WhatsApp pra consultar (nunca mostra um preço fictício).
export const purchaseConfig = {
  whatsappNumber: process.env.NEXT_PUBLIC_PURCHASE_WHATSAPP ?? "",
  plans: {
    annual: {
      id: "annual",
      name: "Full Vibe Anual",
      price: "R$ 497",
      priceValue: 497,
      billingCycleMonths: 12,
      recurring: true,
      billingLabel: "R$497 cobrados a cada 12 meses",
      checkoutUrl: ANNUAL_CHECKOUT_URL,
      whatsappMessage: "Olá! Quero garantir meu acesso anual à Área de Membros Full Vibe Coding por R$ 497.",
    },
    lifetime: {
      id: "lifetime",
      name: "Full Vibe Vitalício",
      price: null,
      priceValue: null,
      billingCycleMonths: null,
      recurring: false,
      billingLabel: "pagamento único · acesso sem expiração",
      checkoutUrl: LIFETIME_CHECKOUT_URL,
      whatsappMessage: "Olá! Quero saber o valor do acesso vitalício à Área de Membros Full Vibe Coding.",
    },
  } satisfies Record<PlanId, PurchasePlan>,
} as const;

/**
 * Equivalente mensal só pra destaque visual (§1) — nunca é o valor cobrado.
 * `497 / 12 = 41.41666...` → "R$ 41,42". Null quando o plano não tem preço
 * fechado ainda (Vitalício) ou não é recorrente por ciclo em meses.
 */
export function monthlyEquivalent(plan: PurchasePlan): string | null {
  if (plan.priceValue == null || !plan.billingCycleMonths) return null;
  const value = plan.priceValue / plan.billingCycleMonths;
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
}

// Free, open WhatsApp community — distinct from the private/paid member community.
export const communityConfig = {
  freeWhatsappUrl: process.env.NEXT_PUBLIC_WHATSAPP_COMMUNITY_URL || "https://chat.whatsapp.com/J4GNXRDdVwNHDpQGF3nNRz",
};
