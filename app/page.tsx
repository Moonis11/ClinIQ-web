"use client";

import { useLang, TranslationKey } from "@/lib/i18n";
import ThemeToggle from "@/components/ThemeToggle";
import LangMenu from "@/components/LangMenu";

// Asosiy mahsulot (bemor/xodim ilovasi) - BOSHQA, alohida joylashtirilgan
// Railway xizmatida turadi. Shu sabab oddiy <a> havolalar ishlatiladi
// (Next.js Link emas), chunki bu butunlay boshqa domen/loyiha.
const APP_URL = "https://cliniqpatient-production.up.railway.app";

const FLOW_NODES: { key: string; icon: string; labelKey: TranslationKey }[] = [
  { key: "patient1", icon: "\uD83D\uDC64", labelKey: "flow_patient" },
  { key: "reception", icon: "\uD83D\uDCCB", labelKey: "flow_reception" },
  { key: "doctor", icon: "\uD83E\uDE7A", labelKey: "flow_doctor" },
  { key: "lab", icon: "\uD83E\uDDEA", labelKey: "flow_lab" },
  { key: "radiology", icon: "\uD83D\uDCE1", labelKey: "flow_radiology" },
  { key: "ai", icon: "\u2728", labelKey: "flow_ai" },
  { key: "care", icon: "\uD83D\uDC8A", labelKey: "flow_care" },
];

const FEATURE_CARDS: { icon: string; titleKey: TranslationKey; descKey: TranslationKey }[] = [
  { icon: "\uD83D\uDDC3\uFE0F", titleKey: "feature_1_title", descKey: "feature_1_desc" },
  { icon: "\u23F1\uFE0F", titleKey: "feature_2_title", descKey: "feature_2_desc" },
  { icon: "\uD83D\uDCCA", titleKey: "feature_3_title", descKey: "feature_3_desc" },
  { icon: "\uD83D\uDD01", titleKey: "feature_4_title", descKey: "feature_4_desc" },
];

