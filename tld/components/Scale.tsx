export default function Scale() {
  return (
    <section id="escala" className="relative py-28 md:py-36 border-t border-line overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl mb-16 md:mb-20">
          <p className="eyebrow mb-4">Desde MVP hasta plataforma</p>
          <h2 className="font-display font-medium text-3xl md:text-4xl text-silver-100 leading-tight">
            Te acompañamos en cada etapa del crecimiento digital.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 border border-line">
          <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-line relative">
            <span className="eyebrow text-military-500">Fase 1</span>
            <h3 className="font-display text-2xl md:text-3xl text-silver-100 mt-4 mb-6">
              Startup / MVP
            </h3>
            <p className="font-body text-sm md:text-base text-ink-400 leading-relaxed mb-8">
              Validás hipótesis, entregás valor real y construís una base sólida
              sin perder velocidad ni caer en una infraestructura pesada antes de
              tiempo.
            </p>
            <ul className="space-y-3 font-body text-sm text-ink-100/80">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-military-500" /> Producto mínimo viable con foco en mercado
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-military-500" /> Iteración rápida con feedback real
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-military-500" /> Base técnica lista para crecer
              </li>
            </ul>
          </div>

          <div className="p-10 md:p-14 relative bg-surface">
            <span className="eyebrow text-silver-500">Fase 2</span>
            <h3 className="font-display text-2xl md:text-3xl text-silver-100 mt-4 mb-6">
              SaaS / empresa en escala
            </h3>
            <p className="font-body text-sm md:text-base text-ink-400 leading-relaxed mb-8">
              Aumentás volumen, sumás equipos y necesitás más control sobre datos,
              seguridad, rendimiento y procesos sin romper la experiencia del usuario.
            </p>
            <ul className="space-y-3 font-body text-sm text-ink-100/80">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-silver-500" /> Arquitectura modular y monitoreada
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-silver-500" /> Integraciones de negocio y automatización
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-silver-500" /> Gobierno, observabilidad y escalabilidad real
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
