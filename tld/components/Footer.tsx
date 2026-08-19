export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center sm:items-start leading-none">
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

        <div className="flex items-center gap-6 font-body text-xs text-ink-400">
          <a href="https://github.com/calebJT7" target="_blank" rel="noreferrer" className="hover:text-silver-100 transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/caleb-toledo-356b56336/" target="_blank" rel="noreferrer" className="hover:text-silver-100 transition-colors">
            LinkedIn
          </a>
          <a href="mailto:calebtoledo375@gmail.com" className="hover:text-silver-100 transition-colors">
            Email
          </a>
          <a href="https://wa.me/5493515597512" target="_blank" rel="noreferrer" className="hover:text-silver-100 transition-colors">
            WhatsApp
          </a>
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-7xl px-6 md:px-10 border-t border-line pt-6">
        <p className="font-body text-center text-[10px] uppercase tracking-[0.2em] text-ink-600">
          © {new Date().getFullYear()} Caleb Toledo. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
