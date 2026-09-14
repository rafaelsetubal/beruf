/**
 * BERUF Brasil — Design System Radius & Border Tokens
 * Industrial, architectural, precision styling
 */

export const radius = {
  none: '0px',
  xs: '2px',       // Micro chips & technical badges
  sm: '4px',       // Standard buttons, inputs, cards
  md: '6px',       // Interactive frames
  lg: '8px',       // Modals & featured surfaces
  full: '9999px',  // Pill badges & circular indicator dots
} as const;

export const borders = {
  width: {
    hairline: '1px',
    thick: '2px',
    heavy: '4px',
  },
  style: {
    solid: 'solid',
    dashed: 'dashed',
  },
} as const;

export type RadiusTokens = typeof radius;
export type BorderTokens = typeof borders;
