import { ArrowRight, BriefcaseBusiness, Code2, Download, Mail, MapPin, Trophy } from 'lucide-react'
import type { MetaFunction } from "react-router";
import { motion } from 'framer-motion'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

export const meta: MetaFunction = () => [
  { title: "Oghenefegor Idoro | Founder of FegigTech" },
  { name: "description", content: "Meet Oghenefegor Idoro, founder of Fegig Technologies Limited and product engineer behind FegigTech." },
  { property: "og:image", content: "/assets/sample.png" },
  { property: "og:image:alt", content: "Oghenefegor Idoro, founder of FegigTech" },
];

const highlights = [
  'Founder of Fegig Technologies Limited',
  'Frontend, mobile, and product engineering background',
  'Experience across fintech, education, commerce, and enterprise tools',
  'Based in Abraka, Nigeria, building for clients locally and globally',
]

const experience = [
  {
    title: 'Product Engineering',
    detail: 'Designing and shipping web, mobile, and cloud products with React, React Native, Expo, TypeScript, and modern backend platforms.',
  },
  {
    title: 'Founder-Led Delivery',
    detail: 'Leading projects from discovery through launch with a practical focus on business goals, usability, quality, and maintainability.',
  },
  {
    title: 'Company Vision',
    detail: 'Growing FegigTech into a trusted software studio for scalable digital products, AI systems, and enterprise solutions.',
  },
]

export default function Founder() {
  return (
    <div className="min-h-screen bg-background-100 text-foreground-100">
      <Navbar />

      <main className="relative overflow-hidden pt-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_12%,rgba(126,34,206,0.28),transparent_32%),radial-gradient(circle_at_15%_28%,rgba(79,70,229,0.16),transparent_28%)]" />
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-background-200/75 p-6 shadow-[0_28px_90px_rgba(0,0,0,0.28)]">
                <div className="rounded-[1.5rem] bg-linear-to-br from-violet-500/20 via-transparent to-indigo-500/20 p-8">
                  <img
                    src="/assets/me.svg"
                    alt="Oghenefegor Idoro"
                    className="mx-auto max-h-[520px] w-full object-contain"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-violet-400">About the Founder</p>
              <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Oghenefegor Idoro
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-foreground-200">
                I founded Fegig Technologies Limited to help businesses turn strong ideas into reliable digital products.
                My background spans web development, mobile engineering, UI/UX, and product delivery, giving FegigTech a
                hands-on engineering culture from the first conversation to launch.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <Trophy size={18} className="mt-0.5 shrink-0 text-violet-300" />
                    <span className="text-sm leading-6 text-foreground-200">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:messageme@codewithfegig.com?subject=Founder%20Reference"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-violet-600 to-indigo-600 px-6 text-sm font-bold text-white transition hover:-translate-y-0.5"
                >
                  Contact FegigTech
                  <Mail size={17} />
                </a>
                <a
                  href="/assets/oghenefegor-idoro-public.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.03] px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-violet-400/40"
                >
                  View Resume
                  <ArrowRight size={17} />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-3">
            {experience.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-background-200/75 p-6">
                <h2 className="text-xl font-bold text-white">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-foreground-200">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <div className="grid gap-6 md:grid-cols-3">
              <a href="https://github.com/fegig" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground-200 transition hover:text-white">
                <Code2 size={20} className="text-violet-300" />
                github.com/fegig
              </a>
              <a href="https://www.linkedin.com/in/oghenefegor-idoro-a85395216/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground-200 transition hover:text-white">
                <BriefcaseBusiness size={20} className="text-violet-300" />
                LinkedIn
              </a>
              <div className="flex items-center gap-3 text-foreground-200">
                <MapPin size={20} className="text-violet-300" />
                Abraka, Nigeria
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
