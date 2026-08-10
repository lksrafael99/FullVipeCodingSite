"use client";

import { Check, Infinity as InfinityIcon, ShieldCheck, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import { purchaseConfig } from "@/config/purchase";
import { trackEvent } from "@/lib/analytics";
import { PurchaseButton } from "./purchase-button";
import { SectionHeading } from "./section-heading";

const features = ["Extensão para Lovable", "LeadHunter", "Comunidade privada no WhatsApp", "Curso gratuito para iniciantes", "Biblioteca de prompts", "Templates e estruturas", "Kit de prospecção e vendas", "Suporte pela comunidade"];

export function Pricing() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { trackEvent("view_pricing"); observer.disconnect(); } }, { threshold: .25 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return <section className="section pricing-section" id="planos" ref={ref}><div className="container"><SectionHeading align="center" kicker="preço de lançamento" title={<>ESCOLHA COMO QUER <span>USAR A EXTENSÃO.</span></>} description="Plano mensal para começar com menor investimento ou licença vitalícia com pagamento único. Sem contador, estoque ou urgência artificial."/><div className="pricing-grid"><article className="price-card monthly"><div className="plan-icon"><Sparkles/></div><small>FULL VIBE MENSAL</small><span className="launch-label">PREÇO DE LANÇAMENTO</span><h3>{purchaseConfig.plans.monthly.price}<span>{purchaseConfig.plans.monthly.billingLabel}</span></h3><p>Para usar a extensão e os itens vinculados ao plano enquanto a assinatura estiver ativa.</p><div className="price-divider"/>{features.map(item=><div className="price-feature" key={item}><Check/>{item}</div>)}<PurchaseButton plan="monthly" className="button button-outline price-button">Quero o plano mensal</PurchaseButton><em>Cobrança mensal. Cancelamento e acesso conforme condições comerciais.</em></article><article className="price-card lifetime"><div className="best-badge">MELHOR CUSTO-BENEFÍCIO</div><div className="plan-icon"><InfinityIcon/></div><small>FULL VIBE VITALÍCIO</small><span className="launch-label">PREÇO DE LANÇAMENTO</span><h3>{purchaseConfig.plans.lifetime.price}<span>{purchaseConfig.plans.lifetime.billingLabel}</span></h3><p>Pagamento único pela licença vitalícia especificada na oferta. Sem mensalidade da licença.</p><div className="price-divider"/>{features.map(item=><div className="price-feature" key={item}><Check/>{item}</div>)}<PurchaseButton plan="lifetime" className="button button-primary price-button">Quero acesso vitalício</PurchaseButton><em>Comunidade, suporte, conteúdos e atualizações seguem as condições comerciais finais.</em></article></div><div className="price-compare"><div><span>MENSAL</span><b>R$ 59,99 <small>/ mês</small></b></div><i>VS</i><div><span>VITALÍCIO</span><b>R$ 497 <small>uma vez</small></b></div><p><ShieldCheck/> A licença vitalícia equivale a pouco mais de 8 mensalidades. Escolha conforme seu momento, sem falsa urgência.</p></div></div></section>;
}
