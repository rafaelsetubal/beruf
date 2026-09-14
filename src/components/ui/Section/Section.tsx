import React from 'react';
import type { Theme } from '../../../design-system/theme';
import styles from './Section.module.css';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  spacing?: 'none' | 'compact' | 'regular' | 'relaxed' | 'hero';
  theme?: Theme;
  borderTop?: boolean;
  borderBottom?: boolean;
  className?: string;
  as?: React.ElementType;
}

export const Section: React.FC<SectionProps> = ({
  children,
  spacing = 'regular',
  theme,
  borderTop = false,
  borderBottom = false,
  className = '',
  as: Component = 'section',
  ...props
}) => {
  const spacingClass = {
    none: styles.spacingNone,
    compact: styles.spacingCompact,
    regular: styles.spacingRegular,
    relaxed: styles.spacingRelaxed,
    hero: styles.spacingHero,
  }[spacing];

  const classes = [
    styles.section,
    spacingClass,
    borderTop ? styles.borderTop : '',
    borderBottom ? styles.borderBottom : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component
      className={classes}
      {...(theme ? { 'data-theme': theme } : {})}
      {...props}
    >
      {children}
    </Component>
  );
};
