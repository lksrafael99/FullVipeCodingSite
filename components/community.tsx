"use client";

import { ArrowUpRight, Headphones, MessageCircle, MessagesSquare, Radio } from "lucide-react";
import { communityConfig } from "@/config/purchase";
import { trackEvent } from "@/lib/analytics";

export function Community() {
  return <section className="section community-section" id="comunidade">
    <div className="container community-shell" data-reveal>
      <div className="community-copy">
        <span className="kicker">Mais que conteúdo</span>
        <h2>VOCÊ NÃO<br/><span>CRIA SOZINHO.</span></h2>
        <p>Discord, suporte e encontros periódicos pra tirar dúvidas, trocar ideias e evoluir mais rápido.</p>
      </div>
      <div className="community-points">
        <span><MessagesSquare/> Discord</span>
        <span><Headphones/> Suporte</span>
        <span><Radio/> Calls periódicas</span>
      </div>
      <a className="community-free" href={communityConfig.freeWhatsappUrl} target="_blank" rel="noopener noreferrer" onClick={()=>trackEvent("click_community")}>
        <MessageCircle/> Entrar no grupo aberto <ArrowUpRight/>
      </a>
    </div>
  </section>;
}
