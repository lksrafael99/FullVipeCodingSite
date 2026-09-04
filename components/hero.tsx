import Image from "next/image";
import type { CSSProperties } from "react";
import { ArrowDown, ArrowUpRight, BookOpen, Boxes, FileText, LayoutTemplate, Radar, Sparkles, Users, Wifi } from "lucide-react";
import { HeroVideo } from "./hero-video";

const included = ["Cursos", "LeadHunter", "CRM", "Criador de Sites", "Templates", "Comunidade"];
const headline = ["APRENDA.", "CRIE.", "PROSPECTE."];

const floaters = [
  { icon: Sparkles, label: "Prompt gerado", sub: "Landing premium · pronto", cls: "hf-1", depth: 26 },
  { icon: Radar, label: "Lead encontrado", sub: "Clínica Horizonte", cls: "hf-2", depth: 18 },
  { icon: ArrowUpRight, label: "Projeto publicado", sub: "deploy concluído", cls: "hf-3", depth: 34 },
  { icon: FileText, label: "Novo orçamento", sub: "proposta enviada", cls: "hf-4", depth: 20 },
  { icon: LayoutTemplate, label: "Template disponível", sub: "SaaS Starter v2", cls: "hf-5", depth: 30 },
  { icon: Wifi, label: "Comunidade online", sub: "142 membros ativos", cls: "hf-6", depth: 16 },
] as const;

export function Hero() {
  return <section className="hero" id="top" data-spotlight>
    <HeroVideo />
    <div className="hero-video-overlay" aria-hidden="true" />
    <div className="hero-grid" aria-hidden="true" data-parallax data-depth="6" /><div className="hero-aurora" aria-hidden="true" /><div className="hero-spotlight" aria-hidden="true" />
    <div className="hero-particles" aria-hidden="true"><i /><i /><i /><i /><i /></div>

    <div className="container hero-inner">
      <div className="hero-copy">
        <span className="eyebrow"><i /> Full Vibe Coding · Área de Membros</span>
        <h1 className="hero-headline">
          {headline.map((word, index) => <span className="hw" key={word} style={{ ["--i" as string]: index } as CSSProperties}><span>{word}</span></span>)}
          <span className="hw hw-accent" style={{ ["--i" as string]: headline.length } as CSSProperties}><span>ORGANIZE E VENDA.</span></span>
        </h1>
        <p>Cursos, tutoriais, LeadHunter, CRM, criador de sites, prompts, mensagens, materiais e comunidade em uma única plataforma.</p>
        <div className="hero-actions">
          <a className="button button-primary button-shine" href="#acesso" data-magnetic>Quero entrar na Full Vibe <ArrowUpRight /></a>
          <a className="button button-secondary" href="#ferramentas">Ver tudo que está incluso <ArrowDown /></a>
        </div>
      </div>

      <div className="hero-product" aria-label="Prévia visual da plataforma Full Vibe Coding">
        <div className="product-halo" aria-hidden="true" />
        {floaters.map(({ icon: Icon, label, sub, cls, depth }) => (
          <div className={`hero-floater ${cls}`} key={label} data-parallax data-depth={depth} aria-hidden="true">
            <span className="hero-floater-dot"><Icon /></span>
            <div><b>{label}</b><small>{sub}</small></div>
          </div>
        ))}
        <div className="dashboard-shell">
          <div className="dashboard-bar"><div><i /><i /><i /></div><span>members.fullvibecoding.com</span><b>ONLINE</b></div>
          <div className="dashboard-body">
            <aside><Image src="/brand/full-vibe-coding-logo.png" width={38} height={38} alt="" /><span className="active"><Boxes /></span><span><BookOpen /></span><span><Sparkles /></span><span><LayoutTemplate /></span><span><Users /></span></aside>
            <div className="dashboard-main">
              <div className="dashboard-welcome"><div><small>VISÃO GERAL</small><h2>Seu ecossistema de criação.</h2></div><span>MEMBRO ATIVO</span></div>
              <div className="dashboard-focus"><div><small>CONTINUE DE ONDE PAROU</small><b>Primeiro projeto com IA</b><p>Curso · Módulo 02</p><i><em /></i></div><span aria-hidden="true"><ArrowUpRight /></span></div>
              <div className="dashboard-tools"><article className="featured"><Radar /><div><small>FERRAMENTA PRINCIPAL</small><b>LeadHunter</b><p>Encontre e organize novas oportunidades.</p></div><ArrowUpRight /></article><article><Sparkles /><b>Criador de Prompts</b><small>CRIAR AGORA</small></article><article><LayoutTemplate /><b>Templates</b><small>EXPLORAR</small></article></div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-proof" aria-label="O que você encontra dentro">{included.map(item => <span key={item}>{item}</span>)}</div>
    </div>
  </section>;
}
