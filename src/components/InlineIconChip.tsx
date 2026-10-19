import React from 'react';
import {
  Footprints,
  ShoppingBag,
  Layers,
  Handshake,
  Search,
  Package,
} from 'lucide-react';

export type ChipIconType =
  | 'footwear'
  | 'bag'
  | 'layers'
  | 'handshake'
  | 'search'
  | 'package';

export interface InlineIconChipProps {
  type: ChipIconType;
  className?: string;
}

export const InlineIconChip: React.FC<InlineIconChipProps> = ({ type, className = '' }) => {
  const renderIcon = () => {
    switch (type) {
      case 'footwear':
        return <Footprints className="w-3.5 h-3.5 text-ink" strokeWidth={2} />;
      case 'bag':
        return <ShoppingBag className="w-3.5 h-3.5 text-ink" strokeWidth={2} />;
      case 'layers':
        return <Layers className="w-3.5 h-3.5 text-ink" strokeWidth={2} />;
      case 'handshake':
        return <Handshake className="w-3.5 h-3.5 text-ink" strokeWidth={2} />;
      case 'search':
        return <Search className="w-3.5 h-3.5 text-ink" strokeWidth={2} />;
      case 'package':
      default:
        return <Package className="w-3.5 h-3.5 text-ink" strokeWidth={2} />;
    }
  };

  return (
    <span
      className={`inline-flex items-center justify-center w-6 h-6 rounded-md bg-leather-tint border border-leather-border align-middle mx-1.5 shadow-2xs ${className}`}
      aria-hidden="true"
    >
      {renderIcon()}
    </span>
  );
};
