import ExamPaper from "./ExamPaper";
import { CTA_LINKS } from "../constants";

export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-background-50">
      {/* 淡淡的綠色田字格底紋 */}
      <div className="grid-paper pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background-50"
        aria-hidden="true"
      />

      <div className="wango-wrap relative grid items-center gap-12 pb-16 pt-12 md:pb-24 md:pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2.5 font-hand text-[17px] font-bold text-secondary-800">
            <span className="h-px w-7 bg-secondary-500" aria-hidden="true" />
            專為華語／CSL 老師打造的 AI 考卷編輯器
          </span>

          <h1 className="mt-6 font-heading text-[38px] font-black leading-[1.28] text-primary-900 md:text-[54px] md:leading-[1.22]">
            5 分鐘，
            <br className="hidden md:block" />
            做好一張
            <span className="relative mx-1 inline-block">
              中文考卷
              <svg
                viewBox="0 0 300 14"
                preserveAspectRatio="none"
                className="absolute -bottom-1 left-0 h-[10px] w-full"
                aria-hidden="true"
              >
                <path
                  d="M2 9 C70 3, 150 12, 298 5"
                  fill="none"
                  stroke="oklch(var(--accent-500))"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-6 text-[17px] leading-[1.95] text-foreground-600 md:text-[19px]">
            注音、拼音、十字格、田字格自動排好對齊，五分鐘完成一張中文考卷——AI 還能幫你加速出題。
          </p>

          <div className="mt-8">
            <a href={CTA_LINKS.hero} className="btn btn-gold btn-lg w-full sm:w-auto" rel="nofollow noopener">
              開始做第一份考卷
              <i className="ri-arrow-right-line" aria-hidden="true" />
            </a>
          </div>

          <p className="mt-5 font-label text-[13.5px] tracking-wide text-foreground-500">
            注音、拼音雙系統　·　十字格田字格自動對齊　·　一鍵輸出 PDF
          </p>
        </div>

        <div className="relative">
          <div
            className="pointer-events-none absolute -right-10 -top-10 hidden h-40 w-40 rounded-full bg-accent-100/70 blur-2xl md:block"
            aria-hidden="true"
          />
          <ExamPaper />
        </div>
      </div>
    </section>
  );
}