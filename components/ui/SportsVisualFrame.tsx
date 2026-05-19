import type { Card, Locale } from "@/types/landing";

const visualCopy = {
  ar: {
    live: "مباشر",
    possession: "استحواذ",
    lineup: "شاهد التشكيلة",
    lineupMeta: "الخطة، الغيابات، التبديلات",
    matchView: "قراءة المباراة",
    home: "المضيف",
    away: "الضيف",
    factors: "عوامل مباشرة",
    trend: "تتغير الآن",
    xg: "xG",
    shots: "تسديدات",
    corners: "ركنيات",
    pressure: "ضغط",
  },
  en: {
    live: "Live",
    possession: "Possession",
    lineup: "See line up",
    lineupMeta: "Shape, absences, changes",
    matchView: "Match read",
    home: "Home",
    away: "Away",
    factors: "Live factors",
    trend: "Moving now",
    xg: "xG",
    shots: "Shots",
    corners: "Corners",
    pressure: "Pressure",
  },
} as const;

export function SportsVisualFrame({
  cards,
  locale,
}: {
  cards: Card[];
  locale: Locale;
}) {
  const copy = visualCopy[locale];
  const leadCard = cards[0];
  const factorItems = [
    { label: copy.xg, value: "1.82" },
    { label: copy.shots, value: "7" },
    { label: copy.corners, value: "5" },
    { label: copy.pressure, value: "72%" },
  ];

  return (
    <div className="sports-visual-display" aria-hidden="true">
      <div className="sports-visual-top">
        <div className="sports-factor-strip">
          <div className="sports-factor-head">
            <span>{copy.factors}</span>
            <span className="sports-factor-trend">{copy.trend}</span>
          </div>
          <div className="sports-factor-grid">
            {factorItems.map((factor) => (
              <div className="sports-factor-chip" key={factor.label}>
                <strong dir="ltr">{factor.value}</strong>
                <span>{factor.label}</span>
              </div>
            ))}
          </div>
          <div className="sports-momentum-track">
            <i />
            <i />
            <i />
          </div>
        </div>

        <div className="sports-possession-pill">
          <span>{copy.possession}</span>
          <strong dir="ltr">62-38</strong>
          <small dir="ltr">67'</small>
        </div>
      </div>

      <div className="sports-pitch-stage">
        <div className="sports-pitch-grid" />
        <div className="sports-pitch-lines">
          <span className="sports-pitch-outline" />
          <span className="sports-pitch-midline" />
          <span className="sports-pitch-circle" />
          <span className="sports-pitch-dot sports-pitch-dot-center" />
          <span className="sports-pitch-box sports-pitch-box-left" />
          <span className="sports-pitch-box sports-pitch-box-right" />
          <span className="sports-pitch-dot sports-pitch-dot-left" />
          <span className="sports-pitch-dot sports-pitch-dot-right" />
        </div>
      </div>

      <div className="sports-visual-bottom">
        <div className="sports-score-badge">
          <div className="sports-score-head">
            <span className="sports-live-flag">{copy.live}</span>
            <span className="sports-minute-chip" dir="ltr">
              67'
            </span>
          </div>
          <span className="sports-match-note">{copy.matchView}</span>
          <div className="sports-scoreboard-row">
            <span className="sports-team-label">{copy.home}</span>
            <strong className="sports-score-value" dir="ltr">
              2<span>:</span>1
            </strong>
            <span className="sports-team-label">{copy.away}</span>
          </div>
          <p>{leadCard?.title}</p>
        </div>

        <div className="sports-lineup-cta">
          <span className="sports-lineup-bars" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="sports-lineup-copy">
            <strong>{copy.lineup}</strong>
            <small>{copy.lineupMeta}</small>
          </span>
        </div>
      </div>
    </div>
  );
}
