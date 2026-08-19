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
    <section id="pilares" className="relative py-28 md:py-36 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl mb-16 md:mb-20 reveal">
          <p className="eyebrow mb-4">Diferencial</p>
          <h2 className="font-display font-medium text-3xl md:text-4xl text-silver-100 leading-tight">
            Más que una web. Entiendo el sistema detrás de tu negocio.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-line">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-bg p-8 md:p-10 flex flex-col gap-6 hover:bg-surface transition-colors reveal"
            >
              <svg
                viewBox="0 0 48 48"
                className="w-10 h-10 text-military-500"
                fill="none"
              >
                {p.glyph}
              </svg>
              <div>
                <h3 className="font-display text-xl text-silver-100 mb-3">
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
    </section>
  );
}
