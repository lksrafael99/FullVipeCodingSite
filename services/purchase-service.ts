import { purchaseConfig, type PlanId } from "@/config/purchase";
import { trackPlanClick } from "@/lib/analytics";

export function startPurchase(planId: PlanId) {
  const plan = purchaseConfig.plans[planId];
  trackPlanClick(planId);

  if (plan.checkoutUrl) {
    window.open(plan.checkoutUrl, "_blank", "noopener,noreferrer");
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
