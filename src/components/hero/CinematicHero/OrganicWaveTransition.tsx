import React from 'react';
import styles from './OrganicWaveTransition.module.css';

export const OrganicWaveTransition: React.FC = () => {
  return (
    <div className={styles.transitionWrapper} aria-hidden="true">
      {/* 1. Ambient Warm Upward Glow Bloom */}
      <div className={styles.ambientUpwardBloom} />

      {/* 2. Fluid Asymmetrical Organic Light Wave SVG */}
      <svg
        className={styles.transitionSvg}
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Intense Glowing Amber / Copper Core */}
          <linearGradient id="waveLightCore" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF5500" stopOpacity="0.25" />
            <stop offset="18%" stopColor="#FF7A00" stopOpacity="0.95" />
            <stop offset="48%" stopColor="#FFA633" stopOpacity="1" />
            <stop offset="78%" stopColor="#FF8514" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#FF5500" stopOpacity="0.25" />
          </linearGradient>

          {/* Hot White-Amber Center Filament */}
          <linearGradient id="waveHotFilament" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFAA44" stopOpacity="0.5" />
            <stop offset="22%" stopColor="#FFE0B2" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="78%" stopColor="#FFE0B2" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#FFAA44" stopOpacity="0.5" />
          </linearGradient>

          {/* Ethereal Glow Filter */}
          <filter id="waveGlowFilter" x="-10%" y="-150%" width="120%" height="400%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="softMistFilter" x="-20%" y="-200%" width="140%" height="500%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="18" />
          </filter>
        </defs>

        {/* 1. Deep Ambient Aura Glow Along Wave Crest */}
        <path
          d="M0,45 C280,78 520,16 820,38 C1100,60 1300,12 1440,32"
          stroke="url(#waveLightCore)"
          strokeWidth="24"
          filter="url(#softMistFilter)"
          opacity="0.8"
        />

        {/* 2. Intense Silk Glow Ribbon */}
        <path
          d="M0,45 C280,78 520,16 820,38 C1100,60 1300,12 1440,32"
          stroke="url(#waveLightCore)"
          strokeWidth="6"
          filter="url(#waveGlowFilter)"
          opacity="0.95"
        />

        {/* 3. Incandescent Hot Filament Line */}
        <path
          d="M0,45 C280,78 520,16 820,38 C1100,60 1300,12 1440,32"
          stroke="url(#waveHotFilament)"
          strokeWidth="1.6"
          opacity="0.98"
        />

        {/* 4. Solid Cream Body filling seamless to the bottom */}
        <path
          d="M0,46 C280,79 520,17 820,39 C1100,61 1300,13 1440,33 L1440,120 L0,120 Z"
          fill="#FBF9F5"
        />
      </svg>
    </div>
  );
};
