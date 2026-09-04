import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://fullvipecoding.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Full Vibe Coding | Plataforma para Aprender, Criar, Prospectar e Vender com IA",
  description: "Cursos, tutoriais, LeadHunter, CRM, criador de sites, criador de prompts, gerador de mensagens, calculadora de orçamento, biblioteca de arquivos, templates e comunidade em uma única plataforma.",
  keywords: ["plataforma de criação de sites", "prospecção com IA", "CRM", "LeadHunter", "criador de prompts", "cursos de IA", "templates de sites"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Full Vibe Coding — aprenda, crie, prospecte e venda",
    description: "Cursos, ferramentas de prospecção e CRM, criador de sites, prompts, mensagens, materiais e comunidade em uma única plataforma. Também disponível como PWA no celular.",
    url: "/",
    siteName: "Full Vibe Coding",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/brand/full-vibe-coding-logo.png", width: 1254, height: 1254, alt: "Full Vibe Coding" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Full Vibe Coding | Plataforma para criar, prospectar e vender com IA",
    description: "Cursos, LeadHunter, CRM, criador de sites, prompts, mensagens, materiais e comunidade em um único acesso.",
    images: ["/brand/full-vibe-coding-logo.png"],
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#07080b" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
