import Reveal from "./Reveal";

const GENERATED = [
  "弟弟一邊 ______，一邊 ______。",
  "因為下雨，所以 ______。",
  "我最喜歡的季節是 ______，因為 ______。",
];

export default function AiSection() {
  return (
    <section id="ai" className="relative overflow-hidden bg-background-50 py-12 md:py-16">
      <div className="grid-paper pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="wango-wrap relative grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <div className="max-w-xl">
            <span className="font-label text-[13px] font-bold tracking-[0.14em] text-accent-600">
              順帶一提，AI 也能幫你
            </span>
            <h2 className="mt-3 font-heading text-[22px] font-black leading-[1.45] text-primary-900 md:text-[28px]">
              連想題目，都可以交給 <span className="text-accent-600">AI</span>
            </h2>
            <p className="mt-4 text-[15.5px] leading-[2.05] text-foreground-600 md:text-[16.5px]">
              告訴 AI 學生程度、單元或想考的內容，它先幫你產生題目，再直接放進排好的版面。不必從零想題，也不必複製到別的工具重排——但別忘了，萬格真正幫你省時間的，是把排版變簡單這件事。
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-lg border border-background-300 bg-background-100 p-5">
            <div className="flex items-center gap-3 rounded-md border border-background-300 bg-background-50 px-4 py-3">
              <span className="font-label text-[11px] font-bold tracking-wide text-accent-600">你輸入</span>
              <span className="text-[14.5px] text-foreground-700">
                三年級、第三課、造句練習，5 題
              </span>
            </div>
            <div className="my-3 flex items-center justify-center gap-2 text-accent-500">
              <span className="h-px w-16 bg-accent-500/40" aria-hidden="true" />
              <i className="ri-arrow-down-line text-xl" aria-hidden="true" />
              <span className="h-px w-16 bg-accent-500/40" aria-hidden="true" />
            </div>
            <div className="rounded-md border border-background-300 bg-background-50 p-5 text-foreground-900">
              <p className="mb-3 font-label text-[11px] font-bold tracking-wide text-secondary-700">
                萬格產生
              </p>
              <ol className="space-y-3 font-heading text-[14.5px] leading-[1.9]">
                {GENERATED.map((line, i) => (
                  <li key={line} className="flex items-baseline gap-2.5">
                    <span className="font-label text-[12px] text-foreground-400">{i + 1}</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}