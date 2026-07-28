export default function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3" aria-hidden="true">
      <span className="grid h-8 w-8 grid-cols-3 grid-rows-3 gap-[3px] bg-color-2 p-[5px]">
        <span className="bg-foreground-100" />
        <span className="bg-foreground-100" />
        <span className="bg-foreground-100" />
        <span className="bg-foreground-100" />
        <span className="bg-foreground-100" />
        <span />
        <span className="bg-foreground-100" />
      </span>
      {!compact ? (
        <span className="text-[1.05rem] font-semibold tracking-[-0.04em] text-foreground-100">
          Fegig Technologies
        </span>
      ) : null}
    </span>
  );
}
