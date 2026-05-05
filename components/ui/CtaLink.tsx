import Image from "next/image";
import { localizeHref } from "@/lib/locale";
import { cn } from "@/lib/cn";
import type { Cta, Locale } from "@/types/landing";

export function CtaLink({ cta, locale }: { cta: Cta; locale: Locale }) {
  const href = localizeHref(cta.href, locale);
  const isExternal = /^(?:[a-z]+:|\/\/)/i.test(cta.href);

  return (
    <a
      href={href}
      className={cn(
        "cta-link",
        cta.iconSrc && "has-icon",
        cta.variant === "secondary" ? "secondary" : cta.variant === "quiet" ? "quiet" : "primary"
      )}
      rel={isExternal ? "noopener noreferrer" : undefined}
      target={isExternal ? "_blank" : undefined}
    >
      {cta.iconSrc ? (
        <span className="cta-link-icon" aria-hidden="true">
          <Image alt={cta.iconAlt ?? ""} className="cta-link-icon-image" height={18} src={cta.iconSrc} width={18} />
        </span>
      ) : null}
      <span className="cta-link-label">{cta.label}</span>
    </a>
  );
}
