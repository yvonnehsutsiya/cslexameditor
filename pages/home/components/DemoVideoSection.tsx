import Reveal from "./Reveal";

export default function DemoVideoSection() {
  return (
    <section id="demo" className="relative overflow-hidden bg-background-50 py-16 md:py-24">
      <div className="grid-paper pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="wango-wrap relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-[26px] font-black leading-[1.45] text-primary-900 md:text-[34px]">
              看它怎麼把一份考卷排出來
            </h2>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto mt-10 max-w-3xl">
            <div className="relative aspect-video overflow-hidden rounded-lg border border-background-300 bg-background-100">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube-nocookie.com/embed/c4hq-n8b7hQ"
                title="萬格 Wango 操作示範影片"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}