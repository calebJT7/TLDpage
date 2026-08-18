const services = [
  {
    n: "01",
    title: "Discovery y roadmap",
    body: "Definimos la estrategia del producto, priorizamos oportunidades y transformamos ideas vagas en un plan de desarrollo realista y medible.",
  },
  {
    n: "02",
    title: "Desarrollo SaaS",
    body: "Construimos aplicaciones web, paneles operativos y flujos de negocio con foco en velocidad, experiencia de usuario y mantenibilidad a largo plazo.",
  },
  {
    n: "03",
    title: "Integraciones y automatizaciones",
    body: "Conectamos sistemas de ventas, CRM, ERP, pagos, analítica y herramientas internas para eliminar fricción operativa y acelerar procesos.",
  },
  {
    n: "04",
    title: "Infraestructura y observabilidad",
    body: "Diseñamos infraestructura cloud, pipelines de despliegue, monitoreo y seguridad para que cada release sea confiable y cada fallo sea detectable.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative py-28 md:py-36 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl mb-16 md:mb-20">
          <p className="eyebrow mb-4">Servicios</p>
          <h2 className="font-display font-medium text-3xl md:text-4xl text-silver-100 leading-tight">
            Soluciones de software pensadas para equipos que quieren crecer con control.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`py-8 md:py-10 flex items-start gap-6 ${
                i < services.length - 2 ? "border-b border-line" : i === services.length - 2 ? "border-b md:border-b-0 border-line" : ""
              }`}
            >
              <span className="font-mono text-xs text-military-500 pt-1.5 shrink-0 w-12">
                {s.n}
              </span>
              <div>
                <h3 className="font-display text-xl text-silver-100 mb-2">
                  {s.title}
                </h3>
                <p className="font-body text-sm text-ink-400 leading-relaxed max-w-md">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
