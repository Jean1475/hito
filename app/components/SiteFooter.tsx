export default function SiteFooter() {
  return (
    <footer className="footer" data-screen-label="Footer">
      <div className="footer-grid">
        <div className="footer-col">
          <span className="word" style={{ fontWeight: 900, fontSize: 32, letterSpacing: "-0.055em" }}>
            hito<span style={{ color: "var(--cobalt)" }}>.</span>
          </span>
          <p className="blurb">
            Studio de producto en Madrid. Construimos MVPs, SaaS y páginas web
            con founders y equipos pequeños desde 2026.
          </p>
        </div>
        <div className="footer-col">
          <p className="footer-label">Studio</p>
          <ul>
            <li><a href="/">Trabajo</a></li>
            <li><a href="/servicios">Servicios</a></li>
            <li><a href="/#equipo">Equipo</a></li>
            <li><a href="/#hablamos">Hablamos</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <p className="footer-label">Contacto</p>
          <ul>
            <li><a href="mailto:hitomarketingstudio@gmail.com">hitomarketingstudio@gmail.com</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <p className="footer-label">Dónde</p>
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
  );
}
