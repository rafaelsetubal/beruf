import React from 'react';
import {
  AbbLogo,
  SiemensLogo,
  MitsubishiLogo,
  WegLogo,
  SchneiderLogo,
  KlabinLogo,
  AmbevLogo,
  BoschLogo,
} from './BrandLogos';
import styles from './TrustedBrands.module.css';

const BRAND_ITEMS = [
  { id: 'abb', name: 'ABB', Component: AbbLogo, height: 24 },
  { id: 'siemens', name: 'SIEMENS', Component: SiemensLogo, height: 18 },
  { id: 'mitsubishi', name: 'MITSUBISHI ELECTRIC', Component: MitsubishiLogo, height: 24 },
  { id: 'weg', name: 'WEG', Component: WegLogo, height: 24 },
  { id: 'schneider', name: 'Schneider Electric', Component: SchneiderLogo, height: 24 },
  { id: 'klabin', name: 'Klabin', Component: KlabinLogo, height: 25 },
  { id: 'ambev', name: 'ambev', Component: AmbevLogo, height: 18 },
  { id: 'bosch', name: 'BOSCH', Component: BoschLogo, height: 24 },
];

export const TrustedBrands: React.FC = () => {
  return (
    <div className={styles.trustedWrapper}>
      {/* Top Bar: Eyebrow + Right-aligned Scroll Indicator */}
      <div className={styles.headerRow}>
        <div className={styles.eyebrowRow}>
          <span className={styles.eyebrowText}>CONFIANÇA EM GRANDES OPERAÇÕES</span>
          <span className={styles.eyebrowLine} aria-hidden="true" />
        </div>

        <div className={styles.scrollBlock} aria-hidden="true">
          <div className={styles.scrollDivider} />
          <div className={styles.scrollContent}>
            <span className={styles.scrollText}>SCROLL</span>
            <span className={styles.scrollArrow}>↓</span>
          </div>
        </div>
      </div>

      {/* Infinite Marquee Carousel Container */}
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {/* First Set of Logos */}
          <div className={styles.marqueeGroup}>
            {BRAND_ITEMS.map(({ id, name, Component, height }) => (
              <div key={`set1-${id}`} className={styles.brandItem} title={name}>
                <Component height={height} className={styles.logoSvg} />
              </div>
            ))}
          </div>

          {/* Second Set of Logos (Seamless infinite loop) */}
          <div className={styles.marqueeGroup} aria-hidden="true">
            {BRAND_ITEMS.map(({ id, name, Component, height }) => (
              <div key={`set2-${id}`} className={styles.brandItem} title={name}>
                <Component height={height} className={styles.logoSvg} />
              </div>
            ))}
          </div>

          {/* Third Set of Logos (Ensures continuous flow on ultra-wide screens) */}
          <div className={styles.marqueeGroup} aria-hidden="true">
            {BRAND_ITEMS.map(({ id, name, Component, height }) => (
              <div key={`set3-${id}`} className={styles.brandItem} title={name}>
                <Component height={height} className={styles.logoSvg} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
