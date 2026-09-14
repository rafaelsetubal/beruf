import React from 'react';
import styles from './MaskReveal.module.css';

export interface MaskRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  shape?: 'inset' | 'circle';
  className?: string;
}

/**
 * MaskReveal Component (Motion Foundation)
 * Statically structures clip-path masking ready for GSAP clip-path wipe animation.
 */
export const MaskReveal: React.FC<MaskRevealProps> = ({
  children,
  shape = 'inset',
  className = '',
  ...props
}) => {
  const shapeClass = shape === 'circle' ? styles.clipCircle : styles.clipInset;

  return (
    <div
      className={[styles.maskReveal, shapeClass, className].filter(Boolean).join(' ')}
      data-mask-reveal={shape}
      {...props}
    >
      {children}
    </div>
  );
};
