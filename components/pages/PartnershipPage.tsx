"use client";

import { useAnimeReveal } from "@/motion/useAnimeReveal";
import { CtaLink } from "@/components/ui/CtaLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { CardGrid } from "@/components/ui/CardGrid";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import type { Locale, LocalizedMarketContent, MarketConfig } from "@/types/landing";

export function PartnershipPage({
  content,
  locale,
}: {
  content: LocalizedMarketContent["partnership"];
  config: MarketConfig;
  locale: Locale;
}) {
  useAnimeReveal();

  return (
    <main className="page-main partnership-page" id="top">
      <section className="hero-section partnership-hero">
        <div className="hero-copy partnership-copy" data-reveal="left">
          {content.hero.eyebrow ? <Eyebrow>{content.hero.eyebrow}</Eyebrow> : null}
          <h1>{content.hero.title}</h1>
          {content.hero.body ? <p className="hero-body">{content.hero.body}</p> : null}
          {content.hero.chips?.length ? (
            <div className="hero-chip-row">
              {content.hero.chips.map((chip) => (
                <span key={chip} className="section-chip">
                  {chip}
                </span>
              ))}
            </div>
          ) : null}
          <div className="cta-row">
            {content.hero.cta ? <CtaLink cta={content.hero.cta} locale={locale} /> : null}
            {content.hero.secondaryCta ? <CtaLink cta={content.hero.secondaryCta} locale={locale} /> : null}
          </div>
        </div>
        <aside className="dashboard-panel partnership-dashboard" data-reveal="right">
          <p className="dashboard-label">{content.hero.eyebrow}</p>
          <div className="dashboard-visual">
            {content.hero.media ? <MediaPlaceholder media={content.hero.media} tone="gold" className="dashboard-media-slot" /> : null}
            {content.hero.chips?.length ? (
              <div className="feature-rail">
                {content.hero.chips.map((chip) => (
                  <span key={chip} className="feature-chip">
                    {chip}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
          <CardGrid cards={content.hero.stats} variant="stats" />
        </aside>
      </section>

      <section className="content-section" id="benefits">
        <SectionIntro section={content.benefits} />
        <CardGrid cards={content.benefits.cards} />
      </section>

      <section className="content-section" id="steps">
        <SectionIntro section={content.steps} />
        <CardGrid cards={content.steps.cards} variant="steps" />
      </section>

      <section className="content-section" id="paths">
        <SectionIntro section={content.paths} />
        <CardGrid cards={content.paths.cards} variant="media" />
      </section>

      <section className="final-cta-panel partnership-final-cta" id="contact" data-reveal>
        <div className="partnership-final-copy">
          {content.finalCta.eyebrow ? <Eyebrow>{content.finalCta.eyebrow}</Eyebrow> : null}
          <h2>{content.finalCta.title}</h2>
          {content.finalCta.body ? <p>{content.finalCta.body}</p> : null}
        </div>
        <div className="partnership-final-bar">
          {content.finalCta.chips?.length ? (
            <div className="section-chip-row partnership-final-tags">
              {content.finalCta.chips.map((chip) => (
                <span key={chip} className="section-chip">
                  {chip}
                </span>
              ))}
            </div>
          ) : null}
          <div className="cta-row partnership-final-actions">
            {content.finalCta.cta ? <CtaLink cta={content.finalCta.cta} locale={locale} /> : null}
            {content.finalCta.secondaryCta ? <CtaLink cta={content.finalCta.secondaryCta} locale={locale} /> : null}
          </div>
        </div>
      </section>
    </main>
  );
}
