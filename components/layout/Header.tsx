"use client";

import { useState } from "react";
import { MelbetAnimatedLogo, getMelbetLogoPreset } from "@/components/logo";
import { localizeHref, withLocale } from "@/lib/locale";
import { cn } from "@/lib/cn";
import type { Locale, LocalizedMarketContent, MarketConfig } from "@/types/landing";

export function Header({
  locale,
  config,
  content,
  activePage,
}: {
  locale: Locale;
  config: MarketConfig;
  content: LocalizedMarketContent;
  activePage: "home" | "partnership" | "faq";
}) {
  const [open, setOpen] = useState(false);
  const basePath = activePage === "home" ? config.routes.home : activePage === "partnership" ? config.routes.partnership : config.routes.faq;
  const links = [
    { label: content.nav.home, href: withLocale(config.routes.home, locale), active: activePage === "home" },
    { label: content.nav.games, href: localizeHref(`${config.routes.home}#games`, locale), active: false },
    { label: content.nav.sports, href: localizeHref(`${config.routes.home}#sports`, locale), active: false },
    { label: content.nav.offers, href: localizeHref(`${config.routes.home}#offers`, locale), active: false },
    { label: content.nav.partnership, href: withLocale(config.routes.partnership, locale), active: activePage === "partnership" },
    { label: content.nav.faq, href: withLocale(config.routes.faq, locale), active: activePage === "faq" },
  ];

  return (
    <header className="site-header">
      <a className="brand" href={withLocale(config.routes.home, locale)} aria-label={`${config.brand} ${config.market}`}>
        <MelbetAnimatedLogo {...getMelbetLogoPreset("header")} className="brand-logo" />
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href} className={cn("nav-link", link.active && "is-active")}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <div className="language-switcher" aria-label="Language switcher" role="group">
          <a
            className={cn("language-option", locale === "ar" && "is-active")}
            href={withLocale(basePath, "ar")}
            aria-current={locale === "ar" ? "true" : undefined}
          >
            AR
          </a>
          <a
            className={cn("language-option", locale === "en" && "is-active")}
            href={withLocale(basePath, "en")}
            aria-current={locale === "en" ? "true" : undefined}
          >
            EN
          </a>
        </div>
        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      {open ? (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className={cn("mobile-link", link.active && "is-active")}>
              {link.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
