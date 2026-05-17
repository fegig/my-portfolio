import React from 'react'
import { ArrowRight } from 'lucide-react'

const capabilities = [
  {
    label: '01',
    title: 'Plan the product properly',
    text: 'We help define the workflow, user journeys, technical requirements, and delivery plan before writing code.',
  },
  {
    label: '02',
    title: 'Build the core system',
    text: 'Web apps, mobile apps, APIs, AI features, dashboards, and integrations built around the real operation.',
  },
  {
    label: '03',
    title: 'Launch and improve',
    text: 'Deployment, testing, support, and iteration so the product can keep moving after the first release.',
  },
]

export default function HomeCapabilities() {
  return (
    <section className="bg-background-100 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-violet-300">Company focus</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              We build the useful middle between idea and operations.
            </h2>
            <p className="mt-5 text-lg leading-8 text-foreground-200">
              Many businesses do not need another decorative website. They need software that helps customers act,
              teams coordinate, data move clearly, and operations become easier to manage.
            </p>
            <a href="/services" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-violet-200 transition hover:text-white">
              Explore services
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid gap-0 border-y border-white/10">
            {capabilities.map((item) => (
              <article key={item.title} className="grid gap-4 border-b border-white/10 py-7 last:border-b-0 sm:grid-cols-[80px_1fr]">
                <p className="text-sm font-bold text-foreground-200/60">{item.label}</p>
                <div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-base leading-7 text-foreground-200">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
