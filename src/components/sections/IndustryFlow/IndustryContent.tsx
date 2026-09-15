import React from 'react';
import { type IndustrySector } from '../../../data/industrySectors';
import styles from './IndustryContent.module.css';

interface IndustryContentProps {
  currentSector: IndustrySector;
  totalCount: number;
}

export const IndustryContent: React.FC<IndustryContentProps> = ({
  currentSector,
  totalCount,
}) => {
  return (
    <div className={styles.contentContainer}>
      {/* 1. Static Display Eyebrow + Headline */}
      <div className={styles.editorialHeader}>
        <div className={styles.eyebrowRow}>
          <span className={styles.eyebrowText}>APLICAÇÕES & MERCADOS</span>
          <span className={styles.eyebrowLine} aria-hidden="true" />
        </div>

        <h2 className={styles.displayHeadline}>
          ONDE A<br />
          TECNOLOGIA<br />
          ENCONTRA<br />
          O <span className={styles.highlightOrange}>MOVIMENTO.</span>
        </h2>

        <p className={styles.supportingText}>
          Soluções desenvolvidas para ambientes onde precisão, proteção e continuidade fazem diferença.
        </p>
      </div>

      {/* 2. Dynamic Sector State Information (Animated on Transition) */}
      <div className={styles.sectorCard} key={currentSector.id}>
        <div className={styles.sectorMetaRow}>
          <span className={styles.sectorCounter}>
            {currentSector.number} / {String(totalCount).padStart(2, '0')}
          </span>
          <span className={styles.metaDivider} aria-hidden="true">•</span>
          <span className={styles.sectorCategory}>{currentSector.category}</span>
        </div>

        <h3 className={styles.sectorName}>{currentSector.name}</h3>

        <p className={styles.sectorDescription}>
          {currentSector.description}
        </p>

        {/* Product Chips */}
        {currentSector.products && currentSector.products.length > 0 && (
          <div className={styles.productsList} aria-label="Soluções aplicadas">
            {currentSector.products.map((product) => (
              <span key={product} className={styles.productChip}>
                {product}
              </span>
            ))}
          </div>
        )}

        {/* Action CTA */}
        <div className={styles.ctaWrapper}>
          <a href={currentSector.ctaHref} className={styles.sectorCta}>
            <span>{currentSector.ctaText}</span>
            <span className={styles.ctaArrow} aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </div>
  );
};
