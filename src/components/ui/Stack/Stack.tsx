import React from 'react';
import styles from './Stack.module.css';

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16;
  align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  wrap?: boolean;
  className?: string;
  as?: React.ElementType;
}

export const Stack: React.FC<StackProps> = ({
  children,
  direction = 'column',
  gap = 4,
  align = 'stretch',
  justify = 'start',
  wrap = false,
  className = '',
  as: Component = 'div',
  ...props
}) => {
  const dirClass = {
    row: styles.directionRow,
    column: styles.directionColumn,
    'row-reverse': styles.directionRowReverse,
    'column-reverse': styles.directionColumnReverse,
  }[direction];

  const gapClass = {
    0: styles.gap0,
    1: styles.gap1,
    2: styles.gap2,
    3: styles.gap3,
    4: styles.gap4,
    5: styles.gap5,
    6: styles.gap6,
    8: styles.gap8,
    10: styles.gap10,
    12: styles.gap12,
    16: styles.gap16,
  }[gap];

  const alignClass = {
    start: styles.alignStart,
    center: styles.alignCenter,
    end: styles.alignEnd,
    baseline: styles.alignBaseline,
    stretch: styles.alignStretch,
  }[align];

  const justifyClass = {
    start: styles.justifyStart,
    center: styles.justifyCenter,
    end: styles.justifyEnd,
    between: styles.justifyBetween,
    around: styles.justifyAround,
  }[justify];

  const classes = [
    styles.stack,
    dirClass,
    gapClass,
    alignClass,
    justifyClass,
    wrap ? styles.wrap : styles.nowrap,
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
