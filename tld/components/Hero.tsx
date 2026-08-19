import StructureMark from "@/components/StructureMark";

const stats = [
  { value: "+2", label: "clientes" },
  { value: "+2 años", label: "programando" },
  { value: "Full Stack", label: "stack" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center pt-16 overflow-hidden scroll-mt-0"
    >
      {/* Background layers */}
      <div className="absolute inset-0 blueprint-bg-strong" />
      <div className="absolute inset-0 vignette" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/20 to-bg" />

      {/* Ambient orbs */}
      <div
        data-parallax="0.12"
        className="hero-orb w-[420px] h-[420px] -top-24 -left-24 bg-military-700/30 animate-float-slow"
      />
      <div
        data-parallax="0.08"
        className="hero-orb w-[320px] h-[320px] top-1/3 -right-32 bg-military-500/20 animate-float"
        style={{ animationDelay: "-2s" }}
      />
      <div
        data-parallax="0.05"
        className="hero-orb w-[200px] h-[200px] bottom-20 left-1/3 bg-military-400/10"
      />

      <div className="relative mx-auto max-w-7xl w-full px-6 md:px-10 py-10 md:py-14 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-12 items-center">
        {/* Left — copy */}
        <div className="animate-fade-up">
          <div className="eyebrow-pill mb-6">
            Full Stack Developer · Disponible
          </div>

          <h1 className="font-display font-semibold text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.92] tracking-tight text-silver-100">
            CALEB
            <span className="block silver-text animate-shimmer mt-1">
              TOLEDO
            </span>
          </h1>

          <p className="mt-5 max-w-lg font-body text-base md:text-lg text-ink-300 leading-relaxed">
            Desarrollo sitios web, aplicaciones y sistemas a medida para negocios que
            necesitan soluciones digitales{" "}
            <span className="text-silver-100">claras, funcionales</span> y preparadas
            para crecer.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a href="#contacto" className="btn-primary">
              Hablemos de tu proyecto
            </a>
            <a href="#proyectos" className="btn-secondary">
              Ver proyectos
            </a>
          </div>

          <div className="mt-9 grid grid-cols-3 gap-2.5 max-w-md">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`stat-card rounded-xl px-3.5 py-3.5 md:px-4 md:py-4 reveal reveal-delay-${i + 1}`}
              >
                <div className="font-display text-xl md:text-2xl text-silver-100">
                  {stat.value}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-ink-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2 text-xs font-body text-ink-500">
            <span className="tag-pill">Córdoba, Argentina</span>
            <span className="tag-pill">Remote / Worldwide</span>
          </div>
        </div>

        {/* Right — profile card */}
        <div className="relative max-w-md mx-auto w-full reveal reveal-delay-2">
          {/* Decorative structure mark */}
          <div className="absolute -inset-8 opacity-[0.07] pointer-events-none animate-float-slow">
            <StructureMark />
          </div>

          {/* Glow behind card */}
          <div className="absolute inset-4 rounded-[32px] bg-military-500/10 blur-2xl" />

          <div className="relative card-glow rounded-[28px] p-[1px] bg-gradient-to-br from-military-400/40 via-line to-military-700/30 shadow-glow-lg">
            <div className="rounded-[27px] bg-surface/90 backdrop-blur-xl p-5 md:p-6 h-full">
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-military-500/30 bg-military-950/60">
                  <img
                    src="/logotld.png"
                    alt="Logo Caleb Toledo"
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-military-500/40 bg-military-950/80 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-military-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-military-400 animate-pulse-glow" />
                  disponible
                </span>
              </div>

              <div className="space-y-5">
                <div>
                  <p className="eyebrow text-[8px] mb-2">Especialidad</p>
                  <h2 className="font-display text-2xl md:text-[1.65rem] text-silver-100 leading-tight">
                    Soluciones web
                    <span className="block text-green-glow text-military-400">para negocios</span>
                  </h2>
                </div>

                <div className="rounded-xl border border-line bg-bg/60 p-4 space-y-3">
                  {[
                    { label: "Frontend", value: "Next.js" },
                    { label: "Backend", value: "Node / C#" },
                    { label: "Base de datos", value: "SQL / NoSQL" },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between text-sm group/row"
                    >
                      <span className="text-ink-400 group-hover/row:text-ink-300 transition-colors">
                        {row.label}
                      </span>
                      <span className="font-mono text-xs text-military-400 bg-military-950/60 px-2 py-0.5 rounded border border-military-700/40">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-line pt-4 text-[10px] uppercase tracking-[0.2em] text-ink-500">
                <span>Disponible ahora</span>
                <span className="text-military-400">Global</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#pilares"
        aria-label="Ir a la siguiente sección"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-600 hover:text-military-400 transition-colors group"
      >
        <span className="eyebrow text-[9px]">Scroll</span>
        <span className="w-px h-10 bg-gradient-to-b from-military-400/60 to-transparent group-hover:from-military-400 transition-colors" />
      </a>
    </section>
  );
}
