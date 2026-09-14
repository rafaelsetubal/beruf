import React from 'react';
import type { ButtonVariant, ButtonSize } from '../Button';
import styles from './IconButton.module.css';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  'aria-label': string; // Required for accessibility
  variant?: ButtonVariant;
  size?: ButtonSize;
  rounded?: boolean;
  className?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  'aria-label': ariaLabel,
  variant = 'secondary',
  size = 'md',
  rounded = false,
  disabled = false,
  className = '',
  ...props
}) => {
  const variantClass = {
    primary: styles.variantPrimary,
    secondary: styles.variantSecondary,
    outline: styles.variantOutline,
    ghost: styles.variantGhost,
    energy: styles.variantEnergy,
  }[variant];

  const sizeClass = {
    sm: styles.sizeSm,
    md: styles.sizeMd,
    lg: styles.sizeLg,
  }[size];

  const classes = [
    styles.iconButton,
    variantClass,
    sizeClass,
    rounded ? styles.rounded : '',
    disabled ? styles.disabled : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classes}
      aria-label={ariaLabel}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
