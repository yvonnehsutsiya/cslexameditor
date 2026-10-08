import Reveal from "./Reveal";
import { CTA_LINKS } from "../constants";

export default function FinalCtaSection() {
  return (
    <section id="start" className="bg-background-50 pt-6 pb-16 md:pt-8 md:pb-24">
      <Reveal>
        <div className="nav-navy relative w-full overflow-hidden px-6 py-14 text-center text-background-50 md:px-12 md:py-20">
            <div className="grid-paper-faint pointer-events-none absolute inset-0" aria-hidden="true" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-heading text-[28px] font-black leading-[1.45] text-background-50 md:text-[38px]">
                把排版留給萬格，
                <br className="hidden md:block" />
                把時間還給教學。
              </h2>
              <p className="mt-5 text-[15.5px] leading-[2] text-background-200/90 md:text-[17px]">
                五分鐘做出一張排得漂亮的華語考卷，注音拼音、字格全部自動對齊。
              </p>

              <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <a
                  href={CTA_LINKS.footer}
                  className="btn btn-gold btn-lg"
                  rel="nofollow noopener"
                >
                  開始做第一份考卷
                  <i className="ri-arrow-right-line" aria-hidden="true" />
                </a>
                <a href={CTA_LINKS.institution} className="btn btn-outline-light btn-lg">
                  我是學校，想了解機構方案
                </a>
              </div>
            </div>
        </div>
      </Reveal>
    </section>
  );
}