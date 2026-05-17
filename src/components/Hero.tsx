import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-background-100 pt-28">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_68%_28%,rgba(91,33,182,0.24),transparent_38%)]" />

      <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-16 px-4 pb-24 pt-10 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl"
        >
          <code className=' max-w-screen-sm group mb-4'>
            <span className="frag group-hover:text-gray-700">{"<>"}</span>
            <span className="text"> I turn </span>
            <span className="frag group-hover:text-gray-700">{"<"}</span>
            <span className="component">{"Dreams"}</span>
            <span className="frag group-hover:text-gray-700">{"/>"}</span>
            <span className="text"> into </span>
            <span className="frag group-hover:text-gray-700">{"<"}</span>
            <span className="component">{"Reality"}</span>
            <span className="frag group-hover:text-gray-700">{"/>"}</span>
            <span className="frag group-hover:text-gray-700">{" </>"}</span>
          </code>

          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Building Scalable{" "}
            <span className="bg-linear-to-r from-violet-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">
              Digital Products
            </span>{" "}
            for Real Business Operations
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-foreground-200">
            Fegig Tech designs and builds web, mobile, AI, and cloud products that are practical to use,
            stable to run, and ready to grow with your team.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="/projects"
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-white px-6 text-xs font-semibold text-background-100 transition hover:-translate-y-0.5 hover:bg-violet-50"
            >
              View Our Work
              <ArrowRight size={17} />
            </a>
        
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="relative min-h-[430px]"
          aria-hidden="true"
        >
          <div className="absolute inset-0 rounded-[2rem] border border-white/10" />
          <div className="absolute left-8 top-8 h-6 w-6 border-l border-t border-violet-300/45" />
          <div className="absolute right-8 top-8 h-6 w-6 border-r border-t border-violet-300/45" />
          <div className="absolute bottom-8 left-8 h-6 w-6 border-b border-l border-violet-300/45" />
          <div className="absolute bottom-8 right-8 h-6 w-6 border-b border-r border-violet-300/45" />
          <div className="absolute inset-12 bg-[radial-gradient(circle,rgba(255,255,255,0.22)_1px,transparent_1px)] bg-[size:18px_18px] opacity-25" />
          <div className="absolute left-12 top-1/2 h-px w-[calc(100%-6rem)] bg-white/10" />
          <div className="absolute left-1/2 top-12 h-[calc(100%-6rem)] w-px bg-white/10" />
          <span className="absolute left-8 top-20 text-[10px] font-semibold uppercase tracking-[0.24em] text-foreground-200/55">
            x 05.315
          </span>
          <span className="absolute bottom-20 right-8 text-[10px] font-semibold uppercase tracking-[0.24em] text-foreground-200/55">
            y 07.062
          </span>

          <div className="absolute left-1/2 top-1/2 flex h-64 w-64 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] bg-linear-to-br from-violet-600/15 to-indigo-600/10 p-8 sm:h-80 sm:w-80">
            <img
              src="/assets/fegigtech-logo-mark.png"
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
