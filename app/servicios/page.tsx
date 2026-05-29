import type { Metadata } from "next";
import NavScrollEffect from "../components/NavScrollEffect";
import MadridClock from "../components/MadridClock";

export const metadata: Metadata = {
  title: "Hito — Servicios",
  description: "Lo que ofrecemos: discovery, web, MVP, SaaS, embedded engineering. Cinco formas de trabajar contigo.",
};

const MarqueeStar = () => (
  <svg className="marquee-star" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1 L14 9 L22 10 L15.5 14.5 L18 22 L12 17 L6 22 L8.5 14.5 L2 10 L10 9 Z" />
  </svg>
);

export default function Servicios() {
  return (
    <>
      {/* Topbar */}
      <div className="topbar" data-screen-label="Topbar">
        <div className="topbar-inner">
          <span className="live">
            <span className="dot-live" />
            Disponible desde ahora mismo.
          </span>
          <span className="tb-mid">
            <span>Madrid · 40.4°N 3.7°W</span>
            <span className="sep">/</span>
            <MadridClock />
          </span>
          <span className="tb-end">
            <a href="mailto:jeangomezgiraldo@gmail.com">jeangomezgiraldo@gmail.com</a>
          </span>
        </div>
      </div>

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
          <a href="/servicios" className="active">Servicios</a>
          <a href="/#equipo">Equipo</a>
          <a href="#hablamos" className="nav-cta">Hablamos →</a>
        </div>
      </nav>

      {/* Hero */}
      <header className="wrap hero" data-screen-label="Hero">
        <div className="hero-coords" aria-hidden="true">
          <b>N° 002 / Servicios</b>
          Scope · plazo · precio cerrados<br />
          Desde el día uno
        </div>
        <span className="eyebrow">Servicios · 5 formas de trabajar</span>
        <h1 className="h-display">Lo que<br />hacemos<span className="dot">.</span></h1>
        <p className="lede">
          No vendemos horas. Vendemos hitos. Cinco formas concretas
          de empezar a trabajar con nosotros — todas con scope, plazo
          y precio cerrados desde el día uno.
        </p>
        <div className="hero-index" aria-hidden="true">
          <b>4</b>
          <span>servicios · desde 650€</span>
        </div>
      </header>

      {/* Marquee */}
      <div className="marquee" aria-hidden="true" data-screen-label="Marquee">
        <div className="marquee-track">
          <span className="marquee-item">Discovery</span>
          <MarqueeStar />
          <span className="marquee-item alt">Web a medida</span>
          <MarqueeStar />
          <span className="marquee-item">MVP · 8 semanas</span>
          <MarqueeStar />
          <span className="marquee-item alt">SaaS end-to-end</span>
          <MarqueeStar />
          <span className="marquee-item">Embedded eng</span>
          <MarqueeStar />
          <span className="marquee-item">Discovery</span>
          <MarqueeStar />
          <span className="marquee-item alt">Web a medida</span>
          <MarqueeStar />
          <span className="marquee-item">MVP · 8 semanas</span>
          <MarqueeStar />
          <span className="marquee-item alt">SaaS end-to-end</span>
          <MarqueeStar />
          <span className="marquee-item">Embedded eng</span>
          <MarqueeStar />
        </div>
      </div>

      {/* Servicios */}
      <section className="section" id="servicios" data-screen-label="Servicios">
        <div className="wrap">
          <div className="services-list">

            <article className="svc" data-screen-label="Svc · Web">
              <div className="svc-num">01</div>
              <div className="svc-body">
                <h3>Web / App a medida</h3>
                <p>
                  De marketing site a portfolio editorial. Diseño,
                  desarrollo, copy si lo necesitas. Stack ligero,
                  edición fácil, performance 95+.
                </p>
              </div>
              <div className="svc-tags">
                <span>· Diseño</span>
                <span>· Frontend</span>
                <span>· CMS</span>
                <span>· 1 semana</span>
              </div>
              <div className="svc-price">
                <span className="from">Desde</span>
                <span className="amount">650 €</span>
              </div>
            </article>

            <article className="svc" data-screen-label="Svc · MVP">
              <div className="svc-num">02</div>
              <div className="svc-body">
                <h3>MVP</h3>
                <p>
                  De idea validada a producto vivo en producción. Sprints
                  cerrados de 2 semanas, demos cada viernes. Lanzas con
                  usuarios reales, no con un Notion de features.
                </p>
              </div>
              <div className="svc-tags">
                <span>· Discovery</span>
                <span>· Build</span>
                <span>· Launch</span>
                <span>· 2 - 3 semanas</span>
              </div>
              <div className="svc-price">
                <span className="from">Desde</span>
                <span className="amount">900 €</span>
              </div>
            </article>

            <article className="svc" data-screen-label="Svc · SaaS">
              <div className="svc-num">03</div>
              <div className="svc-body">
                <h3>SaaS completo</h3>
                <p>
                  Producto SaaS de extremo a extremo: arquitectura,
                  auth, billing, dashboard, onboarding. Salimos con
                  algo facturable, no con un demo bonito.
                </p>
              </div>
              <div className="svc-tags">
                <span>· Producto end-to-end</span>
                <span>· Billing · Auth</span>
                <span>· 3 - 4 semanas</span>
              </div>
              <div className="svc-price">
                <span className="from">Desde</span>
                <span className="amount">1.300 €</span>
              </div>
            </article>

            <article className="svc" data-screen-label="Svc · Marketing">
              <div className="svc-num">04</div>
              <div className="svc-body">
                <h3>Marketing digital completo</h3>
                <p>
                  Identidad corporativa, presencia digital y estrategia
                  de redes desde cero. Diseñamos la marca, construimos
                  la plataforma y activamos los canales — todo coordinado,
                  todo coherente.
                </p>
              </div>
              <div className="svc-tags">
                <span>· Identidad corporativa</span>
                <span>· Redes sociales</span>
                <span>· Plataforma web</span>
                <span>· Estrategia de contenido</span>
              </div>
              <div className="svc-price">
                <span className="from">Desde</span>
                <span className="amount">1.600 €</span>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="section" id="proceso" data-screen-label="Proceso">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">Proceso · 4 fases</span>
              <h2>Cómo<br />trabajamos.</h2>
            </div>
            <p className="desc">
              El mismo método para cualquier engagement — solo cambia
              cuántas vueltas damos y a qué velocidad. Sin reuniones
              de re-alineamiento. Sin handoffs entre departamentos.
              Tú decides al final de cada fase si seguimos.
            </p>
          </div>

          <div className="process">
            <div className="step">
              <div className="num">01 · Descubrir</div>
              <h4>Entender</h4>
              <p>Una semana de inmersión. Hablamos con tu equipo, con tus clientes, miramos tu data. Salimos con hipótesis claras.</p>
            </div>
            <div className="step">
              <div className="num">02 · Definir</div>
              <h4>Acotar</h4>
              <p>Scope, hitos y prioridades cerradas en un doc de 2 páginas. Si no se puede medir, no entra.</p>
            </div>
            <div className="step">
              <div className="num">03 · Construir</div>
              <h4>Enviar pronto</h4>
              <p>Sprints de 2 semanas. Demo cada viernes. Lanzamos a usuarios reales lo antes posible, no al final.</p>
            </div>
            <div className="step">
              <div className="num">04 · Iterar</div>
              <h4>Pulir y soltar</h4>
              <p>3-4 semanas post-launch contigo aprendiendo del uso real. Después te lo dejamos en orden y nos vamos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="section" id="stack" data-screen-label="Stack">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">Stack · Lo que usamos a diario</span>
              <h2>Boring tech.<br />Software<br />que aguanta.</h2>
            </div>
            <p className="desc">
              No perseguimos el framework de moda. Usamos herramientas
              probadas, documentadas, contratables. Cuando nos vayamos,
              cualquier dev senior puede recoger el código sin manual.
            </p>
          </div>

          <div className="stack">
            <div>
              <h5>Frontend</h5>
              <ul>
                <li>Next.js · React</li>
                <li>TypeScript</li>
                <li>Tailwind · Radix</li>
                <li>Framer Motion</li>
              </ul>
            </div>
            <div>
              <h5>Backend & data</h5>
              <ul>
                <li>Node · Hono</li>
                <li>Postgres · Supabase</li>
                <li>Prisma · Drizzle</li>
                <li>Stripe · Resend</li>
              </ul>
            </div>
            <div>
              <h5>Diseño & operación</h5>
              <ul>
                <li>Figma</li>
                <li>Linear · Notion</li>
                <li>Vercel · Fly</li>
                <li>Posthog · Sentry</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq" data-screen-label="FAQ">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">Preguntas · que recibimos cada semana</span>
              <h2>Preguntas<br />reales<span style={{ color: "var(--cobalt)" }}>.</span></h2>
            </div>
            <p className="desc">
              Las dudas más comunes. Si la tuya no está aquí, escríbenos
              — respondemos en menos de 24h laborables.
            </p>
          </div>

          <div className="services-list">
            <article className="svc">
              <div className="svc-num">Q1</div>
              <div className="svc-body" style={{ gridColumn: "span 3" }}>
                <h3 style={{ fontSize: "24px" }}>¿Trabajáis con equity en lugar de fee?</h3>
                <p>Sí, pero solo en proyectos seleccionados (equipo formado, ronda cerrada, hito claro). Hablamos.</p>
              </div>
            </article>
            <article className="svc">
              <div className="svc-num">Q2</div>
              <div className="svc-body" style={{ gridColumn: "span 3" }}>
                <h3 style={{ fontSize: "24px" }}>¿Os quedáis con el código?</h3>
                <p>No. Repositorio, dominio, cuentas — todo a tu nombre desde el día uno. Cuando nos vamos, te queda absolutamente todo.</p>
              </div>
            </article>
            <article className="svc">
              <div className="svc-num">Q3</div>
              <div className="svc-body" style={{ gridColumn: "span 3" }}>
                <h3 style={{ fontSize: "24px" }}>¿Y si necesito algo que no está en los servicios?</h3>
                <p>Lo hablamos. Casi todo lo que hacemos cabe en uno de los cinco formatos — y si no, te decimos honestamente quién lo puede hacer mejor.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="hablamos" data-screen-label="CTA">
        <div className="wrap">
          <span className="eyebrow">Una llamada · 30 minutos · sin compromiso</span>
          <h2 className="h-display">Cuéntanos<br />tu hito<span className="dot">.</span></h2>
          <p className="lede">
            Si encaja, te mandamos una propuesta concreta —scope, plazo
            y precio cerrados— en 5 días.
          </p>
          <div className="btn-row">
            <a href="mailto:jeangomezgiraldo@gmail.com" className="btn btn-primary">jeangomezgiraldo@gmail.com <span className="arrow">→</span></a>
            <a href="/" className="btn btn-ghost">Ver trabajo</a>
          </div>
        </div>
      </section>

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
              <li><a href="#hablamos">Hablamos</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h6>Contacto</h6>
            <ul>
              <li><a href="mailto:jeangomezgiraldo@gmail.com">jeangomezgiraldo@gmail.com</a></li>
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
