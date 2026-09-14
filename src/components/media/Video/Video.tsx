import React from 'react';
import type { BaseMediaProps } from '../types';
import { Media } from '../Media';
import { PlayIcon } from '../../../assets/icons';
import styles from './Video.module.css';

export interface VideoProps extends BaseMediaProps, React.VideoHTMLAttributes<HTMLVideoElement> {
  caption?: string;
  isSimulated?: boolean;
}

export const Video: React.FC<VideoProps> = ({
  src,
  poster,
  caption = 'BERUF // INDUSTRIAL AUTOMATION REEL',
  isSimulated = false,
  aspectRatio = '16/9',
  objectFit = 'cover',
  objectPosition = 'center',
  autoPlay = false,
  muted = true,
  loop = true,
  controls = true,
  overlay = 'none',
  theme,
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

  return (
    <Media
      aspectRatio={aspectRatio}
      overlay={overlay}
      theme={theme}
      className={className}
      style={style}
    >
      {src && !isSimulated ? (
        <video
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          controls={controls}
          className={[styles.video, fitClass].filter(Boolean).join(' ')}
          style={{ objectPosition }}
          {...props}
        />
      ) : (
        <div className={styles.videoPlaceholder}>
          <div className={styles.playBadge} role="img" aria-label="Play video simulation">
            <PlayIcon size={22} />
          </div>
          <span className={styles.videoMeta}>{caption}</span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.625rem',
              color: 'var(--color-text-muted)',
              marginTop: '4px',
            }}
          >
            RATIO: {aspectRatio} • SIMULATED MEDIA FOUNDATION
          </span>
        </div>
      )}
    </Media>
  );
};
