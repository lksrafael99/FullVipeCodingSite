import { ArrowRight, Check } from "lucide-react";
import { PurchaseButton } from "./purchase-button";

export function FinalCTA() {
  return <section className="final-cta"><div className="final-grid"/><div className="container final-inner"><span className="kicker">{"// CRIE MAIS. DESPERDICE MENOS."}</span><h2>FAÇA SEUS CRÉDITOS DO LOVABLE<br/><span>RENDEREM MUITO MAIS.</span></h2><p>Extensão para Lovable, LeadHunter, curso, prompts e comunidade privada no WhatsApp.</p><div className="final-actions"><PurchaseButton plan="monthly">Plano mensal — R$ 59,99</PurchaseButton><PurchaseButton plan="lifetime" className="button button-light">Acesso vitalício — R$ 497 <ArrowRight size={18}/></PurchaseButton></div><div className="final-trust"><span><Check/> Não cria créditos extras</span><span><Check/> Foco em eficiência</span><span><Check/> Suporte em comunidade</span></div></div></section>;
}
