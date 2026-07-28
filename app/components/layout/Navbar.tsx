import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router";
import BrandMark from "./BrandMark";

const navItems = [
  { label: "Practice", href: "/services" },
  { label: "Selected work", href: "/projects" },
  { label: "Studio", href: "/about" },
  { label: "Field notes", href: "/insights" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background-100/92 backdrop-blur-xl">
      <nav className="site-shell flex h-[76px] items-center justify-between">
        <Link to="/" aria-label="Fegig Technologies home">
          <BrandMark />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive ? "text-white" : "text-foreground-200 hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden min-h-11 items-center gap-2 border-l border-white/20 pl-6 text-sm font-semibold text-white transition hover:text-orange-300 lg:inline-flex"
        >
          Start a brief
          <ArrowUpRight size={16} />
        </Link>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center border border-white/15 text-white transition hover:bg-white/5 lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-background-100 px-5 py-6 lg:hidden">
          <div className="mx-auto grid max-w-[1440px]">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 text-lg font-medium text-foreground-200 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 bg-white px-5 text-sm font-semibold text-background-100"
            >
              Start a brief
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
