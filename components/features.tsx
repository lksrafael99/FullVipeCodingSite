import { BookOpen, Calculator, FolderOpen, KanbanSquare, LayoutPanelTop, MessageSquareText, Radar, Smartphone, WandSparkles } from "lucide-react";

const items = [
  { icon: Radar, title: "LeadHunter", text: "Encontre empresas e oportunidades reais de prospecção." },
  { icon: KanbanSquare, title: "CRM", text: "Organize leads e negociações do contato ao fechamento." },
  { icon: LayoutPanelTop, title: "Criador de Sites", text: "Crie demos e sites completos para seus clientes." },
  { icon: WandSparkles, title: "Criador de Prompts", text: "Transforme contexto em prompts estruturados." },
  { icon: MessageSquareText, title: "Gerador de Mensagens", text: "Abordagens para WhatsApp, Instagram e e-mail." },
  { icon: Calculator, title: "Calculadora de Orçamento", text: "Monte propostas com valores claros e profissionais." },
  { icon: FolderOpen, title: "Biblioteca e Templates", text: "Arquivos, contratos, planilhas e sites prontos pra clonar." },
  { icon: BookOpen, title: "Cursos e Tutoriais", text: "Aprenda cada ferramenta com aulas e passo a passo." },
  { icon: Smartphone, title: "App no celular (PWA)", text: "Instale na tela inicial e use com navegação de app." },
];

export function Features() {
  return <section className="section features-section" id="ferramentas">
    <div className="container">
      <div className="section-intro" data-reveal>
        <span className="kicker">Tudo em um só lugar</span>
        <h2>UMA PLATAFORMA.<br/><span>NENHUMA ABA A MAIS.</span></h2>
        <p>Cursos, ferramentas de prospecção, CRM, criação e materiais — sem precisar contratar cinco serviços diferentes.</p>
      </div>
      <div className="features-grid">
        {items.map(({ icon: Icon, title, text }) => (
          <article className="feature-card" data-reveal key={title}>
            <span className="feature-icon"><Icon/></span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>;
}
