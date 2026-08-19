const services = [
  {
    n: "01",
    title: "Sitios web y landings",
    body: "Diseño y desarrollo páginas orientadas a convertir visitas en consultas: presencia profesional, mensaje claro y llamados a la acción que funcionan.",
  },
  {
    n: "02",
    title: "Aplicaciones web a medida",
    body: "Construyo sistemas, paneles y herramientas internas adaptadas a cómo opera tu negocio, con foco en usabilidad y mantenimiento a largo plazo.",
  },
  {
    n: "03",
    title: "E-commerce y catálogos",
    body: "Tiendas online, catálogos de productos y flujos de compra pensados para vender mejor, con una experiencia moderna y confiable para tus clientes.",
  },
  {
    n: "04",
    title: "Integraciones y soporte",
    body: "Conecto pagos, formularios, WhatsApp, analítica y otras herramientas. También ofrezco mantenimiento y mejoras continuas después del lanzamiento.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative section-padding border-t border-line scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl section-heading">
          <p className="eyebrow mb-3 reveal">Servicios</p>
          <h2 className="font-display font-medium text-3xl md:text-[2.35rem] text-silver-100 leading-tight reveal">
            Soluciones digitales pensadas para que tu negocio crezca con claridad.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-0">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`py-6 md:py-8 flex items-start gap-5 reveal ${
                i < services.length - 2
                  ? "border-b border-line"
                  : i === services.length - 2
                    ? "border-b md:border-b-0 border-line"
                    : ""
              }`}
            >
              <span className="font-mono text-xs text-military-500 pt-1 shrink-0 w-10">
                {s.n}
              </span>
              <div>
                <h3 className="font-display text-lg md:text-xl text-silver-100 mb-2">
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
