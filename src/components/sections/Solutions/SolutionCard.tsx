import React from 'react';
import styles from './SolutionCard.module.css';

export interface SolutionCardProps {
  id: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  product: string;
  background: string;
  imageAlt?: string;
  imageScale?: string;
  imageOffsetY?: string;
  imageOffsetX?: string;
}

export const SolutionCard: React.FC<SolutionCardProps> = ({
  title,
  description,
  linkText,
  linkHref,
  product,
  background,
  imageAlt,
  imageScale = '105%',
  imageOffsetY = '0px',
  imageOffsetX = '0px',
}) => {
  return (
    <article className={styles.card} aria-label={title}>
      {/* 1. Background Layer (Clipped to Card Bounds with Rounded Corners) */}
      <div className={styles.bgLayer} aria-hidden="true">
        <img
          src={background}
          alt=""
          className={styles.bgImage}
          loading="lazy"
        />
        <div className={styles.bgGlow} />
      </div>

      {/* 2. Product Overflow Zone & Horizontal Clip Mask (Top Elevation + Strict Lateral Containment) */}
      <div className={styles.productOverflowZone} aria-hidden="true">
        <div className={styles.productClip}>
          <img
            src={product}
            alt={imageAlt || title}
            className={styles.productImage}
            style={
              {
                '--img-scale': imageScale,
                '--img-offset-y': imageOffsetY,
                '--img-offset-x': imageOffsetX,
              } as React.CSSProperties
            }
            loading="lazy"
          />
        </div>
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
