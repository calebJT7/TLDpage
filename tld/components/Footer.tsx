export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center sm:items-start leading-none">
          <span className="font-display font-semibold text-sm silver-text-static">
            TLD
          </span>
          <span className="eyebrow text-[8px] mt-1 text-ink-600">
            Software
          </span>
        </div>
        <p className="font-body text-xs text-ink-600 text-center">
          © {new Date().getFullYear()} TLD Software. Todos los derechos
          reservados.
        </p>
        <div className="flex items-center gap-6 font-body text-xs text-ink-400">
          <a href="#" className="hover:text-silver-100 transition-colors">
            LinkedIn
          </a>
          <a href="#" className="hover:text-silver-100 transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
