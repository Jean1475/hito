import type { Metadata } from "next";
import Image from "next/image";
import SiteTopbar from "../../components/SiteTopbar";
import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";
import ScrollReveal from "../../components/ScrollReveal";

export const metadata: Metadata = {
  title: "Bea Casas — Marketplace | Hito Studio",
  description:
    "Marketplace desarrollado para Bea Casas. Plataforma web completa con Next.js y Postgres. Hito Studio, Madrid.",
  alternates: {
    canonical: "https://hitomarketing.com/trabajo/bea-casas",
  },
  openGraph: {
    url: "https://hitomarketing.com/trabajo/bea-casas",
  },
};

export default function BeaCasasCase() {
  return (
    <>
      <SiteTopbar />
      <SiteNav />

      {/* Hero */}
      <header className="wrap hero" data-screen-label="Hero">
        <div className="hero-coords" aria-hidden="true">
          <b>N° 002 / Trabajo</b>
          Marketplace · Web<br />
          2026
        </div>
        <span className="eyebrow">Marketplace · Next.js · Postgres</span>
        <h1 className="h-display">Bea Casas<span className="dot">.</span></h1>
        <p className="lede">
          Marketplace inmobiliario construido de cero en 7 semanas. Publicación
          de anuncios con imágenes, búsqueda con filtros, perfiles de agente,
          flujo de contacto y panel de administración — todo en producción
          desde el primer día de lanzamiento.
        </p>
        <div className="btn-row">
          <a
            href="https://beacasas.vercel.app/"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver en vivo <span className="arrow">↗</span>
          </a>
          <a href="/#trabajo" className="btn btn-ghost">← Otros proyectos</a>
        </div>
      </header>

      {/* Screen */}
      <div className="work-screen ws-light" id="preview" data-screen-label="Preview">
        <div className="wrap">
          <div className="ws-bar">
            <span className="ws-url">beacasas.vercel.app</span>
            <a
              href="https://beacasas.vercel.app/"
              className="ws-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir ↗
            </a>
          </div>
        </div>
        <div className="ws-stage">
          <Image
            src="/hito/assets/bea-casas-mockup.png"
            alt="Bea Casas — Marketplace en MacBook Pro"
            width={4864}
            height={2938}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      </div>

      {/* Specs */}
      <section className="section" id="qué-hicimos" data-screen-label="Specs">
        <div className="wrap">
          <div className="section-head">
            <div>
              <h2>Qué<br />hicimos.</h2>
            </div>
            <p className="desc">
              No un wireframe, no un prototipo — un marketplace con base
              de datos real, auth, búsqueda indexada y panel de moderación.
              En 7 semanas de sprint cerrado. El primer anuncio se publicó
              antes de cerrar la semana seis.
            </p>
          </div>

          <div className="stack">
            <div>
              <h5>Cliente</h5>
              <ul>
                <li>Bea Casas</li>
                <li>Madrid</li>
              </ul>
            </div>
            <div>
              <h5>Tipo y duración</h5>
              <ul>
                <li>Marketplace · Web</li>
                <li>7 semanas</li>
                <li>2026</li>
              </ul>
            </div>
            <div>
              <h5>Stack</h5>
              <ul>
                <li>Next.js 16</li>
                <li>Postgres</li>
                <li>Tailwind v4</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Qué tiene */}
      <section className="section" id="features" data-screen-label="Features">
        <div className="wrap">
          <div className="section-head">
            <div>
              <h2>Lo que<br />tiene.</h2>
            </div>
            <p className="desc">
              Las piezas que hacen funcionar un marketplace real. Sin shortcuts,
              sin mocks — cada bloque en producción desde el día del lanzamiento.
            </p>
          </div>

          <div className="process" data-stagger>
            <div className="step">
              <div className="num">01 · Listados</div>
              <h4>Publicación y búsqueda</h4>
              <p>Creación de anuncios con imágenes, descripción y precio. Búsqueda con filtros y ordenación en tiempo real.</p>
            </div>
            <div className="step">
              <div className="num">02 · Perfiles</div>
              <h4>Usuarios y auth</h4>
              <p>Registro, login y perfiles de vendedor. Historial de publicaciones y gestión de anuncios propios.</p>
            </div>
            <div className="step">
              <div className="num">03 · Contacto</div>
              <h4>Flujo comprador-vendedor</h4>
              <p>Sistema de contacto directo entre compradores y vendedores. Sin pagos en plataforma — la conversión ocurre fuera.</p>
            </div>
            <div className="step">
              <div className="num">04 · Admin</div>
              <h4>Panel de gestión</h4>
              <p>Dashboard para moderar publicaciones, ver métricas básicas y gestionar usuarios desde un panel privado.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="hablamos" data-screen-label="CTA">
        <div className="wrap">
          <h2 className="h-display">Cuéntanos<br />tu hito<span className="dot">.</span></h2>
          <p className="lede">
            Si encaja, te mandamos una propuesta concreta — scope, plazo
            y precio cerrados — en 5 días.
          </p>
          <div className="btn-row">
            <a href="mailto:hitomarketingstudio@gmail.com" className="btn btn-primary">
              hitomarketingstudio@gmail.com <span className="arrow">→</span>
            </a>
            <a href="/servicios" className="btn btn-ghost">Ver servicios</a>
          </div>
          <p className="cta-sub">Una llamada · 30 minutos · sin compromiso</p>
        </div>
      </section>

      <SiteFooter />
      <ScrollReveal />
    </>
  );
}
