"use client";

import { useLang, TranslationKey } from "@/lib/i18n";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";
import PricingSection from "@/components/PricingSection";
import StepsSection from "@/components/StepsSection";
import FaqSection from "@/components/FaqSection";

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

const PATIENT_FEATURES: { icon: string; titleKey: TranslationKey; descKey: TranslationKey }[] = [
  { icon: "\uD83D\uDCDD", titleKey: "pf_1_title", descKey: "pf_1_desc" },
  { icon: "\uD83D\uDCC5", titleKey: "pf_2_title", descKey: "pf_2_desc" },
  { icon: "\u2B50", titleKey: "pf_3_title", descKey: "pf_3_desc" },
  { icon: "\u2696\uFE0F", titleKey: "pf_4_title", descKey: "pf_4_desc" },
  { icon: "\uD83E\uDD16", titleKey: "pf_5_title", descKey: "pf_5_desc" },
  { icon: "\uD83E\uDDEA", titleKey: "pf_6_title", descKey: "pf_6_desc" },
  { icon: "\uD83D\uDC8A", titleKey: "pf_7_title", descKey: "pf_7_desc" },
  { icon: "\uD83C\uDF81", titleKey: "pf_8_title", descKey: "pf_8_desc" },
  { icon: "\uD83D\uDCC4", titleKey: "pf_9_title", descKey: "pf_9_desc" },
];

const CLINIC_FEATURES: { icon: string; titleKey: TranslationKey; descKey: TranslationKey }[] = [
  { icon: "\uD83D\uDC65", titleKey: "cf_1_title", descKey: "cf_1_desc" },
  { icon: "\u2728", titleKey: "cf_2_title", descKey: "cf_2_desc" },
  { icon: "\uD83E\uDDE0", titleKey: "cf_3_title", descKey: "cf_3_desc" },
  { icon: "\uD83D\uDCC8", titleKey: "cf_4_title", descKey: "cf_4_desc" },
  { icon: "\uD83D\uDC64", titleKey: "cf_5_title", descKey: "cf_5_desc" },
  { icon: "\uD83D\uDDC2\uFE0F", titleKey: "cf_6_title", descKey: "cf_6_desc" },
];

