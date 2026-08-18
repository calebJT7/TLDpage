const pillars = [
  {
    title: "Producto con propósito",
    body: "Combinamos estrategia, experiencia de usuario y tecnología para crear productos que resuelven problemas reales y generan crecimiento medible.",
    glyph: (
      <path d="M8 24 H40" stroke="currentColor" strokeWidth="2" />
    ),
  },
  {
    title: "Arquitectura que escala",
    body: "Diseñamos sistemas con claridad, seguridad y capacidad de evolución para que cada nueva funcionalidad no se convierta en deuda técnica.",
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
    title: "Operación de negocio",
    body: "No entregamos solo código: conectamos infraestructura, métricas, integración y soporte para que el producto siga funcionando en producción.",
    glyph: (
      <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="2" />
    ),
  },
];

export default function Pillars() {
  return (
    <section id="pilares" className="relative py-28 md:py-36 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl mb-16 md:mb-20">
          <p className="eyebrow mb-4">Cómo trabajamos</p>
          <h2 className="font-display font-medium text-3xl md:text-4xl text-silver-100 leading-tight">
            Hacemos software que funciona para el negocio y para el usuario.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-line">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-bg p-8 md:p-10 flex flex-col gap-6 hover:bg-surface transition-colors"
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
