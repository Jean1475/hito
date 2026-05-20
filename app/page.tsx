import NavScrollEffect from "./components/NavScrollEffect";

export default function Home() {
  return (
    <>
      <NavScrollEffect />

      {/* Nav */}
      <nav className="nav" id="nav" data-screen-label="Nav">
        <a className="brand" href="/" aria-label="Hito home">
          <svg viewBox="0 0 100 100" width="30" height="30" aria-hidden="true">
            <path d="M 52 12 L 90 58 L 70 58 L 52 36 L 34 58 L 14 58 Z" fill="#0E0E10" />
            <path d="M 30 66 L 50 88 L 36 88 L 30 81 L 24 88 L 10 88 Z" fill="#0E0E10" />
          </svg>
          <span className="word">hito<span className="dot">.</span></span>
        </a>
        <div className="nav-links">
          <a href="/" className="active">Trabajo</a>
          <a href="/servicios">Servicios</a>
          <a href="#equipo">Equipo</a>
          <a href="#hablamos" className="nav-cta">Hablamos →</a>
        </div>
      </nav>

      {/* Hero */}
      <header className="wrap hero" data-screen-label="Hero">
        <span className="eyebrow">Studio · MVP · SaaS · Web</span>
        <h1 className="h-display">
          Tu próximo<br />hito<span className="dot">,</span><br />en producción.
        </h1>
        <p className="lede">
          Diseñamos y construimos producto digital para founders y equipos
          pequeños. Páginas web, MVPs y SaaS. Embedded con tu equipo,
          sprints cortos, enviamos a producción — no a Figma.
        </p>
        <div className="btn-row">
          <a href="#hablamos" className="btn btn-primary">
            Cuéntanos tu proyecto <span className="arrow">→</span>
          </a>
          <a href="/servicios" className="btn btn-ghost">Servicios</a>
        </div>
      </header>

      {/* Portfolio */}
      <section className="section" id="trabajo" data-screen-label="Trabajo">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">Selected work · 2024 – 2026</span>
              <h2>Cosas que<br />hemos enviado.</h2>
            </div>
            <p className="desc">
              Una selección de proyectos recientes. Páginas, MVPs y producto
              SaaS para founders, fondos y equipos chicos. Si quieres
              referencias detalladas, te las enseñamos en una llamada.
            </p>
          </div>

          {/* Featured project */}
          <div className="work-featured">
            <article className="work-card" data-screen-label="Work · Luma OS">
              <div className="work-thumb">
                <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                  <rect width="800" height="500" fill="#0E0E10" />
                  <rect x="36" y="28" width="22" height="22" rx="4" fill="#1E50C9" />
                  <rect x="68" y="34" width="56" height="10" rx="3" fill="#F4F1E9" opacity="0.9" />
                  <rect x="640" y="32" width="50" height="14" rx="7" fill="#F4F1E9" opacity="0.18" />
                  <rect x="700" y="32" width="64" height="14" rx="7" fill="#1E50C9" />
                  <text x="36" y="160" fontFamily="Archivo, sans-serif" fontWeight="900" fontSize="96" letterSpacing="-5" fill="#F4F1E9">$ 24.7M</text>
                  <text x="36" y="200" fontFamily="JetBrains Mono, monospace" fontSize="14" fill="#F4F1E9" opacity="0.55" letterSpacing="2">AUM · Q2 2025 · +18.4%</text>
                  <polyline points="36,360 100,320 160,340 220,290 280,300 340,250 400,260 460,210 520,230 580,180 640,200 700,140 760,160" fill="none" stroke="#1E50C9" strokeWidth="3" />
                  <line x1="36" y1="420" x2="764" y2="420" stroke="#F4F1E9" opacity="0.1" />
                  <rect x="36" y="440" width="220" height="44" rx="6" fill="#F4F1E9" opacity="0.08" />
                  <rect x="272" y="440" width="220" height="44" rx="6" fill="#F4F1E9" opacity="0.08" />
                  <rect x="508" y="440" width="256" height="44" rx="6" fill="#F4F1E9" opacity="0.08" />
                </svg>
              </div>
              <div className="work-meta">
                <div>
                  <h3 className="work-title">Luma OS — Portfolio dashboard</h3>
                  <div className="work-sub">Luma Capital · 2025 · SaaS · 8 semanas</div>
                </div>
                <div className="work-tags">
                  <span className="tag">Producto</span>
                  <span className="tag">Next.js</span>
                  <span className="tag">Fintech</span>
                </div>
              </div>
            </article>
          </div>

          {/* Grid 2x2 */}
          <div className="work-grid">

            <article className="work-card" data-screen-label="Work · Bardo">
              <div className="work-thumb">
                <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                  <rect width="800" height="600" fill="#F4F1E9" />
                  <rect x="40" y="36" width="18" height="18" rx="3" fill="#0E0E10" />
                  <rect x="68" y="40" width="48" height="10" rx="3" fill="#0E0E10" />
                  <rect x="640" y="34" width="64" height="22" rx="11" fill="#0E0E10" />
                  <text x="40" y="220" fontFamily="Archivo, sans-serif" fontWeight="900" fontSize="84" letterSpacing="-4" fill="#0E0E10">Bardo</text>
                  <text x="40" y="290" fontFamily="Archivo, sans-serif" fontWeight="900" fontSize="56" letterSpacing="-3" fill="#0E0E10">canta lo que</text>
                  <text x="40" y="350" fontFamily="Archivo, sans-serif" fontWeight="900" fontSize="56" letterSpacing="-3" fill="#C2402A">no se dice.</text>
                  <rect x="40" y="420" width="220" height="140" rx="8" fill="#EAE5D6" />
                  <rect x="280" y="420" width="220" height="140" rx="8" fill="#EAE5D6" />
                  <rect x="520" y="420" width="220" height="140" rx="8" fill="#0E0E10" />
                  <rect x="540" y="438" width="40" height="40" rx="20" fill="#C2402A" />
                </svg>
              </div>
              <div className="work-meta">
                <div>
                  <h3 className="work-title">Bardo — Editorial poético</h3>
                  <div className="work-sub">Bardo Books · 2025 · Web · 4 semanas</div>
                </div>
                <div className="work-tags">
                  <span className="tag">Web</span>
                  <span className="tag">Brand</span>
                </div>
              </div>
            </article>

            <article className="work-card" data-screen-label="Work · Cantera">
              <div className="work-thumb">
                <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                  <rect width="800" height="600" fill="#EAE5D6" />
                  <rect x="40" y="36" width="14" height="14" rx="2" fill="#0E0E10" />
                  <rect x="64" y="38" width="48" height="10" rx="3" fill="#0E0E10" />
                  <rect x="600" y="32" width="160" height="22" rx="6" fill="#0E0E10" opacity="0.08" />
                  <rect x="40" y="80" width="160" height="500" rx="8" fill="#F4F1E9" />
                  <rect x="56" y="100" width="120" height="10" rx="3" fill="#0E0E10" opacity="0.4" />
                  <rect x="56" y="124" width="100" height="10" rx="3" fill="#0E0E10" opacity="0.4" />
                  <rect x="56" y="148" width="130" height="10" rx="3" fill="#1E50C9" />
                  <rect x="56" y="172" width="90" height="10" rx="3" fill="#0E0E10" opacity="0.4" />
                  <rect x="220" y="80" width="540" height="80" rx="8" fill="#F4F1E9" />
                  <circle cx="260" cy="120" r="22" fill="#1E50C9" />
                  <rect x="296" y="106" width="140" height="12" rx="3" fill="#0E0E10" />
                  <rect x="296" y="128" width="200" height="8" rx="3" fill="#0E0E10" opacity="0.4" />
                  <rect x="220" y="180" width="540" height="80" rx="8" fill="#F4F1E9" />
                  <circle cx="260" cy="220" r="22" fill="#C2402A" />
                  <rect x="296" y="206" width="140" height="12" rx="3" fill="#0E0E10" />
                  <rect x="296" y="228" width="200" height="8" rx="3" fill="#0E0E10" opacity="0.4" />
                  <rect x="220" y="280" width="540" height="80" rx="8" fill="#F4F1E9" />
                  <circle cx="260" cy="320" r="22" fill="#0E0E10" />
                  <rect x="296" y="306" width="140" height="12" rx="3" fill="#0E0E10" />
                  <rect x="296" y="328" width="200" height="8" rx="3" fill="#0E0E10" opacity="0.4" />
                </svg>
              </div>
              <div className="work-meta">
                <div>
                  <h3 className="work-title">Cantera — ATS para talento técnico</h3>
                  <div className="work-sub">Cantera HR · 2024 · MVP · 6 semanas</div>
                </div>
                <div className="work-tags">
                  <span className="tag">MVP</span>
                  <span className="tag">HR Tech</span>
                </div>
              </div>
            </article>

            <article className="work-card" data-screen-label="Work · Forja Studio">
              <div className="work-thumb">
                <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                  <rect width="800" height="600" fill="#0E0E10" />
                  <rect x="40" y="34" width="20" height="20" rx="4" fill="#C2402A" />
                  <rect x="70" y="40" width="80" height="10" rx="3" fill="#F4F1E9" opacity="0.9" />
                  <rect x="640" y="32" width="64" height="22" rx="11" fill="#F4F1E9" />
                  <text x="40" y="180" fontFamily="JetBrains Mono, monospace" fontSize="12" letterSpacing="3" fill="#F4F1E9" opacity="0.5">↳ AGENCIA DE PRODUCTO</text>
                  <text x="40" y="280" fontFamily="Archivo, sans-serif" fontWeight="900" fontSize="80" letterSpacing="-4" fill="#F4F1E9">Forja</text>
                  <text x="40" y="360" fontFamily="Archivo, sans-serif" fontWeight="900" fontSize="62" letterSpacing="-3" fill="#F4F1E9">producto<tspan fill="#C2402A">.</tspan></text>
                  <circle cx="600" cy="320" r="120" fill="#C2402A" opacity="0.9" />
                  <circle cx="680" cy="380" r="50" fill="#F4F1E9" />
                  <rect x="40" y="500" width="100" height="32" rx="16" fill="#F4F1E9" opacity="0.12" />
                  <rect x="152" y="500" width="120" height="32" rx="16" fill="#F4F1E9" opacity="0.12" />
                  <rect x="284" y="500" width="80" height="32" rx="16" fill="#F4F1E9" opacity="0.12" />
                </svg>
              </div>
              <div className="work-meta">
                <div>
                  <h3 className="work-title">Forja — Web del studio</h3>
                  <div className="work-sub">Forja Studio · 2024 · Web · 3 semanas</div>
                </div>
                <div className="work-tags">
                  <span className="tag">Web</span>
                  <span className="tag">Brand</span>
                </div>
              </div>
            </article>

            <article className="work-card" data-screen-label="Work · Veta">
              <div className="work-thumb">
                <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                  <rect width="800" height="600" fill="#F4F1E9" />
                  <rect x="40" y="36" width="16" height="16" rx="3" fill="#1E50C9" />
                  <rect x="68" y="40" width="46" height="10" rx="3" fill="#0E0E10" />
                  <rect x="660" y="32" width="100" height="22" rx="11" fill="#0E0E10" />
                  <text x="40" y="160" fontFamily="JetBrains Mono, monospace" fontSize="11" letterSpacing="3" fill="#1E50C9">↳ DISCOVERY · BUILD</text>
                  <text x="40" y="260" fontFamily="Archivo, sans-serif" fontWeight="900" fontSize="88" letterSpacing="-4" fill="#0E0E10">Encontrar</text>
                  <text x="40" y="330" fontFamily="Archivo, sans-serif" fontWeight="900" fontSize="88" letterSpacing="-4" fill="#0E0E10">la veta<tspan fill="#1E50C9">.</tspan></text>
                  <line x1="40" y1="400" x2="760" y2="400" stroke="#0E0E10" opacity="0.1" />
                  <rect x="40" y="420" width="140" height="14" rx="3" fill="#0E0E10" />
                  <rect x="660" y="420" width="100" height="14" rx="3" fill="#0E0E10" />
                  <line x1="40" y1="460" x2="760" y2="460" stroke="#0E0E10" opacity="0.1" />
                  <rect x="40" y="480" width="180" height="14" rx="3" fill="#0E0E10" />
                  <rect x="660" y="480" width="100" height="14" rx="3" fill="#0E0E10" />
                  <line x1="40" y1="520" x2="760" y2="520" stroke="#0E0E10" opacity="0.1" />
                  <rect x="40" y="540" width="160" height="14" rx="3" fill="#0E0E10" />
                  <rect x="660" y="540" width="100" height="14" rx="3" fill="#0E0E10" />
                </svg>
              </div>
              <div className="work-meta">
                <div>
                  <h3 className="work-title">Veta — Web consultora</h3>
                  <div className="work-sub">Veta Consulting · 2024 · Web · 2 semanas</div>
                </div>
                <div className="work-tags">
                  <span className="tag">Web</span>
                  <span className="tag">Consultoría</span>
                </div>
              </div>
            </article>

          </div>

          {/* Clients list */}
          <div className="clients">
            <div className="clients-head">Y también hemos trabajado con</div>
            <div className="clients-list">
              <span>Indi</span><span className="sep">·</span>
              <span>Estela</span><span className="sep">·</span>
              <span>Vela Studio</span><span className="sep">·</span>
              <span>Norte Capital</span><span className="sep">·</span>
              <span>Hilo Labs</span><span className="sep">·</span>
              <span>Mira</span><span className="sep">·</span>
              <span>Onda</span><span className="sep">·</span>
              <span>Trazo</span><span className="sep">·</span>
              <span>Foco</span><span className="sep">·</span>
              <span>Cima</span>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="section" id="equipo" data-screen-label="Equipo">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">Equipo · ahora mismo 3 + 1</span>
              <h2>Senior.<br />Sin agencias<br />intermedias.</h2>
            </div>
            <p className="desc">
              Somos un equipo pequeño y deliberado. Cuando te asignan a alguien,
              es alguien con 8+ años de experiencia construyendo producto. No
              hay capas de PMs, ni cuentas, ni handoff a juniors.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="hablamos" data-screen-label="CTA">
        <div className="wrap">
          <span className="eyebrow">Una llamada · 30 minutos · sin compromiso</span>
          <h2 className="h-display">
            ¿Lo<br />construimos<span className="dot">?</span>
          </h2>
          <p className="lede">
            Cuéntanos qué tienes entre manos. Si encaja, te mandamos
            una propuesta concreta en 5 días.
          </p>
          <div className="btn-row">
            <a href="mailto:hola@hito.studio" className="btn btn-primary">
              hola@hito.studio <span className="arrow">→</span>
            </a>
            <a href="/servicios" className="btn btn-ghost">Cómo trabajamos</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" data-screen-label="Footer">
        <div className="footer-inner">
          <span className="word">hito.studio</span>
          <span>Madrid · est. 2026</span>
          <span>© Hito Studio S.L.</span>
        </div>
      </footer>
    </>
  );
}
