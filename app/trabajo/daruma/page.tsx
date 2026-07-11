import type { Metadata } from "next";
import Image from "next/image";
import SiteTopbar from "../../components/SiteTopbar";
import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";
import ScrollReveal from "../../components/ScrollReveal";

export const metadata: Metadata = {
  title: "Daruma — Pokétienda | Hito Studio",
  description:
    "Web para Daruma, tienda física de cartas Pokémon, manga y cómic en Leganés, Madrid. Catálogo de stock, calendario de eventos y ficha de visita. Hito Studio.",
  alternates: {
    canonical: "https://www.hitomarketing.com/trabajo/daruma",
  },
  openGraph: {
    type: "article",
    url: "https://www.hitomarketing.com/trabajo/daruma",
  },
};

export default function DarumaCase() {
  return (
    <>
      <SiteTopbar />
      <SiteNav />

      {/* Hero */}
      <header className="wrap hero" data-screen-label="Hero">
        <div className="hero-coords" aria-hidden="true">
          <b>N° 001 / Trabajo</b>
          Web · Leganés, Madrid<br />
          2026
        </div>
        <span className="eyebrow">Web a medida · Tienda física · Eventos</span>
        <h1 className="h-display">Daruma<span className="dot">.</span></h1>
        <p className="lede">
          Pokétienda — tienda física de cartas Pokémon, manga y cómic en
          Leganés con torneos semanales. La web tiene un trabajo concreto:
          que el cliente sepa qué hay en stock, cuándo abre la tienda y
          cuándo es el próximo torneo antes de salir de casa.
        </p>
        <div className="btn-row">
          <a
            href="https://daruma-ochre.vercel.app/"
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
            <span className="ws-url">daruma-ochre.vercel.app</span>
            <a
              href="https://daruma-ochre.vercel.app/"
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
            src="/hito/assets/daruma-mockup.png"
            alt="Daruma — Pokétienda en MacBook Pro"
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
              Sin carrito, sin pasarela de pago — la conversión ocurre en
              la tienda. El trabajo de la web es otro: que un cliente a las
              11pm encuentre qué boosters quedan en stock, cuándo es el
              próximo torneo y si abre el domingo. Eso construimos.
            </p>
          </div>

          <div className="stack">
            <div>
              <h5>Cliente</h5>
              <ul>
                <li>Daruma · Pokétienda</li>
                <li>Leganés, Madrid</li>
              </ul>
            </div>
            <div>
              <h5>Tipo y duración</h5>
              <ul>
                <li>Web a medida</li>
                <li>3 semanas</li>
                <li>2026</li>
              </ul>
            </div>
            <div>
              <h5>Stack</h5>
              <ul>
                <li>Next.js 16</li>
                <li>Tailwind v4</li>
                <li>Supabase</li>
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
              Cuatro bloques que convierten visitas web en visitas físicas.
              Sin carrito, sin pagos — la conversión ocurre en la tienda.
            </p>
          </div>

          <div className="process" data-stagger>
            <div className="step">
              <div className="num">01 · Stock</div>
              <h4>Catálogo vivo</h4>
              <p>Grid de productos rotatorio gestionado desde Supabase. Filtros por categoría (Pokémon TCG, manga, cómic), set y precio.</p>
            </div>
            <div className="step">
              <div className="num">02 · Eventos</div>
              <h4>Calendario de torneos</h4>
              <p>Listado de eventos con fecha, hora, precio de entrada y CTA de inscripción. Torneos Pokémon, ligas júnior y club de manga.</p>
            </div>
            <div className="step">
              <div className="num">03 · Visita</div>
              <h4>Ficha de visita</h4>
              <p>Dirección, horarios detallados, mapa embebido y contacto directo por WhatsApp, email y redes sociales.</p>
            </div>
            <div className="step">
              <div className="num">04 · Status</div>
              <h4>Banner en tiempo real</h4>
              <p>Barra superior con el estado de apertura actual y los próximos horarios. El dato que busca el usuario antes de salir de casa.</p>
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
