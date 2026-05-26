import type { Metadata } from "next";
import { Suspense } from "react";
import { jordanContent } from "@/content/markets/jordan";
import { jordanConfig } from "@/config/jordan";
import { buildPageMetadata } from "@/lib/metadata";
import { JordanFaqClient } from "./JordanFaqClient";

export function generateMetadata(): Metadata {
  const locale = jordanConfig.defaultLocale;

  return buildPageMetadata({
    content: jordanContent[locale],
    locale,
    page: "faq",
    path: jordanConfig.routes.faq,
  });
}

export default function JordanFaq() {
  return (
    <Suspense fallback={null}>
      <JordanFaqClient />
    </Suspense>
  );
}
