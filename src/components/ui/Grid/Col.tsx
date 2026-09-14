import React from 'react';

export type ColSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'full';

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  span?: ColSpan;
  md?: ColSpan;
  lg?: ColSpan;
  xl?: ColSpan;
  offset?: number;
  className?: string;
  as?: React.ElementType;
}

export const Col: React.FC<ColProps> = ({
  children,
  span,
  md,
  lg,
  xl,
  className = '',
  as: Component = 'div',
  style,
  ...props
}) => {
  // Map lg to md/xl appropriately
  const effectiveMd = md || lg;
  const effectiveXl = xl || lg;

  const classes = [
    span ? (span === 'full' ? 'col-span-full' : `col-span-${span}`) : '',
    effectiveMd ? (effectiveMd === 'full' ? 'md-col-span-full' : `md-col-span-${effectiveMd}`) : '',
    effectiveXl ? (effectiveXl === 'full' ? 'xl-col-span-full' : `xl-col-span-${effectiveXl}`) : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={classes} style={style} {...props}>
      {children}
    </Component>
  );
};
