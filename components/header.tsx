"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./logo";

const links = [
  ["O problema", "#problema"],
  ["A extensão", "#extensao"],
  ["O que você recebe", "#oferta"],
  ["Planos", "#planos"],
  ["FAQ", "#faq"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        <Logo />
        <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Navegação principal">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="button button-small button-primary mobile-nav-cta" href="#planos">Otimizar meu Lovable</a>
        </nav>
        <a className="button button-small button-primary desktop-nav-cta" href="#planos">Otimizar meu Lovable</a>
        <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
