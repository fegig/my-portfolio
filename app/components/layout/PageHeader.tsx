export default function PageHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <section className="bg-background-100 pb-14 pt-36 sm:pb-20 sm:pt-44">
      <div className="site-shell">
        <div className="grid gap-8 border-b border-white/15 pb-14 lg:grid-cols-[0.35fr_1fr] lg:gap-14 lg:pb-20">
          <p className="kicker pt-2">{eyebrow}</p>
          <div>
        <h1 className="page-title max-w-5xl text-white">
          {title}
        </h1>
        {text ? <p className="copy-large mt-7 max-w-3xl">{text}</p> : null}
          </div>
        </div>
      </div>
    </section>
  )
}
