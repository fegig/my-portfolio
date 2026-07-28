const operatingAreas = [
  ["Customer systems", "Onboarding, commerce, payments, support"],
  ["Team systems", "Dashboards, workflows, reporting, automation"],
  ["Product foundations", "Architecture, cloud, integrations, release"],
];

export default function Positioning() {
  return (
    <section className="bg-background-100 py-24 sm:py-32">
      <div className="site-shell">
        <div className="grid gap-12 lg:grid-cols-[0.38fr_1fr] lg:gap-20">
          <p className="kicker pt-2">What we actually solve</p>
          <div>
            <h2 className="section-title max-w-[13ch]">
              The difficult space between a business idea and a system people can{" "}
              <span className="serif-accent text-color-3">trust.</span>
            </h2>
            <p className="copy-large mt-8 max-w-3xl">
              We work where product decisions, interface design, engineering,
              and live operations meet. The result is less hand-off theatre and
              more ownership of the whole system.
            </p>
          </div>
        </div>

        <div className="mt-20 grid border-y border-white/15 md:grid-cols-3">
          {operatingAreas.map(([title, detail], index) => (
            <div
              key={title}
              className="border-b border-white/15 px-0 py-7 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0"
            >
              <p className="font-mono text-[11px] text-color-alt">0{index + 1}</p>
              <h3 className="mt-8 text-2xl font-medium tracking-[-0.035em] text-white">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-foreground-200">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
