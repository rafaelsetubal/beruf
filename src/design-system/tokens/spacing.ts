/**
 * BERUF Brasil — Design System Spacing Tokens
 * Modular 4px / 8px industrial scale
 */

export const spacing = {
  // Base atomic scale (in rem and px)
  0: '0rem',         // 0px
  1: '0.25rem',      // 4px
  2: '0.5rem',       // 8px
  3: '0.75rem',      // 12px
  4: '1rem',         // 16px
  5: '1.25rem',      // 20px
  6: '1.5rem',       // 24px
  8: '2rem',         // 32px
  10: '2.5rem',      // 40px
  12: '3rem',        // 48px
  16: '4rem',        // 64px
  20: '5rem',        // 80px
  24: '6rem',        // 96px
  32: '8rem',        // 128px
  40: '10rem',       // 160px

  // Semantic Section Spacing (fluid responsive)
  section: {
    compact: 'clamp(2.5rem, 5vw, 4rem)',     // 40px - 64px
    regular: 'clamp(4rem, 8vw, 7.5rem)',     // 64px - 120px
    relaxed: 'clamp(6rem, 12vw, 10rem)',     // 96px - 160px
    hero: 'clamp(7rem, 14vw, 12.5rem)',      // 112px - 200px
  },

  // Layout Gutters & Margins
  layout: {
    mobileMargin: '1.25rem',   // 20px
    tabletMargin: '2rem',      // 32px
    desktopMargin: '3rem',     // 48px
    desktopMarginLg: '4rem',   // 64px
    gutterMobile: '1rem',      // 16px
    gutterTablet: '1.25rem',   // 20px
    gutterDesktop: '1.75rem',  // 28px
  },
} as const;

export type SpacingTokens = typeof spacing;
