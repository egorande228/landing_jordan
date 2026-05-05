import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { SectionContent } from "@/types/landing";

export function SectionIntro({
  section,
  centered = false,
}: {
  section: Pick<SectionContent, "eyebrow" | "title" | "body" | "chips" | "iconTags">;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "section-intro centered" : "section-intro"} data-reveal>
      {section.eyebrow ? <Eyebrow>{section.eyebrow}</Eyebrow> : null}
      <h2>{section.title}</h2>
      {section.body ? <p className="section-body">{section.body}</p> : null}
      {section.chips?.length ? (
        <div className={centered ? "section-chip-row centered" : "section-chip-row"}>
          {section.chips.map((chip) => (
            <span key={chip} className="section-chip">
              {chip}
            </span>
          ))}
        </div>
      ) : null}
      {section.iconTags?.length ? (
        <div className={centered ? "section-icon-row centered" : "section-icon-row"}>
          {section.iconTags.map((tag) => (
            <span key={tag.label} className="section-icon-tag">
              <span className="section-icon-mark" aria-hidden="true">
                <Image alt={tag.alt ?? ""} className="section-icon-image" height={22} src={tag.src} width={22} />
              </span>
              <span>{tag.label}</span>
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}
