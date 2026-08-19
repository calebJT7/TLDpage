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
    category: "Cliente oficial",
    description:
      "Landing funcional para gimnasio con enfoque en conversión, presentación de servicios y llamado a la acción comercial.",
    status: "Cliente",
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
    image: "/portalogo.jpg",
    link: "https://calebjt7.github.io/portafolio/",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="relative section-padding border-t border-line scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 section-heading">
          <div className="max-w-2xl reveal">
            <p className="eyebrow mb-3">Proyectos</p>
            <h2 className="font-display font-medium text-3xl md:text-[2.35rem] text-silver-100 leading-tight">
              Trabajos reales que demuestran cómo pienso y construyo.
            </h2>
          </div>

          <a
            href="https://calebjt7.github.io/portafolio/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 border border-line-strong text-ink-100 px-5 py-2.5 text-sm hover:border-silver-500 transition-colors reveal"
          >
            Ver más proyectos
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden card-glass card-glow rounded-2xl p-5 md:p-6 reveal transition-all duration-300"
            >
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="text-[10px] uppercase tracking-[0.2em] text-military-400">
                  {project.category}
                </span>
                <span className="rounded-full border border-line px-2 py-1 text-[9px] uppercase tracking-[0.18em] text-ink-500">
                  {project.status}
                </span>
              </div>

              <div className="mb-5 overflow-hidden rounded-xl border border-line bg-gradient-to-br from-military-950 via-surface to-bg">
                <img
                  src={project.image}
                  alt={`Captura del proyecto ${project.title}`}
                  loading="lazy"
                  className="h-52 md:h-60 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div>
                <h3 className="font-display text-xl md:text-2xl text-silver-100 mb-2.5">
                  {project.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-ink-400 mb-4">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-ink-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-sm font-medium text-silver-100 transition-colors hover:text-military-400"
              >
                Ver detalle <span className="ml-2" aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
