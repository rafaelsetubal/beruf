import React from 'react';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'energy';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  fullWidth?: boolean;
  isLoading?: boolean;
  className?: string;
  as?: React.ElementType;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  prefixIcon,
  suffixIcon,
  fullWidth = false,
  isLoading = false,
  disabled = false,
  className = '',
  as: Component = 'button',
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
    styles.button,
    variantClass,
    sizeClass,
    fullWidth ? styles.fullWidth : '',
    disabled || isLoading ? styles.disabled : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={classes} disabled={disabled || isLoading} {...props}>
      {prefixIcon && <span className={styles.iconSlot}>{prefixIcon}</span>}
      <span>{isLoading ? 'Aguarde...' : children}</span>
      {suffixIcon && <span className={styles.iconSlot}>{suffixIcon}</span>}
    </Component>
  );
};
