import React from "react";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-background-100 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-3xl bg-linear-to-r from-violet-800 via-indigo-800 to-violet-900 p-8 sm:p-10 lg:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              Bring FegigTech into the build
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-violet-100/85">
              Share what you want to build, improve, or replace. We will help shape it into software that can be shipped and maintained.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-bold text-violet-950 transition hover:-translate-y-0.5 hover:bg-violet-50"
            >
              Start a Project
              <ArrowRight size={17} />
            </a>
            <a
              href="tel:+2347062973352"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/25 px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-white/45"
            >
              Schedule a Call
              <PhoneCall size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
