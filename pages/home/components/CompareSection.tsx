import Reveal from "./Reveal";

const COLUMNS = [
  {
    name: "Word",
    body: "排得出表格，卻沒有可直接編輯的十字格、田字格，注音拼音要手動慢慢喬，一份卷子動輒好幾個小時。",
    win: false,
  },
  {
    name: "Canva",
    body: "版面漂亮，但它不懂華語——注音符號、拼音對齊、華語專屬題型，這些底層它都沒有。",
    win: false,
  },
  {
    name: "通用 AI",
    body: "能幫你想題目，卻不會把題目排成一張能直接列印的考卷。出題只是第一步，排版才最花時間。",
    win: false,
  },
  {
    name: "萬格",
    body: "出題與排版一次做完：AI 生題，再自動排進對齊好的華語版面，直接輸出 PDF。",
    win: true,
  },
];

export default function CompareSection() {
  return (
    <section id="compare" className="relative overflow-hidden bg-background-100 py-16 md:py-24">
      <div className="grid-paper pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="wango-wrap relative">
        <Reveal>
          <div className="max-w-2xl">
            <span className="font-label text-[13.5px] font-bold tracking-[0.14em] text-accent-600">
              你可能會問
            </span>
            <h2 className="mt-4 font-heading text-[28px] font-black leading-[1.4] text-primary-900 md:text-[36px]">
              那用 Word、Canva、或直接用 AI 工具不行嗎？
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 space-y-4">
          <div className="grid gap-4 sm:grid-cols-3">
            {COLUMNS.filter((col) => !col.win).map((col, i) => (
              <Reveal key={col.name} delay={70 * i} className="h-full">
                <div className="flex h-full flex-col rounded-lg border border-background-300 bg-background-50 p-6">
                  <div className="flex items-baseline gap-3">
                    <span className="font-hand text-[15px] text-foreground-400">0{i + 1}</span>
                    <h3 className="font-heading text-[18px] font-bold text-primary-800">{col.name}</h3>
                  </div>
                  <p className="mt-4 text-[14.5px] leading-[1.95] text-foreground-600">{col.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {COLUMNS.filter((col) => col.win).map((col) => (
            <Reveal key={col.name} delay={220}>
              <div className="grid gap-4 rounded-lg border border-accent-400 bg-accent-100/60 p-6 md:grid-cols-[auto_1fr] md:items-center md:gap-8 md:p-8">
                <div className="flex items-center gap-3">
                  <h3 className="font-heading text-[24px] font-black leading-none text-accent-700 md:text-[28px]">
                    {col.name}
                  </h3>
                  <span className="rounded-full bg-accent-500 px-3 py-0.5 font-label text-[11px] font-black text-primary-950">
                    推薦
                  </span>
                </div>
                <p className="text-[15.5px] leading-[2] text-accent-900">{col.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}