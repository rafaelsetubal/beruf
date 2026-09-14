/**
 * BERUF Brasil — Motion Foundation Easings
 * Mapped to CSS variables and GSAP CustomEase / ease strings
 */

export const eases = {
  // UI standard ease
  standard: 'power2.out',
  // Decelerate out
  out: 'power3.out',
  // Symmetrical in-out
  inOut: 'power2.inOut',
  // Architectural cinematic curve (editorial pacing)
  cinematic: 'power4.out',
  // Mechanical exponential snap (Intrepid / robotics inspired)
  expo: 'expo.out',
} as const;

export type EaseName = keyof typeof eases;
