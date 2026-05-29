import type { Metadata } from "next";
import NavScrollEffect from "../components/NavScrollEffect";
import DiagnosticoQuiz from "../components/DiagnosticoQuiz";
import MobileMenuButton from "../components/MobileMenuButton";

export const metadata: Metadata = {
  title: "Hito — Diagnóstico de proyecto",
  description: "3 preguntas. La IA te dice si encajamos y qué servicio necesitas.",
};

export default function Diagnostico() {
  return (
    <>
      <style>{`
        #nav { position: fixed; width: 100%; top: 0; left: 0; background: var(--cream); }
      `}</style>

      {/* Nav */}
      <NavScrollEffect />
      <nav className="nav" id="nav" data-screen-label="Nav">
        <a className="brand" href="/" aria-label="Hito home">
          <svg viewBox="0 0 100 100" width="30" height="30" aria-hidden="true">
            <path d="M 52 12 L 90 58 L 70 58 L 52 36 L 34 58 L 14 58 Z" fill="#0E0E10" />
            <path d="M 30 66 L 50 88 L 36 88 L 30 81 L 24 88 L 10 88 Z" fill="#0E0E10" />
          </svg>
          <span className="word">hito<span className="dot">.</span></span>
        </a>
        <div className="nav-links">
          <a href="/">Trabajo</a>
          <a href="/servicios">Servicios</a>
          <a href="/#equipo">Equipo</a>
          <a href="/#hablamos" className="nav-cta">Hablamos →</a>
          <MobileMenuButton currentPage="diagnostico" />
        </div>
      </nav>

      {/* Quiz IA */}
      <DiagnosticoQuiz />

      {/* Footer */}
      <footer className="footer" data-screen-label="Footer">
        <div className="footer-grid">
          <div className="footer-col">
            <span className="word" style={{ fontWeight: 900, fontSize: 32, letterSpacing: "-0.055em" }}>
              hito<span style={{ color: "var(--cobalt)" }}>.</span>
            </span>
            <p className="blurb">Studio de producto en Madrid. Construimos MVPs, SaaS y páginas web con founders y equipos pequeños desde 2026.</p>
          </div>
          <div className="footer-col">
            <h6>Studio</h6>
            <ul>
              <li><a href="/">Trabajo</a></li>
              <li><a href="/servicios">Servicios</a></li>
              <li><a href="/#equipo">Equipo</a></li>
              <li><a href="/#hablamos">Hablamos</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h6>Contacto</h6>
            <ul>
              <li><a href="mailto:hitomarketingstudio@gmail.com">hitomarketingstudio@gmail.com</a></li>
              <li><a href="#">Calendar · 30 min</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Read.cv</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h6>Dónde</h6>
            <ul>
              <li>C / del Pez 12, 3°</li>
              <li>28004 — Madrid</li>
              <li>40.4° N · 3.7° W</li>
              <li>Embedded · CET</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© MMXXVI — Hito Studio S.L.</span>
          <span>B-77 419 220</span>
          <span>Hecho con cariño · Madrid</span>
        </div>
        <div className="bigmark" aria-hidden="true">hito<span className="dot">.</span></div>
      </footer>
    </>
  );
}
