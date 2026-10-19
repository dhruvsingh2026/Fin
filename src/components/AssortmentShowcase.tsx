import React from 'react';
import { SectionHeading } from './SectionHeading.tsx';
import { assortmentCards } from '../data/assortment.ts';
import { LeatherShoeArt, WalletArt, ApparelArt } from './art/ProductArt.tsx';
import { ArrowUpRight } from 'lucide-react';

// Material background generator SVG
const MaterialBackdropArt: React.FC<{
  variant: 'leather-grain' | 'linen-weave' | 'suede-brown';
  className?: string;
}> = ({ variant, className = '' }) => {
  return (
    <svg
      viewBox="0 0 320 180"
      className={`w-full h-full absolute inset-0 object-cover ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        {/* Leather grain gradient */}
        <linearGradient id="leatherGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#CBB494" />
          <stop offset="50%" stopColor="#BFA582" />
          <stop offset="100%" stopColor="#A68761" />
        </linearGradient>

        {/* Linen weave gradient */}
        <linearGradient id="linenGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FAF7F2" />
          <stop offset="50%" stopColor="#F1EDE4" />
          <stop offset="100%" stopColor="#E6DFD3" />
        </linearGradient>

        {/* Suede deep brown gradient */}
        <linearGradient id="suedeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7E5C3B" />
          <stop offset="50%" stopColor="#694B2E" />
          <stop offset="100%" stopColor="#523921" />
        </linearGradient>
      </defs>

      {variant === 'leather-grain' && (
        <>
          <rect width="320" height="180" fill="url(#leatherGrad)" />
          {/* Subtle leather grain micro-texture lines */}
          <path
            d="M 0 40 Q 80 48, 160 38 T 320 44 M 0 90 Q 70 82, 180 94 T 320 86 M 0 140 Q 110 134, 210 146 T 320 138"
            stroke="#967751"
            strokeWidth="0.8"
            opacity="0.35"
          />
          {/* Hand-stitched saddle seam across edge */}
          <line
            x1="10"
            y1="168"
            x2="310"
            y2="168"
            stroke="#EFE6D6"
            strokeWidth="1.8"
            strokeDasharray="4 3"
            strokeLinecap="round"
            opacity="0.9"
          />
        </>
      )}

      {variant === 'linen-weave' && (
        <>
          <rect width="320" height="180" fill="url(#linenGrad)" />
          {/* Fine linen criss-cross weave */}
          <path
            d="M 20 0 L 20 180 M 60 0 L 60 180 M 100 0 L 100 180 M 140 0 L 140 180 M 180 0 L 180 180 M 220 0 L 220 180 M 260 0 L 260 180 M 300 0 L 300 180"
            stroke="#DDD6C9"
            strokeWidth="1"
            strokeDasharray="2 3"
            opacity="0.6"
          />
          <path
            d="M 0 30 L 320 30 M 0 70 L 320 70 M 0 110 L 320 110 M 0 150 L 320 150"
            stroke="#DDD6C9"
            strokeWidth="1"
            strokeDasharray="3 3"
            opacity="0.6"
          />
        </>
      )}

      {variant === 'suede-brown' && (
        <>
          <rect width="320" height="180" fill="url(#suedeGrad)" />
          {/* Suede nap soft curves */}
          <path
            d="M -20 60 C 40 40, 120 70, 200 50 C 260 35, 300 65, 340 55 L 340 180 L -20 180 Z"
            fill="#47301B"
            opacity="0.3"
          />
          <line
            x1="10"
            y1="165"
            x2="310"
            y2="165"
            stroke="#C5A77A"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            opacity="0.8"
          />
        </>
      )}
    </svg>
  );
};

export const AssortmentShowcase: React.FC = () => {
  const renderProductArt = (type: 'loafer' | 'wallet' | 'apparel') => {
    switch (type) {
      case 'loafer':
        return <LeatherShoeArt className="w-28 h-24 object-contain" />;
      case 'wallet':
        return <WalletArt className="w-28 h-24 object-contain" />;
      case 'apparel':
      default:
        return <ApparelArt className="w-28 h-24 object-contain" />;
    }
  };

  return (
    <section id="assortment" className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 mb-24 md:mb-32">
      {/* Centered Two-Line Heading */}
      <SectionHeading
        line1="Every category,"
        line2="one marketplace."
        className="mb-12 sm:mb-16"
        size="lg"
      />

      {/* 3 Equal Cards in a Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {assortmentCards.map((card, idx) => (
          <div
            key={card.id}
            className={`bg-white rounded-2xl border border-border shadow-card p-4 sm:p-5 flex flex-col justify-between transition-all duration-200 hover:shadow-card-hover ${
              idx === 2 ? 'md:col-span-2 lg:col-span-1' : ''
            }`}
          >
            {/* Visual backdrop with embedded product art */}
            <div className="relative rounded-xl overflow-hidden h-48 sm:h-52 mb-5 flex items-center justify-center p-4">
              <MaterialBackdropArt variant={card.materialStyle} />
              
              {/* Product Art Card Floating over material */}
              <div className="relative z-10 w-full max-w-[220px] bg-white/95 backdrop-blur-md rounded-xl p-2.5 shadow-md border border-white/60 flex flex-col items-center">
                <div className="w-full flex justify-between items-center px-1 mb-1">
                  <span className="text-[10px] font-semibold text-ink uppercase tracking-wider">
                    {card.illustrativeTag}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-leather" />
                </div>
                {renderProductArt(card.productType)}
              </div>
            </div>

            <div>
              <h3 className="font-display font-semibold text-lg text-ink">
                {card.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
