export default function CTA() {
  return (
    <section
      id="contacto"
      className="relative py-28 md:py-36 border-t border-line overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-military-950 via-bg to-bg" />
      <div className="absolute inset-0 blueprint-bg opacity-40" />

      <div className="relative mx-auto max-w-4xl px-6 md:px-10 text-center reveal">
        <p className="eyebrow mb-6">¿Tenés un proyecto en mente?</p>
        <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl text-silver-100 leading-tight mb-8">
          Hablemos de cómo resolverlo con una solución digital que encaje con tu negocio.
        </h2>
        <p className="font-body text-ink-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Contame qué necesitás y te ayudo a definir la mejor solución: landing, sistema,
          gestión, aplicación web o mejora de una herramienta existente.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-10 text-[10px] uppercase tracking-[0.2em] text-ink-500">
          <span className="border border-line px-3 py-2">Hablemos</span>
          <span className="border border-line px-3 py-2">Quiero mi web</span>
          <span className="border border-line px-3 py-2">Contame tu idea</span>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="mailto:calebtoledo375@gmail.com?subject=Hablemos%20de%20mi%20proyecto"
            className="inline-flex items-center gap-2 bg-military-700 text-silver-100 px-7 py-3.5 text-sm font-body hover:bg-military-600 transition-colors"
          >
            Empezar proyecto
          </a>
          <a
            href="https://wa.me/5493515597512"
            rel="noreferrer"
            target="_blank"
            className="inline-flex items-center gap-2 border border-line-strong text-ink-100 px-7 py-3.5 text-sm hover:border-silver-500 transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
