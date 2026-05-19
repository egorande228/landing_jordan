import Image from "next/image";
import type { Card } from "@/types/landing";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";

export function CardGrid({ cards, variant = "standard" }: { cards?: Card[]; variant?: "standard" | "media" | "steps" | "stats" }) {
  if (!cards?.length) return null;

  return (
    <div className={`card-grid ${variant}`}>
      {cards.map((card, index) => {
        const revealMode = variant === "media" || variant === "stats" ? "scale" : variant === "steps" ? (index % 2 === 0 ? "left" : "right") : "up";
        const primaryIcon = card.iconTags?.[0];

        return (
          <article
            className={`surface-card tone-${card.tone ?? "dark"}${card.media ? " has-media" : ""}${card.points?.length ? " has-points" : ""}${primaryIcon ? " has-inline-icon" : ""}`}
            key={`${card.title}-${index}`}
            data-reveal={revealMode}
            data-reveal-order={index}
          >
            <div className="card-orb" aria-hidden="true" />
            {card.metric ? (
              <div className="card-topline">
                <strong className="card-metric" dir="ltr">{card.metric}</strong>
              </div>
            ) : null}
            {card.media ? <MediaPlaceholder media={card.media} tone={card.tone ?? "dark"} className="card-media" /> : null}
            <div className={primaryIcon ? "card-inline-header" : undefined}>
              {primaryIcon ? (
                <div className="card-icon-square">
                  <span className="card-icon-tile">
                    <Image alt={primaryIcon.alt ?? primaryIcon.label} className="card-icon-image" height={28} src={primaryIcon.src} width={28} />
                  </span>
                </div>
              ) : null}
              <div className="card-copy">
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
            </div>
            {card.points?.length ? (
              <ul className="card-points">
                {card.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            ) : null}
            {card.footnote ? <p className="card-footnote">{card.footnote}</p> : null}
          </article>
        );
      })}
    </div>
  );
}
