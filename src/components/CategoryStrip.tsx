import React from 'react';
import { categoryLinks } from '../data/categories.ts';
import { Footprints, ShoppingBag, Layers, Package, Handshake, Sparkles } from 'lucide-react';

export const CategoryStrip: React.FC<{ onSelectCategory?: (categoryId: string) => void }> = ({
  onSelectCategory,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'shoe':
        return <Footprints className="w-3.5 h-3.5 text-leather" strokeWidth={2} />;
      case 'sneaker':
        return <Footprints className="w-3.5 h-3.5 text-leather" strokeWidth={2} />;
      case 'bag':
        return <ShoppingBag className="w-3.5 h-3.5 text-leather" strokeWidth={2} />;
      case 'shirt':
        return <Layers className="w-3.5 h-3.5 text-leather" strokeWidth={2} />;
      case 'wallet':
        return <Package className="w-3.5 h-3.5 text-leather" strokeWidth={2} />;
      case 'collection':
      default:
        return <Sparkles className="w-3.5 h-3.5 text-leather" strokeWidth={2} />;
    }
  };

  return (
    <section id="categories" className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24" aria-label="Browse Fashion Categories">
      <div className="bg-white rounded-2xl border border-border shadow-card py-3 px-4 sm:px-6 md:px-8 overflow-hidden">
        {/* Responsive grid / scroller */}
        <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-3 sm:gap-4 overflow-x-auto no-scrollbar py-1">
          {categoryLinks.map((cat) => (
            <a
              key={cat.id}
              href={cat.href}
              onClick={() => onSelectCategory?.(cat.id)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-ink hover:bg-surface-soft hover:text-ink transition-all shrink-0 group border border-transparent hover:border-border cursor-pointer"
            >
              <span className="p-1 rounded bg-leather-tint border border-leather-border group-hover:scale-105 transition-transform">
                {getIcon(cat.iconName)}
              </span>
              <span className="whitespace-nowrap">{cat.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
