import React from 'react';
import type { BaseMediaProps } from '../types';
import styles from './Media.module.css';

export interface MediaProps extends BaseMediaProps, React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const Media: React.FC<MediaProps> = ({
  children,
  aspectRatio = '16/9',
  overlay = 'none',
  theme,
  className = '',
  style,
  ...props
}) => {
  const arClass = {
    '16/9': styles.ar16_9,
    '4/3': styles.ar4_3,
    '1/1': styles.ar1_1,
    '21/9': styles.ar21_9,
    '9/16': styles.ar9_16,
    '3/2': styles.ar3_2,
    auto: styles.arAuto,
  }[aspectRatio];

  const overlayClass = {
    none: '',
    dark: styles.overlayDark,
    light: styles.overlayLight,
    orange: styles.overlayOrange,
    gradient: styles.overlayGradient,
    'technical-grid': styles.overlayTechnicalGrid,
  }[overlay];

  const classes = [
    styles.mediaContainer,
    arClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={classes}
      style={style}
      {...(theme ? { 'data-theme': theme } : {})}
      {...props}
    >
      {children}
      {overlay !== 'none' && <div className={[styles.overlay, overlayClass].filter(Boolean).join(' ')} />}
    </div>
  );
};
