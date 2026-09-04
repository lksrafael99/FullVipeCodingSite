import Link from "next/link";

export default function TermsPage() {
  return <main className="legal-page"><div className="container legal-card"><Link href="/">← Voltar</Link><span className="kicker">{"// DOCUMENTO COMERCIAL"}</span><h1>Termos de uso</h1><p>Esta página está preparada para receber os termos comerciais e de uso definitivos da Full Vibe Coding.</p><div className="legal-placeholder"><b>Conteúdo pendente de validação jurídica.</b><p>Antes da publicação, informe condições de acesso, cobrança, cancelamento, suporte, propriedade intelectual e regras específicas da oferta.</p></div></div></main>;
}
