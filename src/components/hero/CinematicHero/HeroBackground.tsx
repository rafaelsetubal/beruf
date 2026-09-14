import React, { useState } from 'react';
import styles from './HeroBackground.module.css';

export interface HeroBackgroundProps {
  videoSrc?: string;
  posterSrc?: string;
}

/**
 * HeroBackground
 * Full-bleed 100vw x 100vh cinematic background.
 * Plays hero-video2.mp4 in continuous smooth autoplay loop independent of scroll.
 * Features warm amber/copper color grading, subtle contrast wash, and bottom fade to black.
 */
export const HeroBackground: React.FC<HeroBackgroundProps> = ({ videoSrc, posterSrc }) => {
  const [isVideoReady, setIsVideoReady] = useState(false);

  return (
    <div className={styles.backgroundWrapper} aria-hidden="true">
      {/* 1. Master Video Layer (Autoplay, Muted, Loop at 60fps) */}
      {videoSrc ? (
        <video
          src={videoSrc}
          poster={posterSrc}
          autoPlay
          playsInline
          muted
          loop
          preload="auto"
          onCanPlay={() => setIsVideoReady(true)}
          className={[
            styles.videoElement,
            isVideoReady ? styles.videoLoaded : '',
          ].filter(Boolean).join(' ')}
        />
      ) : (
        <div className={styles.canvasPlaceholder}>
          <div className={styles.ambientGlow} />
        </div>
      )}

      {/* 2. Warm Amber / Copper Color Grading Layer */}
      <div className={styles.amberGrading} />

      {/* 3. Subtle Dark Wash (Protects left-aligned typography) */}
      <div className={styles.darkWash} />

      {/* 4. Layer 1: Fade to Black at Bottom */}
      <div className={styles.bottomFadeToBlack} />
    </div>
  );
};
