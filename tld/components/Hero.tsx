import StructureMark from "./StructureMark";

const stats = [
  { value: "12+", label: "productos lanzados" },
  { value: "99.9%", label: "disponibilidad" },
  { value: "3x", label: "más velocidad en roadmap" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 blueprint-bg vignette" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />

      <div className="relative mx-auto max-w-7xl w-full px-6 md:px-10 py-20 grid md:grid-cols-2 gap-16 items-center">
        <div className="animate-fade-up">
          <p className="eyebrow mb-6">SaaS · Product Engineering · Cloud</p>

          <h1 className="font-display font-medium text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-silver-100">
            Construimos software
            <br />
            que ayuda a las empresas
            <br />
            <span className="silver-text bg-clip-text animate-shimmer">
              a crecer sin fricción
            </span>
            .
          </h1>

          <p className="mt-8 max-w-xl font-body text-base md:text-lg text-ink-400 leading-relaxed">
            TLD crea productos digitales, plataformas internas y experiencias SaaS
            que combinan velocidad de ejecución, calidad técnica y foco en métricas
            de negocio. Diseñamos soluciones que escalan con vos, no contra vos.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-military-700 text-silver-100 px-7 py-3.5 text-sm font-body hover:bg-military-600 transition-colors"
            >
              Reservar consultoría
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 border border-line-strong text-ink-100 px-7 py-3.5 text-sm font-body hover:border-silver-500 transition-colors"
            >
              Ver servicios
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-3 max-w-lg">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-md border border-line bg-surface/60 px-4 py-4"
              >
                <div className="font-display text-2xl text-silver-100">
                  {stat.value}
                </div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.18em] text-ink-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-square max-w-md mx-auto w-full opacity-90">
          <StructureMark />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-600">
        <span className="eyebrow text-[9px]">Scroll</span>
        <span className="w-px h-10 bg-line-strong" />
      </div>
    </section>
  );
}
