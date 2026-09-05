"use client";

import { Check, ShieldCheck } from "lucide-react";
import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";
import { purchaseConfig, monthlyEquivalent } from "@/config/purchase";
import { PurchaseButton } from "./purchase-button";

const benefits = [
  "Cursos e Tutoriais", "LeadHunter", "CRM", "Criador de Sites", "Criador de Prompts",
  "Gerador de Mensagens", "Biblioteca e Templates", "Comunidade",
  "Atualizações durante o período de acesso",
];
const annual = purchaseConfig.plans.annual;
const monthly = monthlyEquivalent(annual); // "R$ 41,42" — só destaque visual, nunca o valor cobrado

export function Pricing() {
  const ref = useRef<HTMLElement>(null);
  useEffect(()=>{const node=ref.current;if(!node)return;const observer=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){trackEvent("view_pricing");observer.disconnect();}},{threshold:.3});observer.observe(node);return()=>observer.disconnect();},[]);

  return <section className="section pricing-section" id="acesso" ref={ref} data-spotlight>
    <div className="pricing-spotlight"/>
    <div className="container pricing-layout">
      <span className="kicker">Um acesso. A plataforma inteira.</span>
      <h2>ENTRE UMA VEZ.<br/><span>CONTINUE EVOLUINDO.</span></h2>

      <article className="price-card" data-reveal data-tilt="3">
        <div className="price-glow"/>
        <p className="price-card-name">{annual.name} · Plano Anual</p>

        {monthly ? (
          <>
            <div className="price"><strong>{monthly}</strong><small>/mês</small></div>
            <p className="price-note">equivalente no plano anual</p>
            <p className="price-real">{annual.price} cobrados a cada 12 meses</p>
          </>
        ) : (
          <div className="price"><span>R$</span><strong>{annual.price?.replace("R$", "").trim()}</strong><small>{annual.billingLabel}</small></div>
        )}

        <div className="price-features">{benefits.map(item=><span key={item}><Check/>{item}</span>)}</div>
        <PurchaseButton plan="annual" className="button button-primary button-shine price-button">Quero entrar na Full Vibe</PurchaseButton>
        <div className="pricing-trust"><ShieldCheck/> Acesso liberado logo após a confirmação do pagamento.</div>
      </article>
    </div>
  </section>;
}
