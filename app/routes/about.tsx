import { ArrowRight, MapPin } from 'lucide-react'
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "About | FegigTech" },
  { name: "description", content: "Learn about Fegig Technologies Limited, a founder-led software studio in Abraka, Nigeria building dependable digital products." },
];
import PageLayout from '../components/layout/PageLayout'
import PageHeader from '../components/layout/PageHeader'
import Metrics from '../components/sections/Metrics'
import CTA from '../components/sections/CTA'

const principles = [
  'Build software around the real workflow, not just the screen.',
  'Prefer maintainable systems over impressive but fragile demos.',
  'Keep design clean, usable, and grounded in the business goal.',
  'Ship with enough structure for the product to keep improving.',
]

const statements = [
  {
    title: 'Our Mission',
    text: 'To help businesses design, build, and launch dependable digital systems that make operations clearer, customer experiences smoother, and growth easier to support.',
  },
  {
    title: 'Our Vision',
    text: 'To become a trusted African software studio known for practical engineering, polished product design, and platforms that continue to serve businesses long after launch.',
  },
]

const culture = [
  {
    title: 'Practical strategy',
    text: 'We ask what the product must do for the business before deciding what it should look like.',
  },
  {
    title: 'Clear implementation',
    text: 'We choose tools and architecture that make the product easier to run, debug, and improve.',
  },
  {
    title: 'Founder-level care',
    text: 'Projects receive close technical and product attention from the people responsible for delivery.',
  },
]

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="About FegigTech"
        title="A software studio for dependable digital products."
        text="Fegig Technologies Limited is based in Abraka, Nigeria, and helps businesses design, build, and launch software that supports real operations."
      />

      <section className="bg-background-100 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-violet-300">
              <MapPin size={17} />
              Abraka, Nigeria
            </div>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Founder-led, product-focused, and built for long-term delivery.
            </h2>
            <p className="mt-5 text-lg leading-8 text-foreground-200">
              The company grew from years of hands-on work across web applications, mobile apps, fintech products,
              learning platforms, and internal business tools. That background shapes how we work: practical first,
              polished where it matters, and careful about the technical decisions that affect maintenance.
            </p>
            <a href="/founder" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-violet-200 transition hover:text-white">
              Meet the founder
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((principle) => (
              <div key={principle} className="border-t border-white/10 pt-5">
                <p className="text-base leading-7 text-white">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-100 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
          {statements.map((statement) => (
            <article key={statement.title} className="rounded-3xl border border-white/10 bg-background-200/50 p-7 sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-300">{statement.title}</p>
              <p className="mt-5 text-2xl font-bold leading-snug text-white">{statement.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-background-100 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="border-y border-white/10 py-12">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-violet-300">How we work</p>
            <div className="mt-8 grid gap-8 lg:grid-cols-3">
              {culture.map((item) => (
                <article key={item.title} className="border-l border-white/10 pl-5">
                  <h2 className="text-xl font-bold text-white">{item.title}</h2>
                  <p className="mt-3 text-base leading-7 text-foreground-200">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Metrics />
      <CTA />
    </PageLayout>
  )
}
