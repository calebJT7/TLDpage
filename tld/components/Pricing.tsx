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
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
            <div>
              <p className="font-body text-base text-ink-400 leading-relaxed">
                Los precios se adaptan al tipo de solución, la complejidad del problema,
                los requisitos funcionales y el tiempo de desarrollo. No trabajo con un
                precio único para todos los proyectos porque cada negocio necesita algo
                diferente.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.18em] text-ink-500">
                <span className="border border-line px-3 py-2">Presupuestos personalizados</span>
                <span className="border border-line px-3 py-2">Alcance flexible</span>
                <span className="border border-line px-3 py-2">Negociable según necesidad</span>
              </div>
            </div>

            <div className="rounded-xl border border-line bg-bg/80 p-6">
              <p className="eyebrow text-[8px]">Enfoque</p>
              <h3 className="mt-4 font-display text-3xl text-silver-100">Te escucho</h3>
              <p className="mt-4 text-sm text-ink-400 leading-relaxed">
                Contame qué necesitás y te armo una propuesta acorde a tu negocio, objetivos
                y nivel de complejidad.
              </p>
              <a
                href="#contacto"
                className="mt-6 inline-flex items-center gap-2 bg-military-700 text-silver-100 px-5 py-3 text-sm hover:bg-military-600 transition-colors"
              >
                Contame tu proyecto
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
