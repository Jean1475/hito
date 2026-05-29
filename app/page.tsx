import SiteTopbar from "./components/SiteTopbar";
import SiteNav from "./components/SiteNav";
import SiteFooter from "./components/SiteFooter";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <>
      <SiteTopbar />
      <SiteNav />

      {/* Hero */}
      <header className="wrap hero" data-screen-label="Hero">
        <div className="hero-coords" aria-hidden="true">
          <b>N° 001 / Studio</b>
          Madrid 40.4°N · 3.7°W<br />
          Est. MMXXVI
        </div>
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
          <a href="/diagnostico" className="btn btn-primary">
            Cuéntanos tu proyecto <span className="arrow">→</span>
          </a>
          <a href="/servicios" className="btn btn-ghost">Servicios</a>
        </div>

        {/* Hero showcase */}
        <div className="hero-showcase" data-screen-label="Hero showcase">
          <div className="hs-caption">
            <span className="left">Último envío · Mayo 2026</span>
            <span className="right">
              <b>Bea Casas</b>
              <span className="sep">/</span>
              <span>Marketplace · Web</span>
              <span className="sep">/</span>
              <span>7 semanas</span>
              <span className="sep">/</span>
              <span>Next · Postgres</span>
            </span>
          </div>
          <div className="hs-frame">
            <span className="hs-tag t1">Caso 06 / 23</span>
            <span className="hs-tag t2">
              <span className="pulse" />
              En producción
            </span>
            <img
              src="/hito/assets/bea-casas-mockup.png"
              alt="Bea Casas — landing en MacBook Pro"
            />
            <a href="#trabajo" className="hs-tag t3">
              <span className="arr">↳</span>Ver proyectos
            </a>
          </div>
        </div>
      </header>

      {/* Marquee */}
      <div className="marquee" aria-hidden="true" data-screen-label="Marquee">
        <div className="marquee-track">
          <span className="marquee-item">Diseño de producto</span>
          <svg className="marquee-star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1 L14 9 L22 10 L15.5 14.5 L18 22 L12 17 L6 22 L8.5 14.5 L2 10 L10 9 Z"/></svg>
          <span className="marquee-item alt">MVPs en 6 semanas</span>
          <svg className="marquee-star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1 L14 9 L22 10 L15.5 14.5 L18 22 L12 17 L6 22 L8.5 14.5 L2 10 L10 9 Z"/></svg>
          <span className="marquee-item">SaaS scaffolding</span>
          <svg className="marquee-star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1 L14 9 L22 10 L15.5 14.5 L18 22 L12 17 L6 22 L8.5 14.5 L2 10 L10 9 Z"/></svg>
          <span className="marquee-item alt">Páginas que convierten</span>
          <svg className="marquee-star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1 L14 9 L22 10 L15.5 14.5 L18 22 L12 17 L6 22 L8.5 14.5 L2 10 L10 9 Z"/></svg>
          <span className="marquee-item">Diseño de producto</span>
          <svg className="marquee-star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1 L14 9 L22 10 L15.5 14.5 L18 22 L12 17 L6 22 L8.5 14.5 L2 10 L10 9 Z"/></svg>
          <span className="marquee-item alt">MVPs en 6 semanas</span>
          <svg className="marquee-star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1 L14 9 L22 10 L15.5 14.5 L18 22 L12 17 L6 22 L8.5 14.5 L2 10 L10 9 Z"/></svg>
          <span className="marquee-item">SaaS scaffolding</span>
          <svg className="marquee-star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1 L14 9 L22 10 L15.5 14.5 L18 22 L12 17 L6 22 L8.5 14.5 L2 10 L10 9 Z"/></svg>
          <span className="marquee-item alt">Páginas que convierten</span>
          <svg className="marquee-star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1 L14 9 L22 10 L15.5 14.5 L18 22 L12 17 L6 22 L8.5 14.5 L2 10 L10 9 Z"/></svg>
        </div>
      </div>

      {/* Portfolio */}
      <section className="section" id="trabajo" data-screen-label="Trabajo">
        <div className="wrap">
          <div className="section-head">
            <div>
              <h2>Cosas que<br />hemos enviado.</h2>
              <p className="work-range">2024 – 2026</p>
            </div>
            <p className="desc">
              Una selección de proyectos recientes. Páginas, MVPs y producto
              SaaS para founders, fondos y equipos chicos. Si quieres
              referencias detalladas, te las enseñamos en una llamada.
            </p>
          </div>

          {/* Featured project */}
          <div className="work-featured" data-reveal>
            <article
              className="work-card"
              data-screen-label="Work · Luma OS"
              tabIndex={0}
              aria-label="Luma OS — Portfolio dashboard para Luma Capital, 2025, SaaS, 8 semanas"
            >
              <span className="work-idx">F · 01 — Featured</span>
              <span className="work-go" aria-hidden="true">↗</span>
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
          <div className="work-grid" data-stagger>

            <article
              className="work-card"
              data-screen-label="Work · Bardo"
              tabIndex={0}
              aria-label="Bardo — Editorial poético para Bardo Books, 2025, 4 semanas"
            >
              <span className="work-idx">02</span>
              <span className="work-go" aria-hidden="true">↗</span>
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

            <article
              className="work-card"
              data-screen-label="Work · Cantera"
              tabIndex={0}
              aria-label="Cantera — ATS para talento técnico, Cantera HR, 2024, MVP, 6 semanas"
            >
              <span className="work-idx">03</span>
              <span className="work-go" aria-hidden="true">↗</span>
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

            <article
              className="work-card"
              data-screen-label="Work · Forja Studio"
              tabIndex={0}
              aria-label="Forja — Web del studio, Forja Studio, 2024, 3 semanas"
            >
              <span className="work-idx">04</span>
              <span className="work-go" aria-hidden="true">↗</span>
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

            <article
              className="work-card"
              data-screen-label="Work · Veta"
              tabIndex={0}
              aria-label="Veta — Web consultora, Veta Consulting, 2024, 2 semanas"
            >
              <span className="work-idx">05</span>
              <span className="work-go" aria-hidden="true">↗</span>
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

          {/* Pull quote */}
          <div className="pullquote" data-screen-label="Pull quote">
            <div className="pq-label">
              Kind words<br />№ 07 / 23
            </div>
            <blockquote>
              <span className="mark">"</span>Mandamos un email un martes con tres bullets.
              El viernes ya estábamos en un sprint con Pablo y Sara. En la
              semana 5 teníamos producto en manos de usuarios, no un
              prototipo bonito.<span className="mark">"</span>
            </blockquote>
            <div className="pq-author">
              <b>Marta Iribarren</b>
              <span>CEO · Luma Capital</span>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="section" id="equipo" data-screen-label="Equipo">
        <div className="wrap">
          <div className="section-head">
            <div>
              <h2><br />Sin agencias<br />intermedias.</h2>
              <p className="work-range">Ahora mismo · 3 + 1</p>
            </div>
            <p className="desc">
              Somos un equipo pequeño y deliberado. No
              hay capas de PMs, ni cuentas.
            </p>
          </div>

          {/* Principios */}
          <div className="principios" data-screen-label="Principios" data-stagger>
            <div className="principio">
              <div className="pnum">Principio · 01</div>
              <h4>Enviar &gt; pulir.</h4>
              <p>Mejor algo en manos de usuarios el viernes que un Figma perfecto en tres semanas. Iteramos sobre lo real.</p>
            </div>
            <div className="principio">
              <div className="pnum">Principio · 02</div>
              <h4>Embedded, no agencia.</h4>
              <p>Slack, standups, repo. Trabajamos como un miembro más de tu equipo durante el sprint. Sin black boxes.</p>
            </div>
            <div className="principio">
              <div className="pnum">Principio · 03</div>
              <h4>Scope chico, ambición grande.</h4>
              <p>Sprints de 4 a 8 semanas. Si no cabe, lo partimos en dos. La cadencia importa más que el plan.</p>
            </div>
            <div className="principio">
              <div className="pnum">Principio · 04</div>
              <h4>Código que heredas.</h4>
              <p>Stack estándar (Next, Postgres, Tailwind). Si mañana contratas un equipo interno, no tienen que reescribirlo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="hablamos" data-screen-label="CTA">
        <div className="wrap">
          <h2 className="h-display">
            ¿Lo<br />construimos<span className="dot">?</span>
          </h2>
          <p className="lede">
            Cuéntanos qué tienes entre manos. Si encaja, te mandamos
            una propuesta concreta en 5 días.
          </p>
          <div className="btn-row">
            <a href="mailto:hitomarketingstudio@gmail.com" className="btn btn-primary">
              hitomarketingstudio@gmail.com <span className="arrow">→</span>
            </a>
            <a href="/servicios" className="btn btn-ghost">Cómo trabajamos</a>
          </div>
          <p className="cta-sub">Una llamada · 30 minutos · sin compromiso</p>
        </div>
      </section>

      <SiteFooter />
      <ScrollReveal />
    </>
  );
}
