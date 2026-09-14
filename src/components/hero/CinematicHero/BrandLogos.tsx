import React from 'react';

export interface LogoProps extends React.SVGProps<SVGSVGElement> {
  height?: number | string;
}

// 1. ABB Logo
export const AbbLogo: React.FC<LogoProps> = ({ height = 24, ...props }) => (
  <svg height={height} viewBox="0 0 100 36" fill="currentColor" {...props}>
    <path d="M4.5 32h9.2l1.6-4.5h9.4l1.6 4.5h9.5L25 4h-9.7L4.5 32zm15.4-12.2l2.8-8.1 2.8 8.1h-5.6zM38.5 4v28h17.2c5.8 0 9.8-3.2 9.8-7.8 0-3.1-1.8-5.6-4.9-6.6 2.4-.9 3.9-3.1 3.9-5.8 0-4.4-3.8-7.8-9.4-7.8H38.5zm8.8 6.5h6.8c1.8 0 3.2 1.1 3.2 2.6s-1.4 2.6-3.2 2.6h-6.8v-5.2zm0 8.6h7.6c2.1 0 3.6 1.2 3.6 2.9s-1.5 2.9-3.6 2.9h-7.6v-5.8zM68.5 4v28h17.2c5.8 0 9.8-3.2 9.8-7.8 0-3.1-1.8-5.6-4.9-6.6 2.4-.9 3.9-3.1 3.9-5.8 0-4.4-3.8-7.8-9.4-7.8H68.5zm8.8 6.5h6.8c1.8 0 3.2 1.1 3.2 2.6s-1.4 2.6-3.2 2.6h-6.8v-5.2zm0 8.6h7.6c2.1 0 3.6 1.2 3.6 2.9s-1.5 2.9-3.6 2.9h-7.6v-5.8z" />
  </svg>
);

// 2. SIEMENS Logo
export const SiemensLogo: React.FC<LogoProps> = ({ height = 18, ...props }) => (
  <svg height={height} viewBox="0 0 120 22" fill="currentColor" {...props}>
    <text
      x="0"
      y="18"
      fontFamily="var(--font-sans), 'Plus Jakarta Sans', Arial, sans-serif"
      fontSize="20"
      fontWeight="900"
      letterSpacing="0.14em"
    >
      SIEMENS
    </text>
  </svg>
);

// 3. MITSUBISHI ELECTRIC Logo
export const MitsubishiLogo: React.FC<LogoProps> = ({ height = 26, ...props }) => (
  <svg height={height} viewBox="0 0 145 32" fill="currentColor" {...props}>
    {/* 3 Diamonds Icon */}
    <g transform="translate(0, 2)">
      {/* Top Diamond */}
      <polygon points="14,0 7,12 21,12" />
      {/* Bottom Left Diamond */}
      <polygon points="7,12 0,24 14,24" />
      {/* Bottom Right Diamond */}
      <polygon points="21,12 14,24 28,24" />
    </g>
    {/* Text */}
    <text
      x="36"
      y="14"
      fontFamily="var(--font-sans), Arial, sans-serif"
      fontSize="12"
      fontWeight="800"
      letterSpacing="0.04em"
    >
      MITSUBISHI
    </text>
    <text
      x="36"
      y="26"
      fontFamily="var(--font-sans), Arial, sans-serif"
      fontSize="10.5"
      fontWeight="700"
      letterSpacing="0.08em"
    >
      ELECTRIC
    </text>
  </svg>
);

// 4. WEG Logo
export const WegLogo: React.FC<LogoProps> = ({ height = 24, ...props }) => (
  <svg height={height} viewBox="0 0 64 30" fill="currentColor" {...props}>
    {/* Outer Rounded Box */}
    <rect x="1.5" y="1.5" width="61" height="27" rx="6" fill="none" stroke="currentColor" strokeWidth="3" />
    {/* WEG Letters */}
    <text
      x="32"
      y="21"
      textAnchor="middle"
      fontFamily="var(--font-display), 'Urbanist', Arial, sans-serif"
      fontSize="16"
      fontWeight="900"
      letterSpacing="0.04em"
    >
      ШEg
    </text>
  </svg>
);

// 5. Schneider Electric Logo
export const SchneiderLogo: React.FC<LogoProps> = ({ height = 24, ...props }) => (
  <svg height={height} viewBox="0 0 130 32" fill="currentColor" {...props}>
    <text
      x="0"
      y="16"
      fontFamily="var(--font-sans), Arial, sans-serif"
      fontSize="15"
      fontWeight="700"
      letterSpacing="-0.01em"
    >
      Schneider
    </text>
    <g transform="translate(8, 20)">
      {/* Energy arc ellipse */}
      <ellipse cx="6" cy="4" rx="6" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(-20 6 4)" />
    </g>
    <text
      x="24"
      y="27"
      fontFamily="var(--font-sans), Arial, sans-serif"
      fontSize="10"
      fontWeight="500"
      letterSpacing="0.02em"
    >
      Electric
    </text>
  </svg>
);

// 6. Klabin Logo
export const KlabinLogo: React.FC<LogoProps> = ({ height = 26, ...props }) => (
  <svg height={height} viewBox="0 0 75 34" fill="currentColor" {...props}>
    {/* Geometric K Mark */}
    <polygon points="12,2 26,2 14,16 28,16 12,30 2,30 12,18 2,18" />
    {/* Klabin text below */}
    <text
      x="14"
      y="32"
      fontFamily="var(--font-sans), Arial, sans-serif"
      fontSize="9"
      fontWeight="700"
      letterSpacing="0.04em"
    >
      Klabin
    </text>
  </svg>
);

// 7. Ambev Logo
export const AmbevLogo: React.FC<LogoProps> = ({ height = 18, ...props }) => (
  <svg height={height} viewBox="0 0 75 22" fill="currentColor" {...props}>
    <text
      x="0"
      y="18"
      fontFamily="var(--font-sans), Arial, sans-serif"
      fontSize="20"
      fontWeight="900"
      letterSpacing="-0.02em"
    >
      ambev
    </text>
  </svg>
);

// 8. Bosch Logo
export const BoschLogo: React.FC<LogoProps> = ({ height = 26, ...props }) => (
  <svg height={height} viewBox="0 0 110 30" fill="currentColor" {...props}>
    {/* Bosch Circle Armature Icon */}
    <g transform="translate(1, 2)">
      <circle cx="13" cy="13" r="12" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <rect x="7" y="6.5" width="12" height="13" rx="1.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="7" y1="13" x2="19" y2="13" stroke="currentColor" strokeWidth="2" />
    </g>
    {/* BOSCH Text */}
    <text
      x="36"
      y="21"
      fontFamily="var(--font-sans), Arial, sans-serif"
      fontSize="18"
      fontWeight="900"
      letterSpacing="0.08em"
    >
      BOSCH
    </text>
  </svg>
);
