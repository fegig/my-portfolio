import { ArrowUpRight } from "lucide-react";
import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import PageLayout from "../components/layout/PageLayout";
import PageHeader from "../components/layout/PageHeader";

export const meta: MetaFunction = () => [
  { title: "Field Notes | Fegig Technologies" },
  {
    name: "description",
    content:
      "Field notes from Fegig Technologies on product architecture, applied AI, internal systems, mobile products, and operational design.",
  },
];

const notes = [
  {
    number: "01",
    title: "Architecture before interface polish",
    summary:
      "The workflow, data, permissions, and integration choices that should exist before a serious product settles into screens.",
    subject: "Product systems",
  },
  {
    number: "02",
    title: "AI belongs inside an accountable process",
    summary:
      "Useful AI work removes repetition or sharpens a decision. It still needs review paths, evidence, and a clear operational owner.",
    subject: "Applied AI",
  },
  {
    number: "03",
    title: "Internal software earns its place",
    summary:
      "The case for a custom internal system begins with fewer hand-offs, clearer records, and a faster next decision—not feature count.",
    subject: "Operations",
  },
  {
    number: "04",
    title: "When a website becomes company infrastructure",
    summary:
      "Onboarding, payments, analytics, support, and business rules gradually turn a marketing surface into a connected operating system.",
    subject: "Web systems",
  },
  {
    number: "05",
    title: "Mobile is a working environment",
    summary:
      "A mobile product must respect location, attention, connectivity, device capability, support, and the consequences of every action.",
    subject: "Mobile products",
  },
  {
    number: "06",
    title: "Interface clarity is risk management",
    summary:
      "Clear states and language reduce mistakes, support load, training time, and expensive ambiguity between customers and teams.",
    subject: "Product design",
  },
];

export default function InsightsPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Field notes / 04"
        title="Observations from inside the build."
        text="Short working positions on product direction, engineering choices, AI, and software that has to survive contact with a real operation."
      />

      <section className="bg-background-100 pb-28 sm:pb-36">
        <div className="site-shell">
          <div className="border-t border-white/15">
            {notes.map((note) => (
              <article
                key={note.number}
                className="grid gap-6 border-b border-white/15 py-9 lg:grid-cols-[80px_0.32fr_0.65fr_1fr] lg:items-start"
              >
                <p className="font-mono text-[11px] text-color-alt">{note.number}</p>
                <p className="kicker">{note.subject}</p>
                <h2 className="text-2xl font-medium leading-tight tracking-[-0.035em] text-white">
                  {note.title}
                </h2>
                <div>
                  <p className="leading-7 text-foreground-200">{note.summary}</p>
                  <Link to="/contact" className="text-link mt-5">
                    Continue the conversation
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