export default function LandingPage() {
  const { t } = useLang();

  return (
    <div className="min-h-screen">
      <SiteHeader home />

      <section id="top" className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-14 sm:pb-24 sm:pt-20 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="glass-pill-track">
            <span className="glass-pill-item-active">{t("hero_eyebrow")}</span>
          </span>
          <h1 className="mt-5 font-serif text-4xl italic leading-[1.08] tracking-tight text-glass-textLight dark:text-glass-textDark sm:text-5xl lg:text-[3.4rem]">
            {t("hero_title_1")}<br />
            <span className="bg-gradient-to-r from-glass-teal via-glass-tealLight to-glass-purple bg-clip-text text-transparent">
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

        <div className="relative mx-auto w-full max-w-md">
          <div className="glass-card overflow-hidden p-0">
            <video
              className="aspect-[4/5] w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={t("hero_photo_alt")}
              poster="https://images.pexels.com/videos/13808077/ekg-hologram-medical-pulse-13808077.jpeg?auto=compress&w=900&h=1125&fit=crop"
            >
              <source src="https://videos.pexels.com/video-files/13808077/13808077-hd_1920_1080_25fps.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="glass-card absolute -bottom-5 -left-5 flex items-center gap-3 p-3.5 pr-5 sm:-bottom-6 sm:-left-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-glass-teal to-glass-purple">
              <span className="h-3.5 w-3.5 rounded-full bg-white" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-extrabold leading-none text-glass-textLight dark:text-glass-textDark">8,700+</p>
              <p className="glass-muted mt-1 text-[11px] leading-none">{t("stat_clinics")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- ClinIQ haqida (to'liq) --- */}
      <section id="haqida" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="glass-card overflow-hidden p-7 sm:p-12">
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <h2 className="font-serif text-2xl italic text-glass-textLight dark:text-glass-textDark sm:text-3xl">
                {t("about_full_title")}
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed sm:text-base">
                <p className="glass-muted">{t("about_full_p1")}</p>
                <p className="glass-muted">{t("about_full_p2")}</p>
                <p className="glass-muted">{t("about_full_p3")}</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/5327654/pexels-photo-5327654.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop"
                alt={t("about_full_title")}
                className="h-full max-h-72 w-full object-cover lg:max-h-none"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="xususiyatlar" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
          <h2 className="font-serif text-2xl italic text-glass-textLight dark:text-glass-textDark sm:text-3xl">
            {t("features_title")}
          </h2>
          <div className="relative mx-auto flex aspect-[4/3] w-full max-w-sm items-center justify-center">
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 75" preserveAspectRatio="none">
              <defs>
                <linearGradient id="connector-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#14C7B0" />
                  <stop offset="100%" stopColor="#6D5DFB" />
                </linearGradient>
              </defs>
              {FLOW_NODES.map((node, i) => {
                const angle = (i / FLOW_NODES.length) * 2 * Math.PI - Math.PI / 2;
                const radius = 42;
                const x = 50 + radius * Math.cos(angle);
                const y = 50 + radius * Math.sin(angle) * 0.85;
                return (
                  <line
                    key={node.key}
                    x1="50" y1="37.5" x2={x} y2={y * 0.75}
                    stroke="url(#connector-grad)"
                    strokeWidth="0.4"
                    className="connector-line"
                    style={{ animationDelay: `${i * 0.35}s` }}
                  />
                );
              })}
            </svg>
            <div className="clinIQ-orbit-ring absolute inset-[8%] rounded-full border border-dashed border-glass-teal/30 dark:border-glass-purpleLight/25" />
            <div className="clinIQ-orbit-dot absolute h-3 w-3 rounded-full bg-gradient-to-r from-glass-teal to-glass-purple shadow-glowAccent" />
            {FLOW_NODES.map((node, i) => {
              const angle = (i / FLOW_NODES.length) * 2 * Math.PI - Math.PI / 2;
              const radius = 42;
              const x = 50 + radius * Math.cos(angle);
              const y = 50 + radius * Math.sin(angle) * 0.85;
              return (
                <div
                  key={node.key}
                  className="node-pulse glass-card absolute flex w-[76px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-0.5 p-2 text-center"
                  style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${i * 0.35}s` }}
                >
                  <span className="mb-0.5 block h-2 w-2 rounded-full bg-gradient-to-r from-glass-teal to-glass-purple" aria-hidden="true" />
                  <span className="text-[9px] font-semibold leading-tight text-glass-textLight dark:text-glass-textDark">
                    {t(node.labelKey)}
                  </span>
                </div>
              );
            })}
            <div className="hub-pulse glass-card relative flex h-[68px] w-[68px] flex-col items-center justify-center gap-0.5 rounded-full text-center">
              <span className="text-[9px] font-bold uppercase tracking-wide text-glass-mutedLight dark:text-glass-mutedDark">ClinIQ</span>
              <span className="text-[8px] leading-tight text-glass-mutedLight dark:text-glass-mutedDark">{t("hero_hub_label")}</span>
            </div>
          </div>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURE_CARDS.map((f) => (
            <div key={f.titleKey} className="glass-card p-5">
              <span className="mb-1 block h-1.5 w-8 rounded-full bg-gradient-to-r from-glass-teal to-glass-purple" aria-hidden="true" />
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

      {/* --- Bemorlar uchun to'liq imkoniyatlar --- */}
      <section id="bemorlar" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="font-serif text-2xl italic text-glass-textLight dark:text-glass-textDark sm:text-3xl">
              {t("patient_features_title")}
            </h2>
            <p className="glass-muted mt-2 max-w-xl text-sm sm:text-base">{t("patient_features_subtitle")}</p>
          </div>
          <div className="glass-card h-64 overflow-hidden p-0 sm:h-80">
            <img
              src="/images/cliniq-ai-mockup.png"
              alt={t("patient_features_title")}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PATIENT_FEATURES.map((f) => (
            <div key={f.titleKey} className="glass-card p-5">
              <span className="mb-1 block h-1.5 w-8 rounded-full bg-gradient-to-r from-glass-teal to-glass-purple" aria-hidden="true" />
              <p className="mt-3 text-sm font-bold text-glass-textLight dark:text-glass-textDark">{t(f.titleKey)}</p>
              <p className="glass-muted mt-1.5 text-xs leading-relaxed">{t(f.descKey)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Klinikalar uchun to'liq imkoniyatlar --- */}
      <section id="klinikalar" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="glass-card order-2 h-64 overflow-hidden p-0 sm:h-80 lg:order-1">
            <video className="h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" aria-label={t("clinic_features_title")}>
              <source src="https://videos.pexels.com/video-files/5234529/5234529-hd_1920_1080_25fps.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-serif text-2xl italic text-glass-textLight dark:text-glass-textDark sm:text-3xl">
              {t("clinic_features_title")}
            </h2>
            <p className="glass-muted mt-2 max-w-xl text-sm sm:text-base">{t("clinic_features_subtitle")}</p>
          </div>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CLINIC_FEATURES.map((f) => (
            <div key={f.titleKey} className="glass-card p-5">
              <span className="mb-1 block h-1.5 w-8 rounded-full bg-gradient-to-r from-glass-teal to-glass-purple" aria-hidden="true" />
              <p className="mt-3 text-sm font-bold text-glass-textLight dark:text-glass-textDark">{t(f.titleKey)}</p>
              <p className="glass-muted mt-1.5 text-xs leading-relaxed">{t(f.descKey)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Yangiliklar --- */}
      <section id="yangiliklar" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <h2 className="font-serif text-2xl italic text-glass-textLight dark:text-glass-textDark sm:text-3xl">
          {t("nav_news")}
        </h2>
        <div className="glass-card mt-8 flex flex-col items-center gap-3 p-10 text-center">
          <span className="text-3xl" aria-hidden="true">📰</span>
          <p className="text-sm font-bold text-glass-textLight dark:text-glass-textDark">{t("news_empty_title")}</p>
          <p className="glass-muted max-w-md text-sm">{t("news_empty_desc")}</p>
        </div>
      </section>

      {/* --- Narxlar (B2B) --- */}
      <section id="narxlar" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <h2 className="font-serif text-2xl italic text-glass-textLight dark:text-glass-textDark sm:text-3xl">
          {t("pricing_title")}
        </h2>
        <p className="glass-muted mt-2 max-w-xl text-sm sm:text-base">{t("pricing_subtitle")}</p>
        <div className="mt-8">
          <PricingSection />
        </div>
        <p className="glass-muted mt-4 text-xs italic">{t("pricing_per_doctor_note")}</p>
      </section>

      {/* --- Klinikalar uchun - so'rov formasi --- */}
      <section id="aloqa" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="glass-card grid gap-8 overflow-hidden p-8 sm:p-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center text-center lg:text-left">
            <h3 className="font-serif text-2xl italic text-glass-textLight dark:text-glass-textDark sm:text-3xl">
              {t("clinics_title")}
            </h3>
            <p className="glass-muted mx-auto mt-3 max-w-xl text-sm leading-relaxed sm:text-base lg:mx-0">
              {t("clinics_desc")}
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* --- 3 qadamda boshlash --- */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <h2 className="font-serif text-2xl italic text-glass-textLight dark:text-glass-textDark sm:text-3xl">
          {t("steps_title")}
        </h2>
        <p className="glass-muted mt-2 max-w-xl text-sm sm:text-base">{t("steps_subtitle")}</p>
        <div className="mt-8">
          <StepsSection />
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
        <h2 className="text-center font-serif text-2xl italic text-glass-textLight dark:text-glass-textDark sm:text-3xl">
          {t("faq_title")}
        </h2>
        <div className="mt-8">
          <FaqSection />
        </div>
      </section>

      {/* --- Biz haqimizda / asoschi --- */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="glass-card flex flex-col items-center gap-5 p-8 text-center sm:p-10">
          <span className="glass-pill-track"><span className="glass-pill-item-active">{t("about_title")}</span></span>
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-glass-teal to-glass-purple text-xl font-bold text-white">
            MN
          </div>
          <div>
            <p className="text-sm font-bold text-glass-textLight dark:text-glass-textDark">Munisa Nematova</p>
            <p className="glass-muted text-xs">{t("about_founder_role")}</p>
          </div>
          <p className="glass-muted max-w-2xl text-sm leading-relaxed">{t("about_founder_bio")}</p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
