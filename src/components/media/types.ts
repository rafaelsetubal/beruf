import type { Theme } from '../../design-system/theme';

export type AspectRatio = '16/9' | '4/3' | '1/1' | '21/9' | '9/16' | '3/2' | 'auto';
export type ObjectFit = 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
export type ObjectPosition = 'center' | 'top' | 'bottom' | 'left' | 'right' | string;
export type MediaOverlay = 'none' | 'dark' | 'light' | 'orange' | 'gradient' | 'technical-grid';

export interface BaseMediaProps {
  aspectRatio?: AspectRatio;
  objectFit?: ObjectFit;
  objectPosition?: ObjectPosition;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  overlay?: MediaOverlay;
  theme?: Theme;
  className?: string;
  style?: React.CSSProperties;
}
