"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "#pilares", label: "Diferencial" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#proceso", label: "Proceso" },
  { href: "#precios", label: "Presupuesto" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      data-nav
      data-scrolled="false"
      className="group/nav fixed top-0 inset-x-0 z-50 border-b border-line bg-bg/70 backdrop-blur-xl transition-all duration-300 data-[scrolled=true]:bg-bg/90 data-[scrolled=true]:border-military-700/30 data-[scrolled=true]:shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-16 md:h-[4.5rem] flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 leading-none" onClick={closeMenu}>
          <span className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full ring-1 ring-military-500/20 bg-military-950/40">
            <img
              src="/logotld.png"
              alt="Logo Caleb Toledo"
              className="h-full w-full object-contain p-1"
            />
          </span>
          <span className="font-display font-semibold text-lg md:text-xl tracking-tight silver-text-static">
            Caleb Toledo
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1 font-body text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-3 py-2 text-ink-300 hover:text-silver-100 transition-colors after:absolute after:bottom-0 after:left-3 after:right-3 after:h-px after:bg-military-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contacto" className="hidden sm:inline-flex btn-primary !py-2 !px-4 md:!py-2.5 md:!px-5 text-sm">
            Hablemos
          </a>

          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center border border-line text-ink-100 hover:border-military-500/50 hover:bg-military-950/40 transition-all"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
              {open ? (
                <path d="M6 6 L18 18 M18 6 L6 18" stroke="currentColor" strokeWidth="1.5" />
              ) : (
                <>
                  <path d="M4 7 H20" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M4 12 H20" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M4 17 H20" stroke="currentColor" strokeWidth="1.5" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-bg/95 backdrop-blur-xl">
          <nav className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-1 font-body text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="py-3 text-ink-100/90 hover:text-military-400 border-b border-line last:border-b-0 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="#contacto" onClick={closeMenu} className="mt-3 btn-primary justify-center">
              Hablemos
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
