const steps = [
  {
    number: "01",
    title: "Hablamos",
    body: "Me contás qué hace tu negocio, qué problema querés resolver y qué resultado esperás. Puede ser por WhatsApp, correo o videollamada.",
  },
  {
    number: "02",
    title: "Propuesta",
    body: "Analizo el alcance, te propongo una solución clara con funcionalidades, tiempos y precio según tus objetivos y complejidad real.",
  },
  {
    number: "03",
    title: "Desarrollo",
    body: "Trabajo en el diseño y desarrollo con comunicación clara, avances visibles y ajustes durante el proceso según lo que necesites.",
  },
  {
    number: "04",
    title: "Entrega",
    body: "Dejo el proyecto listo para usar, con deploy, configuración y apoyo para que puedas ponerlo en marcha sin fricción.",
  },
];

const benefits = [
  "Comunicación clara",
  "Entregas puntuales",
  "Horarios flexibles",
  "Seguimiento del proyecto",
  "Presupuestos claros",
  "Soluciones a medida",
  "Soporte posterior",
  "Sin procesos innecesarios",
];

export default function Process() {
  return (
    <section id="proceso" className="relative py-28 md:py-36 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl mb-16 reveal">
          <p className="eyebrow mb-4">Proceso</p>
          <h2 className="font-display font-medium text-3xl md:text-4xl text-silver-100 leading-tight">
            Simple y sin vueltas.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mb-16">
          {steps.map((step) => (
            <div key={step.number} className="border border-line bg-surface/70 p-6 reveal">
              <span className="font-mono text-xs text-military-400">{step.number}</span>
              <h3 className="mt-6 font-display text-2xl text-silver-100 mb-3">
                {step.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-ink-400">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <div className="border border-line bg-surface/50 p-6 md:p-8 reveal">
          <div className="max-w-2xl mb-8">
            <p className="eyebrow mb-4">Beneficios</p>
            <h3 className="font-display text-2xl md:text-3xl text-silver-100">
              Trabajo claro, profesional y orientado a resultados.
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {benefits.map((benefit) => (
              <span
                key={benefit}
                className="rounded-full border border-line px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-ink-400"
              >
                {benefit}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
