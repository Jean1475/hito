import type { Metadata } from "next";
import Image from "next/image";
import SiteTopbar from "../../components/SiteTopbar";
import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";
import ScrollReveal from "../../components/ScrollReveal";

export const metadata: Metadata = {
  title: "Decoreformas — Web de reformas",
  description:
    "Web de captación para Decoreformas, empresa de reformas integrales en Leganés, Getafe, Alcorcón y Móstoles. Presupuesto exprés con IA, antes/después de obras y WhatsApp directo. Hito Studio, Madrid.",
  alternates: {
    canonical: "https://www.hitomarketing.com/trabajo/decoreformas",
  },
  openGraph: {
    type: "article",
    url: "https://www.hitomarketing.com/trabajo/decoreformas",
  },
};

export default function DecoreformasCase() {
  return (
    <>
      <SiteTopbar />
      <SiteNav />

      {/* Hero */}
      <header className="wrap hero" data-screen-label="Hero">
        <div className="hero-coords" aria-hidden="true">
          <b>N° 004 / Trabajo</b>
          Web · Reformas<br />
          2026
        </div>
        <span className="eyebrow">Web a medida · Reformas · Leads</span>
        <h1 className="h-display">Decoreformas<span className="dot">.</span></h1>
        <p className="lede">
          Web de captación para una reformista con 25 años de oficio y más de
          100 obras entregadas en el sur de Madrid. Presupuesto cerrado desde
          el primer contacto, galería de antes/después y un asistente de
          presupuesto exprés con IA integrado directamente en el hero.
        </p>
        <div className="btn-row">
          <a
            href="https://www.decorreformas.com/"
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
            <span className="ws-url">decorreformas.com</span>
            <a
              href="https://www.decorreformas.com/"
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
            src="/hito/assets/decoreformas-mockup.png"
            alt="Decoreformas — Web de reformas en MacBook Pro"
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
              Un negocio de reformas vive del boca a boca y de la confianza.
              La web tenía que resolver la objeción número uno del sector —
              &quot;me van a subir el presupuesto a mitad de obra&quot; — desde
              el primer segundo, con presupuesto cerrado y seguimiento semanal
              como promesa central.
            </p>
          </div>

          <div className="stack">
            <div>
              <h5>Cliente</h5>
              <ul>
                <li>Decoreformas</li>
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
              Cuatro piezas orientadas a un único objetivo: convertir visitas
              en presupuestos solicitados, sin fricción y sin letra pequeña.
            </p>
          </div>

          <div className="process" data-stagger>
            <div className="step">
              <div className="num">01 · Hero</div>
              <h4>Presupuesto exprés con IA</h4>
              <p>Asistente conversacional integrado en el hero que pregunta qué se quiere reformar y guía al usuario hacia un presupuesto sin salir de la página.</p>
            </div>
            <div className="step">
              <div className="num">02 · Trust</div>
              <h4>Logos de proveedores</h4>
              <p>Roca, Grohe, Porcelanosa, Siemens y otras marcas de referencia con las que trabaja el equipo — confianza inmediata en el primer scroll.</p>
            </div>
            <div className="step">
              <div className="num">03 · Antes y después</div>
              <h4>Galería de obras reales</h4>
              <p>Comparativas de reformas entregadas, organizadas por tipo de espacio, con fotografía propia de cada proyecto.</p>
            </div>
            <div className="step">
              <div className="num">04 · Conversión</div>
              <h4>WhatsApp y llamada directa</h4>
              <p>Presupuesto gratis por WhatsApp o llamada, visible en el hero y persistente en la esquina inferior en todo el scroll.</p>
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
