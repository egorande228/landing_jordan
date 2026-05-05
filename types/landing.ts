export type Locale = "ar" | "en";
export type PageId = "home" | "partnership" | "faq";
export type CardTone = "gold" | "red" | "green" | "sand" | "dark";
export type MediaVariant = "hero" | "games" | "sports" | "offers" | "partnership" | "dashboard" | "faq";
export type MediaRatio = "21:9" | "16:10" | "4:3" | "1:1" | "3:4";
export type IconTag = {
  label: string;
  src: string;
  alt?: string;
};

export type MarketConfig = {
  market: string;
  slug: string;
  brand: string;
  supportedLocales: readonly Locale[];
  defaultLocale: Locale;
  themeFamily: string;
  themeFile: string;
  backgroundVariant: "bg-spotlight" | "bg-depth" | "bg-grid-minimal" | "bg-premium-minimal";
  compliance: {
    status: "approved" | "requires-review" | "blocked";
    publicLaunchAllowed: boolean;
    ctaMode: "live" | "gated" | "disabled";
    note: string;
  };
  routes: {
    home: string;
    partnership: string;
    faq: string;
  };
  contact: {
    supportHref: string;
    partnershipHref: string;
    playerHref: string;
  };
  profiles: Record<string, Record<string, string>>;
};

export type ThemeTokens = {
  color: {
    bg: string;
    bgTop: string;
    foreground: string;
    foregroundSoft: string;
    primary: string;
    primarySoft: string;
    primaryStrong: string;
    secondary?: string;
    surface: string;
    surfaceStrong: string;
    surfaceAccent: string;
    borderSoft: string;
    borderStrong: string;
    gridLine: string;
    glow: string;
    success?: string;
    danger?: string;
  };
  type: {
    display: string;
    heading: string;
    subheading: string;
    cardTitle: string;
    bodyLg: string;
    body: string;
    label: string;
    meta: string;
    metric: string;
    metricSecondary: string;
    stat: string;
  };
  radius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    pill: string;
  };
  space: {
    sectionY: string;
    sectionYMobile: string;
    containerX: string;
    cardPadding: string;
    gridGap: string;
  };
  shadow: {
    soft: string;
    card: string;
    hero: string;
    glow: string;
  };
  motion: {
    durationFast: number;
    durationBase: number;
    durationSlow: number;
    durationLoop: number;
    easingStandard: string;
    easingEntrance: string;
    easingEmphasis: string;
  };
};

export type Cta = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "quiet";
  iconSrc?: string;
  iconAlt?: string;
};

export type MediaPlaceholder = {
  type: "placeholder";
  slot: string;
  label: string;
  ratio: MediaRatio;
  fit: "cover" | "contain";
  variant?: MediaVariant;
};

export type MediaAsset = {
  type: "asset";
  src: string;
  label: string;
  ratio: MediaRatio;
  fit: "cover" | "contain";
  variant?: MediaVariant;
};

export type MediaVideo = {
  type: "video";
  src: string;
  posterSrc: string;
  label: string;
  ratio: MediaRatio;
  fit: "cover" | "contain";
  variant?: MediaVariant;
  mimeType?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
};

export type MediaItem = MediaPlaceholder | MediaAsset | MediaVideo;

export type Card = {
  title: string;
  body: string;
  label?: string;
  eyebrow?: string;
  metric?: string;
  tone?: CardTone;
  chips?: string[];
  points?: string[];
  footnote?: string;
  media?: MediaItem;
};

export type SectionContent = {
  eyebrow?: string;
  title: string;
  body?: string;
  cta?: Cta;
  secondaryCta?: Cta;
  chips?: string[];
  iconTags?: IconTag[];
  media?: MediaItem;
  cards?: Card[];
};

export type HeroSectionContent = SectionContent & {
  stats: Card[];
};

export type LocalizedMarketContent = {
  seo: Record<PageId, {
    title: string;
    description: string;
  }>;
  nav: {
    home: string;
    games: string;
    sports: string;
    offers: string;
    partnership: string;
    faq: string;
    language: string;
  };
  footer: {
    brandText: string;
    legal: string;
    homeTitle: string;
    partnershipTitle: string;
    supportTitle: string;
    partnershipLinks: { label: string; href: string }[];
    supportLinks: { label: string; href: string }[];
  };
  compliance: {
    label: string;
    message: string;
  };
  home: {
    hero: HeroSectionContent;
    games: SectionContent;
    sports: SectionContent;
    esports: SectionContent;
    offers: SectionContent;
    finalCta: SectionContent;
  };
  partnership: {
    hero: HeroSectionContent;
    benefits: SectionContent;
    steps: SectionContent;
    paths: SectionContent;
    tools: SectionContent;
    finalCta: SectionContent;
  };
  faq: {
    hero: SectionContent;
    player: SectionContent & { items: { question: string; answer: string }[] };
    partnership: SectionContent & { items: { question: string; answer: string }[] };
    support: SectionContent;
  };
};
