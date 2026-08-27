"use client";

import { useLang, TranslationKey } from "@/lib/i18n";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

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

export default function ServicesPage() {
  const { t } = useLang();

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-5 pb-10 pt-14 sm:pt-20">
        <span className="glass-pill-track">
          <span className="glass-pill-item-active">{t("services_eyebrow")}</span>
        </span>
        <h1 className="mt-5 font-serif text-3xl italic text-glass-textLight dark:text-glass-textDark sm:text-4xl">
          {t("services_title")}
        </h1>
        <p className="glass-muted mt-3 max-w-2xl text-base leading-relaxed">
          {t("services_subtitle")}
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10">
        <h2 className="font-serif text-2xl italic text-glass-textLight dark:text-glass-textDark">
          {t("patient_features_title")}
        </h2>
        <p className="glass-muted mt-2 max-w-xl text-sm sm:text-base">{t("patient_features_subtitle")}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PATIENT_FEATURES.map((f) => (
            <div key={f.titleKey} className="glass-card p-5">
              <span className="mb-1 block h-1.5 w-8 rounded-full bg-gradient-to-r from-glass-teal to-glass-purple" aria-hidden="true" />
              <p className="mt-3 text-sm font-bold text-glass-textLight dark:text-glass-textDark">{t(f.titleKey)}</p>
              <p className="glass-muted mt-1.5 text-xs leading-relaxed">{t(f.descKey)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10">
        <h2 className="font-serif text-2xl italic text-glass-textLight dark:text-glass-textDark">
          {t("clinic_features_title")}
        </h2>
        <p className="glass-muted mt-2 max-w-xl text-sm sm:text-base">{t("clinic_features_subtitle")}</p>
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

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="glass-card overflow-hidden p-8 text-center sm:p-12">
          <h3 className="font-serif text-2xl italic text-glass-textLight dark:text-glass-textDark sm:text-3xl">
            {t("clinics_title")}
          </h3>
          <p className="glass-muted mx-auto mt-3 max-w-xl text-sm leading-relaxed sm:text-base">
            {t("clinics_desc")}
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="/#aloqa" className="glass-btn-secondary">{t("clinics_cta")}</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
