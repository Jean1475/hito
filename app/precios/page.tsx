import type { Metadata } from "next";
import SiteTopbar from "../components/SiteTopbar";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "Cuánto Cuesta una Web, un MVP o un SaaS",
  description:
    "Precios reales de desarrollo web, MVP y SaaS a medida: desde 650€ una web, desde 900€ un MVP, desde 1.300€ un SaaS completo. Sin sorpresas a mitad de proyecto.",
  alternates: {
    canonical: "https://www.hitomarketing.com/precios",
  },
  openGraph: {
    type: "website",
    url: "https://www.hitomarketing.com/precios",
  },
};

export default function Precios() {
  return (
    <>
      <SiteTopbar />
      <SiteNav />

      {/* Hero */}
      <header className="wrap hero" data-screen-label="Hero">
        <div className="hero-coords" aria-hidden="true">
          <b>N° 003 / Precios</b>
          Rangos reales · Sin letra pequeña<br />
          Actualizado 2026
        </div>
        <span className="eyebrow">Precios · Web, MVP, SaaS</span>
        <h1 className="h-display">Cuánto<br />cuesta<span className="dot">.</span></h1>
        <p className="lede">
          Los mismos precios que le damos a un cliente por email, sin
          rellenar un formulario para averiguarlo. Rango real, no un
          "depende" disfrazado de misterio.
        </p>
      </header>

      {/* Tabla de precios */}
      <section className="section" id="precios" data-screen-label="Precios">
        <div className="wrap">
          <div className="section-head">
            <div>
              <h2>Precio<br />por servicio.</h2>
            </div>
            <p className="desc">
              Cada precio es un "desde": el punto de partida real de un
              proyecto de ese tipo. El precio final depende del scope,
              pero lo cerramos por escrito antes de empezar — no se
              mueve a mitad de camino.
            </p>
          </div>

          <div className="services-list">
            <article className="svc" id="precio-web" data-screen-label="Precio · Web">
              <div className="svc-num">01</div>
              <div className="svc-body">
                <h3>Web / App a medida</h3>
                <p>
                  Marketing site, portfolio o landing de conversión.
                  Diseño, desarrollo y copy si lo necesitas.
                </p>
              </div>
              <div className="svc-tags">
                <span>· 1 semana</span>
              </div>
              <div className="svc-price">
                <span className="from">Desde</span>
                <span className="amount">650 €</span>
              </div>
            </article>

            <article className="svc" id="precio-mvp" data-screen-label="Precio · MVP">
              <div className="svc-num">02</div>
              <div className="svc-body">
                <h3>MVP</h3>
                <p>
                  De idea validada a producto vivo en producción, con
                  usuarios reales desde el primer sprint.
                </p>
              </div>
              <div className="svc-tags">
                <span>· 2 - 3 semanas</span>
              </div>
              <div className="svc-price">
                <span className="from">Desde</span>
                <span className="amount">900 €</span>
              </div>
            </article>

            <article className="svc" id="precio-saas" data-screen-label="Precio · SaaS">
              <div className="svc-num">03</div>
              <div className="svc-body">
                <h3>SaaS completo</h3>
                <p>
                  Producto de extremo a extremo: arquitectura, auth,
                  billing, dashboard, onboarding.
                </p>
              </div>
              <div className="svc-tags">
                <span>· 3 - 4 semanas</span>
              </div>
              <div className="svc-price">
                <span className="from">Desde</span>
                <span className="amount">1.300 €</span>
              </div>
            </article>

            <article className="svc" id="precio-marketing" data-screen-label="Precio · Marketing">
              <div className="svc-num">04</div>
              <div className="svc-body">
                <h3>Marketing digital completo</h3>
                <p>
                  Identidad, presencia digital y estrategia de redes
                  desde cero.
                </p>
              </div>
              <div className="svc-tags">
                <span>· A medida</span>
              </div>
              <div className="svc-price">
                <span className="from">Desde</span>
                <span className="amount">1.600 €</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Qué mueve el precio */}
      <section className="section razones-section" id="que-mueve-el-precio" data-screen-label="Qué mueve el precio">
        <div className="wrap">
          <div className="section-head">
            <div>
              <h2>Qué mueve<br />el precio.</h2>
            </div>
            <p className="desc">
              El "desde" sube o baja según estas cuatro cosas. Te las
              decimos en la primera llamada, no las descubres en la
              factura final.
            </p>
          </div>

          <div className="razones" data-stagger>
            <div className="razon">
              <span className="razon-idx">01</span>
              <div className="razon-body">
                <h3>Cuántas pantallas o funciones tiene.</h3>
                <p>
                  Una landing de una página no cuesta lo mismo que un
                  dashboard con roles de usuario, pagos y reportes.
                </p>
              </div>
            </div>
            <div className="razon">
              <span className="razon-idx">02</span>
              <div className="razon-body">
                <h3>Si ya tienes diseño o partimos de cero.</h3>
                <p>
                  Si llegas con un Figma cerrado, ahorramos la fase de
                  diseño. Si no, la incluimos en el scope.
                </p>
              </div>
            </div>
            <div className="razon">
              <span className="razon-idx">03</span>
              <div className="razon-body">
                <h3>Integraciones con terceros.</h3>
                <p>
                  Stripe, CRMs, ERPs o APIs externas añaden tiempo de
                  integración y pruebas que no está en el precio base.
                </p>
              </div>
            </div>
            <div className="razon">
              <span className="razon-idx">04</span>
              <div className="razon-body">
                <h3>Contenido y datos migrados.</h3>
                <p>
                  Migrar un catálogo, una base de usuarios o contenido
                  existente suma trabajo de migración y validación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ de precio */}
      <section className="section" id="faq-precios" data-screen-label="FAQ precios">
        <div className="wrap">
          <div className="section-head">
            <div>
              <h2>Preguntas<br />sobre precio<span style={{ color: "var(--cobalt)" }}>.</span></h2>
            </div>
            <p className="desc">
              Lo que más nos preguntan antes de la llamada.
            </p>
          </div>

          <div className="services-list">
            <article className="svc">
              <div className="svc-num">Q1</div>
              <div className="svc-body" style={{ gridColumn: "span 3" }}>
                <h3 style={{ fontSize: 24 }}>¿Cuánto cuesta una página web para una empresa?</h3>
                <p>
                  Desde 650€ para una web de marketing o portfolio de una
                  sola pieza, con diseño y desarrollo incluidos. El precio
                  sube si hay CMS a medida, multi-idioma o integraciones.
                </p>
              </div>
            </article>
            <article className="svc">
              <div className="svc-num">Q2</div>
              <div className="svc-body" style={{ gridColumn: "span 3" }}>
                <h3 style={{ fontSize: 24 }}>¿Cuánto cuesta desarrollar un MVP?</h3>
                <p>
                  Desde 900€ para un MVP funcional con lo mínimo para
                  validar la idea con usuarios reales: auth, una función
                  principal y despliegue en producción. Sprints cerrados
                  de 2 semanas.
                </p>
              </div>
            </article>
            <article className="svc">
              <div className="svc-num">Q3</div>
              <div className="svc-body" style={{ gridColumn: "span 3" }}>
                <h3 style={{ fontSize: 24 }}>¿Cuánto cuesta desarrollar un SaaS completo?</h3>
                <p>
                  Desde 1.300€ para un producto SaaS de extremo a extremo:
                  arquitectura, autenticación, billing, dashboard y
                  onboarding. El rango final depende de cuántos roles de
                  usuario y qué integraciones de pago necesites.
                </p>
              </div>
            </article>
            <article className="svc">
              <div className="svc-num">Q4</div>
              <div className="svc-body" style={{ gridColumn: "span 3" }}>
                <h3 style={{ fontSize: 24 }}>¿El precio incluye mantenimiento después del lanzamiento?</h3>
                <p>
                  El precio cierra el sprint de construcción y 3-4 semanas
                  de iteración post-launch contigo. El mantenimiento
                  continuo a largo plazo se cotiza aparte, según lo que
                  necesites.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="hablamos" data-screen-label="CTA">
        <div className="wrap">
          <h2 className="h-display">
            ¿Cuál es<br />tu caso<span className="dot">?</span>
          </h2>
          <p className="lede">
            Cuéntanos tu proyecto y te decimos el rango real en menos
            de 5 días, con scope y plazo por escrito.
          </p>
          <div className="btn-row">
            <a href="/diagnostico" className="btn btn-primary">
              Cuéntanos tu proyecto <span className="arrow">→</span>
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
