import React from 'react';
import styles from './IndustryProgress.module.css';

interface IndustryProgressProps {
  total: number;
  current: number;
  onSelect: (index: number) => void;
}

export const IndustryProgress: React.FC<IndustryProgressProps> = ({
  total,
  current,
  onSelect,
}) => {
  const progressRatio = total > 1 ? (current / (total - 1)) * 100 : 0;

  return (
    <div className={styles.progressContainer} aria-label="Progresso dos setores">
      {/* Background Track Line */}
      <div className={styles.trackLine}>
        {/* Active Orange Fill */}
        <div
          className={styles.fillLine}
          style={{ width: `${progressRatio}%` }}
          aria-hidden="true"
        />
      </div>

      {/* 6 Interactive Milestone Dots */}
      <div className={styles.dotsRow}>
        {Array.from({ length: total }).map((_, index) => {
          const isCompletedOrActive = index <= current;
          const isCurrent = index === current;

          return (
            <button
              key={index}
              type="button"
              className={[
                styles.dotBtn,
                isCompletedOrActive ? styles.dotCompleted : '',
                isCurrent ? styles.dotCurrent : '',
              ].filter(Boolean).join(' ')}
              onClick={() => onSelect(index)}
              aria-label={`Ir para setor ${index + 1}`}
            >
              <span className={styles.dotInner} />
            </button>
          );
        })}
      </div>
    </div>
  );
};
