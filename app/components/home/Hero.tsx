import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const signalCells = [0, 1, 2, 3, 4, 6];

export default function Hero() {
  return (
    <section className="overflow-hidden bg-background-100 pt-[76px]">
      <div className="site-shell">
        <div className="grid min-h-[calc(100svh-76px)] border-x border-white/10 lg:grid-cols-[1.45fr_0.55fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-between px-5 py-12 sm:px-10 sm:py-16 lg:min-h-[780px] lg:px-14 lg:py-16"
          >
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <p className="kicker">Independent software studio</p>
              <span className="h-1 w-1 bg-color-3" />
              <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-foreground-200">
                Abraka · Nigeria · Remote
              </p>
            </div>

            <div className="py-20 lg:py-16">
              <h1 className="display-title max-w-[11ch] text-foreground-100">
                Software that carries the{" "}
                <span className="serif-accent text-color-3">work.</span>
              </h1>
              <p className="copy-large mt-9 max-w-2xl">
                Fegig designs and engineers the customer platforms, mobile tools,
                and internal systems that businesses depend on every day.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link to="/projects" className="btn-primary">
                  See the systems
                  <ArrowDownRight size={17} />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Bring us the hard part
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </div>

            <div className="grid gap-5 border-t border-white/15 pt-6 sm:grid-cols-3">
              <p className="text-sm leading-6 text-foreground-200">
                Product direction
                <br />
                <span className="text-white">before interface theatre</span>
              </p>
              <p className="text-sm leading-6 text-foreground-200">
                Web + mobile
                <br />
                <span className="text-white">built as one operation</span>
              </p>
              <p className="text-sm leading-6 text-foreground-200">
                Launch support
                <br />
                <span className="text-white">beyond the handover</span>
              </p>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative hidden min-h-[780px] overflow-hidden border-l border-white/10 bg-color-2 lg:block"
            aria-label="Fegig signal system"
          >
            <div className="absolute inset-x-7 top-7 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.12em] text-white/70">
              <span>F / Signal 01</span>
              <span>2026</span>
            </div>
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
              {Array.from({ length: 9 }).map((_, index) => (
                <span key={index} className="border-b border-r border-white/20" />
              ))}
            </div>
            <div className="absolute left-1/2 top-1/2 grid aspect-square w-[68%] -translate-x-1/2 -translate-y-1/2 grid-cols-3 grid-rows-3 gap-[6%]">
              {Array.from({ length: 9 }).map((_, index) => (
                <span
                  key={index}
                  className={signalCells.includes(index) ? "bg-foreground-100" : ""}
                />
              ))}
            </div>
            <p className="absolute bottom-7 left-7 right-7 font-mono text-[10px] uppercase leading-5 tracking-[0.12em] text-white/70">
              Structure in.
              <br />
              Friction out.
            </p>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
