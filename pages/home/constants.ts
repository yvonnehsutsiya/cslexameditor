// 編輯器（登入、出題、付款）與介紹頁在同一個網站：介紹頁在 /，編輯器在 /app。
// 所有「開始使用」按鈕導去 /app；若之後編輯器搬家，只要改這一行。
export const APP_URL = "/app";

// 介紹頁方案按鈕：導去編輯器的「建立帳號」畫面，並帶上選的方案；
// 註冊／登入後編輯器會自動帶去價格頁，並開啟該方案的 Paddle 結帳。
export const planLink = (planId: string, cycle: "monthly" | "yearly" = "monthly") =>
  `${APP_URL}?mode=signup&plan=${planId}&cycle=${cycle}&utm_source=landing&utm_medium=cta&utm_campaign=pricing_${planId}`;

export const CTA_LINKS = {
  nav: `${APP_URL}?utm_source=landing&utm_medium=cta&utm_campaign=nav`,
  hero: `${APP_URL}?utm_source=landing&utm_medium=cta&utm_campaign=hero`,
  pricing: "/pricing.html",
  pricingPage: "/pricing.html",
  footer: `${APP_URL}?utm_source=landing&utm_medium=cta&utm_campaign=footer`,
  institution: "#inst",
} as const;

export const BRAND_LOGO_URL =
  "https://storage.helloreaddy.io/project_files/8c1f11c6-e390-4eae-a43e-ff9964d1e86e/9dcdc571-7e09-4de4-9eeb-7229e3ef7f38_compressed_logo___.webp";

export const NAV_ITEMS = [
  { label: "痛點", href: "#pain" },
  { label: "功能", href: "#features" },
  { label: "適合誰", href: "#who" },
  { label: "定價", href: "#pricing" },
  { label: "機構方案", href: "#inst" },
] as const;