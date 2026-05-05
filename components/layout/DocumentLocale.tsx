"use client";

import { useEffect } from "react";
import { directionForLocale } from "@/lib/direction";
import type { Locale } from "@/types/landing";

export function DocumentLocale({ locale }: { locale: Locale }) {
  useEffect(() => {
    const dir = directionForLocale(locale);

    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
    document.body.dir = dir;
  }, [locale]);

  return null;
}
