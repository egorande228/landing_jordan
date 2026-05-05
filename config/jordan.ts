import type { MarketConfig } from "@/types/landing";

export const jordanRoutes = {
  home: "/",
  partnership: "/partnership",
  faq: "/faq",
} as const;

export const jordanConfig: MarketConfig = {
  market: "Jordan",
  slug: "jordan",
  brand: "MELBET",
  supportedLocales: ["ar", "en"],
  defaultLocale: "ar",
  themeFamily: "red-green-national",
  themeFile: "themes/jordanTheme.ts",
  backgroundVariant: "bg-premium-minimal",
  compliance: {
    status: "requires-review",
    publicLaunchAllowed: false,
    ctaMode: "gated",
    note: "Jordan market must remain compliance-gated until legal review approves public acquisition, claims, offers, and CTAs.",
  },
  routes: jordanRoutes,
  contact: {
    supportHref: "#support",
    partnershipHref: "#contact",
    playerHref: "#availability",
  },
  profiles: {
    home: {
      hero: "home-hero-stage",
      discovery: "home-featured-grid",
      sports: "home-sports-showcase",
      offers: "home-offers-grid",
      finalCta: "final-cta-panel",
      density: "balanced",
      textMeasure: "md",
      surfaceMode: "accent-led",
      motionProfile: "standard",
    },
    partnership: {
      hero: "hero-split",
      benefits: "benefits-dashboard",
      steps: "steps-three-col",
      paths: "paths-dual-card",
      tools: "tools-showcase",
      finalCta: "final-cta-dual-card",
      density: "compact",
      textMeasure: "sm",
      surfaceMode: "restrained-mix",
      motionProfile: "subtle",
    },
    faq: {
      layout: "audience-separated",
      density: "compact",
      textMeasure: "md",
      surfaceMode: "restrained-mix",
      motionProfile: "subtle",
    },
  },
};
