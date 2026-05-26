"use client";

import { useSearchParams } from "next/navigation";
import { MarketPageShell } from "@/components/layout/MarketPageShell";
import { PartnershipPage } from "@/components/pages/PartnershipPage";
import { jordanContent } from "@/content/markets/jordan";
import { jordanConfig } from "@/config/jordan";
import { resolveLocale } from "@/lib/locale";

export function JordanPartnershipClient() {
  const searchParams = useSearchParams();
  const locale = resolveLocale(searchParams.get("lang") ?? undefined, jordanConfig);
  const content = jordanContent[locale];

  return (
    <MarketPageShell locale={locale} config={jordanConfig} content={content} activePage="partnership">
      <PartnershipPage content={content.partnership} config={jordanConfig} locale={locale} />
    </MarketPageShell>
  );
}
