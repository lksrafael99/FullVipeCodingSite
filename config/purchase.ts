export type PlanId = "monthly" | "lifetime";

export type PurchasePlan = {
  id: PlanId;
  name: string;
  price: string;
  billingLabel: string;
  checkoutUrl?: string;
  whatsappMessage: string;
};

// Real Kiwify checkout links. Centralized here so no component ever hardcodes
// or duplicates a checkout URL — override via env only if the Kiwify link changes.
export const CHECKOUT_URLS = {
  monthly: process.env.NEXT_PUBLIC_MONTHLY_CHECKOUT_URL || "https://pay.kiwify.com.br/RCI03nr",
  lifetime: process.env.NEXT_PUBLIC_LIFETIME_CHECKOUT_URL || "https://pay.kiwify.com.br/3ktd7eG",
} as const satisfies Record<PlanId, string>;

export const purchaseConfig = {
  whatsappNumber: process.env.NEXT_PUBLIC_PURCHASE_WHATSAPP ?? "",
  plans: {
    monthly: {
      id: "monthly",
      name: "Full Vibe Mensal",
      price: "R$ 59,99",
      billingLabel: "/mês",
      checkoutUrl: CHECKOUT_URLS.monthly,
      whatsappMessage: "Olá! Quero adquirir o plano mensal da Full Vibe Coding por R$59,99.",
    },
    lifetime: {
      id: "lifetime",
      name: "Full Vibe Vitalício",
      price: "R$ 497",
      billingLabel: "pagamento único",
      checkoutUrl: CHECKOUT_URLS.lifetime,
      whatsappMessage: "Olá! Quero adquirir o plano vitalício da Full Vibe Coding por R$497.",
    },
  } satisfies Record<PlanId, PurchasePlan>,
} as const;

export const offerRules = {
  lifetimeCommunity: "Confirmar nas condições comerciais finais",
  lifetimeSupport: "Confirmar nas condições comerciais finais",
  lifetimeUpdates: "Confirmar nas condições comerciais finais",
};

// Free, open WhatsApp community — distinct from the private/paid member community.
export const communityConfig = {
  freeWhatsappUrl: process.env.NEXT_PUBLIC_WHATSAPP_COMMUNITY_URL || "https://chat.whatsapp.com/J4GNXRDdVwNHDpQGF3nNRz",
};
