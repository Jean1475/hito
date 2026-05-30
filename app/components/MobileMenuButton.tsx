"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface Props {
  currentPage: "trabajo" | "servicios" | "diagnostico";
}

export default function MobileMenuButton({ currentPage }: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  const overlay = open ? (
    <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Menú de navegación">
      <div className="mobile-menu-header">
        <a href="/" className="brand" onClick={close} aria-label="Hito home">
          <svg viewBox="0 0 100 100" width="28" height="28" aria-hidden="true">
            <path d="M 52 12 L 90 58 L 70 58 L 52 36 L 34 58 L 14 58 Z" fill="#0E0E10" />
            <path d="M 30 66 L 50 88 L 36 88 L 30 81 L 24 88 L 10 88 Z" fill="#0E0E10" />
          </svg>
          <span className="word">hito<span className="dot">.</span></span>
        </a>
        <button className="mobile-menu-close" onClick={close} aria-label="Cerrar menú">×</button>
      </div>
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
  ) : null;

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

      {mounted && createPortal(overlay, document.body)}
    </>
  );
}
