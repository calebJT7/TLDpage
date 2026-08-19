export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 leading-none group">
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-transparent">
            <img
              src="/logotld.png"
              alt="Logo Caleb Toledo"
              className="h-full w-full object-contain bg-transparent"
            />
          </span>
          <span className="font-display font-semibold text-xl md:text-xl tracking-tight silver-text-static">
            Caleb Toledo
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10 font-body text-sm text-ink-100/80">
          <a href="#pilares" className="hover:text-silver-100 transition-colors">
            Diferencial
          </a>
          <a href="#servicios" className="hover:text-silver-100 transition-colors">
            Servicios
          </a>
          <a href="#proyectos" className="hover:text-silver-100 transition-colors">
            Proyectos
          </a>
          <a href="#precios" className="hover:text-silver-100 transition-colors">
            Presupuesto
          </a>
        </nav>

        <a
          href="mailto:calebtoledo375@gmail.com?subject=Hablemos%20de%20mi%20proyecto"
          className="hidden sm:inline-flex items-center gap-2 border border-military-700 text-ink-100 text-sm px-5 py-2.5 hover:bg-military-800 hover:border-military-600 transition-colors font-body"
        >
          Empezar proyecto
        </a>
      </div>
    </header>
  );
}
