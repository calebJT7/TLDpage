export default function CTA() {
  return (
    <section
      id="contacto"
      className="relative py-28 md:py-36 border-t border-line overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-military-950 via-bg to-bg" />
      <div className="absolute inset-0 blueprint-bg opacity-40" />

      <div className="relative mx-auto max-w-4xl px-6 md:px-10 text-center">
        <p className="eyebrow mb-6">Hablemos</p>
        <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl text-silver-100 leading-tight mb-8">
          ¿Tu próximo producto necesita más velocidad, claridad y escala?
        </h2>
        <p className="font-body text-ink-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Si estás lanzando un SaaS, optimizando una plataforma o modernizando un
          proceso interno, te ayudamos a definir la mejor ruta técnica y de negocio.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-10 text-[10px] uppercase tracking-[0.2em] text-ink-500">
          <span className="border border-line px-3 py-2">Product strategy</span>
          <span className="border border-line px-3 py-2">Full-stack</span>
          <span className="border border-line px-3 py-2">Cloud architecture</span>
          <span className="border border-line px-3 py-2">Integration</span>
        </div>

        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
          <label htmlFor="email" className="sr-only">
            Correo electrónico
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="tu@empresa.com"
            className="flex-1 bg-surface border border-line-strong px-5 py-3.5 text-sm text-ink-100 placeholder:text-ink-600 focus:outline-none focus:border-military-500 transition-colors"
          />
          <button
            type="submit"
            className="bg-military-700 text-silver-100 px-7 py-3.5 text-sm font-body hover:bg-military-600 transition-colors shrink-0"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
