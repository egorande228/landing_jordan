import type { Locale, MarketConfig } from "@/types/landing";

export function resolveLocale(value: string | undefined, config: MarketConfig): Locale {
  if (value && config.supportedLocales.includes(value as Locale)) {
    return value as Locale;
  }
  return config.defaultLocale;
}

export function oppositeLocale(locale: Locale): Locale {
  return locale === "ar" ? "en" : "ar";
}

export function withLocale(path: string, locale: Locale): string {
  if (locale === "ar") return path;
  const [base, hash] = path.split("#");
  const separator = base.includes("?") ? "&" : "?";
  const localized = `${base}${separator}lang=${locale}`;
  return hash ? `${localized}#${hash}` : localized;
}

export function localizeHref(href: string, locale: Locale): string {
  if (/^(?:[a-z]+:|\/\/)/i.test(href)) {
    return href;
  }

  return withLocale(href, locale);
}
