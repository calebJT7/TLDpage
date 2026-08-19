const contactMethods = [
  {
    label: "WhatsApp",
    value: "+54 9 351 559-7512",
    href: "https://wa.me/5493515597512?text=Hola%20Caleb%2C%20quiero%20hablar%20de%20un%20proyecto.",
    external: true,
  },
  {
    label: "Email",
    value: "calebtoledo375@gmail.com",
    href: "mailto:calebtoledo375@gmail.com?subject=Hablemos%20de%20mi%20proyecto&body=Hola%20Caleb%2C%20me%20interesa%20hablar%20sobre%20un%20proyecto.",
    external: false,
  },
  {
    label: "LinkedIn",
    value: "/in/caleb-toledo",
    href: "https://www.linkedin.com/in/caleb-toledo-356b56336/",
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/calebJT7",
    href: "https://github.com/calebJT7",
    external: true,
  },
  {
    label: "Instagram",
    value: "@calebtld.dev",
    href: "https://www.instagram.com/calebtld.dev/",
    external: true,
  },
];

export default function CTA() {
  return (
    <section
      id="contacto"
      className="relative py-28 md:py-36 border-t border-line overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-military-950 via-bg to-bg" />
      <div className="absolute inset-0 blueprint-bg opacity-40" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10 reveal">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.4fr] items-start">
          <div className="max-w-xl">
            <p className="eyebrow mb-6">Contacto</p>
            <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl text-silver-100 leading-tight mb-6">
              ¿Tenés un proyecto en mente?
            </h2>
            <p className="font-body text-ink-400 leading-relaxed">
              Contame qué necesitás y vemos juntos la mejor forma de llevarlo a cabo.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {contactMethods.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                aria-label={item.label}
                className="group rounded-xl border border-line bg-surface/60 px-4 py-4 text-ink-100 transition-colors hover:border-military-500 hover:bg-surface"
              >
                <div className="text-[10px] uppercase tracking-[0.2em] text-ink-500 mb-2">
                  {item.label}
                </div>
                <div className="font-display text-lg text-silver-100">
                  {item.value}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
