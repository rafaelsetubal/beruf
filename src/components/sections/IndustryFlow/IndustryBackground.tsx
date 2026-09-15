import React from 'react';
import { type IndustrySector } from '../../../data/industrySectors';
import styles from './IndustryBackground.module.css';

interface IndustryBackgroundProps {
  sectors: IndustrySector[];
  activeIndex: number;
}

export const IndustryBackground: React.FC<IndustryBackgroundProps> = ({
  sectors,
  activeIndex,
}) => {
  return (
    <div className={styles.stage} aria-hidden="true">
      {/* 1. Full-bleed Sector Photographic Plates */}
      {sectors.map((sector, index) => {
        const isActive = index === activeIndex;
        const isNearby = Math.abs(index - activeIndex) <= 1;

        return (
          <div
            key={sector.id}
            className={[
              styles.imagePlate,
              isActive ? styles.imagePlateActive : '',
            ].filter(Boolean).join(' ')}
          >
            {(isActive || isNearby) && (
              <img
                src={sector.image}
                alt={sector.name}
                className={styles.sectorImage}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            )}
          </div>
        );
      })}

      {/* 2. Left Contrast Gradient & Cinema Atmosphere Filter */}
      <div className={styles.cinemaVignette} />
      <div className={styles.leftContrastGradient} />
      <div className={styles.bottomContrastGradient} />
    </div>
  );
};
