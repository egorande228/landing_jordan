"use client";

import { useAnimeReveal } from "@/motion/useAnimeReveal";
import { CtaLink } from "@/components/ui/CtaLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { CardGrid } from "@/components/ui/CardGrid";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import type { Locale, LocalizedMarketContent, MarketConfig } from "@/types/landing";

export function HomePage({
  content,
  locale,
}: {
  content: LocalizedMarketContent["home"];
  config: MarketConfig;
  locale: Locale;
}) {
  useAnimeReveal();

  const gameLanes = content.games.cards?.slice(0, 4) ?? [];
  const sportsCards = content.sports.cards ?? [];
  const sportsLead = sportsCards[0];
  const sportsSupport = sportsCards.slice(1);

  return (
    <main className="page-main player-page" id="top">
      <section className="hero-section home-hero-stage">
        <div className="hero-copy hero-copy-home" data-reveal="left">
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
        <div className="hero-stage hero-stage-home" data-reveal="right">
          {content.hero.media ? <MediaPlaceholder media={content.hero.media} tone="gold" className="hero-command-media" /> : null}
          <div className="hero-command-overlay">
            {sportsLead ? (
              <article className={`hero-command-primary tone-${sportsLead.tone ?? "green"}`} data-float="stage" data-float-order={0}>
                <div className="card-orb" aria-hidden="true" />
                {sportsLead.metric ? (
                  <div className="card-topline">
                    <strong className="card-metric" dir="ltr">
                      {sportsLead.metric}
                    </strong>
                  </div>
                ) : null}
                <div className="hero-command-copy">
                  <h3>{sportsLead.title}</h3>
                  <p>{sportsLead.body}</p>
                </div>
                {sportsLead.points?.length ? (
                  <ul className="hero-command-points">
                    {sportsLead.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ) : null}
            <div className="hero-command-side">
              {content.sports.chips?.length ? (
                <div className="hero-event-strip">
                  {content.sports.chips.map((chip) => (
                    <span key={chip} className="hero-event-pill">
                      {chip}
                    </span>
                  ))}
                </div>
              ) : null}
              {gameLanes.length ? (
                <div className="hero-game-stack">
                  {gameLanes.map((card, index) => (
                    <article className={`hero-game-pill tone-${card.tone ?? "dark"}`} key={card.title} data-float="chip" data-float-order={index + 1}>
                      <div className="card-orb" aria-hidden="true" />
                      <strong>{card.title}</strong>
                    </article>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="content-section" id="games">
        <SectionIntro section={content.games} />
        <CardGrid cards={content.games.cards} variant="media" />
      </section>

      <section className="content-section sports-showcase" id="sports">
        <SectionIntro section={content.sports} />
        {sportsLead ? (
          <div className="sports-layout">
            <article className={`surface-card sports-main-card tone-${sportsLead.tone ?? "green"}`} data-reveal="scale">
              <div className="card-orb" aria-hidden="true" />
              {content.sports.media ? <MediaPlaceholder media={content.sports.media} tone="green" className="sports-main-media" /> : null}
              <div className="sports-main-copy">
                {sportsLead.metric ? (
                  <div className="card-topline">
                    <strong className="card-metric" dir="ltr">
                      {sportsLead.metric}
                    </strong>
                  </div>
                ) : null}
                <div className="card-copy">
                  <h3>{sportsLead.title}</h3>
                  <p>{sportsLead.body}</p>
                </div>
                {sportsLead.points?.length ? (
                  <ul className="card-points">
                    {sportsLead.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
            <div className="sports-side-stack">
              {sportsSupport.map((card) => (
                <article className={`surface-card sports-side-card tone-${card.tone ?? "dark"}`} key={card.title} data-reveal>
                  <div className="card-orb" aria-hidden="true" />
                  {card.metric ? (
                    <div className="card-topline">
                      <strong className="card-metric" dir="ltr">
                        {card.metric}
                      </strong>
                    </div>
                  ) : null}
                  <div className="card-copy">
                    <h3>{card.title}</h3>
                    <p>{card.body}</p>
                  </div>
                  {card.points?.length ? (
                    <ul className="card-points compact-points">
                      {card.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        ) : (
          <CardGrid cards={content.sports.cards} variant="standard" />
        )}
      </section>

      <section className="content-section compact-section" id="esports">
        <SectionIntro section={content.esports} />
        <CardGrid cards={content.esports.cards} variant="standard" />
      </section>

      <section className="content-section" id="offers">
        <SectionIntro section={content.offers} />
        <CardGrid cards={content.offers.cards} variant="media" />
      </section>

      <section className="final-cta-panel home-final-cta" id="support" data-reveal>
        {content.finalCta.eyebrow ? <Eyebrow>{content.finalCta.eyebrow}</Eyebrow> : null}
        <h2>{content.finalCta.title}</h2>
        {content.finalCta.body ? <p>{content.finalCta.body}</p> : null}
        {content.finalCta.chips?.length ? (
          <div className="section-chip-row">
            {content.finalCta.chips.map((chip) => (
              <span key={chip} className="section-chip">
                {chip}
              </span>
            ))}
          </div>
        ) : null}
        <div className="cta-row centered-actions">
          {content.finalCta.cta ? <CtaLink cta={content.finalCta.cta} locale={locale} /> : null}
          {content.finalCta.secondaryCta ? <CtaLink cta={content.finalCta.secondaryCta} locale={locale} /> : null}
        </div>
      </section>
    </main>
  );
}
