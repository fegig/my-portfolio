import React from "react";
import { BrainCircuit, Building2, CloudCog, Code2, Palette, Smartphone } from "lucide-react";

const featured = [
  {
    title: "Web & Product Platforms",
    description:
      "Customer portals, SaaS products, commerce flows, and business systems built to be fast, usable, and maintainable.",
    proof: "React, Next.js, TypeScript, APIs, dashboards",
    icon: Code2,
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform iOS and Android products for teams that need dependable mobile workflows, not throwaway app screens.",
    proof: "React Native, Expo, app store delivery, mobile UX",
    icon: Smartphone,
  },
];

const supporting = [
  {
    title: "AI Solutions",
    description: "Practical automations, assistants, and AI features connected to real business workflows.",
    icon: BrainCircuit,
  },
  {
    title: "Cloud & Infrastructure",
    description: "Deployments, hosting, workers, storage, and operational setup for products that need to stay online.",
    icon: CloudCog,
  },
  {
    title: "UI/UX Design",
    description: "Interfaces people can actually use, from product flows to admin tools and mobile screens.",
    icon: Palette,
  },
  {
    title: "Enterprise Software",
    description: "Internal tools, reporting systems, and custom dashboards that support daily operations.",
    icon: Building2,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-background-100 px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-violet-300">What We Do</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Software that supports real operations
          </h2>
          <p className="mt-5 text-lg leading-8 text-foreground-200">
            We focus on the parts of a product that make it useful after launch: clear flows, dependable
            integrations, stable infrastructure, and code that can keep evolving.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {featured.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-background-200/65 p-7 sm:p-8"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-violet-300/55 to-transparent" />
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/[0.04] text-violet-200">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-white">{service.title}</h3>
                    <p className="mt-4 text-base leading-7 text-foreground-200">{service.description}</p>
                    <p className="mt-5 text-sm font-semibold text-violet-200">{service.proof}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {supporting.map((service) => {
            const Icon = service.icon;

            return (
              <article key={service.title} className="border-t border-white/10 pt-6">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] text-violet-200">
                  <Icon size={21} />
                </div>
                <h3 className="text-lg font-bold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-foreground-200">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
