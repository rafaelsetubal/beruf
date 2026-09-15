import React from 'react';
import styles from './SolutionCard.module.css';

export interface ProductPositionConfig {
  scale?: number;
  x?: string;
  y?: string;
  rotate?: string;
}

export interface SolutionCardProps {
  id: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  product: string;
  background: string;
  imageAlt?: string;
  productPosition?: ProductPositionConfig;
  productBlendMode?: 'normal' | 'screen' | 'lighten';
}

export const SolutionCard: React.FC<SolutionCardProps> = ({
  title,
  description,
  linkText,
  linkHref,
  product,
  background,
  imageAlt,
  productPosition = {},
  productBlendMode,
}) => {
  const {
    scale = 1,
    x = '0%',
    y = '0%',
    rotate = '0deg',
  } = productPosition;

  return (
    <article className={styles.card} aria-label={title}>
      {/* 1. Background Media Layer */}
      <div className={styles.bgWrapper} aria-hidden="true">
        <img
          src={background}
          alt=""
          className={styles.bgImage}
          loading="lazy"
        />
        <div className={styles.bgGlow} />
      </div>

      {/* 2. Structured Product Stage */}
      <div className={styles.productStage}>
        <div
          className={styles.productWrapper}
          style={
            {
              '--pos-x': x,
              '--pos-y': y,
              '--pos-scale': scale,
              '--pos-rotate': rotate,
            } as React.CSSProperties
          }
        >
          <img
            src={product}
            alt={imageAlt || title}
            className={styles.productImage}
            style={productBlendMode ? { mixBlendMode: productBlendMode } : undefined}
            loading="lazy"
          />
        </div>
      </div>

      {/* 3. Gradient Layer for Crisp Contrast */}
      <div className={styles.gradientOverlay} aria-hidden="true" />

      {/* 4. Bottom-Pinned Editorial HTML Content */}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <a href={linkHref} className={styles.cta}>
          <span>{linkText}</span>
          <span className={styles.ctaArrow} aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
};
