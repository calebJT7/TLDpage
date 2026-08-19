const pillars = [
  {
    title: "Entiendo el negocio",
    body: "No trabajo solo sobre la interfaz: analizo necesidades, objetivos y procesos para definir la mejor solución digital para cada caso.",
    glyph: (
      <path d="M8 24 H40" stroke="currentColor" strokeWidth="2" />
    ),
  },
  {
    title: "Desarrollo completo",
    body: "Puedo acompañar desde una landing hasta una aplicación web o sistema más complejo, con frontend y backend trabajando en conjunto.",
    glyph: (
      <path
        d="M14 34 L24 12 L34 34"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Más que una web",
    body: "La idea no es vender una página bonita: es crear una solución que ayude a resolver un problema real y a escalar el negocio.",
    glyph: (
      <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="2" />
    ),
  },
];

export default function Pillars() {
  return (
    <section id="pilares" className="section-base section-padding border-t border-line scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl section-heading reveal">
          <p className="eyebrow mb-3">Diferencial</p>
          <h2 className="font-display font-semibold text-3xl md:text-[2.6rem] text-silver-100 leading-[1.08] tracking-tight">
            Más que una web.{" "}
            <span className="heading-accent">
              Entiendo el sistema detrás de tu negocio.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`card-glass card-glow rounded-2xl p-6 md:p-7 flex flex-col gap-5 reveal reveal-delay-${i + 1}`}
            >
              <div className="icon-ring">
                <svg viewBox="0 0 48 48" className="w-5 h-5" fill="none" aria-hidden="true">
                  {p.glyph}
                </svg>
              </div>
              <div>
                <h3 className="font-display text-lg md:text-xl font-medium text-silver-100 mb-2">
                  {p.title}
                </h3>
                <p className="font-body text-sm text-ink-400 leading-relaxed">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider mx-auto max-w-7xl mt-12 md:mt-14" />
    </section>
  );
}
