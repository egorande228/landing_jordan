import type { Metadata } from "next";
import { MarketPageShell } from "@/components/layout/MarketPageShell";
import { PartnershipPage } from "@/components/pages/PartnershipPage";
import { jordanContent } from "@/content/markets/jordan";
import { jordanConfig } from "@/config/jordan";
import { buildPageMetadata } from "@/lib/metadata";

const locale = jordanConfig.defaultLocale;

export function generateMetadata(): Metadata {
  return buildPageMetadata({
    content: jordanContent[locale],
    locale,
    page: "partnership",
    path: jordanConfig.routes.partnership,
  });
}

export default function JordanPartnership() {
  const content = jordanContent[locale];

  return (
    <MarketPageShell locale={locale} config={jordanConfig} content={content} activePage="partnership">
      <PartnershipPage content={content.partnership} config={jordanConfig} locale={locale} />
    </MarketPageShell>
  );
}
