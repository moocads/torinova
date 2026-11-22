// MOOC animation standard (§7). Import these — never hardcode durations/offsets.

export const EASE_OUT = "easeOut" as const;

export const PAGE_FADE = {
  duration: 0.5,
  ease: EASE_OUT,
} as const;

export const SCROLL_REVEAL = {
  offsetY: 30,
  duration: 0.6,
  viewportAmount: 0.2,
  once: true,
} as const;

export const TWO_COLUMN_OFFSET_X = 40;

export const STAGGER_CHILDREN = 0.1;
