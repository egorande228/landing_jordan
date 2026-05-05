"use client";

type AnimeController = { pause?: () => void; cancel?: () => void };

export type AnimeAnimate = (targets: unknown, params: Record<string, unknown>) => AnimeController | undefined;

type AnimeModule = {
  animate?: AnimeAnimate;
  default?: AnimeAnimate | { animate?: AnimeAnimate };
};

export async function getAnimeAnimate(): Promise<AnimeAnimate | undefined> {
  const animeModule = (await import("animejs")) as AnimeModule;

  return animeModule.animate || (typeof animeModule.default === "function" ? animeModule.default : animeModule.default?.animate);
}

export type { AnimeController };
