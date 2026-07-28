const studioFacts = [
  ["09", "systems in the selected-work index"],
  ["02", "product surfaces: web and mobile"],
  ["01", "accountable studio from map to release"],
];

export default function Metrics() {
  return (
    <section className="border-y border-white/15 bg-background-100">
      <div className="site-shell grid md:grid-cols-3">
        {studioFacts.map(([value, label]) => (
          <div
            key={label}
            className="border-b border-white/15 py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
          >
            <p className="text-5xl font-medium tracking-[-0.06em] text-white">{value}</p>
            <p className="mt-3 max-w-[15rem] text-sm leading-6 text-foreground-200">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
