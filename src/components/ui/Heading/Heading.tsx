import React from 'react';
import styles from './Heading.module.css';

export type HeadingLevel = 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type HeadingFontFamily = 'display' | 'barlow' | 'syne' | 'space';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  level?: HeadingLevel;
  fontFamily?: HeadingFontFamily;
  tone?: 'primary' | 'secondary' | 'muted' | 'accent' | 'inverted';
  as?: React.ElementType;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  children,
  level = 'h2',
  fontFamily = 'display',
  tone = 'primary',
  as,
  className = '',
  ...props
}) => {
  // Default HTML tag based on level
  const defaultTag = level === 'display' ? 'h1' : level;
  const Component = as || defaultTag;

  const levelClass = {
    display: styles.levelDisplay,
    h1: styles.levelH1,
    h2: styles.levelH2,
    h3: styles.levelH3,
    h4: styles.levelH4,
    h5: styles.levelH5,
    h6: styles.levelH6,
  }[level];

  const fontClass = {
    display: styles.fontDisplay,
    barlow: styles.fontBarlow,
    syne: styles.fontSyne,
    space: styles.fontSpace,
  }[fontFamily];

  const toneClass = {
    primary: styles.tonePrimary,
    secondary: styles.toneSecondary,
    muted: styles.toneMuted,
    accent: styles.toneAccent,
    inverted: styles.toneInverted,
  }[tone];

  const classes = [
    styles.heading,
    levelClass,
    fontClass,
    toneClass,
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
