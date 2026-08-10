import Image from "next/image";
import { AlertCircle, ArrowDown, Check, CircleDollarSign, Code2, Gauge, Layers3, MousePointerClick, Play, RefreshCw, ShieldCheck, Sparkles, WandSparkles } from "lucide-react";
import { SectionHeading } from "./section-heading";

const creditMoments = [
  [MousePointerClick, "Você pede uma pequena alteração.", "Mais créditos são consumidos."],
  [RefreshCw, "Você precisa corrigir algo novamente.", "Mais créditos."],
  [WandSparkles, "Você testa várias ideias.", "Seu saldo diminui rapidamente."],
  [CircleDollarSign, "Você ainda nem terminou o projeto.", "Precisa comprar mais créditos."],
] as const;

export function LovableProblem() {
  return <section className="section lovable-problem" id="problema"><div className="container"><SectionHeading kicker="um problema familiar" title={<>QUEM USA LOVABLE<br/><span>CONHECE ESSE PROBLEMA.</span></>} description="Pequenos ajustes, novas tentativas e correções podem consumir créditos antes de o projeto chegar onde você queria."/><div className="credit-timeline">{creditMoments.map(([Icon,action,result],index)=><article key={action}><span className="credit-step">0{index+1}</span><div className="credit-icon"><Icon/></div><p>{action}</p><ArrowDown/><b>{result}</b></article>)}</div><div className="problem-statement"><AlertCircle/><p>O problema não é criar com IA.<br/><b>É desperdiçar créditos durante o processo.</b></p></div><p className="lovable-disclaimer">A Full Vibe Coding é uma solução independente. Não altera créditos, cobranças, servidores ou limitações oficiais do Lovable.</p></div></section>;
}

const benefits = [
  [Gauge, "Mais eficiência no fluxo", "Organize melhor o processo antes de executar alterações no seu projeto."],
  [Layers3, "Menos retrabalho", "Tenha mais clareza para reduzir tentativas desnecessárias durante a criação."],
  [Sparkles, "Melhor uso dos créditos", "Aproveite de forma mais consciente os créditos que você já possui no Lovable."],
  [Code2, "Mais projetos no orçamento", "Um fluxo mais eficiente pode ajudar seu orçamento de créditos a render melhor."],
] as const;

export function ExtensionSolution() {
  return <section className="section extension-solution" id="extensao"><div className="solution-glow"/><div className="container solution-layout"><div><SectionHeading kicker="o produto principal" title={<>É AQUI QUE ENTRA<br/><span>A NOSSA EXTENSÃO.</span></>} description="Ela foi criada para melhorar seu fluxo de utilização do Lovable e ajudar você a aproveitar melhor os créditos disponíveis — sem prometer créditos extras ou atalhos fora da plataforma."/><div className="solution-note"><ShieldCheck/><span><b>Otimização de processo.</b> A extensão não cria créditos oficiais, não burla cobranças e não remove limitações do Lovable.</span></div></div><div className="solution-grid">{benefits.map(([Icon,title,text],index)=><article key={title}><span>0{index+1}</span><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>;
}

export function ExtensionDemo() {
  return <section className="section demo-section" id="demonstracao"><div className="container"><SectionHeading align="center" kicker="demonstração real" title={<>VEJA COMO <span>FUNCIONA.</span></>} description="Esta área está preparada para mostrar a extensão funcionando dentro do Lovable com material real do produto."/><div className="demo-frame"><div className="demo-toolbar"><div><i/><i/><i/></div><span>FULL VIBE CODING × LOVABLE</span><b>DEMO</b></div><div className="demo-placeholder"><div className="demo-play"><Play/></div><strong>INSERIR DEMONSTRAÇÃO REAL</strong><p>Vídeo, GIF, screenshots ou comparação antes/depois.</p><small>Substituir por mídia validada da extensão antes do lançamento</small></div></div><div className="demo-options"><span>01 — VÍDEO</span><span>02 — GIF</span><span>03 — SCREENSHOTS</span><span>04 — ANTES / DEPOIS</span></div></div></section>;
}

const offerItems = ["Extensão para Lovable", "LeadHunter", "Comunidade privada no WhatsApp", "Curso gratuito para iniciantes", "Biblioteca de prompts", "Templates e estruturas de projetos", "Kit de prospecção", "Materiais de vendas", "Suporte da comunidade", "Conteúdos conforme disponibilizados"];

export function CompleteOffer() {
  return <section className="section complete-offer" id="oferta"><div className="container offer-layout"><div className="offer-brand"><div className="offer-logo"><Image src="/brand/full-vibe-coding-logo.png" width={430} height={430} alt="Full Vibe Coding"/></div><span>EXTENSÃO + ECOSSISTEMA</span></div><div><SectionHeading kicker="oferta completa" title={<>A EXTENSÃO É O CENTRO.<br/><span>O RESTANTE AJUDA VOCÊ A IR ALÉM.</span></>} description="Ao entrar para a Full Vibe Coding, você também recebe acesso ao nosso ecossistema para aprender a criar, prospectar e vender sites utilizando IA."/><div className="offer-list">{offerItems.map(item=><div key={item}><Check/>{item}</div>)}</div><p className="offer-availability">A disponibilidade de cada item seguirá exatamente as condições apresentadas no momento da compra. Nenhum recurso futuro é tratado como já disponível.</p></div></div></section>;
}
