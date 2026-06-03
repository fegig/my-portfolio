export default function PageHeader({ eyebrow, title, text }) {
  return (
    <section className="bg-background-100 px-4 pb-16 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl border-b border-white/10 pb-12">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-violet-300">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {text ? <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground-200">{text}</p> : null}
      </div>
    </section>
  )
}
