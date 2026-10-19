import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  line1: string;
  line2?: string;
  subtitle?: string;
  align?: 'center' | 'left';
  size?: 'md' | 'lg' | 'xl';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  line1,
  line2,
  subtitle,
  align = 'center',
  size = 'lg',
  className = '',
}) => {
  const alignmentClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  const headingSizeClass = {
    md: 'text-2xl md:text-3xl lg:text-4xl tracking-tight leading-[1.12]',
    lg: 'text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.08]',
    xl: 'text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05]',
  }[size];

  return (
    <div className={`max-w-3xl ${alignmentClass} ${className}`}>
      {eyebrow && (
        <div className="mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-leather-tint text-ink border border-leather-border">
            {eyebrow}
          </span>
        </div>
      )}

      <h2 className={`font-display font-semibold ${headingSizeClass} text-balance`}>
        <span className="text-ink block">{line1}</span>
        {line2 && <span className="text-muted block font-medium">{line2}</span>}
      </h2>

      {subtitle && (
        <p className="mt-4 text-sm sm:text-base text-muted font-sans max-w-xl mx-auto leading-relaxed text-balance">
          {subtitle}
        </p>
      )}
    </div>
  );
};
