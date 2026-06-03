import PageLayout from '../components/PageLayout'
import PageHeader from '../components/PageHeader'
import Projects from '../components/Projects'
import Metrics from '../components/Metrics'
import CTA from '../components/CTA'

const capabilities = [
  'Mobile-first business tools',
  'Fintech and payment workflows',
  'Learning and content platforms',
  'Corporate websites and product landing pages',
  'Dashboards, portals, and internal systems',
]

export default function ProjectsPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Projects"
        title="Selected work across mobile tools, fintech platforms, and company websites."
        text="A focused look at products and platforms built with practical business workflows, usable interfaces, and maintainable implementation in mind."
      />
      <section className="bg-background-100 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl border-y border-white/10 py-10">
          <p className="max-w-4xl text-2xl font-bold leading-snug text-white">
            The work here reflects the range FegigTech brings into new projects: product thinking, interface execution,
            frontend systems, mobile delivery, and practical integrations.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {capabilities.map((item) => (
              <span key={item} className="rounded-full border border-white/10 px-4 py-2 text-sm text-foreground-200">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
      <Projects />
      <Metrics />
      <CTA />
    </PageLayout>
  )
}
