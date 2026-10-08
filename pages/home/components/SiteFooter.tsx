import BrandMark from "./BrandMark";
import { CTA_LINKS, NAV_ITEMS } from "../constants";

export default function SiteFooter() {
  return (
    <footer className="border-t border-secondary-200 bg-secondary-50">
      <div className="wango-wrap flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between md:py-12">
        <div>
          <BrandMark tone="dark" />
          <p className="mt-4 font-label text-[13.5px] text-foreground-500">
            © 2026 萬格 Wango · cslexameditor.com
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="頁尾導覽">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-label text-[14px] text-foreground-600 transition-colors hover:text-primary-600"
            >
              {item.label}
            </a>
          ))}
          <a href="/terms.html" className="font-label text-[14px] text-foreground-600 transition-colors hover:text-primary-600">
            服務條款
          </a>
          <a href="/privacy.html" className="font-label text-[14px] text-foreground-600 transition-colors hover:text-primary-600">
            隱私權政策
          </a>
          <a href="/refund.html" className="font-label text-[14px] text-foreground-600 transition-colors hover:text-primary-600">
            退款政策
          </a>
          <a
            href={CTA_LINKS.footer}
            className="font-label text-[14px] font-bold text-primary-700 transition-colors hover:text-primary-500"
            rel="nofollow noopener"
          >
            開始做考卷
          </a>
        </nav>
      </div>
    </footer>
  );
}