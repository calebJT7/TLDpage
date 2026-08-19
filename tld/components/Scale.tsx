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
    <section id="escala" className="relative py-28 md:py-36 border-t border-line overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl mb-16 reveal">
          <p className="eyebrow mb-4">Stack / dashboard</p>
          <h2 className="font-display font-medium text-3xl md:text-4xl text-silver-100 leading-tight">
            Tecnologías y experiencia que me permiten resolver proyectos reales.
          </h2>
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6">
          <div className="border border-line bg-surface/60 p-6 md:p-8 reveal">
            <div className="mb-6 flex items-center justify-between">
              <span className="eyebrow text-[8px]">Developer dashboard</span>
              <span className="rounded-full border border-line px-2 py-1 text-[9px] uppercase tracking-[0.16em] text-ink-500">
                online
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {metrics.map((metric) => (
                <div key={metric.label} className="border border-line bg-bg/70 p-4">
                  <div className="font-display text-2xl text-silver-100">{metric.value}</div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.18em] text-ink-500">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-line bg-surface/60 p-6 md:p-8 reveal">
            <div className="mb-6">
              <p className="eyebrow text-[8px]">Tech stack</p>
            </div>

            <div className="space-y-6">
              {Object.entries(stack).map(([group, items]) => (
                <div key={group}>
                  <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-ink-500">
                    {group}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-line px-3 py-2 text-[10px] uppercase tracking-[0.12em] text-ink-300"
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
