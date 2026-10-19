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
    xl: 'text-4xl sm:text-5xl lg:text-6xl tracking-tighter leading-[1.05]',
  }[size];

  return (
    <div className={`max-w-3xl ${alignmentClass} ${className}`}>
      {eyebrow && (
        <div className="mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#EBF3FF] text-[#397AF4] border border-[#D5E5FD]">
            {eyebrow}
          </span>
        </div>
      )}

      <h2 className={`font-display font-semibold ${headingSizeClass} balance`}>
        <span className="text-[#16223B] block">{line1}</span>
        {line2 && <span className="text-[#69758A] block font-medium">{line2}</span>}
      </h2>

      {subtitle && (
        <p className="mt-4 text-sm sm:text-base text-[#69758A] font-sans max-w-xl mx-auto leading-relaxed balance">
          {subtitle}
        </p>
      )}
    </div>
  );
};
