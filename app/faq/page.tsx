import type { Metadata } from "next";
import { MarketPageShell } from "@/components/layout/MarketPageShell";
import { FaqPage } from "@/components/pages/FaqPage";
import { jordanContent } from "@/content/markets/jordan";
import { jordanConfig } from "@/config/jordan";
import { buildPageMetadata } from "@/lib/metadata";

const locale = jordanConfig.defaultLocale;

export function generateMetadata(): Metadata {
  return buildPageMetadata({
    content: jordanContent[locale],
    locale,
    page: "faq",
    path: jordanConfig.routes.faq,
  });
}

export default function JordanFaq() {
  const content = jordanContent[locale];

  return (
    <MarketPageShell locale={locale} config={jordanConfig} content={content} activePage="faq">
      <FaqPage content={content.faq} config={jordanConfig} locale={locale} />
    </MarketPageShell>
  );
}
