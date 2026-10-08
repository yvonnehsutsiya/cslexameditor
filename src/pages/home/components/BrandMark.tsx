type BrandMarkProps = {
  tone?: "dark" | "light";
  compact?: boolean;
};

export default function BrandMark({ tone = "dark", compact = false }: BrandMarkProps) {
  const wordColor = tone === "dark" ? "text-primary-800" : "text-background-50";
  const subColor = tone === "dark" ? "text-foreground-500" : "text-background-200/80";
  const badgeBg = tone === "dark" ? "bg-primary-700" : "bg-accent-500";
  const checkColor = tone === "dark" ? "oklch(var(--accent-500))" : "oklch(var(--primary-900))";

  return (
    <span className="flex items-center gap-3">
      <span className="relative inline-flex h-[46px] w-[46px] items-center justify-center">
        <span className="tzg h-10 w-10 rounded-md">
          <span className="relative z-10 font-heading text-[24px] font-black leading-none text-primary-700">格</span>
        </span>
        <span className={`absolute -right-0.5 -top-1 flex h-5 w-5 items-center justify-center rounded-full ${badgeBg}`}>
          <svg viewBox="0 0 24 24" className="h-3 w-3" aria-hidden="true">
            <path
              d="M5 13l4 4L19 7"
              fill="none"
              stroke={checkColor}
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-heading text-[20px] font-black tracking-wide ${wordColor}`}>
          萬格<span className="ml-0.5 font-label text-accent-600">AI</span>
        </span>
        {!compact && (
          <span className={`mt-1 font-label text-[11px] font-medium tracking-[0.22em] ${subColor}`}>
            華語考卷編輯器
          </span>
        )}
      </span>
    </span>
  );
}