import type { Metadata } from "next";
import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: "Aviso legal de Hito Studio S.L. — datos identificativos, condiciones de uso del sitio web y régimen de responsabilidad.",
  alternates: {
    canonical: "https://www.hitomarketing.com/legal/aviso-legal",
  },
  openGraph: {
    type: "website",
    url: "https://www.hitomarketing.com/legal/aviso-legal",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AvisoLegal() {
  return (
    <>
      <SiteNav />
      <section className="section" style={{ paddingTop: 160 }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <h1 className="h-display" style={{ fontSize: 40, marginBottom: 24 }}>Aviso legal</h1>

          <p style={{ marginBottom: 16 }}>
            En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la
            Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se
            informa de los siguientes datos identificativos:
          </p>

          <ul style={{ marginBottom: 24, lineHeight: 1.8 }}>
            <li><strong>Titular:</strong> Hito Studio S.L.</li>
            <li><strong>NIF/CIF:</strong> B-77419220</li>
            <li><strong>Domicilio social:</strong> Madrid, España</li>
            <li><strong>Contacto:</strong> hitomarketingstudio@gmail.com</li>
          </ul>

          <h2 style={{ fontSize: 24, marginBottom: 12 }}>Objeto</h2>
          <p style={{ marginBottom: 16 }}>
            El presente aviso legal regula el uso del sitio web
            hitomarketing.com, del que es titular Hito Studio S.L. La
            navegación por el sitio web atribuye la condición de usuario del
            mismo e implica la aceptación de las condiciones aquí recogidas.
          </p>

          <h2 style={{ fontSize: 24, marginBottom: 12 }}>Propiedad intelectual</h2>
          <p style={{ marginBottom: 16 }}>
            Todos los contenidos del sitio web (textos, imágenes, marcas,
            logotipos y demás elementos gráficos), salvo que se indique lo
            contrario, son propiedad de Hito Studio S.L. o de sus clientes
            citados a modo de referencia, y están protegidos por la normativa
            de propiedad intelectual e industrial.
          </p>

          <h2 style={{ fontSize: 24, marginBottom: 12 }}>Responsabilidad</h2>
          <p style={{ marginBottom: 16 }}>
            Hito Studio S.L. no se hace responsable de los daños y perjuicios
            que pudieran derivarse de interferencias, interrupciones, fallos o
            desconexiones en el funcionamiento del sitio web por causas ajenas
            a su control.
          </p>

          <h2 style={{ fontSize: 24, marginBottom: 12 }}>Legislación aplicable</h2>
          <p style={{ marginBottom: 16 }}>
            Las presentes condiciones se rigen por la legislación española.
            Para cualquier controversia derivada del acceso o uso de este
            sitio web, las partes se someten a los juzgados y tribunales de
            Madrid.
          </p>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
