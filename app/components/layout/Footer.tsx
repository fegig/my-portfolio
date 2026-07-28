import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import BrandMark from "./BrandMark";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background-100">
      <div className="site-shell py-12 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.75fr_0.75fr]">
          <div className="max-w-xl">
            <Link to="/" aria-label="Fegig Technologies home">
              <BrandMark />
            </Link>
            <p className="mt-7 text-2xl leading-tight tracking-[-0.035em] text-foreground-100 sm:text-3xl">
              Software should make the work clearer, not add another layer of noise.
            </p>
            <a
              href="mailto:messageme@codewithfegig.com"
              className="text-link mt-7"
            >
              messageme@codewithfegig.com
              <ArrowUpRight size={15} />
            </a>
          </div>

          <div>
            <p className="kicker">Navigate</p>
            <ul className="mt-5 grid gap-3 text-sm text-foreground-200">
              <li><Link to="/services" className="transition hover:text-white">Practice</Link></li>
              <li><Link to="/projects" className="transition hover:text-white">Selected work</Link></li>
              <li><Link to="/about" className="transition hover:text-white">Studio</Link></li>
              <li><Link to="/founder" className="transition hover:text-white">Founder</Link></li>
              <li><Link to="/insights" className="transition hover:text-white">Field notes</Link></li>
              <li><Link to="/contact" className="transition hover:text-white">Start a brief</Link></li>
            </ul>
          </div>

          <div>
            <p className="kicker">Company</p>
            <ul className="mt-5 grid gap-3 text-sm text-foreground-200">
              <li><Link to="/terms" className="transition hover:text-white">Terms of Service</Link></li>
              <li><Link to="/privacy" className="transition hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/refund-policy" className="transition hover:text-white">Refund Policy</Link></li>
              <li><span>Abraka, Nigeria</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 font-mono text-[11px] uppercase tracking-[0.1em] text-foreground-200/65 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Fegig Technologies Limited</p>
          <p>Built in Abraka · Working without borders</p>
        </div>
      </div>
    </footer>
  );
}
