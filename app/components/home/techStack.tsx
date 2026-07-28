const disciplines = [
  "React",
  "React Native",
  "TypeScript",
  "Cloudflare",
  "Hono",
  "Laravel",
  "Expo",
  "Product design",
  "AI workflows",
];

export default function Stacks() {
  return (
    <section className="border-y border-white/10 bg-background-100">
      <div className="site-shell flex flex-col gap-5 py-6 lg:flex-row lg:items-center lg:justify-between">
        <p className="kicker shrink-0">Working repertoire</p>
        <div className="flex flex-wrap gap-x-7 gap-y-3">
          {disciplines.map((discipline) => (
            <span
              key={discipline}
              className="font-mono text-[11px] uppercase tracking-[0.08em] text-foreground-200"
            >
              {discipline}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
