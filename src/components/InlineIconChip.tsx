import React from 'react';
import { CreditCard, TrendingUp, BarChart3, ShieldCheck, ShoppingCart } from 'lucide-react';

export interface InlineIconChipProps {
  type: 'card' | 'chart' | 'analytics' | 'shield' | 'cart';
  className?: string;
}

export const InlineIconChip: React.FC<InlineIconChipProps> = ({ type, className = '' }) => {
  const renderIcon = () => {
    switch (type) {
      case 'card':
        return <CreditCard className="w-3.5 h-3.5 text-[#397AF4]" strokeWidth={2.2} />;
      case 'chart':
        return <TrendingUp className="w-3.5 h-3.5 text-[#397AF4]" strokeWidth={2.2} />;
      case 'analytics':
        return <BarChart3 className="w-3.5 h-3.5 text-[#397AF4]" strokeWidth={2.2} />;
      case 'shield':
        return <ShieldCheck className="w-3.5 h-3.5 text-[#397AF4]" strokeWidth={2.2} />;
      case 'cart':
        return <ShoppingCart className="w-3.5 h-3.5 text-[#397AF4]" strokeWidth={2.2} />;
    }
  };

  return (
    <span
      className={`inline-flex items-center justify-center w-6 h-6 rounded-md bg-[#EBF3FF] border border-[#D5E5FD] align-middle mx-1.5 shadow-2xs ${className}`}
      aria-hidden="true"
    >
      {renderIcon()}
    </span>
  );
};
