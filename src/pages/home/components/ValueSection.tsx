import Reveal from "./Reveal";
import Tianzige from "./Tianzige";

const VALUES = [
  {
    index: "一",
    glyph: "格",
    title: "華語專用排版，一放上去就對齊",
    body: "十字格、田字格、大題、選擇題，不必再自己畫表格、調空格。輸入內容，版面直接幫你排好。",
  },
  {
    index: "二",
    glyph: "音",
    title: "注音、拼音雙系統，自動跟著中文字走",
    body: "注音放右邊、拼音放下面，跟著國字大小自動對位。不必再因為換字體、改字級重新慢慢喬。",
  },
  {
    index: "三",
    glyph: "題",
    title: "AI 快速出題，直接變成排好的考卷",
    body: "告訴 AI 學生程度、單元或想考的內容，快速產生題目，再直接放進考卷版面。從想題目、排版到預覽，不必在不同工具之間來回搬資料。",
  },
];

export default function ValueSection() {
  return (
    <section id="values" className="relative overflow-hidden bg-background-50 py-16 md:py-24">
      <div className="grid-paper pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="wango-wrap relative">
        <Reveal>
          <div className="max-w-2xl">
            <span className="eyebrow">
              <span className="h-px w-6 bg-accent-500" aria-hidden="true" />
              別人做不到的
            </span>
            <h2 className="mt-4 font-heading text-[28px] font-black leading-[1.4] text-primary-900 md:text-[36px]">
              華語考卷最麻煩的三件事，萬格一起處理
            </h2>
            <p className="mt-5 text-[16px] leading-[2] text-foreground-600 md:text-[17px]">
              萬格不是「多了中文功能的排版軟體」，而是一開始就為繁體中文、注音、拼音、字格與中文題型的連動關係設計的工具。
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 grid overflow-hidden rounded-lg border border-background-300 lg:grid-cols-[1.18fr_0.91fr_0.91fr]">
            {VALUES.map((value, i) => (
              <div
                key={value.index}
                className={`p-7 md:p-9 ${
                  i === 0 ? "bg-background-100/70" : "bg-background-50"
                } ${
                  i < VALUES.length - 1 ? "border-b border-background-300 lg:border-b-0 lg:border-r" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <Tianzige char={value.glyph} size={i === 0 ? 62 : 52} charClassName="text-primary-700" />
                  <span className="font-hand text-[16px] font-bold text-accent-700">
                    價值．{value.index}
                  </span>
                </div>
                <h3
                  className={`mt-6 font-heading font-bold leading-[1.5] text-primary-800 ${
                    i === 0 ? "text-[21px]" : "text-[19px]"
                  }`}
                >
                  {value.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.95] text-foreground-600">{value.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}