import Reveal from "./Reveal";
import Tianzige from "./Tianzige";

export default function AudienceSection() {
  return (
    <section id="who" className="relative overflow-hidden bg-background-50 py-16 md:py-24">
      <div className="grid-paper pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="wango-wrap relative">
        <Reveal>
          <div className="max-w-2xl">
            <span className="eyebrow">
              <span className="h-px w-6 bg-accent-500" aria-hidden="true" />
              為這些老師而做
            </span>
            <h2 className="mt-4 font-heading text-[28px] font-black leading-[1.4] text-primary-900 md:text-[36px]">
              你在其中嗎？
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative mt-10 overflow-hidden rounded-lg border border-background-300 bg-background-100 p-7 md:p-11">
            <div className="grid-paper pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div className="max-w-2xl">
                <span className="font-label text-[12.5px] font-bold tracking-[0.14em] text-accent-600">
                  最主要的使用者
                </span>
                <h3 className="mt-3 font-heading text-[24px] font-black leading-[1.4] text-primary-900 md:text-[30px]">
                  CSL／國際學校／海外華語老師
                </h3>
                <p className="mt-4 text-[15.5px] leading-[2] text-foreground-600 md:text-[16.5px]">
                  學生的中文程度和進度跟母語生天差地遠，坊間考卷根本對不上你的課——萬格讓你為每個程度的學生快速做出專屬的練習與測驗。
                </p>
              </div>
              <div className="hidden gap-3 lg:flex">
                <Tianzige char="學" size={64} charClassName="text-primary-800" />
                <Tianzige char="生" size={64} charClassName="text-primary-800" />
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1.5fr_1fr]">
          <Reveal delay={80} className="h-full">
            <div className="h-full rounded-lg border border-background-300 bg-background-100 p-7">
              <span className="font-label text-[12.5px] font-bold tracking-[0.14em] text-secondary-700">
                也很適合
              </span>
              <h3 className="mt-3 font-heading text-[21px] font-bold text-primary-800">
                補習班／學校中文老師
              </h3>
              <p className="mt-3 text-[15px] leading-[1.95] text-foreground-600">
                你要出的中文考題量很大——段考、週考、隨堂考，不同班級、不同進度都得各自出卷。市售題庫不一定貼合你的教學進度，自己出又得一張一張排版。萬格讓你快速、大量產出各種中文題型，把出卷的時間壓到最低。
              </p>
            </div>
          </Reveal>

          <Reveal delay={160} className="h-full">
            <div className="h-full rounded-lg border border-dashed border-background-300 bg-background-50 p-7">
              <span className="font-label text-[12.5px] font-bold tracking-[0.14em] text-foreground-400">
                也可以
              </span>
              <h3 className="mt-3 font-heading text-[19px] font-bold text-foreground-700">
                家長
              </h3>
              <p className="mt-3 text-[15px] leading-[1.95] text-foreground-500">
                也可以自己下載列印，做成孩子的練習本或特定詞語的重複書寫單，在家陪著慢慢補。
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}