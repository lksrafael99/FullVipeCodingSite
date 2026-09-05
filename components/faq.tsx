"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { purchaseConfig, monthlyEquivalent } from "@/config/purchase";

const annual = purchaseConfig.plans.annual;
const monthly = monthlyEquivalent(annual);

const questions = [
  ["O que é a Full Vibe Coding?", "Uma plataforma que reúne cursos, tutoriais, LeadHunter, CRM, criador de sites, criador de prompts, gerador de mensagens, calculadora de orçamento, biblioteca de arquivos, templates e comunidade — tudo em um único acesso."],
  ["Preciso saber programar?", "Não. Os cursos atendem quem está começando. Prática e dedicação continuam essenciais, mas você não precisa de experiência prévia com código."],
  [`Vou pagar ${monthly ?? annual.price} por mês?`, `Não. ${monthly ?? "O valor mensal exibido"} é o equivalente mensal do plano anual, só pra referência — a cobrança real é de ${annual.price}${annual.recurring ? " a cada 12 meses, enquanto o plano estiver ativo" : " para 12 meses de acesso"}, como aparece no checkout.`],
  ["Como funciona o acesso?", `${annual.billingLabel}. ${annual.recurring ? "A Kiwify renova automaticamente ao final de cada ciclo — você pode cancelar quando quiser." : "Ao final dos 12 meses, é preciso renovar manualmente para continuar com acesso."}`],
  ["As ferramentas estão inclusas?", "Sim — LeadHunter, CRM, Criador de Sites, Criador de Prompts, Gerador de Mensagens e Calculadora de Orçamento fazem parte do acesso, sem custo adicional pela plataforma."],
  ["Posso usar pelo celular?", "Sim. A Full Vibe Coding também funciona como PWA — dá pra instalar na tela inicial e usar com navegação de aplicativo."],
  ["Tem comunidade e suporte?", "Sim — Discord, suporte pelos canais oficiais e encontros/calls periódicos."],
  ["Receberei atualizações?", "Sim. Novos conteúdos, materiais e ferramentas são adicionados à plataforma conforme forem disponibilizados."],
] as const;

export function FAQ(){const[open,setOpen]=useState<number|null>(0);return <section className="section faq-section" id="faq"><div className="container faq-layout"><div className="faq-copy" data-reveal><span className="kicker">FAQ</span><h2>O ESSENCIAL,<br/><span>SEM RODEIOS.</span></h2><p>As respostas que você precisa antes de entrar.</p></div><div className="faq-list" data-reveal>{questions.map(([question,answer],index)=>{const active=open===index;return <article className={active?"active":""} key={question}><button type="button" onClick={()=>setOpen(active?null:index)} aria-expanded={active}><span>{String(index+1).padStart(2,"0")}</span><b>{question}</b>{active?<Minus/>:<Plus/>}</button><div className="faq-answer" aria-hidden={!active}><p>{answer}</p></div></article>;})}</div></div></section>}
