"use client";

import { Check, Minus, ShieldCheck, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";
import { annualSavings, monthlyEquivalent, purchaseConfig } from "@/config/purchase";
import { PurchaseButton } from "./purchase-button";

const monthly = purchaseConfig.plans.monthly;
const annual = purchaseConfig.plans.annual;
const annualEquivalent = monthlyEquivalent(annual); // "R$ 41,42" — só destaque visual, nunca o valor cobrado
const savings = annualSavings();

// Tudo que já entra no Mensal (§2). O Anual inclui tudo isso + os itens VIP abaixo.
const baseBenefits = [
  "Acesso completo à plataforma",
  "Cursos e Tutoriais",
  "LeadHunter e CRM",
  "Criador de Sites e de Prompts",
  "Gerador de Mensagens e Calculadora de Orçamento",
  "Biblioteca de Arquivos, Templates e Sites Recomendados",
  "Comunidade Full Vibe",
  "Suporte da equipe",
];

// Só no Anual (§3) — a experiência VIP.
const vipBenefits = [
  "Comunidade VIP Full Vibe",
  "Grupo VIP no WhatsApp",
  "Canais VIP no Discord",
  "Mentorias em grupo com os mentores",
  "Encontros exclusivos",
  "Suporte prioritário",
  "Conteúdos premium antecipados",
  "Benefícios exclusivos definidos pelo Admin",
];

// §5 — o Anual não é só desconto: é a experiência VIP.
const vipHighlights = [
  { emoji: "🎯", label: "Mentorias em grupo" },
  { emoji: "💬", label: "Grupo VIP no WhatsApp" },
  { emoji: "👥", label: "Canais VIP no Discord" },
  { emoji: "⚡", label: "Conteúdos antecipados" },
  { emoji: "⭐", label: "Suporte prioritário" },
];

// §6 — comparação. `false` no mensal = benefício só do anual.
const comparison: { label: string; monthly: boolean; annual: boolean }[] = [
  { label: "Plataforma completa", monthly: true, annual: true },
  { label: "Cursos e Tutoriais", monthly: true, annual: true },
  { label: "Ferramentas (LeadHunter, CRM, Sites, Prompts…)", monthly: true, annual: true },
  { label: "Comunidade Full Vibe", monthly: true, annual: true },
  { label: "Suporte da equipe", monthly: true, annual: true },
  { label: "Grupo VIP no WhatsApp", monthly: false, annual: true },
  { label: "Canais VIP no Discord", monthly: false, annual: true },
  { label: "Mentorias em grupo com os mentores", monthly: false, annual: true },
  { label: "Conteúdos premium antecipados", monthly: false, annual: true },
  { label: "Suporte prioritário", monthly: false, annual: true },
];

function Mark({ on }: { on: boolean }) {
  return on
    ? <span className="cmp-yes" aria-label="incluído"><Check /></span>
    : <span className="cmp-no" aria-label="não incluído"><Minus /></span>;
}

export function Pricing() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { trackEvent("view_pricing"); observer.disconnect(); }
    }, { threshold: .3 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return <section className="section pricing-section" id="acesso" ref={ref} data-spotlight>
    <div className="pricing-spotlight" />
    <div className="container pricing-layout">
      <span className="kicker">Escolha como começar.</span>
      <h2>MENOR COMPROMISSO<br /><span>OU MUITO MAIS VALOR.</span></h2>
      <p className="pricing-sub">
        No Mensal você entra por {monthly.price}/mês. No Anual, o equivalente cai pra {annualEquivalent}/mês
        {savings ? ` e você economiza ${savings.amount} em 12 meses` : ""} — além de destravar a experiência VIP.
      </p>

      <div className="plan-grid">
        {/* ---------- MENSAL ---------- */}
        <article className="plan-card" data-reveal>
          <p className="plan-name">{monthly.name}</p>
          <div className="price">
            <strong>{monthly.price}</strong><small>/ mês</small>
          </div>
          <p className="price-real">{monthly.billingLabel}</p>
          <p className="plan-copy">Para quem quer começar com menor compromisso.</p>
          <div className="price-features">
            {baseBenefits.map((item) => <span key={item}><Check />{item}</span>)}
          </div>
          <PurchaseButton plan="monthly" className="button button-secondary price-button">Começar no Mensal</PurchaseButton>
        </article>

        {/* ---------- ANUAL (recomendado) ---------- */}
        <article className="plan-card plan-card-featured" data-reveal data-tilt="3">
          <div className="price-glow" />
          <span className="plan-badge"><Sparkles /> Mais vantajoso</span>
          <p className="plan-name">{annual.name}</p>

          <div className="price">
            <strong>{annualEquivalent ?? annual.price}</strong><small>/ mês</small>
          </div>
          <p className="price-note">equivalente no plano anual</p>
          <p className="price-real">
            {annual.installmentsLabel ? `${annual.installmentsLabel} ou ` : ""}{annual.price} à vista
            <span className="price-real-sub"> · {annual.price} cobrados a cada 12 meses</span>
          </p>

          {savings && (
            <p className="plan-savings">
              Economize <b>{savings.amount}</b> comparado a 12 meses no plano mensal
              <span> · cerca de {savings.percent}% de diferença ({savings.full} → {annual.price})</span>
            </p>
          )}

          <div className="price-features">
            <span className="price-features-head">Tudo do Mensal, mais:</span>
            {vipBenefits.map((item) => <span key={item}><Check />{item}</span>)}
          </div>
          <PurchaseButton plan="annual" className="button button-primary button-shine price-button">Quero o Plano Anual</PurchaseButton>
          <div className="pricing-trust"><ShieldCheck /> Acesso liberado logo após a confirmação do pagamento.</div>
        </article>
      </div>

      {/* §5 / §7 — o Anual é a experiência VIP, não só um desconto */}
      <div className="vip-block" data-reveal>
        <h3>Mais do que acesso à plataforma.</h3>
        <p>
          No Plano Anual você entra para a Comunidade VIP da Full Vibe, participa de mentorias em grupo
          com os mentores, recebe conteúdos antecipados e tem uma experiência mais próxima da equipe.
        </p>
        <div className="vip-highlights">
          {vipHighlights.map((v) => (
            <span key={v.label}><i aria-hidden="true">{v.emoji}</i>{v.label}</span>
          ))}
        </div>
      </div>

      {/* §6 — comparação (vira lista amigável no mobile via CSS) */}
      <div className="cmp" data-reveal>
        <div className="cmp-row cmp-head">
          <span>Benefício</span>
          <span>Mensal</span>
          <span>Anual</span>
        </div>
        {comparison.map((row) => (
          <div className="cmp-row" key={row.label}>
            <span className="cmp-label">{row.label}</span>
            <span className="cmp-cell" data-col="Mensal"><Mark on={row.monthly} /></span>
            <span className="cmp-cell" data-col="Anual"><Mark on={row.annual} /></span>
          </div>
        ))}
      </div>

      <p className="pricing-fineprint">
        Alguns conteúdos e materiais podem ser liberados primeiro para membros anuais e depois
        disponibilizados aos membros mensais. As mentorias são encontros em grupo com os mentores
        da Full Vibe — exclusivas para membros anuais.
      </p>
    </div>
  </section>;
}
