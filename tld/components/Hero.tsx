const stats = [
  { value: "+2", label: "clientes" },
  { value: "+2 años", label: "programando" },
  { value: "Full Stack", label: "stack" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 blueprint-bg vignette" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />

      <div className="relative mx-auto max-w-7xl w-full px-6 md:px-10 py-20 grid md:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
        <div className="reveal animate-fade-up">
          <p className="eyebrow mb-6">Caleb Toledo · Full Stack Developer</p>

          <h1 className="font-display font-medium text-4xl sm:text-5xl lg:text-6xl leading-[0.96] text-silver-100">
            CALEB
            <span className="block silver-text bg-clip-text animate-shimmer">
              TOLEDO
            </span>
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-body text-ink-300">
            <span className="rounded-full border border-line bg-surface/60 px-3 py-1.5">
              Full Stack Developer
            </span>
            <span className="rounded-full border border-line bg-surface/60 px-3 py-1.5">
              Córdoba, Argentina
            </span>
            <span className="rounded-full border border-line bg-surface/60 px-3 py-1.5">
              Remote / Worldwide
            </span>
          </div>

          <p className="mt-8 max-w-xl font-body text-base md:text-lg text-ink-400 leading-relaxed">
            Desarrollo sitios web, aplicaciones y sistemas a medida para negocios que
            necesitan soluciones digitales claras, funcionales y preparadas para crecer.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="mailto:calebtoledo375@gmail.com?subject=Hablemos%20de%20mi%20proyecto"
              className="inline-flex items-center gap-2 bg-military-700 text-silver-100 px-7 py-3.5 text-sm font-body hover:bg-military-600 transition-colors"
            >
              Hablemos
            </a>
            <a
              href="https://calebjt7.github.io/portafolio/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-line-strong text-ink-100 px-7 py-3.5 text-sm font-body hover:border-silver-500 transition-colors"
            >
              Quiero mi web
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

        <div className="relative aspect-square max-w-md mx-auto w-full opacity-90 reveal">
          <div className="absolute inset-0 rounded-[28px] border border-line bg-surface/50 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
            <div className="flex h-full flex-col justify-between rounded-[24px] border border-line bg-bg/70 p-6">
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 overflow-hidden rounded-full border border-line bg-surface">
                  <img
                    src="/Gemini_Generated_Image_jr31vojr31vojr31.jpg"
                    alt="Logo Caleb Toledo"
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="rounded-full border border-line px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-ink-400">
                  disponible
                </span>
              </div>

              <div className="space-y-5">
                <div>
                  <p className="eyebrow text-[8px]">Especialidad</p>
                  <h2 className="mt-3 font-display text-2xl text-silver-100">
                    Soluciones web para negocios
                  </h2>
                </div>

                <div className="grid gap-3 text-sm text-ink-300">
                  <div className="flex items-center justify-between border-b border-line pb-2">
                    <span>Frontend</span>
                    <span className="text-military-400">Next.js</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-line pb-2">
                    <span>Backend</span>
                    <span className="text-military-400">Node / C#</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-line pb-2">
                    <span>Base de datos</span>
                    <span className="text-military-400">SQL / NoSQL</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-line pt-4 text-xs uppercase tracking-[0.2em] text-ink-500">
                <span>Disponible</span>
                <span>Global</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-600">
        <span className="eyebrow text-[9px]">Scroll</span>
        <span className="w-px h-10 bg-line-strong" />
      </div>
    </section>
  );
}
