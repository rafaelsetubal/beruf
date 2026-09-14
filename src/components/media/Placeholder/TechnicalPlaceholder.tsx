import React from 'react';
import styles from './TechnicalPlaceholder.module.css';

interface TechnicalPlaceholderProps {
  label?: string;
  sublabel?: string;
  aspectRatio?: string;
  className?: string;
}

export const TechnicalPlaceholder: React.FC<TechnicalPlaceholderProps> = ({
  label = 'BERUF // INDUSTRIAL ASSET',
  sublabel = 'SPEC_PLACEHOLDER_V1 // NO_EXTERNAL_DEP',
  aspectRatio = '16:9',
  className = '',
}) => {
  return (
    <div className={[styles.placeholder, className].filter(Boolean).join(' ')}>
      {/* Background Architectural Grid */}
      <div className={styles.gridOverlay} />

      {/* Technical Corner Markers */}
      <span className={styles.cornerTL} />
      <span className={styles.cornerTR} />
      <span className={styles.cornerBL} />
      <span className={styles.cornerBR} />

      {/* Center Crosshair */}
      <div className={styles.crosshair}>
        <div className={styles.crossH} />
        <div className={styles.crossV} />
        <div className={styles.crossCircle} />
      </div>

      {/* Technical Labels */}
      <div className={styles.topMeta}>
        <span className={styles.tag}>ASPECT: {aspectRatio}</span>
        <span className={styles.tag}>CH: 01-RAW</span>
      </div>

      <div className={styles.bottomMeta}>
        <span className={styles.title}>{label}</span>
        <span className={styles.subtitle}>{sublabel}</span>
      </div>
    </div>
  );
};
