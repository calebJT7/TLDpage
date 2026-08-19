const stack = {
  frontend: ["JavaScript", "TypeScript", "HTML", "CSS", "Next.js"],
  backend: ["C#", "Node.js", "Docker", "Git", "GitHub"],
  data: ["SQL", "NoSQL", "MongoDB"],
};

const metrics = [
  { value: "+2", label: "clientes" },
  { value: "+2 años", label: "programando" },
  { value: "Full Stack", label: "perfil" },
  { value: "Global", label: "disponibilidad" },
];

export default function Scale() {
  return (
    <section id="escala" className="relative section-padding border-t border-line overflow-hidden scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl section-heading reveal">
          <p className="eyebrow mb-3">Stack / dashboard</p>
          <h2 className="font-display font-medium text-3xl md:text-[2.35rem] text-silver-100 leading-tight">
            Tecnologías y experiencia que me permiten resolver proyectos reales.
          </h2>
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-5">
          <div className="border border-line bg-surface/60 p-5 md:p-7 reveal">
            <div className="mb-5 flex items-center justify-between">
              <span className="eyebrow text-[8px]">Developer dashboard</span>
              <span className="rounded-full border border-military-500/30 bg-military-950/50 px-2 py-1 text-[9px] uppercase tracking-[0.16em] text-military-400">
                online
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="border border-line bg-bg/70 p-3.5 md:p-4">
                  <div className="font-display text-xl md:text-2xl text-silver-100">{metric.value}</div>
                  <div className="mt-1.5 text-[10px] uppercase tracking-[0.18em] text-ink-500">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-line bg-surface/60 p-5 md:p-7 reveal">
            <div className="mb-5">
              <p className="eyebrow text-[8px]">Tech stack</p>
            </div>

            <div className="space-y-5">
              {Object.entries(stack).map(([group, items]) => (
                <div key={group}>
                  <p className="mb-2.5 text-[10px] uppercase tracking-[0.2em] text-ink-500">
                    {group}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-line px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] text-ink-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
