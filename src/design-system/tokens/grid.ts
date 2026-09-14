/**
 * BERUF Brasil — Design System Grid Tokens
 * 
 * Responsive Grid:
 * - Desktop: 12 columns
 * - Tablet: 8 columns
 * - Mobile: 4 columns
 */

export const grid = {
  columns: {
    desktop: 12,
    tablet: 8,
    mobile: 4,
  },

  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1440px',
    fluid: '100%',
    defaultMax: '1440px',
  },

  gutters: {
    mobile: '16px',
    tablet: '20px',
    desktop: '28px',
  },

  margins: {
    mobile: '20px',
    tablet: '32px',
    desktop: '48px',
    desktopWide: '64px',
  },
} as const;

export type GridTokens = typeof grid;
