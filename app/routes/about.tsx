import { ArrowUpRight } from "lucide-react";
import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import PageLayout from "../components/layout/PageLayout";
import PageHeader from "../components/layout/PageHeader";
import Metrics from "../components/sections/Metrics";
import CTA from "../components/sections/CTA";

export const meta: MetaFunction = () => [
  { title: "Studio | Fegig Technologies" },
  {
    name: "description",
    content:
      "Fegig Technologies is a founder-led software studio in Abraka, Nigeria, working across product direction, design, engineering, and release.",
  },
];

const principles = [
  ["Operation before ornament", "A screen is only useful when it makes the underlying work clearer."],
  ["Clarity is technical", "Naming, information structure, states, and edge cases are part of engineering quality."],
  ["Release is not handover", "We design for the product team that has to operate and improve the system next."],
  ["Small line, deep ownership", "The people shaping the product remain close to the people building it."],
];

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Studio / 03"
        title="A small software studio with a long view of the product."
        text="Fegig Technologies Limited works from Abraka, Nigeria, with teams building for local and international markets. We stay close to the product from first map through live operation."
      />

      <section className="bg-background-100 pb-24 sm:pb-32">
        <div className="site-shell">
          <div className="grid gap-12 lg:grid-cols-[0.6fr_1fr] lg:gap-20">
            <div>
              <p className="kicker">Why Fegig exists</p>
              <h2 className="section-title mt-6 max-w-[10ch]">
                To remove the distance between product thinking and{" "}
                <span className="serif-accent text-color-3">delivery.</span>
              </h2>
              <p className="copy-large mt-8 max-w-2xl">
                The studio grew from hands-on work across fintech, learning,
                retail, commerce, and internal operations. That history keeps us
                interested in what happens after the polished demo.
              </p>
              <Link to="/founder" className="text-link mt-8">
                Meet the founder
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="border-t border-white/15">
              {principles.map(([title, text], index) => (
                <article
                  key={title}
                  className="grid gap-4 border-b border-white/15 py-7 sm:grid-cols-[70px_0.6fr_1fr]"
                >
                  <p className="font-mono text-[11px] text-color-alt">0{index + 1}</p>
                  <h3 className="text-xl font-medium tracking-[-0.025em] text-white">
                    {title}
                  </h3>
                  <p className="leading-7 text-foreground-200">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-color-2 py-20 text-white sm:py-24">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.38fr_1fr] lg:gap-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.11em] text-white/70">
            Working position
          </p>
          <p className="max-w-5xl text-4xl font-medium leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            Nigeria is not our footnote. It is the vantage point from which we
            build resilient, practical products for connected markets.
          </p>
        </div>
      </section>

      <Metrics />
      <CTA />
    </PageLayout>
  );
}
