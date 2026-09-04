import { Logo } from "./logo";

export function Footer(){return <footer><div className="container footer-inner"><Logo/><nav aria-label="Links do rodapé"><a href="#ferramentas">Ferramentas</a><a href="#comunidade">Comunidade</a><a href="/termos">Termos</a><a href="/privacidade">Privacidade</a></nav><span>© {new Date().getFullYear()} Full Vibe Coding.</span></div></footer>}
