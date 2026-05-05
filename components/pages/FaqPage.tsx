"use client";

import { useAnimeReveal } from "@/motion/useAnimeReveal";
import { CtaLink } from "@/components/ui/CtaLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionIntro } from "@/components/ui/SectionIntro";
import type { Locale, LocalizedMarketContent, MarketConfig } from "@/types/landing";

export function FaqPage({
  content,
  locale,
}: {
  content: LocalizedMarketContent["faq"];
  config: MarketConfig;
  locale: Locale;
}) {
  useAnimeReveal();

  return (
    <main className="page-main faq-page" id="top">
      <section className="faq-hero" data-reveal="scale">
        {content.hero.eyebrow ? <Eyebrow>{content.hero.eyebrow}</Eyebrow> : null}
        <h1>{content.hero.title}</h1>
        {content.hero.body ? <p className="hero-body">{content.hero.body}</p> : null}
        {content.hero.chips?.length ? (
          <div className="section-chip-row centered">
            {content.hero.chips.map((chip) => (
              <span key={chip} className="section-chip">
                {chip}
              </span>
            ))}
          </div>
        ) : null}
      </section>

      <div className="faq-columns">
        <section className="content-section faq-block" id="player-faq">
          <div className="faq-panel">
            <SectionIntro section={content.player} />
            <div className="faq-list">
              {content.player.items.map((item) => (
                <details key={item.question} className="faq-item" data-reveal="left">
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section faq-block" id="partnership-faq">
          <div className="faq-panel">
            <SectionIntro section={content.partnership} />
            <div className="faq-list">
              {content.partnership.items.map((item) => (
                <details key={item.question} className="faq-item" data-reveal="right">
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>

      <section className="final-cta-panel" id="support" data-reveal>
        {content.support.eyebrow ? <Eyebrow>{content.support.eyebrow}</Eyebrow> : null}
        <h2>{content.support.title}</h2>
        {content.support.body ? <p>{content.support.body}</p> : null}
        <div className="cta-row centered-actions">
          {content.support.cta ? <CtaLink cta={content.support.cta} locale={locale} /> : null}
        </div>
      </section>
    </main>
  );
}
