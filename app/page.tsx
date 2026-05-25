import type { Metadata } from "next";
import { MarketPageShell } from "@/components/layout/MarketPageShell";
import { HomePage } from "@/components/pages/HomePage";
import { jordanContent } from "@/content/markets/jordan";
import { jordanConfig } from "@/config/jordan";
import { buildPageMetadata } from "@/lib/metadata";

const locale = jordanConfig.defaultLocale;

export function generateMetadata(): Metadata {
  return buildPageMetadata({
    content: jordanContent[locale],
    locale,
    page: "home",
    path: jordanConfig.routes.home,
  });
}

export default function JordanHome() {
  const content = jordanContent[locale];

  return (
    <MarketPageShell locale={locale} config={jordanConfig} content={content} activePage="home">
      <HomePage content={content.home} config={jordanConfig} locale={locale} />
    </MarketPageShell>
  );
}
