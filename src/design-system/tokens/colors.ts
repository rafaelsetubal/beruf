/**
 * BERUF Brasil — Design System Color Tokens
 * 
 * Exact Brand Orange sampled from official identity: #FF8F1C
 * Themes: Cream (Editorial Refined), Black (Technical Industrial), Orange (Energy & Impact)
 */

export const colors = {
  // Primitives - Brand Orange Family
  orange: {
    brand: '#FF8F1C',       // Official BERUF brand orange
    experience: '#FF7500',  // High-energy vibrant interactive variant
    hover: '#E67C10',       // Darkened state for tactile interaction
    active: '#CC6C0A',      // Pressed / active state
    subtle: 'rgba(255, 143, 28, 0.12)', // Subtle industrial tint / highlights
    glow: 'rgba(255, 143, 28, 0.25)',   // Focus ring & luminescent edge
    contrast: '#0C0D0E',    // Maximum legibility text against orange
  },

  // Primitives - Industrial Technical Blacks & Dark Grays
  black: {
    pure: '#000000',
    base: '#0C0D0E',        // Deep technical black background
    surface: '#141518',     // Raised panel / card background
    elevated: '#1D1E22',    // Flyout, modal, dropdown surface
    border: '#282A30',      // Subtle separation hairline
    borderStrong: '#3E414A',// Strong structural border
    muted: '#7E838F',       // Inactive / technical annotation gray
    foreground: '#EDEDEE',  // High-contrast primary light text
  },

  // Primitives - Cream & Off-White Architectural Surfaces
  cream: {
    base: '#FBF9F5',        // Warm refined off-white canvas
    surface: '#F4F1EA',     // Subtle architectural panel
    elevated: '#FFFFFF',    // High-clarity elevated card / sheet
    border: '#E3DFD5',      // Gentle warm hairline
    borderStrong: '#C5BFB1',// Defined architectural contour
    muted: '#767268',       // Secondary muted editorial copy
    foreground: '#111113',  // Ink-black primary reading color
  },

  // Technical Feedback Primitives
  system: {
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
  },
} as const;

export type ColorTokens = typeof colors;
