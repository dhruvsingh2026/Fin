import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'giant';
  variant?: 'ink' | 'white' | 'leather' | 'muted';
  showText?: boolean;
  markOnly?: boolean;
}

export const FinexaaMark: React.FC<{
  className?: string;
  stemColor?: string;
  stitchColor?: string;
  size?: number;
}> = ({
  className = '',
  stemColor = '#172A25',
  stitchColor = '#C5A77A',
  size = 20,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Vertical solid spine */}
      <path
        d="M6 3.5V20.5"
        stroke={stemColor}
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      {/* Top horizontal leather header bar */}
      <path
        d="M6 5H19"
        stroke={stemColor}
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      {/* Middle bar with artisanal saddle stitch line */}
      <path
        d="M6 11.5H14.5"
        stroke={stitchColor}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeDasharray="2 1.8"
      />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'ink',
  showText = true,
  markOnly = false,
}) => {
  const stemColor = variant === 'white' ? '#FFFFFF' : '#172A25';
  const stitchColor = variant === 'white' ? '#FFFFFF' : '#C5A77A';

  const textColorClass = {
    ink: 'text-ink',
    white: 'text-white',
    leather: 'text-leather',
    muted: 'text-muted',
  }[variant];

  const sizeConfig = {
    sm: { markSize: 18, text: 'text-lg tracking-tight' },
    md: { markSize: 22, text: 'text-xl tracking-tight' },
    lg: { markSize: 28, text: 'text-2xl tracking-tight' },
    giant: { markSize: 96, text: 'text-6xl md:text-8xl tracking-tight' },
  }[size];

  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      <FinexaaMark
        size={sizeConfig.markSize}
        stemColor={stemColor}
        stitchColor={stitchColor}
      />
      {showText && !markOnly && (
        <span
          className={`font-display font-bold leading-none ${sizeConfig.text} ${textColorClass}`}
        >
          Finexaa
        </span>
      )}
    </div>
  );
};
