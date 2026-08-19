const WHATSAPP_URL =
  "https://wa.me/5493515597512?text=Hola%20Caleb%2C%20quiero%20hablar%20de%20un%20proyecto.";

const contactMethods = [
  {
    label: "WhatsApp",
    value: "+54 9 351 559-7512",
    href: WHATSAPP_URL,
    external: true,
    featured: true,
  },
  {
    label: "Email",
    value: "calebtoledo375@gmail.com",
    href: "mailto:calebtoledo375@gmail.com?subject=Hablemos%20de%20mi%20proyecto&body=Hola%20Caleb%2C%20me%20interesa%20hablar%20sobre%20un%20proyecto.",
    external: false,
    featured: false,
  },
  {
    label: "LinkedIn",
    value: "/in/caleb-toledo",
    href: "https://www.linkedin.com/in/caleb-toledo-356b56336/",
    external: true,
    featured: false,
  },
  {
    label: "GitHub",
    value: "github.com/calebJT7",
    href: "https://github.com/calebJT7",
    external: true,
    featured: false,
  },
  {
    label: "Instagram",
    value: "@calebtld.dev",
    href: "https://www.instagram.com/calebtld.dev/",
    external: true,
    featured: false,
  },
];

export default function CTA() {
  return (
    <section
      id="contacto"
      className="relative section-padding border-t border-line overflow-hidden scroll-mt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-military-950 via-bg to-bg" />
      <div className="absolute inset-0 blueprint-bg opacity-40" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10 reveal">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.35fr] items-start">
          <div className="max-w-xl">
            <p className="eyebrow mb-4">Contacto</p>
            <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-[2.75rem] text-silver-100 leading-tight mb-4">
              ¿Tenés un proyecto en mente?
            </h2>
            <p className="font-body text-ink-400 leading-relaxed mb-6">
              Contame qué necesitás y vemos juntos la mejor forma de llevarlo a cabo.
              La forma más rápida de empezar es por WhatsApp.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-military-700 text-silver-100 px-6 py-3.5 text-sm font-body hover:bg-military-600 transition-colors shadow-[0_0_0_1px_rgba(138,160,95,0.35)]"
            >
              Escribir por WhatsApp
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {contactMethods.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                aria-label={`Contactar por ${item.label}`}
                className={`group rounded-xl border px-4 py-4 text-ink-100 transition-colors ${
                  item.featured
                    ? "sm:col-span-2 border-military-500/50 bg-military-950/40 hover:border-military-400 hover:bg-military-950/60"
                    : "border-line bg-surface/60 hover:border-military-500 hover:bg-surface"
                }`}
              >
                <div className="text-[10px] uppercase tracking-[0.2em] text-ink-500 mb-1.5">
                  {item.label}
                </div>
                <div className="font-display text-base md:text-lg text-silver-100 break-all">
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
