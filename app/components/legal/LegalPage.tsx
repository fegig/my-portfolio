import type { ReactNode } from "react";
import PageLayout from "../layout/PageLayout";

export default function LegalPage({
  label,
  title,
  summary,
  children,
}: {
  label: string;
  title: string;
  summary: string;
  children: ReactNode;
}) {
  return (
    <PageLayout>
      <section className="bg-background-100 pb-20 pt-36 sm:pt-44">
        <div className="site-shell">
          <div className="grid gap-10 border-b border-white/15 pb-14 lg:grid-cols-[0.35fr_1fr] lg:gap-16 lg:pb-20">
            <div>
              <p className="kicker">{label}</p>
              <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.1em] text-foreground-200/60">
                Effective 28 July 2026
              </p>
            </div>
            <div>
              <h1 className="page-title max-w-[12ch]">{title}</h1>
              <p className="copy-large mt-7 max-w-3xl">{summary}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background-100 pb-28 sm:pb-36">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.35fr_1fr] lg:gap-16">
          <aside className="hidden lg:block">
            <p className="sticky top-28 max-w-[15rem] text-sm leading-6 text-foreground-200">
              Fegig Technologies Limited
              <br />
              Abraka, Nigeria
              <br />
              <a
                href="mailto:messageme@codewithfegig.com"
                className="mt-3 inline-block text-white underline decoration-color-2 underline-offset-4"
              >
                Contact the studio
              </a>
            </p>
          </aside>
          <div className="legal-copy max-w-3xl">{children}</div>
        </div>
      </section>
    </PageLayout>
  );
}
