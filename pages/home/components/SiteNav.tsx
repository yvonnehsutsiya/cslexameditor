import { useState } from "react";
import { CTA_LINKS, NAV_ITEMS, BRAND_LOGO_URL } from "../constants";

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="nav-navy sticky top-0 z-50 border-b border-background-50/10">
      <div className="wango-wrap flex h-[104px] items-center justify-between md:h-[136px]">
        <a href="#top" className="shrink-0" aria-label="萬格 Wango 華語考卷編輯器 首頁">
          <img
            src={BRAND_LOGO_URL}
            alt="萬格 Wango 華語考卷編輯器"
            className="h-24 w-auto max-w-[240px] object-contain md:h-32 md:max-w-[420px]"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="主要導覽">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-label text-[15px] font-medium text-background-100 transition-colors hover:text-accent-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={CTA_LINKS.nav} className="btn btn-gold hidden md:inline-flex" rel="nofollow noopener">
            開始做考卷
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-background-50/30 text-background-50 lg:hidden"
            aria-label={menuOpen ? "關閉選單" : "開啟選單"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <i className={menuOpen ? "ri-close-line text-xl" : "ri-menu-line text-xl"} aria-hidden="true" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="nav-navy border-t border-background-50/10 lg:hidden">
          <nav className="wango-wrap flex flex-col py-3" aria-label="行動版導覽">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-background-50/10 py-3 font-label text-[15px] text-background-100 last:border-b-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href={CTA_LINKS.nav}
              className="btn btn-gold mt-4 w-full"
              rel="nofollow noopener"
              onClick={() => setMenuOpen(false)}
            >
              開始做考卷
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}