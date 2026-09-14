import React from 'react';
import styles from './HeroProgress.module.css';

export type HeroNarrativeId = 'A01' | 'A02' | 'A03' | 'A04';

export interface HeroProgressProps {
  activeState: HeroNarrativeId;
  onSelectState?: (state: HeroNarrativeId) => void;
}

const STATES: { id: HeroNarrativeId; label: string }[] = [
  { id: 'A01', label: 'A01' },
  { id: 'A02', label: 'A02' },
  { id: 'A03', label: 'A03' },
  { id: 'A04', label: 'A04' },
];

export const HeroProgress: React.FC<HeroProgressProps> = ({
  activeState,
  onSelectState,
}) => {
  return (
    <nav className={styles.progressRail} aria-label="Progresso da Narrativa">
      {STATES.map((step) => {
        const isActive = activeState === step.id;
        return (
          <button
            key={step.id}
            type="button"
            className={[styles.stepButton, isActive ? styles.stepButtonActive : ''].join(' ')}
            onClick={() => onSelectState?.(step.id)}
            aria-label={`Ir para o estado narrativo ${step.label}`}
            aria-current={isActive ? 'step' : undefined}
          >
            <span className={styles.stepLabel}>{step.label}</span>
            <span className={styles.stepLine} aria-hidden="true" />
          </button>
        );
      })}
    </nav>
  );
};
