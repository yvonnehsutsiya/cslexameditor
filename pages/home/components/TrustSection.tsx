import Reveal from "./Reveal";

const CHARS = ["溫", "暖", "春", "天"];

const VOICES = [
  {
    role: "國際學校 CSL 老師",
    quote:
      "最麻煩的其實不是出題，是找不到可以直接用的考卷。學生程度跟台灣學校完全不同，每次都得自己出，結果最後最多時間都花在調注音、拼音跟格子。",
  },
  {
    role: "海外華語老師",
    quote:
      "AI 可以幫我想題目，但題目生出來以後，我還是要複製到 Word，再重新排版。如果可以直接變成一張能印的考卷，才是真的省時間。",
  },
  {
    role: "台灣國文老師",
    quote:
      "有時候只是想出一張十分鐘的小考，根本不值得為了幾題去找題庫，但自己用 Word 做十字格、改錯字、注音題又很麻煩。如果有現成格式直接套，會方便很多。",
  },
  {
    role: "補習班老師",
    quote:
      "我其實不是不會出題，是每次題目換掉，版面又要重新調。尤其中文字格、造詞、造句這種題型，看起來很簡單，實際做起來很花時間。",
  },
];

export default function TrustSection() {
  return (
    <section id="trust" className="relative overflow-hidden bg-background-100 py-16 md:py-24">
      <div className="grid-paper pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="wango-wrap relative">
        <Reveal>
          <div className="max-w-2xl">
            <span className="eyebrow">
              <span className="h-px w-6 bg-accent-500" aria-hidden="true" />
              排版前後
            </span>
            <h2 className="mt-4 font-heading text-[28px] font-black leading-[1.4] text-primary-900 md:text-[36px]">
              看看一張考卷，排版前後差多少
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {/* BEFORE */}
          <Reveal delay={80} className="h-full">
            <div className="flex h-full flex-col rounded-lg bg-background-200 p-6 md:p-7">
              <span className="self-start -rotate-1 rounded-[5px] bg-secondary-700 px-3 py-1 font-label text-[12px] font-black tracking-wide text-background-50">
                BEFORE　用 Word 排
              </span>
              <div className="mt-5 flex-1 rounded-md border border-dashed border-background-400 bg-background-50 p-5">
                <div className="flex items-end gap-5">
                  {CHARS.map((char, i) => (
                    <span key={char} className="flex flex-col items-center">
                      <span className="relative font-heading text-[34px] leading-none text-foreground-800">
                        <span
                          className={`absolute left-1/2 -translate-x-1/2 whitespace-nowrap font-label text-[10px] text-foreground-400 ${
                            i % 2 === 0 ? "-top-3" : "top-1"
                          }`}
                        >
                          {["ㄨㄣ", "ㄋㄨㄢˇ", "ㄔㄨㄣ", "ㄊㄧㄢ"][i]}
                        </span>
                        {char}
                      </span>
                    </span>
                  ))}
                </div>
                <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-label text-[10.5px] text-foreground-400">
                  <span className="translate-x-2">wēn</span>
                  <span className="-translate-x-3">nuǎn</span>
                  <span>chūn</span>
                  <span className="translate-x-4">tiān</span>
                </div>
                <p className="mt-6 font-label text-[13.5px] leading-[1.9] italic text-foreground-500">
                  注音拼音對不齊、格子要自己畫，一份卷子排到深夜。
                </p>
              </div>
            </div>
          </Reveal>

          {/* AFTER */}
          <Reveal delay={160} className="h-full">
            <div className="relative flex h-full flex-col overflow-hidden rounded-lg border border-secondary-300 bg-secondary-50 p-6 md:p-7">
              <div className="grid-paper pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
              <span className="relative self-start rotate-1 rounded-[5px] bg-accent-500 px-3 py-1 font-label text-[12px] font-black tracking-wide text-primary-950">
                AFTER　用萬格
              </span>
              <div className="relative mt-5 flex flex-1 flex-col rounded-md bg-background-50 p-5">
                <div className="flex flex-1 items-center justify-center rounded-sm border border-secondary-200 bg-background-50 p-3">
                  <img
                    src="https://static.readdy.ai/image/58e94bfebbcc99bdca7fbfb17dbc9091/cdf490712a5100bd3919b9249765031c.png"
                    alt="萬格輸出的注音十字格成品　春暖花開"
                    title="萬格 注音十字格 春暖花開"
                    className="h-auto w-full max-h-[190px] object-contain"
                  />
                </div>
                <p className="mt-5 flex items-center gap-2 font-label text-[13.5px] leading-[1.9] text-foreground-600">
                  <i className="ri-check-line text-secondary-600" aria-hidden="true" />
                  注音、拼音、字格全部自動對齊，五分鐘完成。
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <div className="mt-16">
            <div className="max-w-2xl">
              <span className="eyebrow">
                <span className="h-px w-6 bg-accent-500" aria-hidden="true" />
                老師的共同心聲
              </span>
              <h2 className="mt-4 font-heading text-[24px] font-black leading-[1.4] text-primary-900 md:text-[30px]">
                很多中文老師，都有過這樣的時刻
              </h2>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {VOICES.map((voice, i) => (
                <Reveal key={voice.role} delay={80 * i} className="h-full">
                  <figure className="flex h-full flex-col rounded-lg border border-background-300 bg-background-50 p-6 md:p-7">
                    <i className="ri-double-quotes-l text-2xl text-accent-500" aria-hidden="true" />
                    <blockquote className="mt-4 flex-1 font-hand text-[17px] leading-[2.05] text-foreground-800 md:text-[18px]">
                      {voice.quote}
                    </blockquote>
                    <figcaption className="mt-5 border-t border-dashed border-background-300 pt-4 font-label text-[13.5px] font-bold text-primary-700">
                      {voice.role}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}