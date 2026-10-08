export default function ExamTypeSamples() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {/* 字格題（注音／國字） */}
      <figure className="flex flex-col overflow-hidden rounded-lg border border-background-300 bg-background-50">
        <figcaption className="flex items-start justify-between gap-3 px-5 pt-4">
          <span className="min-w-0 font-heading text-[15px] font-bold leading-snug text-primary-800">字格題（注音／國字）</span>
          <span className="shrink-0 whitespace-nowrap rounded-full bg-secondary-100 px-3 py-1 font-label text-[11.5px] font-medium text-secondary-800">
            田字格 × 注音拼音自動對齊
          </span>
        </figcaption>
        <div className="mt-3 px-5">
          <div className="relative aspect-[2/1] w-full overflow-hidden bg-background-100">
            <img
              src="https://static.readdy.ai/image/58e94bfebbcc99bdca7fbfb17dbc9091/89f64ca13aee87a48a3ddeb498a343d3.png"
              alt="萬格田字格字格題示範，格子內國字搭配注音與拼音自動對齊"
              title="字格題 田字格注音拼音自動對齊"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>
        <p className="mt-auto px-5 py-3.5 font-label text-[12px] text-foreground-500">
          格子自己畫、注音自己對，最花時間——這裡都自動。
        </p>
      </figure>

      {/* 選擇題 */}
      <figure className="flex flex-col overflow-hidden rounded-lg border border-background-300 bg-background-50">
        <figcaption className="flex items-start justify-between gap-3 px-5 pt-4">
          <span className="min-w-0 font-heading text-[15px] font-bold leading-snug text-primary-800">選擇題</span>
          <span className="shrink-0 whitespace-nowrap rounded-full bg-secondary-100 px-3 py-1 font-label text-[11.5px] font-medium text-secondary-800">
            逐字注音 × 選項自動斷行
          </span>
        </figcaption>
        <div className="mt-3 px-5">
          <div className="relative aspect-[2/1] w-full overflow-hidden bg-background-100">
            <img
              src="https://static.readdy.ai/image/58e94bfebbcc99bdca7fbfb17dbc9091/39dd417d3f42102d447fec3598c62633.png"
              alt="萬格選擇題示範，題幹與選項逐字注音、選項自動斷行排列"
              title="選擇題 逐字注音選項自動斷行"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>
        <p className="mt-auto px-5 py-3.5 font-label text-[12px] text-foreground-500">
          注音、選項，都自動排整齊。
        </p>
      </figure>

      {/* 多音字／同部首字分組配對 */}
      <figure className="flex flex-col overflow-hidden rounded-lg border border-background-300 bg-background-50">
        <figcaption className="flex items-start justify-between gap-3 px-5 pt-4">
          <span className="min-w-0 font-heading text-[15px] font-bold leading-snug text-primary-800">多音字／同部首字分組配對</span>
          <span className="shrink-0 whitespace-nowrap rounded-full bg-secondary-100 px-3 py-1 font-label text-[11.5px] font-medium text-secondary-800">
            師生分版 × 自動出題
          </span>
        </figcaption>
        <div className="mt-3 px-5">
          <div className="relative aspect-[2/1] w-full overflow-hidden bg-background-100">
            <img
              src="https://static.readdy.ai/image/58e94bfebbcc99bdca7fbfb17dbc9091/67fe1ed63a31cc7751ef066b7d40e729.png"
              alt="萬格多音字分組配對示範，同一份題老師看得到答案、學生看不到"
              title="多音字分組配對 師生分版自動出題"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>
        <p className="mt-auto px-5 py-3.5 font-label text-[12px] text-foreground-500">
          同一份題，老師看得到答案，學生看不到。
        </p>
      </figure>
    </div>
  );
}