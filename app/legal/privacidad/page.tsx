import type { Metadata } from "next";
import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Política de privacidad de Hito Studio S.L. — cómo tratamos los datos personales que nos facilitas a través del sitio web.",
  alternates: {
    canonical: "https://www.hitomarketing.com/legal/privacidad",
  },
  openGraph: {
    type: "website",
    url: "https://www.hitomarketing.com/legal/privacidad",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Privacidad() {
  return (
    <>
      <SiteNav />
      <section className="section" style={{ paddingTop: 160 }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <h1 className="h-display" style={{ fontSize: 40, marginBottom: 24 }}>Política de privacidad</h1>

          <p style={{ marginBottom: 16 }}>
            De conformidad con el Reglamento (UE) 2016/679 (RGPD) y la Ley
            Orgánica 3/2018 de Protección de Datos Personales y garantía de
            los derechos digitales (LOPDGDD), Hito Studio S.L. informa sobre
            el tratamiento de los datos personales recabados a través de este
            sitio web.
          </p>

          <h2 style={{ fontSize: 24, marginBottom: 12 }}>Responsable del tratamiento</h2>
          <p style={{ marginBottom: 16 }}>
            Hito Studio S.L., con domicilio en C/ del Pez 12, 3°, 28004
            Madrid, y correo de contacto hitomarketingstudio@gmail.com.
          </p>

          <h2 style={{ fontSize: 24, marginBottom: 12 }}>Qué datos recogemos y con qué finalidad</h2>
          <p style={{ marginBottom: 16 }}>
            A través del formulario de contacto y del diagnóstico de
            proyecto recogemos los datos que nos facilitas voluntariamente
            (nombre, correo electrónico y descripción del proyecto), con la
            única finalidad de responder a tu consulta y elaborar una
            propuesta de colaboración.
          </p>

          <h2 style={{ fontSize: 24, marginBottom: 12 }}>Base legal</h2>
          <p style={{ marginBottom: 16 }}>
            El tratamiento se basa en el consentimiento que otorgas al
            rellenar y enviar el formulario correspondiente.
          </p>

          <h2 style={{ fontSize: 24, marginBottom: 12 }}>Conservación de los datos</h2>
          <p style={{ marginBottom: 16 }}>
            Los datos se conservarán únicamente durante el tiempo necesario
            para gestionar la consulta o, en su caso, durante la relación
            contractual y los plazos legales de conservación aplicables.
          </p>

          <h2 style={{ fontSize: 24, marginBottom: 12 }}>Destinatarios</h2>
          <p style={{ marginBottom: 16 }}>
            No se ceden datos a terceros salvo obligación legal. Podemos
            utilizar proveedores de servicios (por ejemplo, hosting o correo
            electrónico) que actúan como encargados del tratamiento conforme
            al artículo 28 del RGPD.
          </p>

          <h2 style={{ fontSize: 24, marginBottom: 12 }}>Tus derechos</h2>
          <p style={{ marginBottom: 16 }}>
            Puedes ejercer tus derechos de acceso, rectificación, supresión,
            oposición, limitación y portabilidad escribiendo a
            hitomarketingstudio@gmail.com.
          </p>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
