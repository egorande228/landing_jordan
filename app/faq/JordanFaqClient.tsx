"use client";

import { useSearchParams } from "next/navigation";
import { MarketPageShell } from "@/components/layout/MarketPageShell";
import { FaqPage } from "@/components/pages/FaqPage";
import { jordanContent } from "@/content/markets/jordan";
import { jordanConfig } from "@/config/jordan";
import { resolveLocale } from "@/lib/locale";

export function JordanFaqClient() {
  const searchParams = useSearchParams();
  const locale = resolveLocale(searchParams.get("lang") ?? undefined, jordanConfig);
  const content = jordanContent[locale];

  return (
    <MarketPageShell locale={locale} config={jordanConfig} content={content} activePage="faq">
      <FaqPage content={content.faq} config={jordanConfig} locale={locale} />
    </MarketPageShell>
  );
}
