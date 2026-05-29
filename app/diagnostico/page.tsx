import type { Metadata } from "next";
import SiteNav from "../components/SiteNav";
import DiagnosticoQuiz from "../components/DiagnosticoQuiz";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Hito — Diagnóstico de proyecto",
  description: "3 preguntas. La IA te dice si encajamos y qué servicio necesitas.",
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
