import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DocumentLocale } from "@/components/layout/DocumentLocale";
import { directionForLocale } from "@/lib/direction";
import type { Locale, LocalizedMarketContent, MarketConfig } from "@/types/landing";
import { jordanThemeStyle } from "@/themes/jordanTheme";

function PetraBackdrop() {
  return (
    <div className="backdrop-petra" aria-hidden="true">
      <svg preserveAspectRatio="xMidYMax meet" viewBox="0 0 1200 520" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 520H1200V454L1104 430L1026 352L938 386L842 322L774 354L696 310L620 356L540 292L434 350L314 282L200 362L108 332L0 406Z"
          fill="currentColor"
          opacity="0.3"
        />
        <path
          d="M322 468V326L356 292H418L442 238H556L580 292H640L676 326V468Z"
          fill="currentColor"
          opacity="0.86"
        />
        <path
          d="M380 468V350H414V298H584V350H618V468Z"
          fill="#060505"
          opacity="0.92"
        />
        <path
          d="M446 468V324C446 294 470 270 500 270H512C542 270 566 294 566 324V468Z"
          fill="currentColor"
          opacity="0.9"
        />
        <path
          d="M474 468V336C474 318 488 304 506 304C524 304 538 318 538 336V468Z"
          fill="#160d08"
          opacity="0.9"
        />
        <rect fill="currentColor" height="112" opacity="0.78" width="38" x="248" y="356" />
        <rect fill="currentColor" height="132" opacity="0.78" width="38" x="712" y="336" />
        <path
          d="M874 468V360L918 328H994L1026 270H1094L1128 328H1166V468Z"
          fill="currentColor"
          opacity="0.54"
        />
        <path
          d="M916 468V384H950V340H1080V384H1112V468Z"
          fill="#060505"
          opacity="0.64"
        />
      </svg>
    </div>
  );
}

export function MarketPageShell({
  children,
  locale,
  config,
  content,
  activePage,
}: {
  children: React.ReactNode;
  locale: Locale;
  config: MarketConfig;
  content: LocalizedMarketContent;
  activePage: "home" | "partnership" | "faq";
}) {
  const dir = directionForLocale(locale);

  return (
    <div className={`market-shell ${config.backgroundVariant}`} lang={locale} dir={dir} style={jordanThemeStyle()}>
      <DocumentLocale locale={locale} />
      <div className="market-backdrop" aria-hidden="true">
        <span className="backdrop-grid-plane" />
        <span className="backdrop-horizon" />
        <PetraBackdrop />
        <span className="backdrop-pattern" />
        <span className="backdrop-vignette" />
      </div>
      <Header locale={locale} config={config} content={content} activePage={activePage} />
      {children}
      <Footer locale={locale} config={config} content={content} />
    </div>
  );
}
