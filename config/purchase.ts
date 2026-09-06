export type PlanId = "monthly" | "annual" | "lifetime";

export type PurchasePlan = {
  id: PlanId;
  name: string;
  /** `null` quando o valor ainda não foi decidido — nunca inventar um número (ver Vitalício). */
  price: string | null;
  /** Valor numérico de `price`, em reais — usado só pra derivar o equivalente mensal / economia. */
  priceValue: number | null;
  /** Em quantos meses esse valor é cobrado — usado pra derivar o equivalente mensal. `null` = não recorrente/não aplicável. */
  billingCycleMonths: number | null;
  /** Recorrente (Kiwify recobra automaticamente) ou pagamento único. Muda a copy de "cobrados a cada X" vs "pagamento único". */
  recurring: boolean;
  billingLabel: string;
  checkoutUrl?: string;
  whatsappMessage: string;
};

// Configure somente depois de confirmar o checkout de cada oferta.
// Não há URL antiga como fallback: sem configuração, o botão cai pro WhatsApp.
export const CHECKOUT_URL = process.env.NEXT_PUBLIC_CHECKOUT_URL || undefined;
// Aceita os dois padrões de nome de env (o `_URL_<PLANO>` usado aqui e o
// `<PLANO>_CHECKOUT_URL` que já existe no projeto da Vercel) — o que estiver
// definido vence, sem precisar renomear nada no dashboard.
const MONTHLY_CHECKOUT_URL = process.env.NEXT_PUBLIC_CHECKOUT_URL_MONTHLY || process.env.NEXT_PUBLIC_MONTHLY_CHECKOUT_URL || CHECKOUT_URL;
const ANNUAL_CHECKOUT_URL = process.env.NEXT_PUBLIC_CHECKOUT_URL_ANNUAL || process.env.NEXT_PUBLIC_ANNUAL_CHECKOUT_URL || CHECKOUT_URL;
const LIFETIME_CHECKOUT_URL = process.env.NEXT_PUBLIC_CHECKOUT_URL_LIFETIME || process.env.NEXT_PUBLIC_LIFETIME_CHECKOUT_URL || CHECKOUT_URL;

// Mesmo produto na Kiwify, ofertas/checkouts diferentes (§11/§14):
//   • Mensal  — R$79,90/mês, assinatura recorrente (menor compromisso pra começar).
//   • Anual   — R$497 cobrados a cada 12 meses (a Kiwify recobra sozinha). É a oferta
//     principal/recomendada: equivale a ~R$41,42/mês e ainda inclui os benefícios VIP.
//   • Vitalício — segue disponível, mas o valor ainda não foi fechado pelo negócio; em
//     vez de inventar um número, o CTA manda pro WhatsApp pra consultar.
export const purchaseConfig = {
  whatsappNumber: process.env.NEXT_PUBLIC_PURCHASE_WHATSAPP ?? "",
  plans: {
    monthly: {
      id: "monthly",
      name: "Plano Mensal",
      price: "R$ 79,90",
      priceValue: 79.9,
      billingCycleMonths: 1,
      recurring: true,
      billingLabel: "R$79,90 cobrados todo mês",
      checkoutUrl: MONTHLY_CHECKOUT_URL,
      whatsappMessage: "Olá! Quero começar no Plano Mensal da Área de Membros Full Vibe Coding por R$ 79,90/mês.",
    },
    annual: {
      id: "annual",
      name: "Plano Anual",
      price: "R$ 497",
      priceValue: 497,
      billingCycleMonths: 12,
      recurring: true,
      billingLabel: "R$497 cobrados a cada 12 meses",
      checkoutUrl: ANNUAL_CHECKOUT_URL,
      whatsappMessage: "Olá! Quero garantir meu acesso ao Plano Anual da Área de Membros Full Vibe Coding por R$ 497.",
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

const BRL = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

/**
 * Equivalente mensal só pra destaque visual (§1) — nunca é o valor cobrado.
 * `497 / 12 = 41.41666...` → "R$ 41,42". Null quando o plano não tem preço
 * fechado ainda (Vitalício) ou não é recorrente por ciclo em meses.
 */
export function monthlyEquivalent(plan: PurchasePlan): string | null {
  if (plan.priceValue == null || !plan.billingCycleMonths) return null;
  return BRL.format(plan.priceValue / plan.billingCycleMonths);
}

/**
 * Economia do Anual vs. 12 meses do Mensal (§4). Ex.: 79,90 × 12 = 958,80;
 * 958,80 − 497 = 461,80 (~48%). Null se faltar preço em algum dos dois.
 */
export function annualSavings(): { amount: string; full: string; percent: number } | null {
  const m = purchaseConfig.plans.monthly.priceValue;
  const a = purchaseConfig.plans.annual.priceValue;
  const cycle = purchaseConfig.plans.annual.billingCycleMonths;
  if (m == null || a == null || !cycle) return null;
  const full = m * cycle;
  const saved = full - a;
  if (saved <= 0) return null;
  return { amount: BRL.format(saved), full: BRL.format(full), percent: Math.round((saved / full) * 100) };
}

// Free, open WhatsApp community — distinct from the private/paid member community.
export const communityConfig = {
  freeWhatsappUrl: process.env.NEXT_PUBLIC_WHATSAPP_COMMUNITY_URL || "https://chat.whatsapp.com/J4GNXRDdVwNHDpQGF3nNRz",
};
