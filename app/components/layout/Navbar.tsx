import React, { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link } from "react-router";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background-100/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="FegigTech home">
          <img
            src="/assets/fegigtech-logo-mark.png"
            alt="FegigTech logo"
            className="h-9 w-9 rounded-xl object-contain"
          />
          <span className="text-xl font-bold tracking-tight text-white">FegigTech</span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-sm font-medium text-foreground-200 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden min-h-11 items-center gap-2 rounded-xl border border-white/12 bg-white/[0.04] px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.07] lg:inline-flex"
        >
          Start a Project
          <ArrowRight size={16} />
        </Link>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-background-100/95 px-4 py-5 shadow-2xl backdrop-blur-2xl lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-medium text-foreground-200 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 inline-flex min-h-6 items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/5 px-5 text-xs font-semibold text-white"
            >
              Start a Project
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
