"use client";

import { useLang } from "@/lib/i18n";
import Image from "next/image";

export default function SiteFooter() {
  const { t } = useLang();

  return (
    <footer className="border-t border-glass-borderLight px-5 py-10 dark:border-glass-borderDark">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-10 w-10 overflow-hidden rounded-xl border border-glass-purple/20 bg-white shadow-sm"><Image src="/cliniq-logo.jpeg" alt="" width={40} height={40} className="h-full w-full object-cover" /></span>
            <span className="text-lg font-extrabold"><span className="text-glass-textLight dark:text-glass-textDark">Clin</span><span className="bg-gradient-to-r from-glass-teal via-glass-purple to-glass-magenta bg-clip-text text-transparent">IQ</span></span>
          </div>
          <p className="glass-muted mt-2 text-xs leading-relaxed">{t("footer_tagline")}</p>
        </div>
        <div>
          <p className="text-xs font-bold text-glass-textLight dark:text-glass-textDark">{t("footer_contact_title")}</p>
          <div className="glass-muted mt-2 space-y-1.5 text-xs">
            <a href="tel:+998974646665" className="block hover:underline">+998 97 464 66 65</a>
            <a href="mailto:cliniq.uz@gmail.com" className="block hover:underline">cliniq.uz@gmail.com</a>
          </div>
        </div>
        <div>
          <p className="text-xs font-bold text-glass-textLight dark:text-glass-textDark">{t("footer_links_title")}</p>
          <div className="glass-muted mt-2 space-y-1.5 text-xs">
            <a href="/xizmatlar" className="block hover:underline">{t("nav_services")}</a>
            <a href="/privacy" className="block hover:underline">{t("footer_privacy")}</a>
            <a href="/terms" className="block hover:underline">{t("footer_terms")}</a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl border-t border-glass-borderLight pt-5 dark:border-glass-borderDark">
        <p className="glass-muted text-center text-[11px]">© {new Date().getFullYear()} ClinIQ. {t("footer_rights")}</p>
      </div>
    </footer>
  );
}
