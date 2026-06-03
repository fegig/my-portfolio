import { ArrowRight } from 'lucide-react'
import PageLayout from '../components/PageLayout'
import PageHeader from '../components/PageHeader'

const insights = [
  {
    title: 'Product architecture before interface polish',
    summary: 'Why serious software projects need workflow, data, and integration decisions mapped before screens are finalized.',
    type: 'Delivery note',
  },
  {
    title: 'Practical AI inside business operations',
    summary: 'The strongest AI features often look simple: they remove repeated work, summarize messy data, or help teams respond faster.',
    type: 'AI systems',
  },
  {
    title: 'What makes internal tools worth building',
    summary: 'A good internal system should reduce manual handoffs, keep records clear, and make the next decision easier for the team.',
    type: 'Operations',
  },
  {
    title: 'Why websites become business systems',
    summary: 'As companies grow, the website often becomes connected to onboarding, payments, analytics, support, and internal workflows.',
    type: 'Web platforms',
  },
  {
    title: 'Mobile apps need operational clarity',
    summary: 'A mobile product works best when it respects the user’s environment, the team’s support process, and the data behind each action.',
    type: 'Mobile products',
  },
  {
    title: 'Design is also risk management',
    summary: 'Clear interfaces reduce mistakes, support costs, training time, and confusion between customers and internal teams.',
    type: 'Product design',
  },
]

export default function InsightsPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Insights"
        title="Notes on building useful, maintainable digital products."
        text="Short perspectives from FegigTech on product planning, engineering decisions, AI systems, and software that teams can actually run."
      />

      <section className="bg-background-100 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-12 lg:grid-cols-3">
          {insights.map((insight) => (
            <article key={insight.title} className="border-t border-white/10 pt-6">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-violet-300">{insight.type}</p>
              <h2 className="mt-4 text-2xl font-bold leading-tight text-white">{insight.title}</h2>
              <p className="mt-4 text-base leading-7 text-foreground-200">{insight.summary}</p>
              <a href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-violet-200 transition hover:text-white">
                Discuss this with us
                <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>
    </PageLayout>
  )
}
