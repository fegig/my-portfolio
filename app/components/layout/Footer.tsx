import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const services = [
  "Web development",
  "Mobile development",
  "AI systems",
  "Cloud infrastructure",
  "UI/UX design",
  "Enterprise software",
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-background-100 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.75fr_0.65fr_1fr]">
          <div>
            <a href="/" className="inline-flex items-center gap-3" aria-label="FegigTech home">
              <img
                src="/assets/fegigtech-logo-mark.png"
                alt="FegigTech logo"
                className="h-10 w-10 rounded-xl object-contain"
              />
              <span className="text-2xl font-black text-white">FegigTech</span>
            </a>
            <p className="mt-5 max-w-sm text-base leading-7 text-foreground-200">
              Fegig Technologies Limited designs and builds dependable software systems from Abraka, Nigeria.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">Services</h3>
            <ul className="mt-5 grid gap-3 text-sm text-foreground-200 sm:grid-cols-2 lg:grid-cols-1">
              {services.map((service) => (
              <li key={service}>
                <a href="/services" className="transition hover:text-white">{service}</a>
              </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">Pages</h3>
            <ul className="mt-5 grid gap-3 text-sm text-foreground-200">
              <li><a href="/projects" className="transition hover:text-white">Projects</a></li>
              <li><a href="/about" className="transition hover:text-white">About</a></li>
              <li><a href="/insights" className="transition hover:text-white">Insights</a></li>
              <li><a href="/contact" className="transition hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm text-foreground-200">
              <li>
                <a href="mailto:messageme@codewithfegig.com" className="flex items-start gap-3 transition hover:text-white">
                  <Mail size={17} className="mt-0.5 text-violet-300" />
                  messageme@codewithfegig.com
                </a>
              </li>
              <li>
                <a href="tel:+2347062973352" className="flex items-start gap-3 transition hover:text-white">
                  <Phone size={17} className="mt-0.5 text-violet-300" />
                  +234 706 297 3352
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={17} className="mt-0.5 text-violet-300" />
                Abraka, Nigeria
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-foreground-200/70">
          <p>&copy; {new Date().getFullYear()} Fegig Technologies Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
