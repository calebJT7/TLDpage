const socialLinks = [
  { label: "WhatsApp", href: "https://wa.me/5493515597512?text=Hola%20Caleb%2C%20quiero%20hablar%20de%20un%20proyecto.", external: true },
  { label: "Email", href: "mailto:calebtoledo375@gmail.com?subject=Hablemos%20de%20mi%20proyecto", external: false },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/caleb-toledo-356b56336/", external: true },
  { label: "GitHub", href: "https://github.com/calebJT7", external: true },
  { label: "Instagram", href: "https://www.instagram.com/calebtld.dev/", external: true },
];

export default function Footer() {
  return (
    <footer className="border-t border-line py-8 md:py-9">
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex flex-col items-center md:items-start leading-none">
          <span className="font-display font-semibold text-sm silver-text-static">
            Caleb Toledo
          </span>
          <span className="eyebrow text-[8px] mt-1 text-ink-600">
            Full Stack Developer
          </span>
        </div>

        <div className="text-center">
          <p className="font-body text-xs text-ink-600">Córdoba, Argentina</p>
          <p className="font-body text-xs text-ink-600">Remote / Worldwide</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-body text-xs text-ink-400">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              className="hover:text-silver-100 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-5 max-w-7xl px-6 md:px-10 border-t border-line pt-5">
        <p className="font-body text-center text-[10px] uppercase tracking-[0.2em] text-ink-600">
          © {new Date().getFullYear()} Caleb Toledo. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
