import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";

const FORM_ENDPOINT = "https://readdy.ai/api/form/daio66joh653ivfvohdg";

const TIERS = [
  { plan: "10 人版", seats: "10 個", yearly: "NT$15,900", quota: "100 次" },
  { plan: "30 人版", seats: "30 個", yearly: "NT$57,600", quota: "900 次" },
  { plan: "50 人版", seats: "50 個", yearly: "NT$132,000", quota: "2,500 次" },
];

const ROLES = ["學科召集人", "學校行政採購", "華語老師"];

type Status = "idle" | "submitting" | "success" | "error";

export default function InstitutionSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = new FormData(form);

    const honeypot = String(payload.get("company_alt") || "").trim();
    if (honeypot) {
      setStatus("success");
      setFormError("");
      form.reset();
      return;
    }

    const params = new URLSearchParams();
    payload.forEach((value, key) => {
      if (key === "company_alt") {
        return;
      }
      params.append(key, typeof value === "string" ? value : value.name);
    });

    setStatus("submitting");
    setFormError("");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });
      const responseText = await response.text();
      let parsed: { code?: string; message?: string; meta?: { message?: string; detail?: string } } | null = null;
      try {
        parsed = JSON.parse(responseText);
      } catch {
        parsed = null;
      }
      const code = parsed?.code;
      const serverMsg =
        parsed?.meta?.message || parsed?.message || parsed?.meta?.detail || responseText || "";
      const isSpam = String(serverMsg).toLowerCase().includes("spam");

      if (response.ok && code === "OK" && !isSpam) {
        setStatus("success");
        (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.("event", "generate_lead", { form: "institution" });
        form.reset();
      } else {
        setStatus("error");
        setFormError(String(serverMsg) || "送出失敗，請稍後再試一次。");
      }
    } catch {
      setStatus("error");
      setFormError("網路連線異常，請稍後再試一次。");
    }
  };

  return (
    <section id="inst" className="relative overflow-hidden bg-primary-900 text-background-50">
      <div className="grid-paper-faint pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="wango-wrap relative grid items-start gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <Reveal>
          <div>
            <span className="font-label text-[13.5px] font-bold tracking-[0.14em] text-accent-500">
              給學科召集人與學校行政
            </span>
            <h2 className="mt-4 font-heading text-[26px] font-black leading-[1.45] text-background-50 md:text-[34px]">
              讓全校老師省下出題時間，考卷品質還更好
            </h2>
            <p className="mt-6 text-[16px] leading-[2.05] text-background-200/90 md:text-[17px]">
              萬格讓全校老師用同一套工具出中文考卷，每個人都省下排版時間，全校考卷的格式與品質也維持一致。採購採席次授權，帳號集中管理、集中請款，配合學校的採購與帳務流程。
            </p>

            <div className="mt-8 overflow-hidden rounded-lg border border-background-50/15">
              <div className="grid grid-cols-4 bg-background-50/5 font-label text-[13px] font-bold text-background-50">
                <div className="px-3 py-3">方案</div>
                <div className="px-3 py-3">帳號數</div>
                <div className="px-3 py-3">年繳</div>
                <div className="px-3 py-3">共用額度／月</div>
              </div>
              {TIERS.map((tier) => (
                <div
                  key={tier.plan}
                  className="grid grid-cols-4 border-t border-background-50/10 font-label text-[13.5px]"
                >
                  <div className="px-3 py-3 font-bold text-accent-500">{tier.plan}</div>
                  <div className="px-3 py-3 text-background-200/90">{tier.seats}</div>
                  <div className="px-3 py-3 text-background-50">{tier.yearly}</div>
                  <div className="px-3 py-3 text-background-200/90">{tier.quota}</div>
                </div>
              ))}
            </div>
            <p className="mt-4 font-label text-[12.5px] leading-[1.9] text-background-200/60">
              團體價＝個人單價 × 席位再打團體折扣，AI 出題額度全校共用；年繳省最多 33%，由 Paddle 安全處理。實際方案與報價依學校需求調整，歡迎來談。
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-lg border border-background-50/15 bg-background-50/5 p-6 md:p-8">
            <h3 className="font-heading text-[19px] font-bold text-background-50">預約學校方案說明</h3>
            <p className="mt-2 font-label text-[13.5px] text-background-200/70">
              留下聯絡方式，我們會與你討論適合的方案。
            </p>

            <form
              className="mt-6 space-y-4"
              data-readdy-form
              onSubmit={handleSubmit}
              noValidate={false}
            >
              <div>
                <label htmlFor="inst-school" className="mb-1.5 block font-label text-[14px] text-background-200/90">
                  學校／機構名稱
                </label>
                <input
                  id="inst-school"
                  name="school"
                  type="text"
                  required
                  placeholder="例如：臺北國際學校"
                  className="w-full rounded-md border border-background-50/20 bg-background-50/10 px-4 py-3 font-body text-[15px] text-background-50 placeholder:text-background-200/40 focus:border-accent-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="inst-role" className="mb-1.5 block font-label text-[14px] text-background-200/90">
                  你的角色
                </label>
                <select
                  id="inst-role"
                  name="role"
                  required
                  defaultValue=""
                  className="w-full rounded-md border border-background-50/20 bg-background-50/10 px-4 py-3 font-body text-[15px] text-background-50 focus:border-accent-500 focus:outline-none"
                >
                  <option value="" disabled className="text-foreground-900">
                    請選擇
                  </option>
                  {ROLES.map((role) => (
                    <option key={role} value={role} className="text-foreground-900">
                      {role}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="inst-size" className="mb-1.5 block font-label text-[14px] text-background-200/90">
                  預估使用人數
                </label>
                <input
                  id="inst-size"
                  name="estimated_users"
                  type="text"
                  inputMode="numeric"
                  placeholder="例如：25"
                  className="w-full rounded-md border border-background-50/20 bg-background-50/10 px-4 py-3 font-body text-[15px] text-background-50 placeholder:text-background-200/40 focus:border-accent-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="inst-email" className="mb-1.5 block font-label text-[14px] text-background-200/90">
                  聯絡 Email
                </label>
                <input
                  id="inst-email"
                  name="email"
                  type="email"
                  required
                  placeholder="name@school.edu"
                  className="w-full rounded-md border border-background-50/20 bg-background-50/10 px-4 py-3 font-body text-[15px] text-background-50 placeholder:text-background-200/40 focus:border-accent-500 focus:outline-none"
                />
              </div>

              <div className="inquiry-alt-field" aria-hidden="true">
                <label htmlFor="inst-company-alt">公司備註</label>
                <input
                  id="inst-company-alt"
                  name="company_alt"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  readOnly
                />
              </div>

              <button type="submit" className="btn btn-gold w-full" disabled={status === "submitting"}>
                {status === "submitting" ? "送出中…" : "預約學校方案說明"}
              </button>

              {status === "success" && (
                <div className="rounded-md border border-secondary-400/50 bg-secondary-500/15 px-4 py-3">
                  <p className="font-label text-[13.5px] text-secondary-100">
                    已收到你的資訊，我們會盡快與你聯繫。
                  </p>
                  <p className="mt-1.5 font-label text-[13px] text-secondary-100/80">
                    我們通常會在 1–2 個工作日內回覆。
                  </p>
                  <p className="mt-1.5 font-label text-[13px] text-secondary-100/80">
                    已寄出確認信到你的信箱，若沒收到請檢查垃圾郵件匣。
                  </p>
                </div>
              )}
              {status === "error" && (
                <p className="rounded-md border border-accent-400/50 bg-accent-500/15 px-4 py-3 font-label text-[13.5px] text-accent-100">
                  {formError || "送出失敗，請稍後再試一次。"}
                </p>
              )}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}