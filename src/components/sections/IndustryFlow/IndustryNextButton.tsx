import React from 'react';
import styles from './IndustryNextButton.module.css';

interface IndustryNextButtonProps {
  onNext: () => void;
  isLast: boolean;
}

export const IndustryNextButton: React.FC<IndustryNextButtonProps> = ({
  onNext,
  isLast,
}) => {
  return (
    <button
      type="button"
      className={styles.nextBtn}
      onClick={onNext}
      aria-label={isLast ? 'Voltar ao primeiro setor' : 'Avançar para o próximo setor'}
    >
      <div className={styles.labelWrapper}>
        <span className={styles.labelLine1}>PRÓXIMO</span>
        <span className={styles.labelLine2}>SETOR</span>
      </div>

      <div className={styles.circle}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.arrowIcon}
          aria-hidden="true"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </div>
    </button>
  );
};
