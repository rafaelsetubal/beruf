import React from 'react';
import styles from './Grid.module.css';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  columns?: 1 | 2 | 3 | 4 | 6 | 12;
  align?: 'start' | 'center' | 'end' | 'stretch';
  className?: string;
  as?: React.ElementType;
}

export const Grid: React.FC<GridProps> = ({
  children,
  gap,
  columns,
  align,
  className = '',
  as: Component = 'div',
  ...props
}) => {
  const gapClass = gap ? {
    none: styles.gapNone,
    sm: styles.gapSm,
    md: styles.gapMd,
    lg: styles.gapLg,
    xl: styles.gapXl,
  }[gap] : '';

  const colsClass = columns ? {
    1: styles.cols1,
    2: styles.cols2,
    3: styles.cols3,
    4: styles.cols4,
    6: styles.cols6,
    12: styles.cols12,
  }[columns] : '';

  const alignClass = align ? {
    start: styles.alignStart,
    center: styles.alignCenter,
    end: styles.alignEnd,
    stretch: styles.alignStretch,
  }[align] : '';

  const classes = [
    styles.grid,
    gapClass,
    colsClass,
    alignClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};
