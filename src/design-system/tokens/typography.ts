/**
 * BERUF Brasil — Design System Typography Tokens
 */

export const typography = {
  fonts: {
    // Display headline font: Urbanist (International Industrial / Luxury Precision)
    display: "'Urbanist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    urbanist: "'Urbanist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    // Comparator candidate 1: Barlow Semi Condensed (Engineered / DIN / Automation)
    barlow: "'Barlow Semi Condensed', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    // Comparator candidate 2: Syne (Avant-garde / Editorial / Brutalist)
    syne: "'Syne', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    // Comparator candidate 3: Space Grotesk (Engineering Ink-traps / Technical)
    spaceGrotesk: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    // High-legibility Swiss-precision body font
    sans: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    // Precision technical & spec data monospace
    mono: "'JetBrains Mono', SFMono-Regular, Menlo, Monaco, Consolas, monospace",
  },

  weights: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },

  scale: {
    // Fluid responsive typographic scale
    display: 'clamp(2.75rem, 5.5vw + 1rem, 5.5rem)',    // 44px - 88px
    h1: 'clamp(2.25rem, 3.75vw + 1rem, 3.75rem)',       // 36px - 60px
    h2: 'clamp(1.75rem, 2.5vw + 0.75rem, 2.75rem)',     // 28px - 44px
    h3: 'clamp(1.375rem, 1.5vw + 0.5rem, 1.875rem)',    // 22px - 30px
    h4: 'clamp(1.125rem, 0.75vw + 0.5rem, 1.375rem)',   // 18px - 22px
    h5: '1.125rem',                                      // 18px
    h6: '1rem',                                          // 16px
    bodyLg: '1.125rem',                                  // 18px
    bodyMd: '1rem',                                      // 16px
    bodySm: '0.875rem',                                  // 14px
    caption: '0.75rem',                                  // 12px
    mono: '0.8125rem',                                   // 13px
  },

  lineHeights: {
    none: '1',
    tight: '1.08',
    snug: '1.2',
    normal: '1.5',
    relaxed: '1.65',
  },

  letterSpacing: {
    tighter: '-0.04em',
    tight: '-0.02em',
    normal: '0em',
    wide: '0.04em',
    wider: '0.08em',
    widest: '0.14em',
  },
} as const;

export type TypographyTokens = typeof typography;
