import { ArrowRight, BookOpen, CodeXml, Compass, Rocket, Search, Target } from "lucide-react";
import { SectionHeading } from "./section-heading";

const pillars = [
  { icon: BookOpen, number: "01", title: "APRENDA", text: "Curso direto ao ponto e comunidade para começar com direção." },
  { icon: CodeXml, number: "02", title: "CRIE", text: "Extensão, prompts e templates para transformar ideias em sites." },
  { icon: Target, number: "03", title: "VENDA", text: "LeadHunter e materiais comerciais para buscar oportunidades." },
  { icon: Rocket, number: "04", title: "ESCALE", text: "Suporte, networking e evolução contínua dos seus processos." },
];

export function Ecosystem() {
  return (
    <section className="section ecosystem" id="ecossistema">
      <div className="container">
        <SectionHeading kicker="o método full vibe" title={<>APRENDA. CRIE.<br /><span>VENDA. ESCALE.</span></>} description="A assinatura da marca também é o nosso caminho: aprenda o processo, crie com IA, encontre oportunidades e evolua com uma comunidade ao seu lado." />
        <div className="pillar-grid">
          {pillars.map(({ icon: Icon, number, title, text }) => <article className="pillar-card" key={title}><div className="card-top"><Icon /><span>{number}</span></div><h3>{title}</h3><p>{text}</p><div className="card-line" /></article>)}
        </div>
        <div className="ecosystem-equation"><span>FERRAMENTA</span><b>+</b><span>CONHECIMENTO</span><b>+</b><span>COMUNIDADE</span><b>+</b><span>PROSPECÇÃO</span></div>
      </div>
    </section>
  );
}

export function ProductShowcases() {
  return (
      <section className="section leadhunter-section" id="leadhunter">
        <div className="container product-layout reverse">
          <div className="lead-visual" aria-label="Fluxo do LeadHunter">
            <div className="radar"><span className="radar-line" /><i className="dot d1" /><i className="dot d2" /><i className="dot d3" /><Search size={27} /></div>
            <div className="lead-result r1"><span>01</span><div><b>Empresa encontrada</b><small>Oportunidade para analisar</small></div></div>
            <div className="lead-result r2"><span>02</span><div><b>Contato organizado</b><small>Pronto para sua abordagem</small></div></div>
            <div className="lead-steps"><span>BUSCA</span><ArrowRight/><span>EMPRESAS</span><ArrowRight/><span>LEADS</span><ArrowRight/><span>ABORDAGEM</span></div>
          </div>
          <div>
            <SectionHeading kicker="leadhunter incluído" title={<>ENCONTRE OPORTUNIDADES PARA <span>VENDER SEUS SITES.</span></>} description="Enquanto a extensão ajuda você a criar com mais eficiência, o LeadHunter ajuda a buscar potenciais empresas e oportunidades para prospecção." />
            <div className="info-note"><Compass /><p><b>Extensão para criar. LeadHunter para prospectar.</b><br />A ferramenta apoia a pesquisa; a análise e a abordagem continuam nas suas mãos.</p></div>
            <a className="button button-outline" href="#oferta">Ver a oferta completa <ArrowRight size={17}/></a>
          </div>
        </div>
      </section>
  );
}
