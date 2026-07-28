import type { MetaFunction } from "react-router";
import PageLayout from "../components/layout/PageLayout";
import PageHeader from "../components/layout/PageHeader";
import Projects from "../components/sections/Projects";
import Metrics from "../components/sections/Metrics";
import CTA from "../components/sections/CTA";

export const meta: MetaFunction = () => [
  { title: "Selected Work | Fegig Technologies" },
  {
    name: "description",
    content:
      "Selected Fegig Technologies work across retail operations, financial products, learning systems, utilities, and company platforms.",
  },
];

export default function ProjectsPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Selected work / 02"
        title="Products measured by the work they unlock."
        text="A working index of web and mobile systems across retail, financial operations, learning, utilities, and company infrastructure."
      />
      <Projects />
      <Metrics />
      <CTA />
    </PageLayout>
  );
}
