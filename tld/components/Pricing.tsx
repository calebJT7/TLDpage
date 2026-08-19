export default function Pricing() {
  return (
    <section id="precios" className="relative py-28 md:py-36 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl mb-16 reveal">
          <p className="eyebrow mb-4">Presupuesto</p>
          <h2 className="font-display font-medium text-3xl md:text-4xl text-silver-100 leading-tight">
            Cada proyecto tiene un alcance distinto.
          </h2>
        </div>

        <div className="border border-line bg-surface/60 p-8 md:p-12 reveal">
          <p className="font-body text-base text-ink-400 leading-relaxed max-w-3xl">
            Los precios se adaptan al tipo de solución, la complejidad del problema, los
            requisitos funcionales y el tiempo de desarrollo. No trabajo con un precio
            único para todos los proyectos porque cada negocio necesita algo diferente.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.18em] text-ink-500">
            <span className="border border-line px-3 py-2">Presupuestos personalizados</span>
            <span className="border border-line px-3 py-2">Alcance flexible</span>
            <span className="border border-line px-3 py-2">Negociable según necesidad</span>
          </div>
        </div>
      </div>
    </section>
  );
}
