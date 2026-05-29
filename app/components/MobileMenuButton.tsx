"use client";

import { useState, useEffect } from "react";

interface Props {
  currentPage: "trabajo" | "servicios" | "diagnostico";
}

export default function MobileMenuButton({ currentPage }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        className={`hamburger${open ? " is-open" : ""}`}
        onClick={() => setOpen(o => !o)}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>

      {open && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Menú de navegación">
          <button className="mobile-menu-close" onClick={close} aria-label="Cerrar menú">×</button>
          <nav className="mobile-menu-links">
            <a href="/" className={currentPage === "trabajo" ? "active" : ""} onClick={close}>
              Trabajo
            </a>
            <a href="/servicios" className={currentPage === "servicios" ? "active" : ""} onClick={close}>
              Servicios
            </a>
            <a href="/#equipo" onClick={close}>
              Equipo
            </a>
            <a href={currentPage === "trabajo" ? "#hablamos" : "/#hablamos"} onClick={close}>
              Hablamos
            </a>
          </nav>
          <div className="mobile-menu-bottom">
            <a href="mailto:hitomarketingstudio@gmail.com">hitomarketingstudio@gmail.com</a>
          </div>
        </div>
      )}
    </>
  );
}
