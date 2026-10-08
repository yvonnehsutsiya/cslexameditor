import Reveal from "./Reveal";
import { CTA_LINKS, planLink } from "../constants";

const TIERS = [
  {
    id: "starter",
    name: "入門版",
    monthly: "199",
    yearly: "1,990",
    ai: "10",
    desc: "偶爾使用、剛開始嘗試的老師",
    hot: false,
  },
  {
    id: "standard",
    name: "一般版",
    monthly: "299",
    yearly: "2,400",
    ai: "30",
    desc: "額度與價格最均衡的主力方案",
    hot: true,
  },
  {
    id: "premium",
    name: "豪華版",
    monthly: "399",
    yearly: "3,300",
    ai: "50",
    desc: "常態大量出題的重度使用者",
    hot: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-background-100 py-16 md:py-24">
      <div className="grid-paper pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="wango-wrap relative">
        <Reveal>
          <div className="grid gap-6 border-b border-background-300 pb-8 lg:grid-cols-[1fr_0.9fr] lg:items-end lg:gap-14">
            <div>
              <span className="eyebrow">
                <span className="h-px w-6 bg-accent-500" aria-hidden="true" />
                選一個適合你的方案
              </span>
              <h2 className="mt-4 font-heading text-[28px] font-black leading-[1.4] text-primary-900 md:text-[36px]">
                選一個陪你一整學期的方案
              </h2>
            </div>
            <p className="text-[16px] leading-[2] text-foreground-600 lg:pb-1.5">
              先做出你的第一份考卷，感受一下排版自動對齊的省事；決定留下，再選一個方案，把它變成你每學期的固定夥伴。
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid items-start gap-5 lg:grid-cols-3">
          {TIERS.map((tier, i) => (
            <Reveal key={tier.name} delay={90 * i} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-lg border p-7 ${
                  tier.hot
                    ? "border-accent-400 bg-background-50 lg:-mt-4 lg:pb-9"
                    : "border-background-300 bg-background-50"
                }`}
              >
                {tier.hot && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-500 px-4 py-1 font-label text-[12px] font-black text-primary-950">
                    推薦方案
                  </span>
                )}
                <h3 className="font-heading text-[20px] font-bold text-primary-800">{tier.name}</h3>
                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="font-heading text-[13px] font-bold text-foreground-500">NT$</span>
                  <span className="font-heading text-[38px] font-black leading-none text-primary-900">
                    {tier.monthly}
                  </span>
                  <span className="font-label text-[14px] text-foreground-500">／月</span>
                </div>
                <p className="mt-2 font-label text-[14px] text-foreground-500">
                  年繳 NT${tier.yearly}
                </p>
                <p className="mt-5 rounded-md bg-secondary-50 px-4 py-2.5 text-center font-label text-[14px] font-medium text-secondary-900">
                  AI 出題 {tier.ai} 次／月
                </p>
                <p className="mt-4 flex-1 text-[14.5px] leading-[1.9] text-foreground-600">{tier.desc}</p>
                <a
                  href={planLink(tier.id)}
                  className={`btn mt-6 w-full ${tier.hot ? "btn-gold" : "btn-outline"}`}
                  rel="nofollow noopener"
                >
                  選擇{tier.name}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-8 text-center font-label text-[14px] leading-[2] text-foreground-600">
            年繳省最多 33%　·　額度用完可隨時加購（10 次 NT$99、30 次 NT$270，永久有效）　·　付款由 Paddle 安全處理，訂閱可隨時取消
          </p>
          <div className="mt-4 text-center">
            <a
              href={CTA_LINKS.pricingPage}
              className="inline-flex items-center gap-2 font-label text-[15px] font-bold text-primary-700 underline decoration-accent-400 decoration-2 underline-offset-4 hover:text-primary-500"
              rel="nofollow noopener"
            >
              看完整方案與價格（含企業方案與加購）
              <i className="ri-arrow-right-line" aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-lg border border-background-300 bg-background-100 p-7 md:flex-row md:items-center md:p-9">
            <div className="max-w-2xl">
              <h3 className="font-heading text-[21px] font-bold text-primary-900">學校或補習班要整批採用？</h3>
              <p className="mt-3 text-[15px] leading-[1.95] text-foreground-600">
                多帳號共用團體額度，享團體優惠價，帳號集中管理、集中請款。10 個帳號每年 NT$15,900 起。
              </p>
            </div>
            <a href={CTA_LINKS.institution} className="btn btn-gold shrink-0">
              看團體方案
              <i className="ri-arrow-down-line" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}