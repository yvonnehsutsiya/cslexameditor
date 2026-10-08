export default function ExamPaper() {
  return (
    <div className="relative">
      {/* 疊在後面的第二張紙，做出紙疊的層次 */}
      <div className="absolute -left-3 -top-3 h-full w-full rotate-[-3deg] rounded-sm border border-background-300/70 bg-background-100" />
      <figure
        className="relative rotate-[-1deg] overflow-hidden rounded-md border border-background-300 bg-background-50"
        aria-label="萬格編輯器操作介面"
      >
        <img
          src="https://static.readdy.ai/image/58e94bfebbcc99bdca7fbfb17dbc9091/0a5d01a0d356798c36bdb2f38d3430a1.png"
          alt="萬格 Wango 華語出題神器編輯器介面，示範考卷基本設定與注音十字格排版"
          title="萬格 華語出題神器 編輯器介面"
          className="h-auto w-full object-cover object-top"
        />
        <figcaption className="flex items-center gap-2 border-t border-background-200 bg-background-100 px-4 py-2.5 font-label text-[11.5px] tracking-wide text-foreground-500">
          <i className="ri-window-line text-secondary-600" aria-hidden="true" />
          考卷基本設定、AI 出題與注音拼音排版，全在同一頁完成
        </figcaption>
      </figure>
    </div>
  );
}