"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { purchaseConfig, monthlyEquivalent } from "@/config/purchase";

const monthlyPlan = purchaseConfig.plans.monthly;
const annual = purchaseConfig.plans.annual;
const annualEquivalent = monthlyEquivalent(annual);

const questions = [
  ["O que é a Full Vibe Coding?", "Uma plataforma que reúne cursos, tutoriais, LeadHunter, CRM, criador de sites, criador de prompts, gerador de mensagens, calculadora de orçamento, biblioteca de arquivos, templates e comunidade — tudo em um único acesso."],
  ["Preciso saber programar?", "Não. Os cursos atendem quem está começando. Prática e dedicação continuam essenciais, mas você não precisa de experiência prévia com código."],
  ["Qual a diferença entre o Mensal e o Anual?", `No Mensal (${monthlyPlan.price}/mês) você tem acesso completo à plataforma e à Comunidade Full Vibe. No Anual você tem tudo do Mensal mais os benefícios VIP: mentorias em grupo com os mentores, Grupo VIP no WhatsApp, Canais VIP no Discord, suporte prioritário e conteúdos antecipados.`],
  [`O Plano Anual custa ${annualEquivalent ?? "o valor mensal exibido"} por mês?`, `Não. ${annualEquivalent ?? "O valor mensal exibido"} é apenas o valor mensal equivalente, para referência. A cobrança é de ${annual.price} referente ao plano anual (${annual.recurring ? "a Kiwify recobra a cada 12 meses, enquanto o plano estiver ativo" : "12 meses de acesso"}), exatamente como aparece no checkout.`],
  ["Posso começar no Mensal?", `Sim. O Mensal existe justamente pra quem quer entrar com menor compromisso — ${monthlyPlan.billingLabel}, e você pode cancelar quando quiser.`],
  ["Posso mudar do Mensal para o Anual depois?", "Sim. É só contratar o Plano Anual quando quiser — o acesso passa a valer pelas condições do Anual a partir da nova contratação. Em caso de dúvida sobre valores ou período, fale com o suporte antes de trocar."],
  ["As ferramentas estão inclusas nos dois planos?", "Sim — LeadHunter, CRM, Criador de Sites, Criador de Prompts, Gerador de Mensagens e Calculadora de Orçamento fazem parte do acesso em qualquer um dos planos, sem custo adicional pela plataforma."],
  ["Como funcionam as mentorias e os conteúdos antecipados?", "As mentorias são encontros em grupo com os mentores da Full Vibe, exclusivos para membros anuais. Alguns conteúdos e materiais podem ser liberados primeiro para membros anuais e depois disponibilizados aos membros mensais."],
  ["Posso usar pelo celular?", "Sim. A Full Vibe Coding também funciona como PWA — dá pra instalar na tela inicial e usar com navegação de aplicativo."],
  ["Receberei atualizações?", "Sim. Novos conteúdos, materiais e ferramentas são adicionados à plataforma conforme forem disponibilizados."],
] as const;

export function FAQ(){const[open,setOpen]=useState<number|null>(0);return <section className="section faq-section" id="faq"><div className="container faq-layout"><div className="faq-copy" data-reveal><span className="kicker">FAQ</span><h2>O ESSENCIAL,<br/><span>SEM RODEIOS.</span></h2><p>As respostas que você precisa antes de entrar.</p></div><div className="faq-list" data-reveal>{questions.map(([question,answer],index)=>{const active=open===index;return <article className={active?"active":""} key={question}><button type="button" onClick={()=>setOpen(active?null:index)} aria-expanded={active}><span>{String(index+1).padStart(2,"0")}</span><b>{question}</b>{active?<Minus/>:<Plus/>}</button><div className="faq-answer" aria-hidden={!active}><p>{answer}</p></div></article>;})}</div></div></section>}
