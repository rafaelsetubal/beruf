import React from 'react';
import styles from './Container.module.css';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'fluid';
  noPadding?: boolean;
  className?: string;
  as?: React.ElementType;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth = '2xl',
  noPadding = false,
  className = '',
  as: Component = 'div',
  ...props
}) => {
  const maxWidthClass = {
    sm: styles.maxSm,
    md: styles.maxMd,
    lg: styles.maxLg,
    xl: styles.maxXl,
    '2xl': styles.max2xl,
    fluid: styles.fluid,
  }[maxWidth];

  const classes = [
    styles.container,
    maxWidthClass,
    noPadding ? styles.noPadding : '',
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
