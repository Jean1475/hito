import type { Metadata } from "next";
import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: "Política de cookies de Hito Studio S.L. — qué cookies utiliza el sitio web y cómo puedes gestionarlas.",
  alternates: {
    canonical: "https://www.hitomarketing.com/legal/cookies",
  },
  openGraph: {
    type: "website",
    url: "https://www.hitomarketing.com/legal/cookies",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Cookies() {
  return (
    <>
      <SiteNav />
      <section className="section" style={{ paddingTop: 160 }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <h1 className="h-display" style={{ fontSize: 40, marginBottom: 24 }}>Política de cookies</h1>

          <p style={{ marginBottom: 16 }}>
            Este sitio web utiliza cookies y tecnologías similares para su
            correcto funcionamiento y para obtener estadísticas de uso
            anónimas.
          </p>

          <h2 style={{ fontSize: 24, marginBottom: 12 }}>¿Qué son las cookies?</h2>
          <p style={{ marginBottom: 16 }}>
            Las cookies son pequeños archivos de texto que un sitio web
            almacena en el navegador del usuario para recordar información
            sobre su visita.
          </p>

          <h2 style={{ fontSize: 24, marginBottom: 12 }}>Cookies que utilizamos</h2>
          <ul style={{ marginBottom: 24, lineHeight: 1.8 }}>
            <li><strong>Cookies técnicas:</strong> necesarias para la navegación y el funcionamiento básico del sitio.</li>
            <li><strong>Cookies analíticas (Vercel Analytics):</strong> nos permiten conocer el número de visitas y el uso agregado del sitio, sin identificar individualmente al usuario.</li>
          </ul>

          <h2 style={{ fontSize: 24, marginBottom: 12 }}>Cómo gestionar las cookies</h2>
          <p style={{ marginBottom: 16 }}>
            Puedes permitir, bloquear o eliminar las cookies instaladas en tu
            equipo mediante la configuración de las opciones de tu navegador.
            Ten en cuenta que si desactivas las cookies, algunas funciones del
            sitio podrían no funcionar correctamente.
          </p>

          <h2 style={{ fontSize: 24, marginBottom: 12 }}>Más información</h2>
          <p style={{ marginBottom: 16 }}>
            Para cualquier duda sobre esta política, puedes escribirnos a
            hitomarketingstudio@gmail.com.
          </p>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
