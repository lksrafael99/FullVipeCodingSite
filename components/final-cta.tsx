import { ArrowUpRight, Check } from "lucide-react";
import { purchaseConfig, monthlyEquivalent } from "@/config/purchase";
import { PurchaseButton } from "./purchase-button";

const monthlyPlan = purchaseConfig.plans.monthly;
const annual = purchaseConfig.plans.annual;
const annualEquivalent = monthlyEquivalent(annual);

export function FinalCTA() {
  return <section className="section final-cta">
    <div className="final-grid" />
    <div className="final-orb" />
    <div className="container final-inner" data-reveal>
      <span>FULL VIBE CODING</span>
      <h2>SUA PRÓXIMA IDEIA<br /><b>COMEÇA AQUI.</b></h2>
      <p>Aprenda. Crie. Prospecte. Organize. Venda. Evolua.</p>
      <PurchaseButton plan="annual" className="button button-primary button-shine">Quero o Plano Anual <ArrowUpRight /></PurchaseButton>
      <PurchaseButton plan="monthly" className="button button-secondary final-cta-alt">Prefiro começar no Mensal ({monthlyPlan.price}/mês)</PurchaseButton>
      <div>
        {annualEquivalent && <span><Check /> {annualEquivalent}/mês equivalente no Anual</span>}
        <span><Check /> {annual.price} cobrados a cada 12 meses</span>
        <span><Check /> Ecossistema completo</span>
      </div>
    </div>
  </section>;
}
