import React from 'react';
import styles from './IndustryScrollCue.module.css';

interface IndustryScrollCueProps {
  activeIndex: number;
}

export const IndustryScrollCue: React.FC<IndustryScrollCueProps> = ({ activeIndex }) => {
  return (
    <div
      className={[
        styles.cueContainer,
        activeIndex > 0 ? styles.cueFaded : '',
      ].filter(Boolean).join(' ')}
      aria-hidden="true"
    >
      <div className={styles.textStack}>
        <span>SCROLL</span>
        <span>PARA</span>
        <span>EXPLORAR</span>
      </div>

      <div className={styles.cueLine}>
        <div className={styles.cueDot} />
      </div>
    </div>
  );
};
