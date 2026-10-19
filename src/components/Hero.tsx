import React from 'react';
import { Button } from './Button.tsx';
import { FinexaaMark } from './Logo.tsx';
import { SneakerArt, HandbagArt } from './art/ProductArt.tsx';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden" aria-labelledby="hero-heading">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Eyebrow Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium bg-leather-tint text-ink border border-leather-border shadow-2xs">
            <span className="font-semibold">B2B Marketplace</span>
            <span className="text-muted/60">·</span>
            <span>Fashion & leather-goods trading</span>
          </div>
        </div>

        {/* Central Typographic Statement & CTAs */}
        <div className="text-center max-w-3xl mx-auto relative z-10">
          <h1
            id="hero-heading"
            className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.08] tracking-tight text-ink text-balance"
          >
            <span className="block">Where fashion finds</span>
            <span className="block text-ink">its next market.</span>
          </h1>

          <p className="mt-5 text-sm sm:text-base text-muted font-sans max-w-[480px] mx-auto leading-relaxed text-balance">
            Discover footwear, leather goods, bags and apparel from sellers and suppliers built for the next generation of fashion commerce.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Button
              href="#categories"
              variant="primary"
              size="md"
              className="px-6 py-2.5 h-10 text-sm font-medium shadow-sm hover:shadow"
            >
              Browse categories
            </Button>
            <Button
              href="#contact"
              variant="outline"
              size="md"
              className="px-6 py-2.5 h-10 text-sm font-medium border-border hover:border-ink"
            >
              Send an enquiry
            </Button>
          </div>
        </div>

        {/* Framing Product Preview Tiles */}
        <div className="relative mt-10 md:mt-6 w-full max-w-4xl mx-auto">
          
          {/* DESKTOP (lg+) FRAMING: Tucked elegantly to left and right */}
          <div className="hidden lg:block absolute left-0 -top-40 z-20 pointer-events-auto">
            <div className="w-[180px] bg-white rounded-2xl p-3 shadow-tile border border-border transition-transform duration-200 hover:-translate-y-1">
              <div className="bg-surface-soft rounded-xl p-2 mb-2 flex items-center justify-center overflow-hidden">
                <SneakerArt className="w-24 h-20" />
              </div>
              <div className="px-1 space-y-1">
                <div className="text-xs font-semibold text-ink truncate">Low-Top Sneaker</div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-muted">Footwear</span>
                  <span className="text-[10px] uppercase font-semibold text-leather">Sample</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block absolute right-0 -top-44 z-20 pointer-events-auto">
            <div className="w-[210px] bg-white rounded-2xl p-3 shadow-tile border border-border transition-transform duration-200 hover:-translate-y-1">
              <div className="bg-surface-soft rounded-xl p-2 mb-2 flex items-center justify-center overflow-hidden">
                <HandbagArt className="w-24 h-22" />
              </div>
              <div className="px-1 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-ink truncate">Saddle Tote</span>
                  <span className="text-xs font-bold text-ink">$185</span>
                </div>
                <div className="flex items-center justify-between text-[11px] pt-0.5">
                  <span className="text-muted">Full-grain calfskin</span>
                  <span className="text-[10px] uppercase font-semibold text-leather">Sample</span>
                </div>
              </div>
            </div>
          </div>

          {/* TABLET / MOBILE (below lg): Contained side-by-side or stacked tiles without negative offsets */}
          <div className="lg:hidden flex flex-wrap items-center justify-center gap-4 mb-8">
            <div className="w-[160px] sm:w-[180px] bg-white rounded-2xl p-3 shadow-card border border-border">
              <div className="bg-surface-soft rounded-xl p-2 mb-2 flex items-center justify-center">
                <SneakerArt className="w-20 h-16" />
              </div>
              <div className="text-xs font-semibold text-ink truncate">Low-Top Sneaker</div>
              <div className="text-[10px] uppercase font-semibold text-leather">Sample listing</div>
            </div>

            <div className="w-[160px] sm:w-[180px] bg-white rounded-2xl p-3 shadow-card border border-border">
              <div className="bg-surface-soft rounded-xl p-2 mb-2 flex items-center justify-center">
                <HandbagArt className="w-20 h-16" />
              </div>
              <div className="text-xs font-semibold text-ink truncate">Saddle Tote</div>
              <div className="text-[10px] uppercase font-semibold text-leather">Sample listing</div>
            </div>
          </div>

          {/* Hairline connectors down to Buyers / Suppliers (visible on lg+) */}
          <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 800 140" fill="none" preserveAspectRatio="none">
              <path
                d="M 100 0 C 100 40, 240 60, 260 100"
                stroke="#DDD8CE"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <path
                d="M 700 0 C 700 40, 560 60, 540 100"
                stroke="#DDD8CE"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            </svg>
          </div>

          {/* Buyers & Suppliers Labels with Central FinexaaMark */}
          <div className="relative pt-2 lg:pt-12 flex items-center justify-center gap-6 sm:gap-16 lg:gap-24 z-10">
            {/* Buyers badge */}
            <div className="flex flex-col items-center">
              <span className="text-[11px] font-medium text-muted uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-border shadow-2xs">
                Buyers
              </span>
            </div>

            {/* Central Finexaa emblem */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-linen border border-border flex items-center justify-center shadow-2xs">
                <FinexaaMark size={18} stemColor="#172A25" stitchColor="#C5A77A" />
              </div>
            </div>

            {/* Suppliers badge */}
            <div className="flex flex-col items-center">
              <span className="text-[11px] font-medium text-muted uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-border shadow-2xs">
                Suppliers
              </span>
            </div>
          </div>
        </div>

        {/* Small Caption Above Category Strip */}
        <div className="mt-8 md:mt-12 text-center">
          <p className="text-xs sm:text-sm font-medium text-muted">
            Browse by category
          </p>
        </div>

      </div>
    </section>
  );
};
