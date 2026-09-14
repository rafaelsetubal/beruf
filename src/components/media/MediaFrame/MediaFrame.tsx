import React from 'react';
import type { Theme } from '../../../design-system/theme';
import styles from './MediaFrame.module.css';

export interface MediaFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  title?: string;
  tag?: string;
  footerInfo?: string;
  status?: string;
  theme?: Theme;
  className?: string;
}

export const MediaFrame: React.FC<MediaFrameProps> = ({
  children,
  title,
  tag = 'ASSET // SPEC',
  footerInfo,
  status = 'ONLINE',
  theme,
  className = '',
  ...props
}) => {
  return (
    <div
      className={[styles.frame, className].filter(Boolean).join(' ')}
      {...(theme ? { 'data-theme': theme } : {})}
      {...props}
    >
      {(title || tag) && (
        <div className={styles.header}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className={styles.liveDot} />
            <span style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>{title || 'BERUF SPEC'}</span>
          </div>
          <span>{tag}</span>
        </div>
      )}

      <div className={styles.content}>{children}</div>

      {(footerInfo || status) && (
        <div className={styles.footer}>
          <span>{footerInfo || 'BERUF INDUSTRIAL PLATFORM // SYSTEM 01'}</span>
          <span>{status}</span>
        </div>
      )}
    </div>
  );
};
