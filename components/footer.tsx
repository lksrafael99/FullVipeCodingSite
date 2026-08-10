import { Instagram, MessageCircle } from "lucide-react";
import { Logo } from "./logo";

export function Footer() {
  return <footer id="footer"><div className="container footer-main"><div className="footer-brand"><Logo/><p>Extensão para usuários do Lovable, acompanhada de ferramentas, treinamento e comunidade para criar e vender sites com IA.</p></div><div><b>EXPLORE</b><a href="#extensao">A extensão</a><a href="#demonstracao">Como funciona</a><a href="#comunidade">WhatsApp</a><a href="#planos">Planos</a></div><div><b>INFORMAÇÕES</b><a href="/termos">Termos de uso</a><a href="/privacidade">Privacidade</a><a href="#faq">Perguntas frequentes</a><span className="disabled-link" title="Configure o canal antes de publicar">Suporte</span></div><div><b>ACOMPANHE</b><span className="disabled-link"><Instagram/> Instagram <small>configurar link</small></span><span className="disabled-link"><MessageCircle/> Comunidade <small>WhatsApp para membros</small></span></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Full Vibe Coding.</span><span>APRENDA. CRIE. VENDA. ESCALE. <i>●</i></span></div></footer>;
}
