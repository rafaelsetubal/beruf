import React from 'react';
import styles from './ImageReveal.module.css';

export interface ImageRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

/**
 * ImageReveal Component (Motion Foundation)
 * Statically prepares image with scale/curtain structure; ready for GSAP curtain unmasking.
 */
export const ImageReveal: React.FC<ImageRevealProps> = ({
  children,
  direction = 'up',
  className = '',
  ...props
}) => {
  return (
    <div
      className={[styles.imageRevealContainer, className].filter(Boolean).join(' ')}
      data-image-reveal={direction}
      {...props}
    >
      <div className={styles.imageContent}>{children}</div>
    </div>
  );
};
