export type PlanId = "annual" | "lifetime";

export type PurchasePlan = {
  id: PlanId;
  name: string;
  /** `null` quando o valor ainda não foi decidido — nunca inventar um número (ver Vitalício). */
  price: string | null;
  billingLabel: string;
  checkoutUrl?: string;
  whatsappMessage: string;
};

// Configure somente depois de confirmar o checkout da oferta atual.
// Não há URL antiga como fallback: sem configuração, o botão informa que o canal está sendo preparado.
export const CHECKOUT_URL = process.env.NEXT_PUBLIC_CHECKOUT_URL || undefined;
const ANNUAL_CHECKOUT_URL = process.env.NEXT_PUBLIC_CHECKOUT_URL_ANNUAL || CHECKOUT_URL;
const LIFETIME_CHECKOUT_URL = process.env.NEXT_PUBLIC_CHECKOUT_URL_LIFETIME || CHECKOUT_URL;

// Full Vibe Anual é a oferta principal hoje (R$497 / 12 meses). O Vitalício segue
// disponível, mas o valor dele ainda não foi definido pelo negócio — em vez de inventar
// um número, o CTA manda pro WhatsApp pra consultar (nunca mostra um preço fictício).
export const purchaseConfig = {
  whatsappNumber: process.env.NEXT_PUBLIC_PURCHASE_WHATSAPP ?? "",
  plans: {
    annual: {
      id: "annual",
      name: "Full Vibe Anual",
      price: "R$ 497",
      billingLabel: "por ano · 12 meses de acesso completo",
      checkoutUrl: ANNUAL_CHECKOUT_URL,
      whatsappMessage: "Olá! Quero garantir meu acesso anual à Área de Membros Full Vibe Coding por R$ 497.",
    },
    lifetime: {
      id: "lifetime",
      name: "Full Vibe Vitalício",
      price: null,
      billingLabel: "pagamento único · acesso sem expiração",
      checkoutUrl: LIFETIME_CHECKOUT_URL,
      whatsappMessage: "Olá! Quero saber o valor do acesso vitalício à Área de Membros Full Vibe Coding.",
    },
  } satisfies Record<PlanId, PurchasePlan>,
} as const;

// Free, open WhatsApp community — distinct from the private/paid member community.
export const communityConfig = {
  freeWhatsappUrl: process.env.NEXT_PUBLIC_WHATSAPP_COMMUNITY_URL || "https://chat.whatsapp.com/J4GNXRDdVwNHDpQGF3nNRz",
};
