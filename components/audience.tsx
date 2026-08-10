import { Check, Minus, X } from "lucide-react";
import { SectionHeading } from "./section-heading";

const yes = ["Usa Lovable e quer aproveitar melhor os créditos", "Quer aprender a criar sites com IA", "Já cria, mas ainda não sabe vender", "Tem dificuldade para prospectar", "Quer prompts e materiais prontos", "Valoriza suporte pelo WhatsApp"];
const no = ["Espera dinheiro fácil sem construir habilidade", "Não pretende estudar nem praticar", "Procura garantia de resultado financeiro"];

export function Audience() {
  return <section className="section audience-section"><div className="container"><SectionHeading align="center" kicker="para quem é" title={<>UM ECOSSISTEMA PARA QUEM QUER <span>COLOCAR A MÃO NA MASSA.</span></>}/><div className="audience-grid"><div className="audience-card yes"><div className="audience-title"><Check/><div><small>FAZ SENTIDO PARA VOCÊ SE...</small><h3>VOCÊ QUER COMEÇAR COM DIREÇÃO</h3></div></div>{yes.map(item=><p key={item}><span><Check/></span>{item}</p>)}</div><div className="audience-card no"><div className="audience-title"><Minus/><div><small>TALVEZ NÃO SEJA PARA VOCÊ SE...</small><h3>VOCÊ BUSCA UM ATALHO AUTOMÁTICO</h3></div></div>{no.map(item=><p key={item}><span><X/></span>{item}</p>)}<em>A Full Vibe Coding oferece estrutura e apoio. O resultado depende da sua dedicação, prática e contexto.</em></div></div></div></section>;
}
