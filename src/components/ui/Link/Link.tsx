import React from 'react';
import { ExternalLinkIcon } from '../../../assets/icons';
import styles from './Link.module.css';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  underline?: boolean;
  alwaysUnderline?: boolean;
  isExternal?: boolean;
  tone?: 'default' | 'accent' | 'muted';
  className?: string;
  as?: React.ElementType;
}

export const Link: React.FC<LinkProps> = ({
  children,
  underline = true,
  alwaysUnderline = false,
  isExternal = false,
  tone = 'default',
  className = '',
  as: Component = 'a',
  target,
  rel,
  ...props
}) => {
  const toneClass = {
    default: '',
    accent: styles.toneAccent,
    muted: styles.toneMuted,
  }[tone];

  const classes = [
    styles.link,
    underline ? styles.underline : '',
    alwaysUnderline ? styles.alwaysUnderline : '',
    toneClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const externalProps = isExternal
    ? {
        target: target || '_blank',
        rel: rel || 'noopener noreferrer',
      }
    : { target, rel };

  return (
    <Component className={classes} {...externalProps} {...props}>
      <span>{children}</span>
      {isExternal && (
        <span className={styles.externalIcon} aria-hidden="true">
          <ExternalLinkIcon size={14} />
        </span>
      )}
    </Component>
  );
};
