import { MelbetAnimatedLogo, getMelbetLogoPreset } from "@/components/logo";
import { localizeHref, withLocale } from "@/lib/locale";
import type { Locale, LocalizedMarketContent, MarketConfig } from "@/types/landing";

export function Footer({ locale, config, content }: { locale: Locale; config: MarketConfig; content: LocalizedMarketContent }) {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <MelbetAnimatedLogo {...getMelbetLogoPreset("footer")} className="footer-logo" />
        <p>{content.footer.brandText}</p>
      </div>
      <div className="footer-links-grid">
        <div>
          <h3>{content.footer.homeTitle}</h3>
          <a href={localizeHref(`${config.routes.home}#games`, locale)}>{content.nav.games}</a>
          <a href={localizeHref(`${config.routes.home}#sports`, locale)}>{content.nav.sports}</a>
          <a href={localizeHref(`${config.routes.home}#offers`, locale)}>{content.nav.offers}</a>
        </div>
        <div>
          <h3>{content.footer.partnershipTitle}</h3>
          {content.footer.partnershipLinks.map((link) => (
            <a key={link.href} href={localizeHref(link.href, locale)}>{link.label}</a>
          ))}
        </div>
        <div>
          <h3>{content.footer.supportTitle}</h3>
          <a href={withLocale(config.routes.faq, locale)}>{content.nav.faq}</a>
          {content.footer.supportLinks.map((link) => (
            <a key={link.href} href={localizeHref(link.href, locale)}>{link.label}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
