import {
  Boxes,
  BrainCircuit,
  Cloud,
  MonitorSmartphone,
  PanelsTopLeft,
  Workflow,
} from "lucide-react";

const services = [
  {
    icon: Workflow,
    name: "Product direction",
    text: "Workflow mapping, requirements, delivery scope, architecture, and the decisions that stop an idea becoming an expensive pile of screens.",
    output: "Maps · prototypes · technical direction",
  },
  {
    icon: PanelsTopLeft,
    name: "Web systems",
    text: "Customer platforms, portals, operational dashboards, commerce, and content systems engineered for real use and continued change.",
    output: "React · APIs · payments · integrations",
  },
  {
    icon: MonitorSmartphone,
    name: "Mobile products",
    text: "Native-feeling iOS and Android experiences for customers, field teams, retail workflows, learning, and financial operations.",
    output: "React Native · Expo · device workflows",
  },
  {
    icon: BrainCircuit,
    name: "Applied AI",
    text: "Assistants, retrieval, classification, summarisation, and automation placed inside an accountable business process.",
    output: "AI workflows · human review · evaluation",
  },
  {
    icon: Cloud,
    name: "Cloud and release",
    text: "Deployment architecture, data services, observability, performance, and the operational detail that makes software dependable.",
    output: "Cloudflare · databases · release systems",
  },
  {
    icon: Boxes,
    name: "Product renewal",
    text: "Focused redesign and engineering for products slowed by UX debt, brittle code, poor information structure, or unclear workflows.",
    output: "Audit · redesign · staged rebuilding",
  },
];

export default function Services() {
  return (
    <section className="bg-background-100 pb-24 sm:pb-32">
      <div className="site-shell">
        <div className="border-t border-white/15">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={service.name}
                className="grid gap-6 border-b border-white/15 py-8 md:grid-cols-[80px_0.65fr_1fr] md:gap-10 md:py-10"
              >
                <div className="flex items-center justify-between md:block">
                  <p className="font-mono text-[11px] text-color-alt">0{index + 1}</p>
                  <Icon size={20} strokeWidth={1.5} className="text-color-3 md:mt-10" />
                </div>
                <h2 className="text-3xl font-medium tracking-[-0.04em] text-white">
                  {service.name}
                </h2>
                <div>
                  <p className="max-w-2xl text-base leading-7 text-foreground-200">
                    {service.text}
                  </p>
                  <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.09em] text-foreground-200/60">
                    {service.output}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
