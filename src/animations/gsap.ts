/**
 * BERUF Brasil — GSAP Motion Setup & Registration
 * Foundation prepared for subsequent motion phase.
 */
import gsap from 'gsap';
import { eases } from './eases';

// Set global GSAP defaults conforming to BERUF motion philosophy
gsap.defaults({
  duration: 0.8,
  ease: eases.out,
});

export { gsap, eases };
