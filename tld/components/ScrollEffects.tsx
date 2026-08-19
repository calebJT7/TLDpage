"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const nav = document.querySelector<HTMLElement>("[data-nav]");
    const orbs = document.querySelectorAll<HTMLElement>("[data-parallax]");
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;

        if (nav) {
          nav.dataset.scrolled = y > 24 ? "true" : "false";
        }

        orbs.forEach((orb) => {
          const speed = Number(orb.dataset.parallax) || 0.15;
          orb.style.transform = `translateY(${y * speed}px)`;
        });

        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
