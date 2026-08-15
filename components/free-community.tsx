"use client";

import { GraduationCap, Gift, MessageCircle, Rss, Users2 } from "lucide-react";
import { communityConfig } from "@/config/purchase";
import { trackEvent } from "@/lib/analytics";
import { SectionHeading } from "./section-heading";

const perks = [
  [Rss, "Acompanhar conteúdos e novidades"],
  [Users2, "Fazer networking com a comunidade"],
  [Gift, "Receber materiais gratuitos quando disponibilizados"],
  [GraduationCap, "Aprender mais sobre criação de sites e IA"],
] as const;

export function FreeCommunity() {
  return (
    <section className="section free-community-section" id="comunidade-free">
      <div className="container free-community-card">
        <div>
          <span className="badge-free">COMUNIDADE FREE · GRUPO ABERTO</span>
          <SectionHeading
            kicker="ainda não é membro?"
            title={<>AINDA NÃO QUER COMPRAR? <span>ENTRE NA NOSSA COMUNIDADE GRATUITAMENTE.</span></>}
            description="Faça parte da comunidade geral da Full Vibe Coding e acompanhe conteúdos, novidades, networking e materiais para quem quer aprender a criar, vender e escalar projetos com IA."
          />
          <div className="free-perks">
            {perks.map(([Icon, label]) => (
              <div key={label}>
                <Icon />
                <span>{label}</span>
              </div>
            ))}
          </div>
          <p className="free-community-note">
            Este é o grupo geral e aberto da Full Vibe Coding — diferente da comunidade privada, exclusiva para quem já é membro.
          </p>
        </div>
        <a
          className="button button-outline free-community-cta"
          href={communityConfig.freeWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="whatsapp-free-community"
          onClick={() => trackEvent("click_community")}
        >
          <MessageCircle size={18} aria-hidden="true" />
          <span>ENTRAR NA COMUNIDADE FREE</span>
        </a>
      </div>
    </section>
  );
}
