"use client";

import { ArrowUpRight } from "lucide-react";
import type { PlanId } from "@/config/purchase";
import { startPurchase } from "@/services/purchase-service";

type Props = {
  plan: PlanId;
  children: React.ReactNode;
  className?: string;
};

export function PurchaseButton({ plan, children, className = "button button-primary" }: Props) {
  return (
    <button className={className} type="button" data-cta={`checkout-${plan}`} onClick={() => startPurchase(plan)}>
      <span>{children}</span>
      <ArrowUpRight size={18} aria-hidden="true" />
    </button>
  );
}
