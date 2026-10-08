import Reveal from "./Reveal";
import Tianzige from "./Tianzige";

export default function FounderSection() {
  return (
    <section id="founder" className="relative overflow-hidden bg-background-50 py-16 md:py-24">
      <div className="grid-paper pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="wango-wrap relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center">
              <span className="h-px w-6 bg-accent-500" aria-hidden="true" />
              為什麼做萬格
              <span className="h-px w-6 bg-accent-500" aria-hidden="true" />
            </span>
            <h2 className="mt-4 font-heading text-[26px] font-black leading-[1.45] text-primary-900 md:text-[34px]">
              起點，是真的被出考卷折磨過
            </h2>

            <div className="mt-8 flex justify-center">
              <Tianzige char="起" size={56} charClassName="text-primary-700" />
            </div>

            <p className="mt-6 font-hand text-[17.5px] leading-[2.15] text-foreground-700 md:text-[19px]">
              在國際學校教華語時，學生的中文程度和台灣母語生不同，市售考卷往往無法直接使用，只能自己出題。但真正耗時間的，常常不是想題目，而是 Word 裡的十字格、田字格、注音、拼音和版面對齊。萬格，就是從這個每天都會遇到的問題開始做出來的。
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto mt-12 max-w-2xl">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-background-300" aria-hidden="true" />
              <span className="font-label text-[13.5px] font-bold tracking-[0.14em] text-accent-600">
                創辦人訪談
              </span>
              <span className="h-px w-8 bg-background-300" aria-hidden="true" />
            </div>
            <p className="mt-6 text-center font-hand text-[16px] leading-[2.05] text-foreground-700 md:text-[17.5px]">
              萬格的起點，是老巫教外國人中文的那些年——每出一張考卷，光排格子、對注音拼音就要兩三個小時。我們想做的，是一系列幫人省時間的 AI 工具，萬格是第一支。
            </p>
            <div className="relative mt-6 aspect-video overflow-hidden rounded-lg border border-background-300 bg-background-100">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube-nocookie.com/embed/Cfyzq0Ft90Y"
                title="萬格 Wango 創辦人訪談影片"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <p className="mt-4 text-center font-label text-[13px] tracking-[0.08em] text-foreground-600">
              萬格共同創辦人・談創業初衷
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}