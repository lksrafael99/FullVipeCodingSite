import { ArrowDown, BookOpen, CheckCircle2, Crosshair, FileText, Presentation, WandSparkles } from "lucide-react";
import { SectionHeading } from "./section-heading";

const steps = [
  { icon: BookOpen, label: "APRENDA", text: "Curso introdutório" },
  { icon: Crosshair, label: "ENCONTRE", text: "LeadHunter" },
  { icon: WandSparkles, label: "CRIE", text: "Lovable + extensão" },
  { icon: FileText, label: "ABORDE", text: "Scripts prontos" },
  { icon: Presentation, label: "APRESENTE", text: "Materiais comerciais" },
  { icon: CheckCircle2, label: "ENTREGUE", text: "Checklist final" },
];

export function Process() {
  return <section className="section process-section" id="processo"><div className="container"><SectionHeading align="center" kicker="um caminho prático" title={<>DO ZERO <span>À ENTREGA.</span></>} description="Não é uma fórmula mágica. É uma estrutura para você saber qual pode ser o próximo passo."/><div className="process-flow">{steps.map(({icon:Icon,label,text}, index)=><div className="process-item" key={label}><div className="process-number">0{index+1}</div><div className="process-icon"><Icon/></div><h3>{label}</h3><p>{text}</p>{index < steps.length-1 && <ArrowDown className="process-arrow"/>}</div>)}</div><div className="process-caption"><span>IDEIA</span><i/><b>UM PROCESSO MAIS CLARO PARA SAIR DO PAPEL</b><i/><span>PROJETO</span></div></div></section>;
}
