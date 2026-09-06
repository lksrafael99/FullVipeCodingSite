import { purchaseConfig, type PlanId } from "@/config/purchase";
import { trackPlanClick } from "@/lib/analytics";
import { resolveCheckoutUrl } from "@/lib/checkout-url";

export function startPurchase(planId: PlanId) {
  const plan = purchaseConfig.plans[planId];
  trackPlanClick(planId);

  // Só abre se a URL configurada passar na validação (HTTPS + host Kiwify) —
  // já com region=br anexado corretamente. URL inválida cai no WhatsApp.
  const checkoutUrl = resolveCheckoutUrl(plan.checkoutUrl);
  if (checkoutUrl) {
    window.open(checkoutUrl, "_blank", "noopener,noreferrer");
    return;
  }

  if (purchaseConfig.whatsappNumber) {
    const url = `https://wa.me/${purchaseConfig.whatsappNumber}?text=${encodeURIComponent(plan.whatsappMessage)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    return;
  }

  window.alert(
    "As compras estão temporariamente indisponíveis. Tente novamente em breve.",
  );
}
