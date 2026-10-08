# 萬格 Wango｜Landing Page

## 1. Project Description

萬格 Wango 是專為華語 CSL（Chinese as a Second Language）老師打造的 AI 華語考卷編輯器。
產品定位：不是「另一個 AI 出題工具」，而是「把題目直接變成一張排版完成、可列印的華語考卷」。
目標使用者：國際學校／海外華語老師（主）、補習班／體制內老師（次）、家長（最低權重）、學校行政與學科召集人（機構採購）。
核心價值：華語專用排版（十字格／田字格）、注音拼音雙系統自動對位、AI 出題後直接變成排好的考卷、一鍵輸出 PDF。

本階段任務：重做單一 landing page 的視覺設計，內容文案完全依「萬格 Landing Page 內容規劃」文件，不新增、不改寫、不刪減。

## 2. Page Structure

- `/` — Landing Page（單頁式，含站內錨點 #pain #features #who #pricing #inst）

## 3. Core Features

- [ ] 響應式導覽列（sticky，錨點連結 + 金色 CTA）
- [ ] Hero（左文右真實考卷版面示意）
- [ ] 痛點段落（深藍底 + Word 排版凌亂示意）
- [ ] 三大核心價值
- [ ] Demo 影片區（影片未到位前放乾淨預留位）
- [ ] 功能展示（題型與輸出，含真實文字排出的題型示意）
- [ ] 與 Word／Canva／通用 AI 四欄對照
- [ ] AI 輔助區（含出題 demo 小示意）
- [ ] 適合誰（三客群）
- [ ] 定價預覽（三階 + 機構橫幅）
- [ ] Founder Story
- [ ] 信任證據（Before／After + 見證卡，標示示意）
- [ ] 機構方案（團體三階表 + 洽詢表單）
- [ ] FAQ（手風琴）
- [ ] 結尾 CTA
- [ ] Footer

## 4. Data Model Design

無資料庫需求。頁面為靜態內容；機構洽詢採用表單服務送出（非自建資料庫）。

## 5. Backend / Third-party Integration Plan

- Database：不需要
- 表單：機構洽詢表單使用平台表單服務（取得正式送出網址），不使用模擬送出
- 影片：Demo 影片待上傳 YouTube／Vimeo 後以 iframe 嵌入，現階段為預留位
- 金流／Shopify／登入：本階段不需要

## 6. Development Phase Plan

### Phase 1: 全站設計系統與頁面骨架
- Goal：建立品牌設計語彙（紙感底、田字格母題、宋體標題／黑體內文、深藍與金色點綴）與可重用的共用元件
- Deliverable：設計 token、共用元件（田字格、按鈕、區塊標題、Logo）

### Phase 2: Landing Page 完整區塊
- Goal：依內容規劃文件順序建出全部 16 個區塊，文案照抄
- Deliverable：可完整瀏覽、可響應式的 landing page

### Phase 3: 細節打磨與示意素材定位
- Goal：動態進場、FAQ 互動、示範考卷版面精修
- Deliverable：完成度更高的成品頁

## 備註：待替換素材（依內容規劃文件）

- Demo 影片 iframe（上傳後替換）
- Before／After 真實截圖
- 題型截圖 2～3 張（尤其注音＋拼音同排）
- 真實老師見證（取得同意後替換並移除「版型示意」標記）
- Founder Story 屬實確認
- 機構表單後端串接