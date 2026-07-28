const groups = [
  ["Interfaces", "React · React Router · Svelte · Tailwind"],
  ["Mobile", "React Native · Expo · device integrations"],
  ["Systems", "TypeScript · Hono · PHP · Laravel"],
  ["Cloud", "Cloudflare · databases · storage · observability"],
];

export default function Technologies() {
  return (
    <section className="bg-background-100 py-24 sm:py-32">
      <div className="site-shell">
        <div className="grid gap-12 lg:grid-cols-[0.5fr_1fr] lg:gap-20">
          <div>
            <p className="kicker">Technology follows the system</p>
            <h2 className="mt-6 text-3xl font-medium leading-tight tracking-[-0.04em] text-white sm:text-4xl">
              A current toolkit, chosen for fit rather than fashion.
            </h2>
          </div>
          <div className="border-t border-white/15">
            {groups.map(([name, tools]) => (
              <div
                key={name}
                className="grid gap-2 border-b border-white/15 py-6 sm:grid-cols-[0.35fr_1fr]"
              >
                <p className="text-sm font-semibold text-white">{name}</p>
                <p className="text-sm leading-6 text-foreground-200">{tools}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
