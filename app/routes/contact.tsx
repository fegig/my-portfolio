import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import type { MetaFunction } from "react-router";
import PageLayout from "../components/layout/PageLayout";
import PageHeader from "../components/layout/PageHeader";

export const meta: MetaFunction = () => [
  { title: "Start a Brief | Fegig Technologies" },
  {
    name: "description",
    content:
      "Start a software project brief with Fegig Technologies for web, mobile, applied AI, cloud systems, or product renewal.",
  },
];

const signals = [
  "What currently happens, and where the process breaks",
  "Who uses the system and what each person needs to decide",
  "What exists already: links, screenshots, documents, or code",
  "The timing or business event the work needs to support",
];

export default function ContactPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Start a brief / 05"
        title="Bring the operation, not a polished specification."
        text="Tell us what people are trying to do, where the current process fails, and what must be true when the new system is working."
      />

      <section className="bg-background-100 pb-28 sm:pb-36">
        <div className="site-shell grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <div className="border-t border-white/15">
            <a
              href="mailto:messageme@codewithfegig.com"
              className="flex items-start gap-4 border-b border-white/15 py-6 transition hover:text-color-3"
            >
              <Mail size={19} className="mt-1 shrink-0" />
              <span>
                <span className="kicker block">Write</span>
                <span className="mt-2 block text-lg">messageme@codewithfegig.com</span>
              </span>
            </a>
            <a
              href="tel:+2347062973352"
              className="flex items-start gap-4 border-b border-white/15 py-6 transition hover:text-color-3"
            >
              <Phone size={19} className="mt-1 shrink-0" />
              <span>
                <span className="kicker block">Call</span>
                <span className="mt-2 block text-lg">+234 706 297 3352</span>
              </span>
            </a>
            <div className="flex items-start gap-4 border-b border-white/15 py-6">
              <MapPin size={19} className="mt-1 shrink-0" />
              <span>
                <span className="kicker block">Base</span>
                <span className="mt-2 block text-lg">Abraka, Nigeria</span>
              </span>
            </div>
          </div>

          <div>
            <p className="kicker">A useful first note</p>
            <ol className="mt-7 border-t border-white/15">
              {signals.map((signal, index) => (
                <li
                  key={signal}
                  className="grid gap-4 border-b border-white/15 py-6 sm:grid-cols-[55px_1fr]"
                >
                  <span className="font-mono text-[11px] text-color-alt">0{index + 1}</span>
                  <span className="text-lg leading-7 text-foreground-100">{signal}</span>
                </li>
              ))}
            </ol>
            <a
              href="mailto:messageme@codewithfegig.com?subject=Project%20brief%20for%20Fegig%20Technologies"
              className="btn-primary mt-8"
            >
              Open a project email
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
