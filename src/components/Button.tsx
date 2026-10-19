import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  isExternal = false,
  children,
  className = '',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium font-sans whitespace-nowrap rounded-lg transition-all duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-1.5 h-8 gap-1.5',
    md: 'text-sm px-4 py-2 h-9 md:h-10 gap-2',
    lg: 'text-sm md:text-base px-6 py-2.5 h-11 md:h-12 gap-2.5',
  }[size];

  const variantClasses = {
    primary:
      'bg-ink text-white hover:bg-ink-hover active:bg-[#11201C] shadow-[0_1px_2px_rgba(23,42,37,0.15)]',
    secondary:
      'bg-white text-ink border border-border hover:bg-surface-soft hover:border-[#D5D3CB] shadow-[0_1px_2px_rgba(23,42,37,0.04)]',
    outline:
      'bg-transparent text-ink border border-ink/40 hover:bg-surface-soft hover:border-ink',
    ghost:
      'bg-transparent text-ink hover:bg-linen hover:text-ink',
  }[variant];

  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
