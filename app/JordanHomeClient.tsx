"use client";

import { useSearchParams } from "next/navigation";
import { MarketPageShell } from "@/components/layout/MarketPageShell";
import { HomePage } from "@/components/pages/HomePage";
import { jordanContent } from "@/content/markets/jordan";
import { jordanConfig } from "@/config/jordan";
import { resolveLocale } from "@/lib/locale";

export function JordanHomeClient() {
  const searchParams = useSearchParams();
  const locale = resolveLocale(searchParams.get("lang") ?? undefined, jordanConfig);
  const content = jordanContent[locale];

  return (
    <MarketPageShell locale={locale} config={jordanConfig} content={content} activePage="home">
      <HomePage content={content.home} config={jordanConfig} locale={locale} />
    </MarketPageShell>
  );
}
