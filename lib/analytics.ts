import type { PlanId } from "@/config/purchase";

type EventName = "view_pricing" | "click_monthly" | "click_lifetime" | "purchase_start" | "click_community";

export function trackEvent(name: EventName, data?: Record<string, string>) {
  if (typeof window === "undefined") return;

  window.dispatchEvent(new CustomEvent("fullvibe:analytics", { detail: { name, ...data } }));

  if (process.env.NODE_ENV === "development") {
    console.info("[analytics-ready]", name, data ?? {});
  }
}

export function trackPlanClick(plan: PlanId) {
  trackEvent(plan === "monthly" ? "click_monthly" : "click_lifetime", { plan });
  trackEvent("purchase_start", { plan });
}
