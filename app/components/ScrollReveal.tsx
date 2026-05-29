"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const revealEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    const staggerEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-stagger]")
    );

    staggerEls.forEach(container => {
      Array.from(container.children).forEach((child, i) => {
        (child as HTMLElement).style.setProperty("--stagger-i", String(i));
      });
    });

    const allEls = [...revealEls, ...staggerEls];

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("reveal-pending");
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    allEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      const alreadyInView =
        rect.top < window.innerHeight && rect.bottom >= 0;

      if (alreadyInView) {
        el.classList.add("reveal-visible");
      } else {
        el.classList.add("reveal-pending");
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
