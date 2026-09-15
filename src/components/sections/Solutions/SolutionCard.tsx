import React from 'react';
import styles from './SolutionCard.module.css';

export interface ProductPositionConfig {
  scale?: number;
  x?: string;
  y?: string;
  rotate?: string;
  width?: string;
  height?: string;
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
}) => {
  const {
    scale = 1.15,
    x = '0%',
    y = '-15%',
    rotate = '0deg',
    width = '112%',
    height = '75%',
  } = productPosition;

  return (
    <article className={styles.card} aria-label={title}>
      {/* 1. Card Background Layer (Clipped to Card Boundary with Rounded Corners) */}
      <div className={styles.bgLayer} aria-hidden="true">
        <img
          src={background}
          alt=""
          className={styles.bgImage}
          loading="lazy"
        />
        <div className={styles.bgGlow} />
      </div>

      {/* 2. Independent Product Layer (Overflows and Breaks Card Top Edge) */}
      <div
        className={styles.productStage}
        style={
          {
            '--pos-x': x,
            '--pos-y': y,
            '--pos-scale': scale,
            '--pos-rotate': rotate,
            '--pos-w': width,
            '--pos-h': height,
          } as React.CSSProperties
        }
      >
        <img
          src={product}
          alt={imageAlt || title}
          className={styles.productImage}
          loading="lazy"
        />
      </div>

      {/* 3. Gradient Overlay for Contrast and Readability */}
      <div className={styles.gradientOverlay} aria-hidden="true" />

      {/* 4. Bottom Editorial Typography & CTA */}
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
