import type { Metadata } from "next";
import { MarketPageShell } from "@/components/layout/MarketPageShell";
import { HomePage } from "@/components/pages/HomePage";
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
    page: "home",
    path: jordanConfig.routes.home,
  });
}

export default async function JordanHome({ searchParams }: PageProps) {
  const params = await searchParams;
  const locale = resolveLocale(params?.lang, jordanConfig);
  const content = jordanContent[locale];

  return (
    <MarketPageShell locale={locale} config={jordanConfig} content={content} activePage="home">
      <HomePage content={content.home} config={jordanConfig} locale={locale} />
    </MarketPageShell>
  );
}