export default function LandingPage() {
  const { t } = useLang();

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 border-b border-glass-borderLight bg-glass-cardLight backdrop-blur-xl dark:border-glass-borderDark dark:bg-glass-cardDark">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <span className="text-xl font-extrabold tracking-tight">
            <span className="text-glass-textLight dark:text-glass-textDark">Clin</span>
            <span className="bg-gradient-to-r from-glass-teal via-glass-purple to-glass-magenta bg-clip-text text-transparent">IQ</span>
          </span>
          <nav className="hidden items-center gap-7 text-sm font-medium text-glass-mutedLight dark:text-glass-mutedDark sm:flex">
            <a href="#xususiyatlar" className="transition hover:text-glass-textLight dark:hover:text-glass-textDark">{t("nav_features")}</a>
            <a href="#klinikalar" className="transition hover:text-glass-textLight dark:hover:text-glass-textDark">{t("nav_clinics")}</a>
          </nav>
          <div className="flex items-center gap-2">
            <div className="hidden sm:block"><LangMenu /></div>
            <ThemeToggle />
            <a href={`${APP_URL}/patient/login`} className="glass-btn-primary text-xs sm:text-sm">
              {t("nav_login")}
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-14 sm:pb-24 sm:pt-20 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="glass-pill-track">
            <span className="glass-pill-item-active">{t("hero_eyebrow")}</span>
          </span>
          <h1 className="mt-5 font-serif text-4xl italic leading-[1.08] tracking-tight text-glass-textLight dark:text-glass-textDark sm:text-5xl lg:text-[3.4rem]">
            {t("hero_title_1")}<br />
            <span className="bg-gradient-to-r from-glass-purple via-glass-magenta to-glass-teal bg-clip-text text-transparent">
              {t("hero_title_2")}
            </span>
          </h1>
          <p className="glass-muted mt-5 max-w-md text-base leading-relaxed sm:text-lg">
            {t("hero_subtitle")}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={`${APP_URL}/patient/login`} className="glass-btn-primary">
              {t("hero_cta_patient")}
            </a>
            <a href="#klinikalar" className="glass-btn-outline">
              {t("hero_cta_clinic")}
            </a>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-8 gap-y-2 text-sm">
            <div><span className="font-bold text-glass-textLight dark:text-glass-textDark">8,700+</span> <span className="glass-muted">{t("stat_clinics")}</span></div>
            <div><span className="font-bold text-glass-textLight dark:text-glass-textDark">3</span> <span className="glass-muted">{t("stat_languages")}</span></div>
            <div><span className="font-bold text-glass-textLight dark:text-glass-textDark">7</span> <span className="glass-muted">{t("stat_roles")}</span></div>
          </div>
        </div>

        <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center">
          <div className="clinIQ-orbit-ring absolute inset-[6%] rounded-full border border-dashed border-glass-purple/30 dark:border-glass-purpleLight/25" />
          <div className="clinIQ-orbit-dot absolute h-3.5 w-3.5 rounded-full bg-gradient-to-r from-glass-teal to-glass-magenta shadow-glowPurple" />
          {FLOW_NODES.map((node, i) => {
            const angle = (i / FLOW_NODES.length) * 2 * Math.PI - Math.PI / 2;
            const radius = 44;
            const x = 50 + radius * Math.cos(angle);
            const y = 50 + radius * Math.sin(angle);
            return (
              <div
                key={node.key}
                className="glass-card absolute flex w-[86px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 p-2.5 text-center sm:w-[96px]"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <span className="text-lg sm:text-xl" aria-hidden="true">{node.icon}</span>
                <span className="text-[10px] font-semibold leading-tight text-glass-textLight dark:text-glass-textDark sm:text-[11px]">
                  {t(node.labelKey)}
                </span>
              </div>
            );
          })}
          <div className="glass-card flex h-24 w-24 flex-col items-center justify-center gap-0.5 rounded-full text-center sm:h-28 sm:w-28">
            <span className="text-[10px] font-bold uppercase tracking-wide text-glass-mutedLight dark:text-glass-mutedDark">ClinIQ</span>
            <span className="text-[9px] leading-tight text-glass-mutedLight dark:text-glass-mutedDark">{t("hero_hub_label")}</span>
          </div>
        </div>
      </section>

      <section id="xususiyatlar" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <h2 className="font-serif text-2xl italic text-glass-textLight dark:text-glass-textDark sm:text-3xl">
          {t("features_title")}
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURE_CARDS.map((f) => (
            <div key={f.titleKey} className="glass-card p-5">
              <span className="text-2xl" aria-hidden="true">{f.icon}</span>
              <p className="mt-3 text-sm font-bold text-glass-textLight dark:text-glass-textDark">{t(f.titleKey)}</p>
              <p className="glass-muted mt-1.5 text-xs leading-relaxed">{t(f.descKey)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="glass-card grid items-center gap-8 overflow-hidden p-7 sm:p-10 lg:grid-cols-2">
          <div>
            <span className="glass-pill-track"><span className="glass-pill-item-active">{t("emergency_eyebrow")}</span></span>
            <h3 className="mt-4 font-serif text-2xl italic text-glass-textLight dark:text-glass-textDark sm:text-3xl">
              {t("emergency_title")}
            </h3>
            <p className="glass-muted mt-3 max-w-md text-sm leading-relaxed sm:text-base">
              {t("emergency_desc")}
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              <li className="flex items-center gap-2"><span className="text-glass-teal">✓</span><span className="glass-muted">{t("emergency_point_1")}</span></li>
              <li className="flex items-center gap-2"><span className="text-glass-teal">✓</span><span className="glass-muted">{t("emergency_point_2")}</span></li>
              <li className="flex items-center gap-2"><span className="text-glass-teal">✓</span><span className="glass-muted">{t("emergency_point_3")}</span></li>
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="glass-card w-full max-w-[240px] border-2 border-glass-danger/30 p-5 text-center">
              <p className="text-sm font-bold text-glass-danger">🆘 {t("emergency_card_label")}</p>
              <div className="mx-auto mt-4 grid h-32 w-32 grid-cols-5 gap-[3px] rounded-lg bg-glass-textLight/90 p-2.5 dark:bg-glass-textDark/90">
                {Array.from({ length: 25 }).map((_, i) => (
                  <span key={i} className={`rounded-[1px] ${[0,1,2,3,4,5,9,10,14,15,19,20,21,22,24,6,8,11,13,16,18].includes(i) ? "bg-white dark:bg-glass-bgDark1" : "bg-transparent"}`} />
                ))}
              </div>
              <p className="glass-muted mt-4 text-[11px]">{t("emergency_card_scan_note")}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="klinikalar" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="glass-card overflow-hidden p-8 text-center sm:p-12">
          <h3 className="font-serif text-2xl italic text-glass-textLight dark:text-glass-textDark sm:text-3xl">
            {t("clinics_title")}
          </h3>
          <p className="glass-muted mx-auto mt-3 max-w-xl text-sm leading-relaxed sm:text-base">
            {t("clinics_desc")}
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href={`${APP_URL}/login`} className="glass-btn-secondary">{t("clinics_cta")}</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-glass-borderLight px-5 py-8 dark:border-glass-borderDark">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs sm:flex-row">
          <span className="font-bold">
            <span className="text-glass-textLight dark:text-glass-textDark">Clin</span>
            <span className="bg-gradient-to-r from-glass-teal via-glass-purple to-glass-magenta bg-clip-text text-transparent">IQ</span>
          </span>
          <p className="glass-muted">{t("footer_tagline")}</p>
        </div>
      </footer>
    </div>
  );
}
