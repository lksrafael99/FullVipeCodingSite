import { Audience } from "@/components/audience";
import { Community, Course } from "@/components/community";
import { Ecosystem, ProductShowcases } from "@/components/ecosystem";
import { FAQ } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Library, SalesKit } from "@/components/library-sales";
import { CompleteOffer, ExtensionDemo, ExtensionSolution, LovableProblem } from "@/components/lovable-product";
import { Pricing } from "@/components/pricing";
import { Process } from "@/components/process";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Extensão Full Vibe Coding para Lovable",
    description: "Extensão para otimizar o fluxo no Lovable, reduzir desperdício de créditos e criar projetos com mais eficiência.",
    brand: { "@type": "Brand", name: "Full Vibe Coding" },
    offers: [
      { "@type": "Offer", name: "Plano mensal", price: "59.99", priceCurrency: "BRL", availability: "https://schema.org/InStock" },
      { "@type": "Offer", name: "Plano vitalício", price: "497", priceCurrency: "BRL", availability: "https://schema.org/InStock" },
    ],
  };

  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}/><Header/><main><Hero/><LovableProblem/><ExtensionSolution/><ExtensionDemo/><CompleteOffer/><Ecosystem/><ProductShowcases/><Community/><Course/><Library/><SalesKit/><Process/><Audience/><Pricing/><FAQ/><FinalCTA/></main><Footer/><a className="mobile-sticky-cta" href="#planos">Ver planos <ArrowIcon/></a></>;
}

function ArrowIcon() {
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>;
}
