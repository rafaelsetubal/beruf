import React, { useRef } from 'react';
import styles from './TextReveal.module.css';

export interface TextRevealProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: string;
  splitBy?: 'words' | 'lines';
  delay?: number;
  className?: string;
  as?: React.ElementType;
}

/**
 * TextReveal Component (Motion Foundation)
 * Statically structures text into masked containers ready for GSAP y-staggering.
 */
export const TextReveal: React.FC<TextRevealProps> = ({
  children,
  splitBy = 'words',
  delay = 0,
  className = '',
  as: Component = 'span',
  ...props
}) => {
  const containerRef = useRef<HTMLElement>(null);

  if (typeof children !== 'string') {
    return <Component className={className} {...props}>{children}</Component>;
  }

  const words = children.split(' ');

  return (
    <Component
      ref={containerRef}
      className={[styles.textReveal, className].filter(Boolean).join(' ')}
      data-text-reveal={splitBy}
      {...props}
    >
      {words.map((word, idx) => (
        <span key={idx} className={styles.wordWrapper}>
          <span
            className={styles.inner}
            style={{
              transitionDelay: `${delay + idx * 40}ms`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </Component>
  );
};
