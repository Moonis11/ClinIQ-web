"use client";

import { useLang, TranslationKey } from "@/lib/i18n";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";
import PricingSection from "@/components/PricingSection";
import StepsSection from "@/components/StepsSection";
import FaqSection from "@/components/FaqSection";
import { HeroMockup, AboutMockup, PatientDashboardMockup, ClinicDashboardMockup } from "@/components/AppMockups";
import AiBrainMark from "@/components/AiBrainMark";
import Image from "next/image";
import OnlineConsultationShowcase from "@/components/OnlineConsultationShowcase";

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

const AI_FEATURES: { titleKey: TranslationKey; descKey: TranslationKey }[] = [
  { titleKey: "pf_5_title", descKey: "pf_5_desc" },
  { titleKey: "cf_2_title", descKey: "cf_2_desc" },
  { titleKey: "cf_3_title", descKey: "cf_3_desc" },
  { titleKey: "pf_9_title", descKey: "pf_9_desc" },
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

const ENTERPRISE_PILLARS: { number: string; titleKey: TranslationKey; descKey: TranslationKey }[] = [
  { number: "01", titleKey: "enterprise_data_title", descKey: "enterprise_data_desc" },
  { number: "02", titleKey: "enterprise_workflow_title", descKey: "enterprise_workflow_desc" },
  { number: "03", titleKey: "enterprise_ai_title", descKey: "enterprise_ai_desc" },
  { number: "04", titleKey: "enterprise_security_title", descKey: "enterprise_security_desc" },
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
          <div className="glass-card hero-brand-frame aspect-[4/5] overflow-hidden p-6 sm:p-10">
            <div className="hero-visual-bg absolute inset-0" />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600 dark:text-white/65">
                <span>{t("visual_clinical_intelligence")}</span><span>UZ • RU • EN</span>
              </div>
              <div className="mx-auto w-full max-w-[300px] overflow-hidden rounded-[2rem] bg-white p-5 shadow-[0_30px_80px_rgba(0,0,0,0.4)] sm:p-7">
                <Image src="/cliniq-logo.jpeg" alt="ClinIQ logo" width={512} height={512} priority className="aspect-square w-full object-cover" />
              </div>
              <div className="flex items-center gap-3 text-xs font-medium text-slate-600 dark:text-white/75">
                <span className="h-2 w-2 rounded-full bg-glass-teal shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
                <span>{t("visual_continuous_record")}</span>
              </div>
            </div>
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
          <div className="glass-card absolute -top-5 -right-4 hidden h-40 w-32 overflow-hidden p-0 sm:-top-6 sm:-right-6 sm:block sm:h-48 sm:w-36">
            <HeroMockup />
          </div>
        </div>
      </section>

      <section aria-label="ClinIQ trust principles" className="border-y border-glass-borderLight bg-white/55 dark:border-glass-borderDark dark:bg-white/[0.025]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-5 sm:grid-cols-4">
          {["trust_ai", "trust_security", "trust_audit", "trust_region"].map((key, index) => (
            <div key={key} className="flex items-center gap-3 px-3 py-5 sm:px-5">
              <span className="text-xs font-black text-glass-purple">0{index + 1}</span>
              <span className="text-xs font-semibold leading-snug text-glass-textLight dark:text-glass-textDark">{t(key as TranslationKey)}</span>
            </div>
          ))}
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
            <div className="h-64 overflow-hidden rounded-2xl lg:h-auto">
              <AboutMockup />
            </div>
          </div>
        </div>
      </section>

      <section id="platforma" className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-glass-purple">{t("enterprise_eyebrow")}</span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-glass-textLight dark:text-glass-textDark sm:text-4xl lg:text-5xl">{t("enterprise_title")}</h2>
          <p className="glass-muted mt-5 max-w-2xl text-base leading-relaxed sm:text-lg">{t("enterprise_desc")}</p>
        </div>
        <div className="mt-10 grid overflow-hidden rounded-[2rem] border border-glass-borderLight bg-white/70 shadow-[0_25px_80px_rgba(29,43,91,0.10)] dark:border-glass-borderDark dark:bg-white/[0.035] sm:grid-cols-2 lg:grid-cols-4">
          {ENTERPRISE_PILLARS.map((pillar) => (
            <article key={pillar.number} className="group min-h-56 border-b border-glass-borderLight p-6 transition hover:bg-white dark:border-glass-borderDark dark:hover:bg-white/[0.05] sm:border-r lg:border-b-0">
              <span className="text-xs font-black text-glass-purple">{pillar.number}</span>
              <div className="mt-8 h-1 w-12 rounded-full bg-gradient-to-r from-glass-teal via-glass-purple to-glass-magenta transition-all group-hover:w-20" />
              <h3 className="mt-5 text-base font-bold text-glass-textLight dark:text-glass-textDark">{t(pillar.titleKey)}</h3>
              <p className="glass-muted mt-3 text-sm leading-relaxed">{t(pillar.descKey)}</p>
            </article>
          ))}
        </div>
      </section>

      {/* --- AI bo'limi --- */}
      <section id="ai" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="glass-card grid items-center gap-8 overflow-hidden p-7 sm:p-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <h2 className="font-serif text-2xl italic text-glass-textLight dark:text-glass-textDark sm:text-3xl">
              {t("ai_section_title")}
            </h2>
            <p className="glass-muted mt-3 text-sm leading-relaxed sm:text-base">{t("ai_section_body")}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {AI_FEATURES.map((f) => (
                <div key={f.titleKey} className="rounded-xl bg-white/5 p-3.5">
                  <span className="mb-1 block h-1.5 w-8 rounded-full bg-gradient-to-r from-glass-teal to-glass-purple" aria-hidden="true" />
                  <p className="text-xs font-bold text-glass-textLight dark:text-glass-textDark">{t(f.titleKey)}</p>
                  <p className="glass-muted mt-1 text-[11px] leading-relaxed">{t(f.descKey)}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="h-64 sm:h-72">
            <AiBrainMark />
          </div>
        </div>
      </section>

      <section id="konsultatsiya" className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">{t("consultation_eyebrow")}</span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-glass-textLight dark:text-glass-textDark sm:text-4xl">{t("consultation_title")}</h2>
            <p className="glass-muted mt-5 text-base leading-relaxed">{t("consultation_desc")}</p>
            <div className="mt-7 space-y-3">
              {["consultation_point_1", "consultation_point_2", "consultation_point_3"].map((key) => (
                <div key={key} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-[10px] font-black text-[#061225]">✓</span>
                  <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">{t(key as TranslationKey)}</span>
                </div>
              ))}
            </div>
            <a href={`${APP_URL}/patient/login`} className="consultation-theme-cta mt-8 inline-flex rounded-full px-6 py-3 text-sm font-extrabold shadow-[0_12px_35px_rgba(34,211,238,0.22)] transition">{t("hero_cta_patient")}</a>
          </div>
          <OnlineConsultationShowcase />
        </div>
      </section>

      <section id="nima-uchun" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div>
          <h2 className="font-serif text-2xl italic text-glass-textLight dark:text-glass-textDark sm:text-3xl">
            {t("why_title")}
          </h2>
          <p className="glass-muted mt-2 max-w-xl text-sm sm:text-base">{t("why_subtitle")}</p>
        </div>
        <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
          <p className="glass-muted text-sm leading-relaxed sm:text-base">{t("why_body")}</p>
          <div className="ecosystem-shell relative mx-auto flex aspect-[4/3] w-full max-w-sm -translate-y-5 items-center justify-center sm:-translate-y-7">
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 75" preserveAspectRatio="none">
              <defs>
                <linearGradient id="connector-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop className="connector-start" offset="0%" />
                  <stop className="connector-end" offset="100%" />
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
            <div className="ecosystem-halo absolute inset-[17%] rounded-full border border-cyan-300/10" />
            <div className="ecosystem-particle ecosystem-particle-a absolute h-2 w-2 rounded-full" />
            <div className="ecosystem-particle ecosystem-particle-b absolute h-1.5 w-1.5 rounded-full" />
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
              <span className="hub-radar absolute inset-[-12px] rounded-full border border-cyan-300/25" aria-hidden="true" />
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
            <PatientDashboardMockup />
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
          <div className="glass-card order-2 h-72 overflow-hidden p-0 sm:h-96 lg:order-1">
            <ClinicDashboardMockup />
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

      {/* --- Tanlov uchun ta'sir va klinik ishonch --- */}
      <section id="yangiliklar" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <h2 className="font-serif text-2xl italic text-glass-textLight dark:text-glass-textDark sm:text-3xl">
          {t("nav_news")}
        </h2>
        <div className="glass-card mt-8 overflow-hidden p-7 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-center">
            <div>
              <span className="glass-pill-track"><span className="glass-pill-item-active">{t("visual_human_ai")}</span></span>
              <p className="mt-5 text-xl font-bold text-glass-textLight dark:text-glass-textDark sm:text-2xl">{t("news_empty_title")}</p>
              <p className="glass-muted mt-3 max-w-2xl text-sm leading-relaxed sm:text-base">{t("news_empty_desc")}</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                ["01", t("visual_oversight")],
                ["02", t("visual_identity")],
                ["03", t("visual_access")],
                ["04", t("visual_audit")],
              ].map(([number, label]) => (
                <div key={number} className="rounded-2xl border border-glass-borderLight bg-white/40 p-4 dark:border-glass-borderDark dark:bg-white/[0.04]">
                  <span className="text-xs font-bold text-glass-teal">{number}</span>
                  <p className="mt-2 text-xs font-semibold text-glass-textLight dark:text-glass-textDark sm:text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>
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
      <section id="faq" className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
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
