import PageLayout from '../components/layout/PageLayout'
import PageHeader from '../components/layout/PageHeader'
import Services from '../components/sections/Services'
import Process from '../components/sections/Process'
import Technologies from '../components/sections/Technologies'
import CTA from '../components/sections/CTA'
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "Services | Fegig Technologies Limited" },
  { name: "description", content: "Explore FegigTech services across product engineering, UI/UX design, mobile apps, AI systems, cloud infrastructure, and enterprise software." },
];

const engagements = [
  {
    title: 'New product build',
    text: 'For founders or teams starting a product from scratch and needing planning, design, development, and launch support.',
  },
  {
    title: 'Existing product improvement',
    text: 'For businesses with a working app or website that needs better UX, speed, architecture, or new features.',
  },
  {
    title: 'Internal operations system',
    text: 'For teams replacing spreadsheets, manual reporting, repeated handoffs, or fragmented business workflows.',
  },
]

export default function ServicesPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Services"
        title="Product engineering, design, and cloud delivery for growing teams."
        text="FegigTech works across the full product lifecycle: planning, interface design, web and mobile engineering, integrations, infrastructure, and long-term support."
      />
      <Services />
      <section className="bg-background-100 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl border-y border-white/10 py-12">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-violet-300">Engagements</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Three common ways we support teams.
              </h2>
            </div>
            <div className="grid gap-5">
              {engagements.map((item) => (
                <article key={item.title} className="grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-[0.45fr_1fr]">
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-base leading-7 text-foreground-200">{item.text}</p>
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
  )
}
