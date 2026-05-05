"use client";

import { motionTokens } from "@/motion/motionTokens";
import type { AnimeAnimate, AnimeController } from "@/motion/anime";

export type RevealMode = "up" | "left" | "right" | "scale";
export type FloatMode = "soft" | "stage" | "chip";

function revealVectorFor(mode: RevealMode) {
  if (mode === "left") {
    return {
      translateX: [-motionTokens.distance.lg, 0],
      translateY: [motionTokens.distance.xs, 0],
      scale: [0.985, 1],
      rotate: [-1.2, 0],
    };
  }

  if (mode === "right") {
    return {
      translateX: [motionTokens.distance.lg, 0],
      translateY: [motionTokens.distance.xs, 0],
      scale: [0.985, 1],
      rotate: [1.2, 0],
    };
  }

  if (mode === "scale") {
    return {
      translateX: [0, 0],
      translateY: [motionTokens.distance.xs, 0],
      scale: [0.94, 1],
      rotate: [0.65, 0],
    };
  }

  return {
    translateX: [0, 0],
    translateY: [motionTokens.distance.md, 0],
    scale: [0.982, 1],
    rotate: [0.4, 0],
  };
}

function createReveal(mode: RevealMode, animate: AnimeAnimate, target: HTMLElement, delay = 0): AnimeController | undefined {
  return animate(target, {
    opacity: [0, 1],
    ...revealVectorFor(mode),
    duration: motionTokens.duration.slow,
    delay,
    easing: motionTokens.easing.entrance,
  });
}

export function revealUp(animate: AnimeAnimate, target: HTMLElement, delay = 0) {
  return createReveal("up", animate, target, delay);
}

export function revealLeft(animate: AnimeAnimate, target: HTMLElement, delay = 0) {
  return createReveal("left", animate, target, delay);
}

export function revealRight(animate: AnimeAnimate, target: HTMLElement, delay = 0) {
  return createReveal("right", animate, target, delay);
}

export function revealScale(animate: AnimeAnimate, target: HTMLElement, delay = 0) {
  return createReveal("scale", animate, target, delay);
}

function floatConfigFor(mode: FloatMode, index: number) {
  if (mode === "stage") {
    return {
      translateX: [0, -2, 0, 2, 0],
      translateY: [0, -6, 0, 4, 0],
      rotate: [0, -0.65, 0, 0.65, 0],
      duration: motionTokens.duration.loop + 900 + index * 220,
    };
  }

  if (mode === "chip") {
    return {
      translateX: [0, -0.8, 0, 0.8, 0],
      translateY: [0, -2.6, 0, 2, 0],
      rotate: [0, -0.25, 0, 0.25, 0],
      duration: motionTokens.duration.loop - 900 + index * 120,
    };
  }

  return {
    translateX: [0, index % 2 === 0 ? -1.4 : 1.4, 0, index % 2 === 0 ? 1.4 : -1.4, 0],
    translateY: [0, -4, 0, 3, 0],
    rotate: [0, index % 2 === 0 ? -0.45 : 0.45, 0, index % 2 === 0 ? 0.45 : -0.45, 0],
    duration: motionTokens.duration.loop + index * 180,
  };
}

export function floatLoop(animate: AnimeAnimate, target: HTMLElement, index = 0, mode: FloatMode = "soft") {
  const config = floatConfigFor(mode, index);

  return animate(target, {
    translateX: config.translateX,
    translateY: config.translateY,
    rotate: config.rotate,
    duration: config.duration,
    delay: index * 120,
    easing: "inOutSine",
    loop: true,
  });
}
