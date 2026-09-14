import React from 'react';
import styles from './HeroScrollCue.module.css';

export interface HeroScrollCueProps {
  visible?: boolean;
}

export const HeroScrollCue: React.FC<HeroScrollCueProps> = ({ visible = true }) => {
  return (
    <div
      className={styles.scrollCue}
      style={{ opacity: visible ? 1 : 0 }}
      aria-hidden="true"
    >
      <span className={styles.scrollText}>SCROLL</span>
      <div className={styles.scrollLine} />
    </div>
  );
};
