import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

const capabilities = [
  {
    code: "Frame",
    title: "Find the real product",
    text: "We map the operation, the users, the data, and the commercial constraints before deciding what belongs on screen.",
  },
  {
    code: "Build",
    title: "Engineer the working core",
    text: "Web apps, mobile apps, APIs, AI-assisted workflows, payments, dashboards, and integrations built as one system.",
  },
  {
    code: "Run",
    title: "Make release the beginning",
    text: "Cloud setup, quality checks, observability, support, and iteration keep the product useful after launch day.",
  },
];

export default function HomeCapabilities() {
  return (
    <section className="bg-foreground-100 py-24 text-background-100 sm:py-32">
      <div className="site-shell">
        <div className="grid gap-12 lg:grid-cols-[0.62fr_1fr] lg:gap-20">
          <div>
            <p className="kicker !text-color-2">The Fegig practice</p>
            <h2 className="section-title mt-7 max-w-[9ch]">
              One team from first map to live system.
            </h2>
            <Link
              to="/services"
              className="mt-9 inline-flex items-center gap-2 border-b border-background-100 pb-1 text-sm font-semibold"
            >
              Read the practice
              <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="border-t border-background-100/30">
            {capabilities.map((item, index) => (
              <article
                key={item.title}
                className="grid gap-5 border-b border-background-100/30 py-8 sm:grid-cols-[90px_1fr]"
              >
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-background-100/60">
                    0{index + 1} / {item.code}
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-medium tracking-[-0.035em]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-2xl leading-7 text-background-100/70">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
