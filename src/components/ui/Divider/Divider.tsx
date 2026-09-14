import React from 'react';
import styles from './Divider.module.css';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  label?: React.ReactNode;
  tone?: 'default' | 'strong' | 'accent';
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  label,
  tone = 'default',
  className = '',
  ...props
}) => {
  const toneClass = {
    default: '',
    strong: styles.toneStrong,
    accent: styles.toneAccent,
  }[tone];

  if (orientation === 'vertical') {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={[styles.dividerVertical, toneClass, className].filter(Boolean).join(' ')}
        {...props}
      />
    );
  }

  if (label) {
    return (
      <div
        role="separator"
        aria-orientation="horizontal"
        className={[styles.withLabel, toneClass, className].filter(Boolean).join(' ')}
        {...props}
      >
        <span className={styles.line} />
        <span className={styles.label}>{label}</span>
        <span className={styles.line} />
      </div>
    );
  }

  return (
    <hr
      className={[styles.dividerHorizontal, toneClass, className].filter(Boolean).join(' ')}
      {...props}
    />
  );
};
