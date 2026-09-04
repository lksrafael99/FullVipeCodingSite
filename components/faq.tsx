"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { purchaseConfig } from "@/config/purchase";

const annual = purchaseConfig.plans.annual;

const questions = [
  ["O que é a Full Vibe Coding?", "Uma plataforma que reúne cursos, tutoriais, LeadHunter, CRM, criador de sites, criador de prompts, gerador de mensagens, calculadora de orçamento, biblioteca de arquivos, templates e comunidade — tudo em um único acesso."],
  ["Preciso saber programar?", "Não. Os cursos atendem quem está começando. Prática e dedicação continuam essenciais, mas você não precisa de experiência prévia com código."],
  ["Como funciona o acesso?", `O plano Anual custa ${annual.price} e dá acesso completo à plataforma por 12 meses, renovável.`],
  ["As ferramentas estão inclusas?", "Sim — LeadHunter, CRM, Criador de Sites, Criador de Prompts, Gerador de Mensagens e Calculadora de Orçamento fazem parte do acesso, sem custo adicional pela plataforma."],
  ["Posso usar pelo celular?", "Sim. A Full Vibe Coding também funciona como PWA — dá pra instalar na tela inicial e usar com navegação de aplicativo."],
  ["Tem comunidade e suporte?", "Sim — Discord, suporte pelos canais oficiais e encontros/calls periódicos."],
  ["Receberei atualizações?", "Sim. Novos conteúdos, materiais e ferramentas são adicionados à plataforma conforme forem disponibilizados."],
] as const;

export function FAQ(){const[open,setOpen]=useState<number|null>(0);return <section className="section faq-section" id="faq"><div className="container faq-layout"><div className="faq-copy" data-reveal><span className="kicker">FAQ</span><h2>O ESSENCIAL,<br/><span>SEM RODEIOS.</span></h2><p>As respostas que você precisa antes de entrar.</p></div><div className="faq-list" data-reveal>{questions.map(([question,answer],index)=>{const active=open===index;return <article className={active?"active":""} key={question}><button type="button" onClick={()=>setOpen(active?null:index)} aria-expanded={active}><span>{String(index+1).padStart(2,"0")}</span><b>{question}</b>{active?<Minus/>:<Plus/>}</button><div className="faq-answer" aria-hidden={!active}><p>{answer}</p></div></article>;})}</div></div></section>}
