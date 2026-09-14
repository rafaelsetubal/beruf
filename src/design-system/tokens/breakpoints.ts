/**
 * BERUF Brasil — Responsive Breakpoints Tokens
 */

export const breakpoints = {
  sm: '640px',   // Large phones & mini tablets
  md: '768px',   // Tablets (8 cols)
  lg: '1024px',  // Laptops / Small desktops (12 cols)
  xl: '1280px',  // Standard desktop (12 cols)
  '2xl': '1440px', // Wide high-density screens
} as const;

export const mediaQueries = {
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.lg})`,
  xl: `(min-width: ${breakpoints.xl})`,
  '2xl': `(min-width: ${breakpoints['2xl']})`,
} as const;

export type BreakpointsTokens = typeof breakpoints;
