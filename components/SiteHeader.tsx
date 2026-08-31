"use client";

import { useLang } from "@/lib/i18n";
import ThemeToggle from "@/components/ThemeToggle";
import LangMenu from "@/components/LangMenu";
import Image from "next/image";

const APP_URL = "https://cliniqpatient-production.up.railway.app";

export default function SiteHeader({ home = false }: { home?: boolean }) {
  const { t } = useLang();
  const base = home ? "" : "/";

  return (
    <header className="sticky top-0 z-30 border-b border-glass-borderLight bg-glass-cardLight backdrop-blur-xl dark:border-glass-borderDark dark:bg-glass-cardDark">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-3 sm:px-5">
        <a href="/" className="group flex shrink-0 items-center gap-2.5" aria-label="ClinIQ bosh sahifa">
          <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-xl border border-teal-900/10 bg-white p-0.5 shadow-sm ring-1 ring-black/[0.02] dark:border-white/15 dark:ring-white/5">
            <Image src="/cliniq-logo.jpeg" alt="ClinIQ" width={36} height={36} className="h-full w-full rounded-[10px] object-cover" />
          </span>
          <span className="hidden min-[390px]:flex flex-col leading-none">
            <span className="text-xl font-extrabold tracking-tight">
              <span className="text-slate-950 transition-colors dark:text-white">Clin</span>
              <span className="bg-gradient-to-r from-[#087F7A] via-[#0F9D9A] to-[#35BFB2] bg-clip-text text-transparent">IQ</span>
            </span>
            <span className="mt-1 hidden text-[8px] font-semibold tracking-[0.08em] text-slate-500 dark:text-white/55 sm:block">
              One continuous record. Every step of care.
            </span>
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
