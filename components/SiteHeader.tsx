"use client";

import { useLang } from "@/lib/i18n";
import ThemeToggle from "@/components/ThemeToggle";
import LangMenu from "@/components/LangMenu";
import Image from "next/image";

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
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-3.5 sm:px-5">
        <a href="/" className="flex shrink-0 items-center gap-2 text-xl font-extrabold tracking-tight">
          <span className="h-9 w-9 shrink-0 overflow-hidden rounded-xl border border-glass-purple/20 bg-white shadow-sm">
            <Image src="/cliniq-logo.jpeg" alt="" width={36} height={36} className="h-full w-full object-cover" />
          </span>
          <span className="hidden min-[390px]:inline">
            <span className="text-glass-textLight dark:text-glass-textDark">Clin</span>
            <span className="bg-gradient-to-r from-glass-teal via-glass-purple to-glass-magenta bg-clip-text text-transparent">IQ</span>
          </span>
        </a>
        <nav className="hidden items-center gap-4 text-sm font-medium text-glass-mutedLight dark:text-glass-mutedDark xl:flex">
          <a href={`${base}#top`} className="transition hover:text-glass-textLight dark:hover:text-glass-textDark">{t("nav_home")}</a>
          <a href={`${base}#platforma`} className="transition hover:text-glass-textLight dark:hover:text-glass-textDark">{t("nav_platform")}</a>
          <a href={`${base}#ai`} className="transition hover:text-glass-textLight dark:hover:text-glass-textDark">AI</a>
          <a href={`${base}#konsultatsiya`} className="transition hover:text-glass-textLight dark:hover:text-glass-textDark">{t("nav_consultation")}</a>
          <a href={`${base}#bemorlar`} className="transition hover:text-glass-textLight dark:hover:text-glass-textDark">{t("nav_patients")}</a>
          <a href={`${base}#klinikalar`} className="transition hover:text-glass-textLight dark:hover:text-glass-textDark">{t("nav_clinics")}</a>
          <a href={`${base}#yangiliklar`} className="transition hover:text-glass-textLight dark:hover:text-glass-textDark">{t("nav_security")}</a>
          <a href={`${base}#narxlar`} className="transition hover:text-glass-textLight dark:hover:text-glass-textDark">{t("nav_pricing")}</a>
        </nav>
        <div className="flex min-w-0 items-center gap-1.5 sm:gap-2">
          <LangMenu />
          <ThemeToggle />
          <a href={`${APP_URL}/patient/login`} className="glass-btn-primary whitespace-nowrap px-3 text-xs sm:px-5 sm:text-sm">
            {t("nav_login")}
          </a>
        </div>
      </div>
    </header>
  );
}
