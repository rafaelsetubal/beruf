import React from 'react';
import styles from './EditorialPlate.module.css';

export interface EditorialPlateProps {
  label?: string;
  meta?: string;
  variant?: 'auto' | 'dark' | 'cream' | 'orange';
  ratioText?: string;
  className?: string;
}

/**
 * EditorialPlate
 * An ultra-restrained, cinematic placeholder that functions as an editorial photographic plate
 * without busy wireframes, dashboards, or excessive technical decoration.
 */
export const EditorialPlate: React.FC<EditorialPlateProps> = ({
  label = 'RESERVADO PARA FOTOGRAFIA // CGI',
  meta = 'COMPOSIÇÃO EDITORIAL • 16:9',
  variant = 'auto',
  ratioText,
  className = '',
}) => {
  const variantClass = {
    auto: '',
    dark: styles.darkPlate,
    cream: styles.creamPlate,
    orange: styles.orangePlate,
  }[variant];

  return (
    <div className={[styles.plate, variantClass, className].filter(Boolean).join(' ')}>
      {/* Subtle corner crop marks (minimal 6px ticks) */}
      <span className={styles.cornerTL} aria-hidden="true" />
      <span className={styles.cornerTR} aria-hidden="true" />
      <span className={styles.cornerBL} aria-hidden="true" />
      <span className={styles.cornerBR} aria-hidden="true" />

      {/* Quiet center indicator */}
      <div className={styles.contentCenter}>
        <span className={styles.centerLabel}>{label}</span>
        <span className={styles.centerMeta}>{meta}</span>
      </div>

      {/* Subtle footer */}
      {ratioText && (
        <div className={styles.footerBar}>
          <span>BERUF ARCHIVE</span>
          <span>{ratioText}</span>
        </div>
      )}
    </div>
  );
};
