import React from "react";

const steps = [
  {
    title: "Understand the business",
    description: "We clarify the real workflow, users, constraints, and commercial goal before choosing a technical path.",
  },
  {
    title: "Map the product architecture",
    description: "We define the data model, integrations, infrastructure, and delivery plan so the product has a reliable foundation.",
  },
  {
    title: "Design the user experience",
    description: "We turn requirements into usable interfaces, practical flows, and product decisions people can understand.",
  },
  {
    title: "Build and integrate",
    description: "We ship production code, connect services, and keep implementation decisions visible throughout the build.",
  },
  {
    title: "Test, launch, and support",
    description: "We verify critical paths, deploy with care, monitor the product, and support the next iteration.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-background-100 px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-violet-300">Our Process</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              Consultative by default, practical by design
            </h2>
          </div>
          <div className="border-t border-white/10">
            {steps.map((step, index) => (
              <article key={step.title} className="grid gap-4 border-b border-white/10 py-7 sm:grid-cols-[96px_1fr]">
                <div className="text-sm font-bold text-foreground-200/70">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-base leading-7 text-foreground-200">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
