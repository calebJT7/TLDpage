const projects = [
  {
    title: "Rotisería LDK",
    category: "Cliente oficial",
    description:
      "Proyecto real para un negocio local con necesidad de presencia digital, catálogo y mejor experiencia de compra para clientes online.",
    status: "Cliente",
    tags: ["Frontend", "UX", "Negocio local"],
    image: "/roti.png",
    link: "https://github.com/calebJT7/RotiseriaLDK",
  },
  {
    title: "Gym landing",
    category: "Proyecto personal",
    description:
      "Landing funcional para gimnasio con enfoque en conversión, presentación de servicios y llamado a la acción comercial.",
    status: "Personal",
    tags: ["Landing", "Marketing", "Diseño"],
    image: "/gym.png",
    link: "https://calebjt7.github.io/gym/",
  },
  {
    title: "Clean Commerce",
    category: "Proyecto personal",
    description:
      "E-commerce con interfaz limpia, catálogo, experiencia moderna y estructura pensada para una tienda online funcional.",
    status: "Personal",
    tags: ["E-commerce", "Frontend", "Productos"],
    image: "/ecommerce.png",
    link: "https://clean-ecommerce-frontend-9hr8gl1ae-calebjt7s-projects.vercel.app/",
  },
  {
    title: "Portafolio personal",
    category: "Portfolio / presentación",
    description:
      "Espacio personal para mostrar proyectos, capacidades y trabajo realizado con una identidad visual más sólida.",
    status: "Personal",
    tags: ["Portfolio", "Branding", "Web"],
    image: "/tldlogo.jpg",
    link: "https://calebjt7.github.io/portafolio/",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="relative py-28 md:py-36 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="max-w-2xl reveal">
            <p className="eyebrow mb-4">Proyectos</p>
            <h2 className="font-display font-medium text-3xl md:text-4xl text-silver-100 leading-tight">
              Trabajos reales y proyectos que muestran cómo pienso y construyo.
            </h2>
          </div>

          <a
            href="https://calebjt7.github.io/portafolio/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-line-strong text-ink-100 px-5 py-3 text-sm hover:border-silver-500 transition-colors reveal"
          >
            Ver más proyectos
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden border border-line bg-surface/70 p-6 md:p-7 reveal transition-all duration-300 hover:border-military-500/60 hover:bg-surface"
            >
              <div className="mb-6 flex items-center justify-between gap-3">
                <span className="text-[10px] uppercase tracking-[0.2em] text-military-400">
                  {project.category}
                </span>
                <span className="rounded-full border border-line px-2 py-1 text-[9px] uppercase tracking-[0.18em] text-ink-500">
                  {project.status}
                </span>
              </div>

              <div className="mb-6 overflow-hidden rounded-lg border border-line bg-gradient-to-br from-military-950 via-surface to-bg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

              <div>
                <h3 className="font-display text-2xl text-silver-100 mb-3">
                  {project.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-ink-400 mb-5">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line px-2.5 py-1.5 text-[10px] uppercase tracking-[0.14em] text-ink-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-sm text-silver-100 transition-colors hover:text-military-400"
              >
                Ver detalle <span className="ml-2">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
