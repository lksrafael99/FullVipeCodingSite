import { Community } from "@/components/community";
import { FAQ } from "@/components/faq";
import { Features } from "@/components/features";
import { FinalCTA } from "@/components/final-cta";
import { Flow } from "@/components/flow";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { MotionEffects } from "@/components/motion-effects";
import { Pricing } from "@/components/pricing";
import { purchaseConfig } from "@/config/purchase";

export default function Home() {
  const annual = purchaseConfig.plans.annual;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Full Vibe Coding — Plataforma de Membros",
    description: "Plataforma para aprender, criar, prospectar, organizar e vender projetos digitais: cursos, tutoriais, LeadHunter, CRM, criador de sites, criador de prompts, gerador de mensagens, calculadora de orçamento, biblioteca de arquivos, templates e comunidade.",
    brand: { "@type": "Brand", name: "Full Vibe Coding" },
    offers: {
      "@type": "Offer",
      name: annual.name,
      price: annual.price?.replace(/\D/g, "") ?? undefined,
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
    },
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <MotionEffects />
    <Header />
    <main>
      <Hero />
      <Features />
      <Flow />
      <Community />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </main>
    <Footer />
    <MobileStickyCta />
  </>;
}
