"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { purchaseConfig, monthlyEquivalent } from "@/config/purchase";

const annual = purchaseConfig.plans.annual;
const monthly = monthlyEquivalent(annual);

/** Bottom bar shown on mobile after the hero, hidden once the pricing section is on screen. */
export function MobileStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    const pricing = document.getElementById("acesso");
    let pastHero = false;
    let pricingVisible = false;
    const sync = () => setVisible(pastHero && !pricingVisible);

    const observers: IntersectionObserver[] = [];
    if (hero) {
      const io = new IntersectionObserver(([entry]) => {
        pastHero = !entry.isIntersecting;
        sync();
      }, { rootMargin: "-40% 0px 0px 0px" });
      io.observe(hero);
      observers.push(io);
    }
    if (pricing) {
      const io = new IntersectionObserver(([entry]) => {
        pricingVisible = entry.isIntersecting;
        sync();
      }, { threshold: 0.08 });
      io.observe(pricing);
      observers.push(io);
    }
    return () => observers.forEach((io) => io.disconnect());
  }, []);

  return (
    <a className={`mobile-sticky-cta ${visible ? "is-visible" : ""}`} href="#acesso" aria-hidden={!visible} tabIndex={visible ? 0 : -1}>
      <span>
        <strong>{monthly ? `${monthly}/mês*` : `${annual.price}/ano`}</strong>
        {monthly && <em>*equivalente a {annual.price}/ano</em>}
      </span>
      <b>Quero entrar <ArrowRight /></b>
    </a>
  );
}
