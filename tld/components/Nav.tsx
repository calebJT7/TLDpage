export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex flex-col leading-none group">
          <span className="font-display font-semibold text-xl md:text-2xl tracking-tight silver-text-static">
            TLD
          </span>
          <span className="eyebrow mt-1 text-[9px] md:text-[10px] tracking-widest2 text-ink-400">
            Software
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10 font-body text-sm text-ink-100/80">
          <a href="#pilares" className="hover:text-silver-100 transition-colors">
            Enfoque
          </a>
          <a href="#escala" className="hover:text-silver-100 transition-colors">
            Escala
          </a>
          <a href="#servicios" className="hover:text-silver-100 transition-colors">
            Servicios
          </a>
          <a href="#contacto" className="hover:text-silver-100 transition-colors">
            Contacto
          </a>
        </nav>

        <a
          href="#contacto"
          className="hidden sm:inline-flex items-center gap-2 border border-military-700 text-ink-100 text-sm px-5 py-2.5 hover:bg-military-800 hover:border-military-600 transition-colors font-body"
        >
          Hablemos
        </a>
      </div>
    </header>
  );
}
