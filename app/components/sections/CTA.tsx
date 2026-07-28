import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

export default function CTA() {
  return (
    <section className="bg-color-3 py-16 text-background-100 sm:py-20">
      <div className="site-shell grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.11em]">
            Have a system in mind?
          </p>
          <h2 className="mt-6 max-w-[12ch] text-5xl font-medium leading-[0.92] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Bring the messy version. We will find the product inside it.
          </h2>
        </div>
        <Link
          to="/contact"
          className="inline-flex min-h-14 items-center justify-center gap-2 bg-background-100 px-7 text-sm font-semibold text-white transition hover:bg-color-2"
        >
          Start a project brief
          <ArrowUpRight size={17} />
        </Link>
      </div>
    </section>
  );
}
