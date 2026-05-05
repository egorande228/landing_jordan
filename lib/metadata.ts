import type { Metadata } from "next";
import { withLocale } from "@/lib/locale";
import type { Locale, LocalizedMarketContent, PageId } from "@/types/landing";

export function buildPageMetadata({
  content,
  locale,
  page,
  path,
}: {
  content: LocalizedMarketContent;
  locale: Locale;
  page: PageId;
  path: string;
}): Metadata {
  return {
    title: content.seo[page].title,
    description: content.seo[page].description,
    alternates: {
      canonical: path,
      languages: {
        ar: path,
        en: withLocale(path, "en"),
      },
    },
    openGraph: {
      title: content.seo[page].title,
      description: content.seo[page].description,
      locale: locale === "ar" ? "ar_JO" : "en_JO",
      type: "website",
    },
  };
}
