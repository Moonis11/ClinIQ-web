"use client";

import { useLang } from "@/lib/i18n";
import Image from "next/image";

export default function SiteFooter() {
  const { t } = useLang();

  return (
    <footer className="border-t border-glass-borderLight px-5 py-10 dark:border-glass-borderDark">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="h-10 w-10 overflow-hidden rounded-xl border border-white/15 bg-white p-0.5 shadow-sm">
              <Image src="/cliniq-logo.jpeg" alt="ClinIQ" width={40} height={40} className="h-full w-full rounded-[10px] object-cover" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-lg font-extrabold tracking-tight">
                <span className="text-white">Clin</span>
                <span className="bg-gradient-to-r from-[#8BE0D7] via-[#55CBBF] to-[#35BFB2] bg-clip-text text-transparent">IQ</span>
              </span>
              <span className="mt-1 text-[8px] font-semibold tracking-[0.08em] text-white/60">One continuous record. Every step of care.</span>
            </span>
          </div>
          <p className="mt-3 max-w-xs text-xs leading-relaxed text-white/75">{t("footer_tagline")}</p>
        </div>
        <div>
          <p className="text-xs font-bold text-white">{t("footer_contact_title")}</p>
          <div className="mt-2 space-y-1.5 text-xs text-white/75">
            <a href="tel:+998974646665" className="block transition hover:text-white hover:underline">+998 97 464 66 65</a>
            <a href="mailto:cliniq.uz@gmail.com" className="block transition hover:text-white hover:underline">cliniq.uz@gmail.com</a>
          </div>
        </div>
        <div>
          <p className="text-xs font-bold text-white">{t("footer_links_title")}</p>
          <div className="mt-2 space-y-1.5 text-xs text-white/75">
            <a href="/xizmatlar" className="block transition hover:text-white hover:underline">{t("nav_services")}</a>
            <a href="/privacy" className="block transition hover:text-white hover:underline">{t("footer_privacy")}</a>
            <a href="/terms" className="block transition hover:text-white hover:underline">{t("footer_terms")}</a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl border-t border-white/15 pt-5">
        <p className="text-center text-[11px] text-white/60">© {new Date().getFullYear()} ClinIQ. {t("footer_rights")}</p>
      </div>
    </footer>
  );
}
