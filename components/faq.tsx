"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "./section-heading";

const questions = [
  ["O que a extensão faz?", "Ela foi criada para ajudar a organizar e otimizar o fluxo de uso no Lovable, reduzindo tentativas desnecessárias e ajudando você a aproveitar melhor os créditos disponíveis. Funcionalidades específicas serão demonstradas com material real antes do lançamento."],
  ["A extensão funciona com Lovable?", "Sim. O produto é direcionado a usuários do Lovable. Requisitos de navegador, versão e compatibilidade serão informados nas instruções oficiais de instalação."],
  ["Ela me dá créditos extras?", "Não. A extensão não cria créditos oficiais do Lovable, não burla cobranças, não altera servidores e não remove limitações da plataforma. O objetivo é ajudar seus créditos existentes a renderem melhor por meio de um fluxo mais eficiente."],
  ["Preciso saber programar?", "Não. A proposta é ser acessível para iniciantes. Conhecimentos técnicos podem ajudar, mas o curso e os materiais oferecem uma base para os primeiros projetos."],
  ["O LeadHunter está incluído?", "Sim, conforme a oferta apresentada no momento da compra. Ele funciona como apoio para pesquisar potenciais empresas e oportunidades de prospecção."],
  ["Como funciona a comunidade?", "A comunidade é um espaço privado para compradores conversarem sobre Lovable, ferramentas de IA, projetos, prompts, prospecção, vendas e feedback."],
  ["A comunidade é no WhatsApp?", "Sim. A comunidade privada da Full Vibe Coding será no WhatsApp. As instruções de entrada serão enviadas após a confirmação do acesso."],
  ["O curso está incluído?", "Sim. Um curso gratuito para iniciantes será disponibilizado dentro da comunidade, cobrindo fundamentos de Vibe Coding, Lovable, prompts, publicação e noções iniciais de prospecção."],
  ["Qual a diferença entre mensal e vitalício?", "No mensal, o uso depende da assinatura ativa. No vitalício, a licença especificada na oferta é adquirida por pagamento único, sem mensalidade da licença. Comunidade, suporte, conteúdos e atualizações seguem as condições comerciais finais."],
  ["Como recebo minha licença?", "Nesta primeira fase, o pedido e a liberação serão processados manualmente. As instruções serão enviadas após o contato e a confirmação do pagamento."],
  ["Como é feita a instalação?", "O passo a passo oficial será enviado junto com a licença. Detalhes técnicos ainda não confirmados não são antecipados nesta página."],
  ["Posso usar em mais de um dispositivo?", "A quantidade de dispositivos permitida seguirá a regra comercial da licença informada antes da compra. Não publicamos um limite enquanto essa definição não estiver confirmada."],
  ["Como funciona o suporte?", "O suporte acontece pela comunidade privada no WhatsApp e cobre dúvidas iniciais sobre a extensão, Lovable, projetos e materiais. Prazos e limites seguirão as condições da oferta."],
  ["Como recebo atualizações?", "Quando houver atualizações incluídas no seu plano, as orientações serão comunicadas pelos canais oficiais. A cobertura e a duração das atualizações seguem as condições comerciais de cada licença."],
] as const;

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return <section className="section faq-section" id="faq"><div className="container faq-layout"><div><SectionHeading kicker="perguntas frequentes" title={<>AINDA FICOU COM <span>ALGUMA DÚVIDA?</span></>} description="Aqui estão as respostas mais importantes antes de você escolher seu plano."/><p className="faq-contact">Não encontrou sua resposta? <a href="#footer">Fale com o suporte</a></p></div><div className="faq-list">{questions.map(([question,answer],index)=>{const active=open===index; return <article className={active?"active":""} key={question}><button type="button" onClick={()=>setOpen(active?null:index)} aria-expanded={active}><span>{String(index+1).padStart(2,"0")}</span><b>{question}</b>{active?<Minus/>:<Plus/>}</button><div className="faq-answer" aria-hidden={!active}><p>{answer}</p></div></article>})}</div></div></section>;
}
