import React, { useRef } from 'react';
import styles from './Reveal.module.css';

export interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'fade' | 'slideUp';
  delay?: number;
  as?: React.ElementType;
  className?: string;
}

/**
 * Preparatory Reveal Component
 * Functions statically or with minimal CSS transitions; ready for GSAP ScrollTrigger wiring.
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  variant = 'slideUp',
  delay = 0,
  as: Component = 'div',
  className = '',
  style,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const variantClass = variant === 'fade' ? styles.fade : styles.slideUp;

  return (
    <Component
      ref={containerRef}
      className={[styles.revealWrapper, variantClass, styles.visible, className]
        .filter(Boolean)
        .join(' ')}
      data-reveal={variant}
      style={{
        ...style,
        transitionDelay: `${delay}ms`,
      }}
      {...props}
    >
      {children}
    </Component>
  );
};
