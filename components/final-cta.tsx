import { ArrowUpRight, Check } from "lucide-react";
import { purchaseConfig } from "@/config/purchase";
import { PurchaseButton } from "./purchase-button";

const annual = purchaseConfig.plans.annual;

export function FinalCTA(){return <section className="section final-cta"><div className="final-grid"/><div className="final-orb"/><div className="container final-inner" data-reveal><span>FULL VIBE CODING</span><h2>SUA PRÓXIMA IDEIA<br/><b>COMEÇA AQUI.</b></h2><p>Aprenda. Crie. Prospecte. Organize. Venda. Evolua.</p><PurchaseButton plan="annual" className="button button-primary button-shine">Quero entrar na Full Vibe <ArrowUpRight/></PurchaseButton><div><span><Check/> {annual.price}/ano</span><span><Check/> 12 meses de acesso</span><span><Check/> Ecossistema completo</span></div></div></section>}
