import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://fullvipecoding.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Extensão para Lovable | Full Vibe Coding",
  description: "Faça seus créditos renderem melhor no Lovable com uma extensão criada para reduzir desperdícios e tornar seu fluxo de criação mais eficiente.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Seus créditos do Lovable podem render muito mais",
    description: "Extensão para Lovable com LeadHunter, curso, prompts e comunidade privada no WhatsApp.",
    url: "/",
    siteName: "Full Vibe Coding",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/brand/full-vibe-coding-logo.png", width: 1254, height: 1254, alt: "Full Vibe Coding" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Extensão para Lovable | Full Vibe Coding",
    description: "Crie mais no Lovable e reduza desperdícios de créditos com um fluxo mais eficiente.",
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
