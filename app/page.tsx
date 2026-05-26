import type { Metadata } from "next";
import { Suspense } from "react";
import { jordanContent } from "@/content/markets/jordan";
import { jordanConfig } from "@/config/jordan";
import { buildPageMetadata } from "@/lib/metadata";
import { JordanHomeClient } from "./JordanHomeClient";

export function generateMetadata(): Metadata {
  const locale = jordanConfig.defaultLocale;

  return buildPageMetadata({
    content: jordanContent[locale],
    locale,
    page: "home",
    path: jordanConfig.routes.home,
  });
}

export default function JordanHome() {
  return (
    <Suspense fallback={null}>
      <JordanHomeClient />
    </Suspense>
  );
}
