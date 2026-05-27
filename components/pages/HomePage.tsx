"use client";

import Image from "next/image";
import { useAnimeReveal } from "@/motion/useAnimeReveal";
import { CtaLink } from "@/components/ui/CtaLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { CardGrid } from "@/components/ui/CardGrid";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { MAIL_LINK, TELEGRAM_LINK } from "@/lib/links";
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

  const sportsCards = content.sports.cards ?? [];
  const sportsLead = sportsCards[0];
  const sportsSideCards = sportsCards.slice(1);
  const heroSignals = content.hero.stats ?? [];
  const heroLead = sportsLead ?? heroSignals[0];
  const heroStageCopy =
    locale === "ar"
      ? {
          live: "مباشر",
          board: "لوحة الليلة",
          home: "المضيف",
          away: "الضيف",
        }
      : {
          live: "Live",
          board: "Tonight's board",
          home: "Home",
          away: "Away",
        };

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
          <div
            className="hero-contact-panel"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              marginTop: "20px",
              width: "100%",
              maxWidth: "420px",
            }}
          >
            <p
              className="hero-contact-label"
              style={{
                margin: 0,
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.14em",
                lineHeight: 1.35,
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.62)",
              }}
            >
              For partnership contact
            </p>
            <div
              className="hero-contact-actions"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-contact-button"
                style={{
                  alignItems: "center",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  borderRadius: "999px",
                  color: "#fff",
                  display: "inline-flex",
                  flex: "1 1 150px",
                  fontSize: "14px",
                  fontWeight: 700,
                  justifyContent: "center",
                  minHeight: "44px",
                  padding: "0 20px",
                  textDecoration: "none",
                }}
              >
                Telegram
              </a>
              <a
                href={MAIL_LINK}
                className="hero-contact-button"
                style={{
                  alignItems: "center",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  borderRadius: "999px",
                  color: "#fff",
                  display: "inline-flex",
                  flex: "1 1 150px",
                  fontSize: "14px",
                  fontWeight: 700,
                  justifyContent: "center",
                  minHeight: "44px",
                  padding: "0 20px",
                  textDecoration: "none",
                }}
              >
                Mail
              </a>
            </div>
          </div>
        </div>
        <div className="hero-stage hero-stage-home" data-reveal="right">
          <div className="hero-stage-shell">
            {content.sports.chips?.length ? (
              <div className="hero-event-strip hero-board-tabs">
                {content.sports.chips.map((chip) => (
                  <span key={chip} className="hero-event-pill">
                    {chip}
                  </span>
                ))}
              </div>
            ) : null}
            <div className="hero-board-layout">
              {heroLead ? (
                <article className={`hero-focus-card tone-${heroLead.tone ?? "green"}`}>
                  <div className="card-orb" aria-hidden="true" />
                  <div className="hero-focus-head">
                    <span className="hero-live-badge">{heroStageCopy.live}</span>
                    {heroLead.metric ? (
                      <strong className="hero-focus-metric" dir="ltr">
                        {heroLead.metric}
                      </strong>
                    ) : null}
                  </div>
                  <div className="hero-score-panel">
                    <span className="hero-score-note">{heroStageCopy.board}</span>
                    <strong className="hero-scoreline" dir="ltr">
                      <span>2</span>
                      <small>:</small>
                      <span>1</span>
                    </strong>
                    <div className="hero-score-teams">
                      <span>{heroStageCopy.home}</span>
                      <span>{heroStageCopy.away}</span>
                    </div>
                  </div>
                  <div className="hero-focus-copy">
                    <h3>{heroLead.title}</h3>
                    <p>{heroLead.body}</p>
                  </div>
                  {heroLead.points?.length ? (
                    <ul className="hero-focus-points">
                      {heroLead.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  ) : null}
                  <div className="hero-focus-track" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                </article>
              ) : null}
              <div className="hero-signal-stack">
                {heroSignals.map((signal, index) => {
                  const signalIcon = signal.iconTags?.[0];

                  return (
                  <article className={`hero-signal-card tone-${signal.tone ?? "dark"}`} key={`${signal.title}-${index}`}>
                    <div className="card-orb" aria-hidden="true" />
                    <div className="hero-signal-topline">
                      {signal.eyebrow ? <span className="hero-signal-label">{signal.eyebrow}</span> : null}
                      {signal.metric ? (
                        <strong className="hero-signal-metric" dir="ltr">
                          {signal.metric}
                        </strong>
                      ) : null}
                    </div>
                    <div className={signalIcon ? "hero-signal-inline" : undefined}>
                      {signalIcon ? (
                        <div className="card-icon-square">
                          <span className="card-icon-tile">
                            <Image alt={signalIcon.alt ?? signalIcon.label} className="card-icon-image" height={28} src={signalIcon.src} width={28} />
                          </span>
                        </div>
                      ) : null}
                      <div className="hero-signal-copy">
                        <h3>{signal.title}</h3>
                        <p>{signal.body}</p>
                      </div>
                    </div>
                    {signal.chips?.length ? (
                      <div className="hero-signal-chips">
                        {signal.chips.map((chip) => (
                          <span key={chip}>{chip}</span>
                        ))}
                      </div>
                    ) : null}
                  </article>
                  );
                })}
              </div>
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
        {sportsCards.length ? (
          <div className="sports-layout">
            <a
              className={`surface-card sports-main-card sports-visual-frame tone-${sportsLead?.tone ?? "green"}`}
              data-reveal="scale"
              href={sportsLead?.href}
              rel={sportsLead?.href ? "noopener noreferrer" : undefined}
              target={sportsLead?.href ? "_blank" : undefined}
            >
              <div className="card-orb" aria-hidden="true" />
              {content.sports.media ? <MediaPlaceholder media={content.sports.media} tone={sportsLead?.tone ?? "green"} className="sports-main-media" /> : null}
              {sportsLead?.metric ? (
                <div className="card-topline">
                  <strong className="card-metric" dir="ltr">
                    {sportsLead.metric}
                  </strong>
                </div>
              ) : null}
              {sportsLead ? (
                <>
                  <div className="card-copy sports-main-copy">
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
                </>
              ) : null}
            </a>
            {sportsSideCards.length ? (
              <div className="sports-side-stack">
                {sportsSideCards.map((card) => (
                  <a
                    className={`surface-card sports-side-card tone-${card.tone ?? "dark"}`}
                    href={card.href}
                    key={card.title}
                    data-reveal
                    rel={card.href ? "noopener noreferrer" : undefined}
                    target={card.href ? "_blank" : undefined}
                  >
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
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        ) : (
          <CardGrid cards={content.sports.cards} variant="standard" />
        )}
      </section>

      <section className="content-section compact-section" id="esports">
        <SectionIntro section={{ ...content.esports, iconTags: undefined }} />
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
