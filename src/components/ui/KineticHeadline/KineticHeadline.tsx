import React from 'react';
import styles from './KineticHeadline.module.css';

export interface KineticHeadlineProps {
  lines: string[];
  highlightWord?: string;
  theme?: 'cream' | 'dark';
  isTriggered: boolean;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
}

export const KineticHeadline: React.FC<KineticHeadlineProps> = ({
  lines,
  highlightWord = 'INDÚSTRIA.',
  theme = 'cream',
  isTriggered,
  className = '',
  as: Component = 'h2',
}) => {
  let wordCounter = 0;

  return (
    <Component
      className={[
        styles.headline,
        theme === 'cream' ? styles.themeCream : styles.themeDark,
        className,
      ].filter(Boolean).join(' ')}
    >
      {lines.map((line, lineIndex) => {
        const words = line.split(' ');

        return (
          <span key={lineIndex} className={styles.line}>
            {words.map((word, wIdx) => {
              const currentIdx = wordCounter++;
              const isHighlight = word.toUpperCase() === highlightWord.toUpperCase();
              const delayMs = currentIdx * 90; // Staggered typewriter cadence

              return (
                <span
                  key={wIdx}
                  className={[
                    styles.word,
                    isHighlight ? styles.highlightWord : '',
                    isTriggered ? styles.wordRevealed : '',
                  ].filter(Boolean).join(' ')}
                  style={
                    {
                      '--word-delay': `${delayMs}ms`,
                    } as React.CSSProperties
                  }
                >
                  {word}
                  {wIdx < words.length - 1 ? '\u00A0' : ''}
                </span>
              );
            })}
          </span>
        );
      })}
    </Component>
  );
};
