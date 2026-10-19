import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'giant';
  variant?: 'blue' | 'white' | 'navy' | 'muted';
  showText?: boolean;
  markOnly?: boolean;
}

export const CactusMark: React.FC<{ className?: string; color?: string; size?: number }> = ({
  className = '',
  color = 'currentColor',
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
      {/* Central main stem */}
      <path
        d="M12 2.5V21.5"
        stroke={color}
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      {/* Left arm */}
      <path
        d="M6 7.5V12C6 13.933 7.567 15.5 9.5 15.5H12"
        stroke={color}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right arm */}
      <path
        d="M18 5.5V11C18 12.933 16.433 14.5 14.5 14.5H12"
        stroke={color}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'navy',
  showText = true,
  markOnly = false,
}) => {
  const colorMap = {
    blue: '#397AF4',
    white: '#FFFFFF',
    navy: '#16223B',
    muted: '#69758A',
  };

  const markColor = variant === 'white' ? '#FFFFFF' : '#397AF4';
  const textColorClass = {
    blue: 'text-[#397AF4]',
    white: 'text-white',
    navy: 'text-[#16223B]',
    muted: 'text-[#69758A]',
  }[variant];

  const sizeConfig = {
    sm: { markSize: 18, text: 'text-lg tracking-tight' },
    md: { markSize: 22, text: 'text-xl tracking-tight' },
    lg: { markSize: 28, text: 'text-2xl tracking-tight' },
    giant: { markSize: 120, text: 'text-6xl md:text-8xl tracking-tighter' },
  }[size];

  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      <CactusMark color={markColor} size={sizeConfig.markSize} />
      {showText && !markOnly && (
        <span
          className={`font-display font-bold lowercase leading-none ${sizeConfig.text} ${textColorClass}`}
        >
          lasso
        </span>
      )}
    </div>
  );
};
