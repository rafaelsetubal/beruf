import React from 'react';
import heroVideo from '../../../assets/images/hero-video2.mp4';
import { HeroHeader } from './HeroHeader';
import { HeroBackground } from './HeroBackground';
import { TrustedBrands } from './TrustedBrands';
import { OrganicWaveTransition } from './OrganicWaveTransition';
import styles from './CinematicHero.module.css';

export const CinematicHero: React.FC = () => {
  return (
    <div className={styles.heroOuterWrapper}>
      <section
        className={styles.heroSection}
        data-theme="black"
        aria-label="Hero BERUF"
      >
        {/* 1. Clean Editorial Header */}
        <HeroHeader />

        {/* 2. Full-bleed Video Background (Autoplay 60fps Loop) */}
        <HeroBackground videoSrc={heroVideo} />

        {/* 3. Hero Main Content Grid */}
        <div className={styles.heroStage}>
          <div className={styles.heroContent}>
            {/* Eyebrow */}
            <div className={styles.eyebrowRow}>
              <span className={styles.eyebrowText}>DESDE 1998</span>
              <span className={styles.eyebrowLine} aria-hidden="true" />
            </div>

            {/* Main Headline */}
            <h1 className={styles.headline}>
              TECNOLOGIA<br />
              QUE MOVE<br />
              A <span className={styles.highlightOrange}>INDÚSTRIA.</span>
            </h1>

            {/* Editorial Description */}
            <p className={styles.description}>
              Cabos especiais, componentes e soluções para automação, robótica e movimento industrial.
            </p>

            {/* Metalized Anodized Copper CTA */}
            <div className={styles.ctaArea}>
              <a href="#solucoes" className={styles.primaryCta}>
                <span className={styles.ctaSheen} aria-hidden="true" />
                <span className={styles.ctaText}>CONHEÇA NOSSAS SOLUÇÕES</span>
                <span className={styles.ctaArrow}>↗</span>
              </a>
            </div>
          </div>

          {/* 4. Trusted Brands Row */}
          <div className={styles.brandsArea}>
            <TrustedBrands />
          </div>
        </div>

        {/* 5. Organic Luminous Wave Transition (Black -> Orange Silk Light -> Cream) */}
        <OrganicWaveTransition />
      </section>
    </div>
  );
};
