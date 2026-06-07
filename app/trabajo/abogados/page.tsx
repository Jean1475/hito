import type { Metadata } from "next";
import Image from "next/image";
import SiteTopbar from "../../components/SiteTopbar";
import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";
import ScrollReveal from "../../components/ScrollReveal";

export const metadata: Metadata = {
  title: "Arca Legal — Web corporativa | Hito Studio",
  description:
    "Web corporativa para Arca Legal, despacho de abogados. Diseño editorial oscuro, sección de casos, métricas de resultados y equipo. Hito Studio, Madrid.",
  alternates: {
    canonical: "https://hitomarketing.com/trabajo/abogados",
  },
  openGraph: {
    url: "https://hitomarketing.com/trabajo/abogados",
  },
};

export default function AbogadosCase() {
  return (
    <>
      <SiteTopbar />
      <SiteNav />

      {/* Hero */}
      <header className="wrap hero" data-screen-label="Hero">
        <div className="hero-coords" aria-hidden="true">
          <b>N° 003 / Trabajo</b>
          Web · Despacho legal<br />
          2026
        </div>
        <span className="eyebrow">Web a medida · Legal · Corporativo</span>
        <h1 className="h-display">Arca Legal<span className="dot">.</span></h1>
        <p className="lede">
          Web de captación para un despacho con 15 años de track record en
          mercantil y litigación corporativa. Diseño editorial oscuro, métricas
          de resultados en números, seis especialidades con copy orientado a
          conversión y CTA a consulta gratuita en cada bloque.
        </p>
        <div className="btn-row">
          <a
            href="https://abogados-demo.vercel.app/"
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
      <div className="work-screen ws-dark" id="preview" data-screen-label="Preview">
        <div className="wrap">
          <div className="ws-bar">
            <span className="ws-url">abogados-demo.vercel.app</span>
            <a
              href="https://abogados-demo.vercel.app/"
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
            src="/hito/assets/arca-legal-mockup.png"
            alt="Arca Legal — Web corporativa en MacBook Pro"
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
              Sin presencia digital, con 15 años de casos corporativos. El
              objetivo no era diseño — era credibilidad. Un CFO buscando
              asesoría mercantil tiene 90 segundos para decidir si llama.
              La web tiene que ganar ese tiempo con datos, logos y copy sin
              adornos.
            </p>
          </div>

          <div className="stack">
            <div>
              <h5>Cliente</h5>
              <ul>
                <li>Arca Legal</li>
                <li>Madrid</li>
              </ul>
            </div>
            <div>
              <h5>Tipo y duración</h5>
              <ul>
                <li>Web a medida</li>
                <li>2 semanas</li>
                <li>2026</li>
              </ul>
            </div>
            <div>
              <h5>Stack</h5>
              <ul>
                <li>Next.js 16</li>
                <li>Tailwind v4</li>
                <li>Vercel</li>
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
              Seis secciones que construyen confianza progresivamente: desde
              la propuesta de valor hasta el equipo y los casos reales. Cada
              bloque tiene un CTA que conduce a la consulta gratuita.
            </p>
          </div>

          <div className="process" data-stagger>
            <div className="step">
              <div className="num">01 · Hero</div>
              <h4>Propuesta de valor</h4>
              <p>Titular directo, subtítulo de posicionamiento y dos CTAs: consulta gratuita y casos de éxito. Imagen corporativa de peso.</p>
            </div>
            <div className="step">
              <div className="num">02 · Trust</div>
              <h4>Logos de clientes</h4>
              <p>Carrusel de logos de grandes corporaciones y firmas de consultoría. El primer indicador de confianza que ve el visitante.</p>
            </div>
            <div className="step">
              <div className="num">03 · Métricas</div>
              <h4>Resultados en números</h4>
              <p>Tasa de éxito, clientes representados y exposición legal reducida. Los datos que un cliente potencial busca antes de llamar.</p>
            </div>
            <div className="step">
              <div className="num">04 · Servicios</div>
              <h4>Seis especialidades</h4>
              <p>Mercantil, Litigación, Laboral, Inmobiliario, Tech/Data y Penal Económico. Cada área con descripción y enlace a más detalle.</p>
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
