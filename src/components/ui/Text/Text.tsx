import React from 'react';
import styles from './Text.module.css';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  size?: 'lg' | 'md' | 'sm' | 'caption' | 'mono';
  tone?: 'primary' | 'secondary' | 'muted' | 'accent' | 'inverted';
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  as?: React.ElementType;
  className?: string;
}

export const Text: React.FC<TextProps> = ({
  children,
  size = 'md',
  tone = 'primary',
  weight = 'regular',
  as: Component = 'p',
  className = '',
  ...props
}) => {
  const sizeClass = {
    lg: styles.sizeLg,
    md: styles.sizeMd,
    sm: styles.sizeSm,
    caption: styles.sizeCaption,
    mono: styles.sizeMono,
  }[size];

  const toneClass = {
    primary: styles.tonePrimary,
    secondary: styles.toneSecondary,
    muted: styles.toneMuted,
    accent: styles.toneAccent,
    inverted: styles.toneInverted,
  }[tone];

  const weightClass = {
    regular: styles.weightRegular,
    medium: styles.weightMedium,
    semibold: styles.weightSemibold,
    bold: styles.weightBold,
  }[weight];

  const classes = [
    styles.text,
    sizeClass,
    toneClass,
    weightClass,
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
