import { Mail, MapPin, Phone } from 'lucide-react'
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "Contact | FegigTech" },
  { name: "description", content: "Contact FegigTech for web, mobile, AI, cloud, UI/UX, and enterprise software projects. Share what you want to build or improve." },
];

import PageLayout from '../components/layout/PageLayout'
import PageHeader from '../components/layout/PageHeader'

const contactMethods = [
  {
    label: 'Email',
    value: 'messageme@codewithfegig.com',
    href: 'mailto:messageme@codewithfegig.com',
    icon: Mail,
  },
  {
    label: 'Phone',
    value: '+234 706 297 3352',
    href: 'tel:+2347062973352',
    icon: Phone,
  },
  {
    label: 'Location',
    value: 'Abraka, Nigeria',
    href: null,
    icon: MapPin,
  },
]

const projectTypes = [
  'Company website or product platform',
  'Mobile app for customers or field teams',
  'AI automation or assistant workflow',
  'Internal dashboard, portal, or reporting system',
  'UI/UX redesign for an existing product',
]

export default function ContactPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Contact"
        title="Tell us what you want to build, improve, or replace."
        text="Reach FegigTech for web, mobile, AI, cloud, UI/UX, and enterprise software projects. Share the goal, the current problem, and what success should look like."
      />

      <section className="bg-background-100 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            {contactMethods.map((method) => {
              const Icon = method.icon
              const content = (
                <div className="flex items-start gap-4 border-t border-white/10 pt-5">
                  <Icon size={20} className="mt-1 text-violet-300" />
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-foreground-200/70">{method.label}</p>
                    <p className="mt-1 text-lg font-semibold text-white">{method.value}</p>
                  </div>
                </div>
              )

              return method.href ? (
                <a key={method.label} href={method.href} className="block transition hover:text-white">
                  {content}
                </a>
              ) : (
                <div key={method.label}>{content}</div>
              )
            })}
          </div>

          <div className="rounded-3xl border border-white/10 bg-background-200/55 p-7 sm:p-8">
            <h2 className="text-2xl font-black tracking-tight text-white">A helpful first message includes:</h2>
            <ul className="mt-6 space-y-4 text-base leading-7 text-foreground-200">
              <li>The product or business problem you want to solve.</li>
              <li>Whether you need web, mobile, AI, cloud, design, or a full product build.</li>
              <li>Existing links, screenshots, documents, or examples if available.</li>
              <li>Your preferred timeline and what a successful launch should achieve.</li>
            </ul>
            <a
              href="mailto:messageme@codewithfegig.com?subject=Project%20Inquiry%20for%20FegigTech"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-6 text-sm font-bold text-background-100 transition hover:bg-violet-50"
            >
              Start by Email
            </a>
          </div>
        </div>
      </section>

      <section className="bg-background-100 px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl border-y border-white/10 py-10">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-violet-300">Good project fit</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {projectTypes.map((item) => (
              <div key={item} className="border-l border-white/10 pl-4 text-sm leading-6 text-foreground-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
