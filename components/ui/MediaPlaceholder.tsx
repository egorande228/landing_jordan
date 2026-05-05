import Image from "next/image";
import { cn } from "@/lib/cn";
import type { CardTone, MediaItem, MediaRatio } from "@/types/landing";

const aspectRatioMap: Record<MediaRatio, string> = {
  "21:9": "21 / 9",
  "16:10": "16 / 10",
  "4:3": "4 / 3",
  "1:1": "1 / 1",
  "3:4": "3 / 4",
};

export function MediaPlaceholder({
  media,
  tone = "dark",
  className,
}: {
  media: MediaItem;
  tone?: CardTone;
  className?: string;
}) {
  return (
    <div className={cn("media-shell", className)}>
      <div
        className={cn(
          "media-placeholder",
          (media.type === "asset" || media.type === "video") && "has-asset",
          media.type === "video" && "has-video",
          `variant-${media.variant ?? "hero"}`,
          `tone-${tone}`,
        )}
        style={{ aspectRatio: aspectRatioMap[media.ratio] }}
        aria-label={media.type === "video" ? undefined : media.label}
        role={media.type === "video" ? undefined : "img"}
      >
        {media.type === "video" ? (
          <>
            <Image
              alt=""
              aria-hidden="true"
              className={cn("media-asset media-fallback", media.fit === "contain" ? "fit-contain" : "fit-cover")}
              fill
              sizes="(max-width: 720px) 100vw, (max-width: 1120px) 88vw, 42vw"
              src={media.posterSrc}
            />
            <video
              aria-label={media.label}
              autoPlay={media.autoPlay ?? true}
              className={cn("media-asset media-video", media.fit === "contain" ? "fit-contain" : "fit-cover")}
              loop={media.loop ?? true}
              muted={media.muted ?? true}
              playsInline={media.playsInline ?? true}
              poster={media.posterSrc}
              preload="metadata"
            >
              <source src={media.src} type={media.mimeType ?? "video/mp4"} />
            </video>
          </>
        ) : null}
        {media.type === "asset" ? (
          <Image
            alt={media.label}
            className={cn("media-asset", media.fit === "contain" ? "fit-contain" : "fit-cover")}
            fill
            sizes="(max-width: 720px) 100vw, (max-width: 1120px) 88vw, 42vw"
            src={media.src}
          />
        ) : null}
        <span className="media-layer media-gradient" aria-hidden="true" />
        <span className="media-layer media-lines" aria-hidden="true" />
        <span className="media-layer media-orb media-orb-primary" aria-hidden="true" />
        <span className="media-layer media-orb media-orb-secondary" aria-hidden="true" />
        <span className="media-layer media-panel panel-a" aria-hidden="true" />
        <span className="media-layer media-panel panel-b" aria-hidden="true" />
        <span className="media-layer media-ring" aria-hidden="true" />
        {media.type === "asset" ? <span className="media-layer media-asset-sheen" aria-hidden="true" /> : null}
      </div>
    </div>
  );
}
