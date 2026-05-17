import React from "react";
import { BrainCircuit, Database, PenTool, Server } from "lucide-react";

const technologies = [
  { name: "React", image: "/icons/react.png" },
  { name: "Next.js", image: "/icons/next.png" },
  { name: "React Native", image: "/icons/RN.png" },
  { name: "Node.js", icon: Server },
  { name: "TypeScript", image: "/icons/ts.png" },
  { name: "Tailwind CSS", image: "/icons/tailwind.png" },
  { name: "PostgreSQL", icon: Database },
  { name: "Cloudflare", image: "/icons/cf.png" },
  { name: "Figma", icon: PenTool },
  { name: "AI / ML", icon: BrainCircuit },
];

export default function Technologies() {
  return (
    <section id="technologies" className="bg-background-100 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 border-y border-white/10 py-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-violet-300">Technologies We Use</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Tools we trust in production
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-5 lg:max-w-3xl">
            {technologies.map((technology) => {
              const Icon = technology.icon;

              return (
                <div key={technology.name} className="flex items-center gap-3">
                  {technology.image ? (
                    <img src={technology.image} alt="" className="h-7 w-7 object-contain" loading="lazy" />
                  ) : Icon ? (
                    <Icon size={26} className="text-violet-200" />
                  ) : null}
                  <span className="text-sm font-medium text-foreground-200">{technology.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
