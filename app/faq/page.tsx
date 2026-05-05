import type { Metadata } from "next";
import { MarketPageShell } from "@/components/layout/MarketPageShell";
import { FaqPage } from "@/components/pages/FaqPage";
import { jordanContent } from "@/content/markets/jordan";
import { jordanConfig } from "@/config/jordan";
import { buildPageMetadata } from "@/lib/metadata";
import { resolveLocale } from "@/lib/locale";

type PageProps = {
  searchParams?: Promise<{ lang?: string }> | { lang?: string };
};

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const locale = resolveLocale(params?.lang, jordanConfig);

  return buildPageMetadata({
    content: jordanContent[locale],
    locale,
    page: "faq",
    path: jordanConfig.routes.faq,
  });
}

export default async function JordanFaq({ searchParams }: PageProps) {
  const params = await searchParams;
  const locale = resolveLocale(params?.lang, jordanConfig);
  const content = jordanContent[locale];

  return (
    <MarketPageShell locale={locale} config={jordanConfig} content={content} activePage="faq">
      <FaqPage content={content.faq} config={jordanConfig} locale={locale} />
    </MarketPageShell>
  );
}
