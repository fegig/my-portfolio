import { ArrowUpRight, BriefcaseBusiness, Code2, MapPin } from "lucide-react";
import type { MetaFunction } from "react-router";
import PageLayout from "../components/layout/PageLayout";

export const meta: MetaFunction = () => [
  { title: "Oghenefegor Idoro | Founder, Fegig Technologies" },
  {
    name: "description",
    content:
      "Meet Oghenefegor Idoro, founder of Fegig Technologies and a product engineer working across web, mobile, cloud, and operational software.",
  },
];

const threads = [
  ["Product engineering", "Web, mobile, cloud, and connected product systems."],
  ["Founder-led delivery", "Close product and technical ownership from direction through release."],
  ["Studio ambition", "A trusted African software practice known for systems that keep doing their job."],
];

export default function FounderPage() {
  return (
    <PageLayout>
      <section className="bg-background-100 pb-24 pt-36 sm:pb-32 sm:pt-44">
        <div className="site-shell">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:items-end">
            <div className="relative overflow-hidden border border-white/15 bg-color-2">
              <img
                src="/assets/me.svg"
                alt="Oghenefegor Idoro"
                className="aspect-[4/5] h-full w-full object-contain object-bottom"
              />
              <p className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.1em] text-white/70">
                Founder / Product engineer
              </p>
            </div>

            <div>
              <p className="kicker">Oghenefegor Idoro</p>
              <h1 className="page-title mt-6 max-w-[9ch]">
                Engineering with the business still in the{" "}
                <span className="serif-accent text-color-3">room.</span>
              </h1>
              <p className="copy-large mt-8 max-w-3xl">
                I founded Fegig Technologies to keep product decisions, design,
                and engineering close together. My work spans fintech, learning,
                retail, commerce, and internal operations—always with an eye on
                what the software asks people to do next.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="https://github.com/fegig"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Code2 size={17} />
                  GitHub
                  <ArrowUpRight size={15} />
                </a>
                <a
                  href="https://www.linkedin.com/in/oghenefegor-idoro-a85395216/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <BriefcaseBusiness size={17} />
                  LinkedIn
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-foreground-100 py-20 text-background-100 sm:py-24">
        <div className="site-shell grid gap-8 md:grid-cols-3">
          {threads.map(([title, text], index) => (
            <article
              key={title}
              className="border-t border-background-100/25 pt-6 md:border-r md:border-t-0 md:px-8 md:first:pl-0 md:last:border-r-0"
            >
              <p className="font-mono text-[11px] text-color-2">0{index + 1}</p>
              <h2 className="mt-8 text-2xl font-medium tracking-[-0.035em]">{title}</h2>
              <p className="mt-3 leading-7 text-background-100/70">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-background-100 py-16">
        <div className="site-shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-foreground-200">
            <MapPin size={18} className="text-color-3" />
            <span>Abraka, Nigeria · Working across borders</span>
          </div>
          <a
            href="/assets/oghenefegor-idoro-public.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Read the public résumé
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
