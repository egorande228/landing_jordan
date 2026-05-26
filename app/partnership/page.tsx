import type { Metadata } from "next";
import { Suspense } from "react";
import { jordanContent } from "@/content/markets/jordan";
import { jordanConfig } from "@/config/jordan";
import { buildPageMetadata } from "@/lib/metadata";
import { JordanPartnershipClient } from "./JordanPartnershipClient";

export function generateMetadata(): Metadata {
  const locale = jordanConfig.defaultLocale;

  return buildPageMetadata({
    content: jordanContent[locale],
    locale,
    page: "partnership",
    path: jordanConfig.routes.partnership,
  });
}

export default function JordanPartnership() {
  return (
    <Suspense fallback={null}>
      <JordanPartnershipClient />
    </Suspense>
  );
}
