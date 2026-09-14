/**
 * BERUF Brasil — Design System Motion Tokens
 * 
 * 3-Tier Architecture:
 * 1. UI Motion (Tactile, micro-interactions, responsive feedback)
 * 2. Editorial Motion (Content pacing, reveals, editorial transitions)
 * 3. Cinematic Motion (Hero choreographies, large scale scene transitions)
 * 
 * Easings:
 * - standard, out, inOut, cinematic, expo
 */

export const motion = {
  duration: {
    // 1. UI Motion (Fast, crisp, responsive)
    ui: {
      micro: '100ms',
      fast: '150ms',
      base: '250ms',
      slow: '400ms',
    },

    // 2. Editorial Motion (Editorial pacing, content reveals)
    editorial: {
      editorial: '600ms',
      reveal: '800ms',
      image: '1000ms',
    },

    // 3. Cinematic Motion (Atmospheric, hero sequences)
    cinematic: {
      cinematic: '1400ms',
      hero: '1800ms',
      section: '2200ms',
    },
  },

  ease: {
    // Standard UI transition
    standard: 'cubic-bezier(0.2, 0, 0, 1)',
    // Decelerate / entrance
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    // Symmetric state transition
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    // Ultra-smooth editorial cinematic curve (Q Industrial / Rejouice inspired)
    cinematic: 'cubic-bezier(0.25, 1, 0.5, 1)',
    // High-impact exponential deceleration (Intrepid Automation inspired)
    expo: 'cubic-bezier(0.16, 1, 0.3, 1)',
  },
} as const;

export type MotionTokens = typeof motion;
