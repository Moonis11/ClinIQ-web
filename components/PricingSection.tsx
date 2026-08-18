"use client";

import { useLang } from "@/lib/i18n";

const TIERS = [
  { key: "trial", nameKey: "price_trial_name", priceKey: "price_trial_price", limitKey: "price_trial_limit", highlight: false },
  { key: "basic", nameKey: "price_basic_name", priceKey: "price_basic_price", limitKey: "price_basic_limit", highlight: false },
  { key: "pro", nameKey: "price_pro_name", priceKey: "price_pro_price", limitKey: "price_pro_limit", highlight: true },
  { key: "corporate", nameKey: "price_corporate_name", priceKey: "price_corporate_price", limitKey: "price_corporate_limit", highlight: false },
] as const;

export default function PricingSection() {
  const { t } = useLang();

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {TIERS.map((tier) => (
        <div
          key={tier.key}
          className={`glass-card p-5 ${tier.highlight ? "border-2 border-glass-magenta/50" : ""}`}
        >
          {tier.highlight && (
            <span className="glass-pill-item-active mb-2 inline-block text-[10px]">{t("price_popular_badge")}</span>
          )}
          <p className="text-base font-bold text-glass-textLight dark:text-glass-textDark">{t(tier.nameKey)}</p>
          <p className="mt-1 text-lg font-extrabold bg-gradient-to-r from-glass-teal to-glass-purple bg-clip-text text-transparent">
            {t(tier.priceKey)}
          </p>
          <p className="glass-muted mt-3 text-xs">{t(tier.limitKey)}</p>
        </div>
      ))}
    </div>
  );
}
