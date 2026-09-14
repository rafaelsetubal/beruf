import React from 'react';
import type { BaseMediaProps } from '../types';
import { Media } from '../Media';
import { TechnicalPlaceholder } from '../Placeholder/TechnicalPlaceholder';
import styles from './Image.module.css';

export interface ImageProps extends BaseMediaProps, React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
  fallbackLabel?: string;
  fallbackSublabel?: string;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  aspectRatio = '16/9',
  objectFit = 'cover',
  objectPosition = 'center',
  priority = false,
  loading,
  overlay = 'none',
  theme,
  fallbackLabel,
  fallbackSublabel,
  className = '',
  style,
  ...props
}) => {
  const fitClass = {
    cover: styles.fitCover,
    contain: styles.fitContain,
    fill: styles.fitFill,
    none: styles.fitNone,
    'scale-down': styles.fitScaleDown,
  }[objectFit];

  const effectiveLoading = priority ? 'eager' : (loading || 'lazy');

  return (
    <Media
      aspectRatio={aspectRatio}
      overlay={overlay}
      theme={theme}
      className={className}
      style={style}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          loading={effectiveLoading}
          fetchPriority={priority ? 'high' : 'auto'}
          className={[styles.img, fitClass].filter(Boolean).join(' ')}
          style={{ objectPosition }}
          {...props}
        />
      ) : (
        <TechnicalPlaceholder
          label={fallbackLabel || alt || 'BERUF // TECHNICAL IMAGE ASSET'}
          sublabel={fallbackSublabel || `OBJECT-FIT: ${objectFit.toUpperCase()} // PRIORITY: ${priority ? 'HIGH' : 'LOW'}`}
          aspectRatio={aspectRatio}
        />
      )}
    </Media>
  );
};
