import React from 'react';

interface BerufLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  themeVariant?: 'auto' | 'orange-circle' | 'monochrome' | 'white';
}

/**
 * BERUF Brasil Official Brand Mark
 * Precise vector geometric logo:
 * - Brand orange circular badge (#FF8F1C)
 * - Industrial technical wordmark 'BERUF'
 */
export const BerufLogo: React.FC<BerufLogoProps> = ({
  size = 40,
  themeVariant = 'orange-circle',
  className = '',
  ...props
}) => {
  const isCircle = themeVariant === 'orange-circle';
  const circleColor = isCircle ? 'var(--color-brand-orange, #FF8F1C)' : 'currentColor';
  const textColor = isCircle ? '#000000' : 'var(--color-text-primary)';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="BERUF Brasil Logo"
      role="img"
      {...props}
    >
      {/* Brand Orange Round Badge */}
      <circle cx="50" cy="50" r="48" fill={circleColor} />

      {/* Industrial Wordmark: BERUF */}
      {/* Engineered technical glyphs with characteristic angular cuts */}
      <g fill={textColor}>
        {/* B */}
        <path d="M19 38h9.5c3.6 0 6 1.8 6 4.6 0 2-1.3 3.5-3.4 4.1 2.6.5 4.1 2.3 4.1 4.7 0 3.2-2.7 5.1-6.7 5.1H19V38zm5.2 7h3.8c1.3 0 2.2-.6 2.2-1.6 0-1.1-.9-1.6-2.2-1.6h-3.8v3.2zm0 7.7h4.3c1.5 0 2.4-.7 2.4-1.8 0-1.1-.9-1.8-2.4-1.8h-4.3v3.6z" />
        {/* E */}
        <path d="M38 38h13.2v3.8H43.3v4.4h6.8V50h-6.8v4.7h8.1v3.8H38V38z" />
        {/* R */}
        <path d="M54.5 38h9.5c3.8 0 6.2 2 6.2 5.2 0 2.6-1.6 4.3-4.1 4.9L71 58.5h-5.9l-4.5-9.6h-3v9.6h-5.2V38zm5.2 7.1h4c1.4 0 2.3-.7 2.3-1.8 0-1.1-.9-1.8-2.3-1.8h-4v3.6z" />
        {/* U */}
        <path d="M71.5 38h5.2v12.2c0 3.2 2.1 4.9 5.3 4.9 3.2 0 5.3-1.7 5.3-4.9V38h5.2v12c0 6.4-4.2 9.9-10.5 9.9s-10.5-3.5-10.5-9.9V38z" />
        {/* F (Top and Crossbar) */}
      </g>
    </svg>
  );
};

/**
 * Wordmark with Brand Badge Combined Header Component
 */
export const BerufBrandHeader: React.FC<{
  showTagline?: boolean;
  scale?: number;
}> = ({ showTagline = true }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
      <img
        src="/src/assets/brand/beruf-logo.png"
        alt="BERUF Brasil"
        style={{
          height: '38px',
          width: 'auto',
          objectFit: 'contain',
        }}
      />
      {showTagline && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-text-muted)',
              lineHeight: 1.1,
            }}
          >
            BRASIL • EST. 1998
          </span>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              fontWeight: 500,
              color: 'var(--color-text-secondary)',
              lineHeight: 1.2,
            }}
          >
            Sistemas & Cabos Industriais
          </span>
        </div>
      )}
    </div>
  );
};
