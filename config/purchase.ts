export type PlanId = "monthly" | "lifetime";

export type PurchasePlan = {
  id: PlanId;
  name: string;
  price: string;
  billingLabel: string;
  checkoutUrl?: string;
  whatsappMessage: string;
};

export const purchaseConfig = {
  whatsappNumber: process.env.NEXT_PUBLIC_PURCHASE_WHATSAPP ?? "",
  plans: {
    monthly: {
      id: "monthly",
      name: "Full Vibe Mensal",
      price: "R$ 59,99",
      billingLabel: "/mês",
      checkoutUrl: process.env.NEXT_PUBLIC_MONTHLY_CHECKOUT_URL,
      whatsappMessage: "Olá! Quero adquirir o plano mensal da Full Vibe Coding por R$59,99.",
    },
    lifetime: {
      id: "lifetime",
      name: "Full Vibe Vitalício",
      price: "R$ 497",
      billingLabel: "pagamento único",
      checkoutUrl: process.env.NEXT_PUBLIC_LIFETIME_CHECKOUT_URL,
      whatsappMessage: "Olá! Quero adquirir o plano vitalício da Full Vibe Coding por R$497.",
    },
  } satisfies Record<PlanId, PurchasePlan>,
} as const;

export const offerRules = {
  lifetimeCommunity: "Confirmar nas condições comerciais finais",
  lifetimeSupport: "Confirmar nas condições comerciais finais",
  lifetimeUpdates: "Confirmar nas condições comerciais finais",
};
