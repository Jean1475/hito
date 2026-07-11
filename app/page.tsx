import type { Metadata } from "next";
import Image from "next/image";
import SiteTopbar from "./components/SiteTopbar";
import SiteNav from "./components/SiteNav";
import SiteFooter from "./components/SiteFooter";
import ScrollReveal from "./components/ScrollReveal";
import { JsonLd } from "./components/JsonLd";

export const metadata: Metadata = {
  title: "Hito — Studio de producto digital en Madrid",
  description:
    "Studio de producto en Madrid. Construimos MVPs, SaaS y páginas web para founders y equipos pequeños. Embedded con tu equipo, sprints cortos, enviamos a producción — no a Figma.",
  alternates: {
    canonical: "https://www.hitomarketing.com",
  },
  openGraph: {
    type: "website",
    url: "https://www.hitomarketing.com",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: "Hito Studio",
  description:
    "Studio de producto digital en Madrid. Construimos MVPs, SaaS y páginas web para founders y equipos pequeños.",
  url: "https://www.hitomarketing.com",
  email: "hitomarketingstudio@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Madrid",
    addressCountry: "ES",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "40.4",
    longitude: "-3.7",
  },
  areaServed: { "@type": "Country", name: "España" },
  priceRange: "€€",
  foundingDate: "2026",
};

export default function Home() {
  return (
    <>
      <JsonLd data={organizationSchema} />
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
            <Image
              src="/hito/assets/bea-casas-mockup.png"
              alt="Bea Casas — landing en MacBook Pro"
              width={4864}
              height={2938}
              style={{ width: "100%", height: "auto" }}
              priority
              fetchPriority="high"
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
              Una selección de proyectos recientes. Webs a medida, marketplaces
              y plataformas para negocios en Madrid. Si quieres referencias
              detalladas, te las enseñamos en una llamada.
            </p>
          </div>

          {/* Featured project: Daruma */}
          <div className="work-featured" data-reveal>
            <a
              href="/trabajo/daruma"
              className="work-card"
              data-screen-label="Work · Daruma"
              aria-label="Daruma — Pokétienda, web para tienda de cartas y manga en Leganés, Madrid"
            >
              <span className="work-idx">F · 01 — Featured</span>
              <span className="work-go" aria-hidden="true">↗</span>
              <div className="work-thumb is-image">
                <Image
                  src="/hito/assets/daruma-mockup.png"
                  alt="Daruma — Pokétienda"
                  width={4864}
                  height={2938}
                  className="mockup"
                />
              </div>
              <div className="work-meta">
                <div>
                  <h3 className="work-title">Daruma — Pokétienda</h3>
                  <div className="work-sub">Cartas · Manga · Cómic · 2026 · Web · 3 semanas</div>
                </div>
                <div className="work-tags">
                  <span className="tag">Web</span>
                  <span className="tag">Eventos</span>
                  <span className="tag">Leganés</span>
                </div>
              </div>
            </a>
          </div>

          {/* Grid 1×2 */}
          <div className="work-grid" data-stagger>

            <a
              href="/trabajo/bea-casas"
              className="work-card"
              data-screen-label="Work · Bea Casas"
              aria-label="Bea Casas — Marketplace, 2026, 7 semanas"
            >
              <span className="work-idx">02</span>
              <span className="work-go" aria-hidden="true">↗</span>
              <div className="work-thumb is-image">
                <Image
                  src="/hito/assets/bea-casas-mockup.png"
                  alt="Bea Casas — Marketplace"
                  width={4864}
                  height={2938}
                  className="mockup"
                />
              </div>
              <div className="work-meta">
                <div>
                  <h3 className="work-title">Bea Casas — Marketplace</h3>
                  <div className="work-sub">Bea Casas · 2026 · Web · 7 semanas</div>
                </div>
                <div className="work-tags">
                  <span className="tag">Marketplace</span>
                  <span className="tag">Next.js</span>
                  <span className="tag">Postgres</span>
                </div>
              </div>
            </a>

            <a
              href="/trabajo/abogados"
              className="work-card"
              data-screen-label="Work · Arca Legal"
              aria-label="Arca Legal — Web corporativa para despacho de abogados, 2026"
            >
              <span className="work-idx">03</span>
              <span className="work-go" aria-hidden="true">↗</span>
              <div className="work-thumb is-image">
                <Image
                  src="/hito/assets/arca-legal-mockup.png"
                  alt="Arca Legal — Web corporativa"
                  width={4864}
                  height={2938}
                  className="mockup"
                />
              </div>
              <div className="work-meta">
                <div>
                  <h3 className="work-title">Arca Legal — Web corporativa</h3>
                  <div className="work-sub">Arca Legal · 2026 · Web · 2 semanas</div>
                </div>
                <div className="work-tags">
                  <span className="tag">Web</span>
                  <span className="tag">Legal</span>
                </div>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* Por qué Hito */}
      <section className="section razones-section" id="por-que-hito" data-screen-label="Por qué Hito">
        <div className="wrap">
          <div className="section-head">
            <div>
              <h2>Por qué<br />trabajar con<br />nosotros.</h2>
            </div>
            <p className="desc">
              No somos la agencia más grande de Madrid. Somos la que
              responde al mail, cumple la fecha y te deja el código
              limpio cuando se acaba el sprint.
            </p>
          </div>

          <div className="razones" data-stagger>
            <div className="razon">
              <span className="razon-idx">01</span>
              <div className="razon-body">
                <h3>Hablas con quien escribe el código.</h3>
                <p>
                  No hay account manager que traduce tus mensajes a un
                  equipo en otro país. El mismo dev que está en el sprint
                  responde tus dudas en Slack, el mismo día.
                </p>
              </div>
            </div>
            <div className="razon">
              <span className="razon-idx">02</span>
              <div className="razon-body">
                <h3>Precio cerrado, sin sorpresas al final.</h3>
                <p>
                  Cotizamos por hito, no por hora. Sabes desde el día uno
                  qué vas a pagar y qué vas a recibir — sin partes extra
                  de "alcance ampliado" a mitad de proyecto.
                </p>
              </div>
            </div>
            <div className="razon">
              <span className="razon-idx">03</span>
              <div className="razon-body">
                <h3>Salimos con algo que funciona, no con un prototipo.</h3>
                <p>
                  Daruma, Bea Casas y Arca Legal están en producción,
                  con usuarios reales usándolos hoy. No hacemos demos
                  para pitch decks.
                </p>
              </div>
            </div>
            <div className="razon">
              <span className="razon-idx">04</span>
              <div className="razon-body">
                <h3>Te vas con el proyecto, no nosotros con él.</h3>
                <p>
                  Repo, dominio y cuentas a tu nombre desde el primer
                  commit. Si mañana contratas un equipo interno, no
                  dependen de nosotros para tocar nada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="section" id="equipo" data-screen-label="Equipo">
        <div className="wrap">
          <div className="section-head">
            <div>
              <h2>Sin<br />agencias<br />intermedias.</h2>
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
