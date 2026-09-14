import React, { useState, useEffect } from 'react';
import heroVideo from '../../../assets/images/hero-video2.mp4';
import { HeroHeader } from './HeroHeader';
import { HeroBackground } from './HeroBackground';
import { TrustedBrands } from './TrustedBrands';
import { OrganicWaveTransition } from './OrganicWaveTransition';
import styles from './CinematicHero.module.css';

export const CinematicHero: React.FC = () => {
  const [isInset, setIsInset] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger the immersion inset effect as soon as the user starts scrolling (> 20px)
      setIsInset(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={[
        styles.heroOuterWrapper,
        isInset ? styles.heroOuterInset : '',
      ].filter(Boolean).join(' ')}
    >
      <section
        className={[
          styles.heroSection,
          isInset ? styles.heroSectionInset : '',
        ].filter(Boolean).join(' ')}
        data-theme="black"
        aria-label="Hero BERUF"
      >
        {/* 1. Clean Editorial Header (80-90px) */}
        <HeroHeader />

        {/* 2. Full-bleed Video Background (Autoplay 60fps Loop, Light Overlays) */}
        <HeroBackground videoSrc={heroVideo} />

        {/* 3. Hero Main Content Grid (Left-Aligned ~7vw, 30-35% width) */}
        <div className={styles.heroStage}>
          <div className={styles.heroContent}>
            {/* Eyebrow */}
            <div className={styles.eyebrowRow}>
              <span className={styles.eyebrowText}>DESDE 1998</span>
              <span className={styles.eyebrowLine} aria-hidden="true" />
            </div>

            {/* Main Headline (Urbanist 500, Large, Refined) */}
            <h1 className={styles.headline}>
              TECNOLOGIA<br />
              QUE MOVE<br />
              A <span className={styles.highlightOrange}>INDÚSTRIA.</span>
            </h1>

            {/* Editorial Description */}
            <p className={styles.description}>
              Cabos especiais, componentes e soluções para automação, robótica e movimento industrial.
            </p>

            {/* Single Refined CTA */}
            <div className={styles.ctaArea}>
              <a href="#solucoes" className={styles.primaryCta}>
                <span>CONHEÇA NOSSAS SOLUÇÕES</span>
                <span className={styles.ctaArrow}>↗</span>
              </a>
            </div>
          </div>

          {/* 4. Trusted Brands Row (bottom ~8-10vh, fully visible with integrated Scroll Cue) */}
          <div className={styles.brandsArea}>
            <TrustedBrands />
          </div>
        </div>

        {/* 5. Glowing Silk Light Ribbon Wave Transition to Cream */}
        <OrganicWaveTransition />
      </section>
    </div>
  );
};
