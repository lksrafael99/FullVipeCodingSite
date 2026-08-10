import Image from "next/image";
import { BookOpenCheck, CirclePlay, Code2, Headphones, Lightbulb, MessageCircle, MessagesSquare, Network, Send, Sparkles, Users2 } from "lucide-react";
import { SectionHeading } from "./section-heading";

const benefits = [
  [Headphones, "Suporte e dúvidas"], [Network, "Networking"], [Code2, "Projetos"],
  [MessageCircle, "Feedback"], [Sparkles, "Prompts"], [Lightbulb, "Conteúdos"],
] as const;

export function Community() {
  return <section className="section community-section" id="comunidade"><div className="container community-layout"><div><SectionHeading kicker="comunidade privada no WhatsApp" title={<>VOCÊ NÃO COMPRA A FERRAMENTA <span>E FICA SOZINHO.</span></>} description="Compradores entram na comunidade privada da Full Vibe Coding no WhatsApp para falar sobre Lovable, criação de sites, ferramentas de IA, prospecção e vendas."/><div className="benefit-grid">{benefits.map(([Icon,title])=><div key={title}><Icon/><span>{title}</span></div>)}</div><p className="community-note"><Users2/> Suporte, dúvidas, networking, troca de experiências e feedback de projetos em um espaço para membros.</p></div><div><div className="whatsapp-mock"><div className="whatsapp-head"><div className="community-logo"><Image src="/brand/full-vibe-coding-logo.png" width={38} height={38} alt=""/></div><div><b>Full Vibe Coding</b><small>Comunidade privada • WhatsApp</small></div><MessagesSquare/></div><div className="whatsapp-body"><div className="whatsapp-date">HOJE</div><div className="whatsapp-message incoming"><small>COMUNIDADE FULL VIBE</small><p>Use este espaço para dúvidas sobre Lovable, projetos, prompts e prospecção.</p><time>10:32</time></div><div className="whatsapp-message outgoing"><p>Posso enviar meu projeto para receber feedback?</p><time>10:34 ✓✓</time></div><div className="whatsapp-message incoming"><small>COMUNIDADE FULL VIBE</small><p>Sim. Compartilhe o contexto do projeto para a comunidade entender e contribuir.</p><time>10:35</time></div></div><div className="whatsapp-input">Mensagem <Send size={15}/></div></div><p className="mock-caption">Representação visual da comunidade. Conversas reais podem variar.</p></div></div></section>;
}

export function Course() {
  const lessons = ["Introdução ao Vibe Coding", "Como trabalhar com IA e Lovable", "Sites e prompts bem estruturados", "Publicação de projetos", "Prospecção e apresentação para clientes"];
  return <section className="section course-section"><div className="container course-layout"><div className="course-player"><div className="course-screen"><CirclePlay/><span>DO ZERO AO<br/><b>PRIMEIRO PROJETO COM IA</b></span></div><div className="course-progress"><span>CURSO GRATUITO NA COMUNIDADE</span><div><i/></div><b>Direto e prático</b></div></div><div><SectionHeading kicker="curso gratuito para iniciantes" title={<>ESTÁ COMEÇANDO<br/><span>DO ZERO?</span></>} description="Dentro da comunidade, disponibilizaremos um treinamento introdutório para entender o Vibe Coding, usar o Lovable, criar, publicar e começar a apresentar seus projetos."/><div className="lesson-list">{lessons.map((lesson,index)=><div key={lesson}><span>0{index+1}</span><p>{lesson}</p><BookOpenCheck size={17}/></div>)}</div></div></div></section>;
}
