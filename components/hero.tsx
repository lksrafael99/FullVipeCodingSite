import Image from "next/image";
import { ArrowDown, ArrowUpRight, Check, Code2, Sparkles, TerminalSquare } from "lucide-react";

const highlights = ["Extensão", "LeadHunter", "Comunidade", "Curso", "Prompts", "Suporte"];

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy reveal">
          <span className="eyebrow"><span className="status-dot" /> Extensão para usuários do Lovable</span>
          <h1>SEUS CRÉDITOS<br />PODEM RENDER<br /><span>MUITO MAIS.</span></h1>
          <p className="hero-lead">Uma extensão criada para otimizar seu fluxo no Lovable, reduzir desperdícios e ajudar você a desenvolver projetos com muito mais eficiência.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#planos">Quero otimizar meu Lovable <ArrowUpRight size={18} /></a>
            <a className="button button-ghost" href="#oferta">Ver tudo que está incluído <ArrowDown size={17} /></a>
          </div>
          <div className="hero-tags" aria-label="Itens incluídos">
            {highlights.map((item) => <span key={item}><Check size={13} />{item}</span>)}
          </div>
        </div>

        <div className="hero-visual brand-hero reveal delay-1">
          <div className="brand-code code-left" aria-hidden="true"><span>const idea = prompt();</span><span>build();</span><span>deploy();</span></div>
          <div className="brand-code code-right" aria-hidden="true"><span>learn();</span><span>create();</span><span>sell();</span><span>scale();</span></div>
          <div className="brand-orbit" aria-hidden="true"><i /><i /><i /></div>
          <div className="brand-master">
            <Image
              src="/brand/full-vibe-coding-logo.png"
              width={620}
              height={620}
              sizes="(max-width: 767px) 92vw, (max-width: 1023px) 620px, 52vw"
              priority
              alt="Full Vibe Coding — Aprenda, crie, venda, escale"
            />
          </div>
          <div className="brand-chip chip-one"><TerminalSquare size={15} /> EXTENSÃO PARA LOVABLE</div>
          <div className="brand-chip chip-two"><Sparkles size={15} /> MENOS DESPERDÍCIO</div>
          <div className="brand-chip chip-three"><Code2 size={15} /> FLUXO MAIS EFICIENTE</div>
        </div>
      </div>
      <div className="hero-bottom"><span>APRENDA.</span><i /><span>CRIE.</span><i /><span>VENDA.</span><i /><span>ESCALE.</span></div>
    </section>
  );
}
