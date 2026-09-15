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
  eyebrow?: string;
  imageAlt?: string;
  productScale?: number;
  productX?: string;
  productY?: string;
  productRotate?: string;
  productWidth?: string;
  productHeight?: string;
  productBlendMode?: 'normal' | 'screen' | 'lighten';
}

export const SolutionCard: React.FC<SolutionCardProps> = ({
  title,
  description,
  linkText,
  linkHref,
  product,
  background,
  eyebrow,
  imageAlt,
  productScale = 1.15,
  productX = '0%',
  productY = '-8%',
  productRotate = '0deg',
  productWidth = '125%',
  productHeight = '75%',
  productBlendMode,
}) => {
  return (
    <article className={styles.solutionCard} aria-label={title}>
      {/* 1. Background Layer (Full-bleed card backdrop with subtle zoom) */}
      <div className={styles.solutionCard__background}>
        <img
          src={background}
          alt=""
          aria-hidden="true"
          className={styles.backgroundImage}
          loading="lazy"
        />
        <div className={styles.ambientGlow} aria-hidden="true" />
      </div>

      {/* 2. Independent Product Layer (Large visual asset protruding from top) */}
      <div
        className={styles.solutionCard__product}
        style={
          {
            '--product-scale': productScale,
            '--product-x': productX,
            '--product-y': productY,
            '--product-rotate': productRotate,
            '--product-width': productWidth,
            '--product-height': productHeight,
          } as React.CSSProperties
        }
      >
        <img
          src={product}
          alt={imageAlt || title}
          className={styles.productImage}
          loading="lazy"
          style={productBlendMode ? { mixBlendMode: productBlendMode } : undefined}
        />
      </div>

      {/* 3. Contrast & Legibility Gradient Layer */}
      <div className={styles.solutionCard__gradient} aria-hidden="true" />

      {/* 4. HTML Editorial Content Layer (Bottom-pinned) */}
      <div className={styles.solutionCard__content}>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
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
