"use client";

import { usePathname } from "next/navigation";
import NavScrollEffect from "./NavScrollEffect";
import MobileMenuButton from "./MobileMenuButton";

export default function SiteNav() {
  const pathname = usePathname();
  const isServicios = pathname === "/servicios";
  const isDiagnostico = pathname === "/diagnostico";
  const currentPage = isServicios ? "servicios" : isDiagnostico ? "diagnostico" : "trabajo";

  return (
    <>
      <NavScrollEffect />
      <nav className="nav" id="nav" data-screen-label="Nav">
        <a className="brand" href="/" aria-label="Hito home">
          <svg viewBox="0 0 100 100" width="30" height="30" aria-hidden="true">
            <path d="M 52 12 L 90 58 L 70 58 L 52 36 L 34 58 L 14 58 Z" fill="#0E0E10" />
            <path d="M 30 66 L 50 88 L 36 88 L 30 81 L 24 88 L 10 88 Z" fill="#0E0E10" />
          </svg>
          <span className="word">hito<span className="dot">.</span></span>
        </a>
        <div className="nav-links">
          <a href="/" className={!isServicios && !isDiagnostico ? "active" : ""}>Trabajo</a>
          <a href="/servicios" className={isServicios ? "active" : ""}>Servicios</a>
          <a href="/#equipo">Equipo</a>
          <a
            href={isDiagnostico ? "/#hablamos" : "#hablamos"}
            className="nav-cta"
          >
            Hablamos →
          </a>
          <MobileMenuButton currentPage={currentPage} />
        </div>
      </nav>
    </>
  );
}
