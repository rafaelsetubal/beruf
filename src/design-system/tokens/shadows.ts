/**
 * BERUF Brasil — Design System Shadows & Z-Index Tokens
 */

export const shadows = {
  none: 'none',
  subtle: '0 1px 2px rgba(0, 0, 0, 0.05)',
  surface: '0 4px 12px rgba(0, 0, 0, 0.08)',
  elevated: '0 12px 32px rgba(0, 0, 0, 0.12)',
  glowOrange: '0 0 24px rgba(255, 143, 28, 0.28)',
  glowOrangeSm: '0 0 12px rgba(255, 143, 28, 0.20)',
} as const;

export const zIndex = {
  deep: -1,
  base: 0,
  raised: 1,
  sticky: 100,
  header: 200,
  overlay: 300,
  modal: 400,
  popover: 500,
  toast: 600,
} as const;

export type ShadowTokens = typeof shadows;
export type ZIndexTokens = typeof zIndex;
