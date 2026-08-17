"use client";

import { useEffect, useRef, useState } from "react";
import { useLang, TranslationKey } from "@/lib/i18n";
import OrganIllustration, { OrganType } from "@/components/OrganIllustration";

const SECTIONS: {
  key: string;
  organ: OrganType;
  navKey: TranslationKey;
  titleKey: TranslationKey;
  itemKeys: { titleKey: TranslationKey; descKey: TranslationKey }[];
}[] = [
  {
    key: "ai",
    organ: "brain",
    navKey: "scrolly_nav_ai",
    titleKey: "scrolly_title_ai",
    itemKeys: [
      { titleKey: "pf_5_title", descKey: "pf_5_desc" },
      { titleKey: "cf_2_title", descKey: "cf_2_desc" },
      { titleKey: "cf_3_title", descKey: "cf_3_desc" },
    ],
  },
  {
    key: "care",
    organ: "heart",
    navKey: "scrolly_nav_care",
    titleKey: "scrolly_title_care",
    itemKeys: [
      { titleKey: "feature_3_title", descKey: "feature_3_desc" },
      { titleKey: "pf_2_title", descKey: "pf_2_desc" },
      { titleKey: "emergency_title", descKey: "emergency_desc" },
    ],
  },
  {
    key: "compare",
    organ: "kidney",
    navKey: "scrolly_nav_compare",
    titleKey: "scrolly_title_compare",
    itemKeys: [
      { titleKey: "pf_4_title", descKey: "pf_4_desc" },
      { titleKey: "pf_3_title", descKey: "pf_3_desc" },
      { titleKey: "cf_5_title", descKey: "cf_5_desc" },
    ],
  },
  {
    key: "connect",
    organ: "lung",
    navKey: "scrolly_nav_connect",
    titleKey: "scrolly_title_connect",
    itemKeys: [
      { titleKey: "pf_7_title", descKey: "pf_7_desc" },
      { titleKey: "pf_9_title", descKey: "pf_9_desc" },
      { titleKey: "pf_8_title", descKey: "pf_8_desc" },
    ],
  },
];

export default function ScrollyFeatures() {
  const { t } = useLang();
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sectionRefs.current.findIndex((el) => el === entry.target);
            if (idx !== -1) setActiveIndex(idx);
          }
        });
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: 0 }
    );
    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function scrollTo(i: number) {
    sectionRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[200px_1fr_260px]">
      {/* Chap panel - Railway sozlamalari uslubidagi navigatsiya */}
      <nav className="hidden lg:block">
        <div className="sticky top-24 space-y-1">
          {SECTIONS.map((s, i) => (
            <button
              key={s.key}
              onClick={() => scrollTo(i)}
              className={`block w-full rounded-xl px-3.5 py-2.5 text-left text-sm transition ${
                activeIndex === i
                  ? "bg-glass-purple/15 font-semibold text-glass-textLight dark:text-glass-textDark"
                  : "glass-muted hover:bg-white/5"
              }`}
            >
              {t(s.navKey)}
            </button>
          ))}
        </div>
      </nav>

      {/* Mobil uchun - gorizontal tab tanlagich */}
      <div className="flex gap-2 overflow-x-auto pb-2 lg:hidden">
        {SECTIONS.map((s, i) => (
          <button
            key={s.key}
            onClick={() => scrollTo(i)}
            className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs transition ${
              activeIndex === i ? "bg-glass-purple text-white" : "glass-input"
            }`}
          >
            {t(s.navKey)}
          </button>
        ))}
      </div>

      {/* Markaziy kontent - bo'lim almashganda ONGDAN chapga sirg'aladi */}
      <div className="space-y-24 lg:space-y-40">
        {SECTIONS.map((s, i) => (
          <div
            key={s.key}
            ref={(el) => { sectionRefs.current[i] = el; }}
            className={`scrolly-panel ${activeIndex === i ? "scrolly-panel-active" : ""}`}
          >
            <h3 className="font-serif text-xl italic text-glass-textLight dark:text-glass-textDark sm:text-2xl">
              {t(s.titleKey)}
            </h3>
            <div className="mt-5 space-y-4">
              {s.itemKeys.map((item) => (
                <div key={item.titleKey} className="glass-card p-4">
                  <p className="text-sm font-bold text-glass-textLight dark:text-glass-textDark">{t(item.titleKey)}</p>
                  <p className="glass-muted mt-1 text-xs leading-relaxed">{t(item.descKey)}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* O'ng panel - joriy bo'limga mos, uzluksiz aylanib turuvchi organ */}
      <div className="hidden lg:block">
        <div className="sticky top-24 flex h-64 items-center justify-center">
          <div className="h-52 w-52">
            <OrganIllustration type={SECTIONS[activeIndex].organ} />
          </div>
        </div>
      </div>
    </div>
  );
}
