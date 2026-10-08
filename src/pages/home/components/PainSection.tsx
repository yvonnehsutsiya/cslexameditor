import Reveal from "./Reveal";

const PAINS = [
  {
    no: "一",
    title: "光是把版面排整齊，就耗掉一個晚上",
    body: "中文考卷的排版，是很多老師的惡夢。十字格、田字格要自己畫，注音得放在國字右邊、拼音要排在下面，卻總是差一點對不齊；用 Word 一格一格調間距、改格式，改了字級又要重新對位。有些老師甚至連倉頡都不熟，光是把字打進去、排整齊就費盡力氣。這些題型看起來很簡單，實際做起來很花時間——而且每次題目一換，版面又得重調一次。",
  },
  {
    no: "二",
    title: "AI 幫你想完題目，真正麻煩的才開始",
    body: "就算用 AI 工具把題目生出來，你還是得一題一題複製到 Word，重新排版、對齊、畫格子。AI 解決了「想題目」，卻沒解決「把題目變成一張能直接印的考卷」——而後面這段，往往才是最花時間的。",
  },
  {
    no: "三",
    title: "買不到適合的現成考卷，最後只能自己出",
    body: "國際學校和 CSL 學生的程度、進度跟母語生完全不同，坊間出版社的考卷根本對不上你的課；就算是台灣的國文或補習班老師，有時只是想針對某幾個字出一張十分鐘的小考，也不值得為了幾題去買一整本題庫。最後殊途同歸——只能自己出。而自己出，又繞回前面那個排版的坑。",
  },
];

export default function PainSection() {
  return (
    <section id="pain" className="relative overflow-hidden bg-background-100 py-16 md:py-24">
      <div className="grid-paper pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="wango-wrap relative grid items-start gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
        <Reveal>
          <div className="max-w-2xl">
            <span className="font-label text-[13.5px] font-bold tracking-[0.14em] text-accent-600">
              你是不是也這樣
            </span>
            <h2 className="mt-4 font-heading text-[26px] font-black leading-[1.42] text-primary-900 md:text-[36px] md:leading-[1.38]">
              一張中文考卷，最花時間的往往不是出題——是排版。
            </h2>

            <div className="mt-9 space-y-7">
              {PAINS.map((pain) => (
                <div key={pain.no} className="border-l-2 border-accent-400 pl-5 md:pl-6">
                  <h3 className="font-heading text-[18px] font-bold leading-[1.55] text-primary-800 md:text-[20px]">
                    {pain.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-[2.05] text-foreground-600 md:text-[16px]">
                    {pain.body}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-9 text-center font-hand text-[21px] font-bold leading-[1.7] text-primary-900 md:text-[24px]">
              而萬格，就是把這段最花時間的中文排版，
              <span className="text-accent-600">變簡單</span>。
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-lg border border-background-300 bg-background-50 p-5">
            <span className="inline-block -rotate-1 rounded-[5px] bg-secondary-700 px-3 py-1 font-label text-[12px] font-black tracking-wide text-background-50">
              BEFORE　用 Word 排
            </span>
            <div className="mt-4 overflow-hidden rounded-md border border-dashed border-background-400 bg-background-100">
              <img
                src="https://static.readdy.ai/image/58e94bfebbcc99bdca7fbfb17dbc9091/ee0ef90e84729dfef89323ae95a7eddf.png"
                alt="用 Word 手排版面的國語生字練習卷範例，注音跑位、拼音對不齊、田字格還得自己畫"
                title="用 Word 手排的中文考卷範例"
                className="h-auto w-full object-top"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}