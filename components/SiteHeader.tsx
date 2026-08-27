"use client";

import { useLang } from "@/lib/i18n";
import ThemeToggle from "@/components/ThemeToggle";
import LangMenu from "@/components/LangMenu";
import NeuralInfinityMark from "@/components/NeuralInfinityMark";

// Asosiy mahsulot (bemor/xodim ilovasi) - BOSHQA, alohida joylashtirilgan
// Railway xizmatida turadi.
const APP_URL = "https://cliniqpatient-production.up.railway.app";

// home=true bo'lsa - havolalar shu sahifadagi anchor'larga (#xususiyatlar
// va h.k.) ishora qiladi. Boshqa sahifalarda (masalan /xizmatlar) esa
// avval bosh sahifaga qaytarib, keyin o'sha anchor'ga tushiradi.
export default function SiteHeader({ home = false }: { home?: boolean }) {
  const { t } = useLang();
  const base = home ? "" : "/";

  return (
    <header className="sticky top-0 z-30 border-b border-glass-borderLight bg-glass-cardLight backdrop-blur-xl dark:border-glass-borderDark dark:bg-glass-cardDark">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a href="/" className="flex items-center gap-2 text-xl font-extrabold tracking-tight">
          <NeuralInfinityMark size={30} />
          <span>
            <span className="text-glass-textLight dark:text-glass-textDark">Clin</span>
            <span className="bg-gradient-to-r from-glass-teal via-glass-purple to-glass-magenta bg-clip-text text-transparent">IQ</span>
          </span>
        </a>
        <nav className="hidden items-center gap-4 text-sm font-medium text-glass-mutedLight dark:text-glass-mutedDark xl:flex">
          <a href={`${base}#top`} className="transition hover:text-glass-textLight dark:hover:text-glass-textDark">{t("nav_home")}</a>
          <a href={`${base}#haqida`} className="transition hover:text-glass-textLight dark:hover:text-glass-textDark">{t("nav_about")}</a>
          <a href={`${base}#nima-uchun`} className="transition hover:text-glass-textLight dark:hover:text-glass-textDark">{t("nav_why")}</a>
          <a href={`${base}#bemorlar`} className="transition hover:text-glass-textLight dark:hover:text-glass-textDark">{t("nav_patients")}</a>
          <a href={`${base}#klinikalar`} className="transition hover:text-glass-textLight dark:hover:text-glass-textDark">{t("nav_clinics")}</a>
          <a href={`${base}#yangiliklar`} className="transition hover:text-glass-textLight dark:hover:text-glass-textDark">{t("nav_news")}</a>
          <a href={`${base}#narxlar`} className="transition hover:text-glass-textLight dark:hover:text-glass-textDark">{t("nav_pricing")}</a>
          <a href={`${base}#faq`} className="transition hover:text-glass-textLight dark:hover:text-glass-textDark">{t("nav_faq")}</a>
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
  );
}
