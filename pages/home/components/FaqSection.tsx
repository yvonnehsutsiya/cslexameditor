import { useState } from "react";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "萬格 Wango 是什麼？",
    a: "萬格 Wango 是專為華語 CSL 與中文老師打造的 AI 考卷編輯器，能自動排版注音或拼音，並讓十字格、田字格自動對齊，完成後可一鍵輸出高畫質 PDF。",
  },
  {
    q: "萬格支援哪些題型？",
    a: "十字格、田字格、改錯字、注音填空、造詞、造句、連連看、閱讀測驗、小作文等華語教學常用題型都有，套用模板、拖曳、打字就能完成。",
  },
  {
    q: "萬格適合哪些人使用？",
    a: "以 CSL、國際學校與海外華語老師為主，也很適合補習班與學校的中文老師；家長也能用來列印孩子的練習本。",
  },
  {
    q: "我電腦不太行，會很難學嗎？",
    a: "不會。萬格是拖曳、套用、打字就能用的編輯器，不需要學倉頡，也不需要記任何指令。",
  },
  {
    q: "需要下載或安裝軟體嗎？",
    a: "不用。萬格是網頁版工具，用瀏覽器打開就能編輯，不需要安裝任何程式，編輯完直接輸出 PDF。",
  },
  {
    q: "注音和拼音可以同時排嗎？",
    a: "可以。注音、拼音雙系統同時支援，注音擺右邊、拼音放底下，跟著國字大小自動對齊。",
  },
  {
    q: "做好的考卷會不會不見？答案會保留嗎？",
    a: "你可以儲存不同版本的考卷，答案與編輯內容都會保留，方便之後不同學期重複使用與微調。",
  },
  {
    q: "可以輸出成 PDF 列印嗎？直式橫式都行嗎？",
    a: "可以。編輯完直接預覽，一鍵輸出高畫質 PDF，直式、橫式都支援。",
  },
  {
    q: "有沒有試用？",
    a: "有。萬格提供 3 天免費試用，可以先實際操作 AI 出題與注音、拼音、字格自動排版，試用後滿意再選擇方案。",
  },
  {
    q: "萬格的方案怎麼算？",
    a: "分成入門版 NT$199／月、一般版 NT$299／月、豪華版 NT$399／月三種，差別在每月 AI 出題次數。年繳更省（最多省 33%），額度用完可隨時加購，訂閱也能隨時取消。",
  },
  {
    q: "學校要整批採用怎麼買？",
    a: "我們提供多帳號席次授權與學校專屬報價，請由「機構方案」留下聯絡方式，我們與你討論。",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-background-100 py-16 md:py-24">
      <div className="grid-paper pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="wango-wrap relative">
        <Reveal>
          <div className="max-w-2xl">
            <span className="eyebrow">
              <span className="h-px w-6 bg-accent-500" aria-hidden="true" />
              上手前，你可能想問
            </span>
            <h2 className="mt-4 font-heading text-[28px] font-black leading-[1.4] text-primary-900 md:text-[36px]">
              常見問題
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-lg border border-background-300 bg-background-50">
            {FAQS.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={item.q} className="border-b border-background-200 last:border-b-0">
                  <h3>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-background-100 md:px-7"
                      aria-expanded={isOpen}
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                    >
                      <span className="font-heading text-[16.5px] font-bold text-primary-800 md:text-[17.5px]">
                        {item.q}
                      </span>
                      <i
                        className={`${
                          isOpen ? "ri-subtract-line" : "ri-add-line"
                        } shrink-0 text-xl text-accent-600`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  {isOpen && (
                    <div className="px-5 pb-6 md:px-7">
                      <p className="border-l-2 border-accent-400 pl-4 text-[15px] leading-[2] text-foreground-600">
                        {item.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}