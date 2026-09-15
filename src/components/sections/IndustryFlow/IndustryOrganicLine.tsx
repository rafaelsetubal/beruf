import React from 'react';
import styles from './IndustryOrganicLine.module.css';

interface IndustryOrganicLineProps {
  activeIndex: number;
}

export const IndustryOrganicLine: React.FC<IndustryOrganicLineProps> = ({ activeIndex }) => {
  // Offset phase based on active sector for continuous organic sensation
  const shiftX = (activeIndex % 6) * -35;

  return (
    <div className={styles.lineWrapper} aria-hidden="true">
      {/* Ambient Radial Bloom behind line crest */}
      <div
        className={styles.ambientBloom}
        style={{ transform: `translateX(${shiftX * 1.5}px)` }}
      />

      {/* Organic Spline SVG */}
      <svg
        className={styles.lineSvg}
        viewBox="0 0 1600 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ transform: `translateX(${shiftX}px)` }}
      >
        <defs>
          <linearGradient id="organicLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF5500" stopOpacity="0" />
            <stop offset="20%" stopColor="#FF7500" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FFAA33" stopOpacity="1" />
            <stop offset="80%" stopColor="#FF8514" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FF5500" stopOpacity="0" />
          </linearGradient>

          <filter id="organicGlow" x="-20%" y="-100%" width="140%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Thick Ambient Aura */}
        <path
          d="M0,140 C320,190 600,60 920,110 C1240,160 1420,70 1600,120"
          stroke="url(#organicLineGrad)"
          strokeWidth="14"
          opacity="0.35"
          filter="url(#organicGlow)"
        />

        {/* Crisp Radiant Ribbon */}
        <path
          d="M0,140 C320,190 600,60 920,110 C1240,160 1420,70 1600,120"
          stroke="url(#organicLineGrad)"
          strokeWidth="2.5"
          filter="url(#organicGlow)"
        />

        {/* Hot Center Filament */}
        <path
          d="M0,140 C320,190 600,60 920,110 C1240,160 1420,70 1600,120"
          stroke="#FFFFFF"
          strokeWidth="1"
          opacity="0.9"
        />
      </svg>
    </div>
  );
};
