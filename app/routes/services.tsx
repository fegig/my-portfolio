import type { MetaFunction } from "react-router";
import PageLayout from "../components/layout/PageLayout";
import PageHeader from "../components/layout/PageHeader";
import Services from "../components/sections/Services";
import Process from "../components/sections/Process";
import Technologies from "../components/sections/Technologies";
import CTA from "../components/sections/CTA";

export const meta: MetaFunction = () => [
  { title: "Practice | Fegig Technologies" },
  {
    name: "description",
    content:
      "Product direction, web systems, mobile products, applied AI, cloud delivery, and product renewal by Fegig Technologies.",
  },
];

const engagementShapes = [
  [
    "New system",
    "A product or operational platform moving from an unresolved idea to its first dependable release.",
  ],
  [
    "Product renewal",
    "A working product that needs clearer workflows, stronger engineering, or a deliberate rebuild.",
  ],
  [
    "Embedded delivery",
    "A focused Fegig team working alongside an internal team on a defined product or release.",
  ],
];

export default function ServicesPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Practice / 01"
        title="Direction, design, and engineering in one accountable line."
        text="We take responsibility for the working whole: what the product must do, how people move through it, how the system is built, and what it takes to keep it live."
      />
      <Services />

      <section className="bg-background-100 pb-24 sm:pb-32">
        <div className="site-shell">
          <div className="grid gap-12 border-t border-white/15 pt-10 lg:grid-cols-[0.52fr_1fr] lg:gap-20">
            <div>
              <p className="kicker">Ways into the work</p>
              <h2 className="mt-6 text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">
                Start where the operation is.
              </h2>
            </div>
            <div className="grid border-t border-white/15">
              {engagementShapes.map(([title, text], index) => (
                <article
                  key={title}
                  className="grid gap-4 border-b border-white/15 py-7 sm:grid-cols-[60px_0.45fr_1fr]"
                >
                  <p className="font-mono text-[11px] text-color-alt">0{index + 1}</p>
                  <h3 className="text-xl font-medium text-white">{title}</h3>
                  <p className="leading-7 text-foreground-200">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Process />
      <Technologies />
      <CTA />
    </PageLayout>
  );
}
