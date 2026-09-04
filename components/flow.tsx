const steps = [
  ["Aprenda", "Cursos e tutoriais."],
  ["Crie", "Sites e prompts."],
  ["Prospecte", "LeadHunter."],
  ["Organize", "CRM."],
  ["Venda", "Mensagens e orçamento."],
  ["Evolua", "Comunidade."],
] as const;

export function Flow() {
  return <section className="section flow-section" id="fluxo">
    <div className="container">
      <div className="section-intro flow-intro" data-reveal>
        <span className="kicker">Como funciona</span>
        <h2>UM FLUXO. DO PRIMEIRO<br/><span>CLIENTE À VENDA.</span></h2>
      </div>
      <div className="flow-steps" data-reveal>
        {steps.map(([title, text], i) => (
          <div className="flow-step" key={title}>
            <span className="flow-step-n">{String(i + 1).padStart(2, "0")}</span>
            <b>{title}</b>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>;
}
