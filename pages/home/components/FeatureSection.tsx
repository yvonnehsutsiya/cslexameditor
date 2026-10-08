import Reveal from "./Reveal";
import ExamTypeSamples from "./ExamTypeSamples";

const QTYPE_TAGS = [
  "十字格",
  "田字格",
  "改錯字",
  "注音填空",
  "造詞",
  "造句",
  "連連看",
  "閱讀測驗",
  "小作文",
];

const SMALL_FEATURES = [
  {
    no: "01",
    title: "直式、橫式、空白版",
    body: "版面可直式、可橫式，也能輸出純空白練習版，配合不同教學情境。",
  },
  {
    no: "02",
    title: "一鍵輸出 PDF",
    body: "編輯完直接預覽，輸出高畫質 PDF，印出來就能考、就能發。",
  },
  {
    no: "03",
    title: "邊出題，邊查部首與讀音",
    body: "部首、讀音直接在編輯器裡查。教改後讀音時有變動，不用再一直跳出去翻字典。",
  },
];

export default function FeatureSection() {
  return (
    <section id="features" className="relative overflow-hidden bg-background-100 py-16 md:py-24">
      <div className="grid-paper pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="wango-wrap relative">
        <Reveal>
          <div className="grid gap-6 border-b border-background-300 pb-8 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:gap-14">
            <div>
              <span className="eyebrow">
                <span className="h-px w-6 bg-accent-500" aria-hidden="true" />
                題型與輸出
              </span>
              <h2 className="mt-4 font-heading text-[28px] font-black leading-[1.4] text-primary-900 md:text-[36px]">
                華語老師需要的題型，這裡都排得出來
              </h2>
            </div>
            <p className="text-[16px] leading-[2] text-foreground-600 lg:pb-1.5">
              從基礎字彙練習到進階閱讀測驗，一份華語考卷會用到的題型都在裡面。編輯完直接預覽，一鍵輸出高畫質 PDF，印出來就是一張乾淨、專業的考卷。
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.25fr] lg:items-center lg:gap-12">
            <div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-heading text-[21px] font-bold text-primary-800">完整華語題型</span>
                <span className="font-hand text-[15px] text-accent-700">常用題型一次到位</span>
              </div>
              <p className="mt-3 text-[15.5px] leading-[1.95] text-foreground-600">
                套用模板、拖曳、打字就完成。
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5 lg:justify-end">
              {QTYPE_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-background-300 bg-background-50 px-3.5 py-1.5 font-label text-[13.5px] font-medium text-primary-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 border-y border-background-300">
            {SMALL_FEATURES.map((feature, i) => (
              <div
                key={feature.no}
                className={`grid gap-x-8 gap-y-2 py-7 md:grid-cols-[auto_1fr] ${
                  i > 0 ? "border-t border-background-300" : ""
                }`}
              >
                <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-2">
                  <span className="font-hand text-[26px] font-bold leading-none text-accent-600">
                    {feature.no}
                  </span>
                  <span className="h-px w-8 bg-accent-400 md:h-8 md:w-px" aria-hidden="true" />
                </div>
                <div className="md:max-w-2xl">
                  <h3 className="font-heading text-[18.5px] font-bold text-primary-800">{feature.title}</h3>
                  <p className="mt-2.5 text-[15px] leading-[1.95] text-foreground-600">{feature.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-6 max-w-3xl font-hand text-[17px] leading-[1.85] text-secondary-800">
            還能儲存不同版本、保留答案、套用題型模板，把每學期的考卷慢慢累積成你自己的題庫。
          </p>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-14">
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3 border-b border-background-300 pb-3">
              <h3 className="font-heading text-[20px] font-bold text-primary-800">題型排版示範</h3>
              <span className="font-label text-[13px] text-foreground-500">
                以下為實際排版效果，正式編輯器截圖將陸續更新
              </span>
            </div>
            <ExamTypeSamples />
          </div>
        </Reveal>
      </div>
    </section>
  );
}