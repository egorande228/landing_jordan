"use client";

import { useEffect } from "react";
import { getAnimeAnimate } from "@/motion/anime";
import { floatLoop, revealLeft, revealRight, revealScale, revealUp, type FloatMode, type RevealMode } from "@/motion/presets";

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function resolveRevealMode(value: string | null): RevealMode {
  if (value === "left" || value === "right" || value === "scale") {
    return value;
  }

  return "up";
}

function resolveFloatMode(value: string | null): FloatMode {
  if (value === "stage" || value === "chip") {
    return value;
  }

  return "soft";
}

function resolveNumericAttribute(element: HTMLElement, name: string, fallback = 0) {
  const raw = element.getAttribute(name);

  if (raw === null) return fallback;

  const parsed = Number(raw);

  return Number.isFinite(parsed) ? parsed : fallback;
}

export function useAnimeReveal(rootSelector = "[data-reveal]") {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(rootSelector));
    const floatElements = Array.from(document.querySelectorAll<HTMLElement>("[data-float]"));
    if (!elements.length && !floatElements.length) return;

    let disposed = false;
    const activeAnimations: Array<{ pause?: () => void; cancel?: () => void }> = [];

    if (prefersReducedMotion()) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      async (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target as HTMLElement)
          .sort((left, right) => resolveNumericAttribute(left, "data-reveal-order") - resolveNumericAttribute(right, "data-reveal-order"));
        if (!visible.length || disposed) return;

        const animate = await getAnimeAnimate();

        visible.forEach((el, index) => {
          observer.unobserve(el);
          el.classList.add("is-visible");
          if (!animate) return;
          const mode = resolveRevealMode(el.getAttribute("data-reveal"));
          const delay = resolveNumericAttribute(el, "data-reveal-delay", index * 70) + resolveNumericAttribute(el, "data-reveal-order") * 55;
          const animation =
            mode === "left"
              ? revealLeft(animate, el, delay)
              : mode === "right"
                ? revealRight(animate, el, delay)
                : mode === "scale"
                  ? revealScale(animate, el, delay)
                  : revealUp(animate, el, delay);
          if (animation) activeAnimations.push(animation);
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    void (async () => {
      const animate = await getAnimeAnimate();

      if (!animate || disposed) return;

      floatElements
        .sort((left, right) => resolveNumericAttribute(left, "data-float-order") - resolveNumericAttribute(right, "data-float-order"))
        .forEach((el, index) => {
          const mode = resolveFloatMode(el.getAttribute("data-float"));
          const floatOrder = resolveNumericAttribute(el, "data-float-order", index);
          const animation = floatLoop(animate, el, floatOrder, mode);

          if (animation) activeAnimations.push(animation);
        });
    })();

    return () => {
      disposed = true;
      observer.disconnect();
      activeAnimations.forEach((animation) => {
        animation.cancel?.();
        animation.pause?.();
      });
    };
  }, [rootSelector]);
}
