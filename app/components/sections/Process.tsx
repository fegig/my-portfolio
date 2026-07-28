const stages = [
  ["01", "Read the operation", "People, decisions, data, constraints, and what currently breaks."],
  ["02", "Shape the product", "Flows, system boundaries, interface direction, and a delivery plan."],
  ["03", "Build in working slices", "Usable releases, review loops, integration, and quality checks."],
  ["04", "Release into reality", "Production setup, observation, support, and measured improvement."],
];

export default function Process() {
  return (
    <section className="bg-foreground-100 py-24 text-background-100 sm:py-32">
      <div className="site-shell">
        <div className="grid gap-12 lg:grid-cols-[0.55fr_1fr] lg:gap-20">
          <div>
            <p className="kicker !text-color-2">Delivery, without ceremony</p>
            <h2 className="section-title mt-6 max-w-[9ch]">
              Four movements. One accountable line.
            </h2>
          </div>
          <div className="border-t border-background-100/25">
            {stages.map(([number, title, text]) => (
              <article
                key={number}
                className="grid gap-4 border-b border-background-100/25 py-7 sm:grid-cols-[70px_0.6fr_1fr]"
              >
                <p className="font-mono text-[11px] text-background-100/60">{number}</p>
                <h3 className="text-xl font-medium tracking-[-0.025em]">{title}</h3>
                <p className="leading-7 text-background-100/70">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
