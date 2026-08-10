import { ArrowRight, Building2, Check, ClipboardCheck, Dumbbell, FileCheck2, Files, HeartPulse, MessageSquare, Presentation, Scissors, SearchCheck, Store, UtensilsCrossed } from "lucide-react";
import { SectionHeading } from "./section-heading";

const niches = [
  { icon: Scissors, name: "Barbearia", code: "BRB-01" }, { icon: UtensilsCrossed, name: "Restaurante", code: "RST-02" },
  { icon: HeartPulse, name: "Clínica", code: "CLN-03" }, { icon: Dumbbell, name: "Academia", code: "ACD-04" },
  { icon: Building2, name: "Imobiliária", code: "IMB-05" }, { icon: Store, name: "Pequenos negócios", code: "NEG-06" },
];

export function Library() {
  return <section className="section library-section"><div className="container"><div className="library-head"><SectionHeading kicker="biblioteca de prompts" title={<>PROMPTS PRONTOS PARA <span>ACELERAR SEUS PROJETOS.</span></>} description="Estruturas iniciais para landing pages, sites institucionais, design, responsividade, correções e deploy — organizadas para dar mais direção no Lovable."/><div className="library-types"><span>PROMPTS</span><span>TEMPLATES</span><span>CORREÇÕES</span><span>DEPLOY</span></div></div><div className="niche-grid">{niches.map(({icon:Icon,name,code})=><article key={name}><div><Icon/><small>{code}</small></div><h3>{name}</h3><p>Estrutura inicial + prompts</p><ArrowRight/></article>)}</div><p className="library-footnote">+ Prompts para psicólogos, nutricionistas, sites institucionais, design, responsividade, correções e publicação. A disponibilidade seguirá os materiais liberados na oferta.</p></div></section>;
}

const kit = [
  [MessageSquare, "Mensagem inicial", "Comece a conversa com mais clareza."],
  [SearchCheck, "Follow-up", "Modelos para continuar a abordagem."],
  [ClipboardCheck, "Briefing", "Perguntas essenciais para o projeto."],
  [Files, "Proposta", "Estrutura para apresentar seu serviço."],
  [FileCheck2, "Precificação", "Guia inicial para formar seu preço."],
  [Check, "Checklist", "Mais organização até a entrega."],
  [Presentation, "Apresentação", "Modelo inicial para mostrar o projeto ao cliente."],
] as const;

export function SalesKit() {
  return <section className="section sales-section"><div className="container sales-layout"><div><SectionHeading kicker="kit de prospecção e vendas" title={<>NÃO ADIANTA SÓ <span>SABER CRIAR.</span></>} description="Você também recebe materiais para abordar empresas, apresentar seu trabalho, formar um preço inicial e organizar a entrega ao cliente."/><div className="sales-flow"><span>ENCONTRE</span><i>→</i><span>ABORDE</span><i>→</i><span>CRIE</span><i>→</i><span>APRESENTE</span><i>→</i><span>ENTREGUE</span></div></div><div className="kit-grid">{kit.map(([Icon,title,text],index)=><article key={title}><span>0{index+1}</span><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>;
}
