import type { MelbetAnimatedLogoProps } from "@/components/logo/MelbetAnimatedLogo";

type MelbetLogoPreset = Pick<
  MelbetAnimatedLogoProps,
  "decorative" | "glow" | "size" | "variant"
>;

export const MELBET_LOGO_PRESETS = {
  footer: {
    decorative: true,
    glow: true,
    size: "nav",
    variant: "slot",
  },
  header: {
    decorative: true,
    glow: true,
    size: "nav",
    variant: "slot",
  },
  hero: {
    decorative: false,
    glow: true,
    size: "hero",
    variant: "slot",
  },
  section: {
    decorative: true,
    glow: true,
    size: "sm",
    variant: "wave",
  },
} as const satisfies Record<string, MelbetLogoPreset>;

export type MelbetLogoPresetName = keyof typeof MELBET_LOGO_PRESETS;

export function getMelbetLogoPreset(
  name: MelbetLogoPresetName,
  overrides: Partial<MelbetAnimatedLogoProps> = {},
): MelbetAnimatedLogoProps {
  return {
    ...MELBET_LOGO_PRESETS[name],
    ...overrides,
  };
}
