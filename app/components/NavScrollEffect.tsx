"use client";

import { useEffect } from "react";

export default function NavScrollEffect() {
  useEffect(() => {
    const nav = document.getElementById("nav");
    if (!nav) return;
    const handler = () => nav.classList.toggle("scrolled", window.scrollY > 12);
    document.addEventListener("scroll", handler, { passive: true });
    return () => document.removeEventListener("scroll", handler);
  }, []);

  return null;
}
