export default function Pricing() {
  return (
    <section id="precios" className="relative section-padding border-t border-line scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl section-heading reveal">
          <p className="eyebrow mb-3">Presupuesto</p>
          <h2 className="font-display font-medium text-3xl md:text-[2.35rem] text-silver-100 leading-tight">
            Cada proyecto tiene un alcance distinto.
          </h2>
        </div>

        <div className="border border-line bg-surface/60 p-6 md:p-10 reveal">
          <p className="font-body text-base text-ink-400 leading-relaxed max-w-3xl">
            Los precios se adaptan al tipo de solución, la complejidad del problema, los
            requisitos funcionales y el tiempo de desarrollo. No trabajo con un precio
            único para todos los proyectos porque cada negocio necesita algo diferente.
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5 text-[10px] uppercase tracking-[0.18em] text-ink-500">
            <span className="border border-line px-3 py-1.5">Presupuestos personalizados</span>
            <span className="border border-line px-3 py-1.5">Alcance flexible</span>
            <span className="border border-line px-3 py-1.5">Negociable según necesidad</span>
          </div>

          <a
            href="#contacto"
            className="mt-8 inline-flex items-center gap-2 bg-military-700 text-silver-100 px-6 py-3 text-sm font-body hover:bg-military-600 transition-colors shadow-[0_0_0_1px_rgba(138,160,95,0.35)]"
          >
            Pedir presupuesto
          </a>
        </div>
      </div>
    </section>
  );
}
