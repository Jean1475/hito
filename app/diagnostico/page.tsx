import type { Metadata } from "next";
import SiteNav from "../components/SiteNav";
import DiagnosticoQuiz from "../components/DiagnosticoQuiz";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Diagnóstico de proyecto — ¿Encajamos?",
  description:
    "3 preguntas. La IA te dice si encajamos y qué servicio necesitas para tu proyecto.",
  alternates: {
    canonical: "https://hitostudio.es/diagnostico",
  },
  openGraph: {
    url: "https://hitostudio.es/diagnostico",
  },
};

export default function Diagnostico() {
  return (
    <>
      <style>{`
        #nav { position: fixed; width: 100%; top: 0; left: 0; background: var(--cream); }
      `}</style>

      <SiteNav />

      {/* Quiz IA */}
      <DiagnosticoQuiz />

      <SiteFooter />
    </>
  );
}
