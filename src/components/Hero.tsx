import React from 'react';
import { Button } from './Button.tsx';
import { CactusMark } from './Logo.tsx';

// Clean SVG illustration of modern minimalist cream chair
const ModernChairArt: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 160 140"
    className={`w-full h-auto ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Modern Sculptural Chair"
  >
    {/* Soft floor shadow */}
    <ellipse cx="80" cy="128" rx="60" ry="8" fill="#E8EFF8" opacity="0.8" />
    
    {/* Chair backrest curved form */}
    <path
      d="M40 50 C40 25, 120 25, 120 50 C120 75, 115 85, 80 85 C45 85, 40 75, 40 50 Z"
      fill="#E7DFD5"
    />
    <path
      d="M45 48 C45 28, 115 28, 115 48 C115 70, 110 78, 80 78 C50 78, 45 70, 45 48 Z"
      fill="#F5EDE4"
    />
    
    {/* Thick cushioned seat */}
    <path
      d="M32 78 C32 68, 128 68, 128 78 C128 102, 122 110, 80 110 C38 110, 32 102, 32 78 Z"
      fill="#DCD3C7"
    />
    <ellipse cx="80" cy="80" rx="46" ry="16" fill="#FBF5EE" />
    <ellipse cx="80" cy="82" rx="40" ry="12" fill="#F3EBE1" />

    {/* Front seat cushion highlight & stitching crease */}
    <path
      d="M42 86 C60 96, 100 96, 118 86"
      stroke="#C8BFAF"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.6"
    />

    {/* Chair legs */}
    <rect x="44" y="104" width="7" height="22" rx="3.5" fill="#4A3F35" />
    <rect x="109" y="104" width="7" height="22" rx="3.5" fill="#4A3F35" />
    <rect x="62" y="106" width="6" height="18" rx="3" fill="#3D332B" opacity="0.7" />
    <rect x="92" y="106" width="6" height="18" rx="3" fill="#3D332B" opacity="0.7" />
  </svg>
);

// Clean SVG illustration of modern outdoor backpack
const BackpackArt: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 160 140"
    className={`w-full h-auto ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Explorer Backpack"
  >
    {/* Shadow */}
    <ellipse cx="80" cy="128" rx="52" ry="7" fill="#E8EFF8" opacity="0.8" />
    
    {/* Main backpack body */}
    <path
      d="M48 42 C48 24, 112 24, 112 42 L116 112 C116 122, 106 126, 80 126 C54 126, 44 122, 44 112 Z"
      fill="#9E5948"
    />
    <path
      d="M52 44 C52 28, 108 28, 108 44 L112 110 C112 118, 102 122, 80 122 C58 122, 48 118, 48 110 Z"
      fill="#B86E5A"
    />

    {/* Top Flap */}
    <path
      d="M46 38 C46 22, 114 22, 114 38 L112 62 C112 68, 100 70, 80 70 C60 70, 48 68, 48 62 Z"
      fill="#854838"
    />
    <path
      d="M50 40 C50 26, 110 26, 110 40 L108 58 C108 64, 98 66, 80 66 C62 66, 52 64, 52 58 Z"
      fill="#A45E4C"
    />

    {/* Webbing straps & buckle */}
    <rect x="62" y="32" width="6" height="52" rx="3" fill="#422920" />
    <rect x="92" y="32" width="6" height="52" rx="3" fill="#422920" />
    <rect x="60" y="66" width="10" height="8" rx="2" fill="#D6C7B2" />
    <rect x="90" y="66" width="10" height="8" rx="2" fill="#D6C7B2" />

    {/* Front Zip Pocket */}
    <path
      d="M54 78 C54 74, 106 74, 106 78 L104 112 C104 118, 96 120, 80 120 C64 120, 56 118, 56 112 Z"
      fill="#914D3D"
    />
    <path
      d="M60 84 H100"
      stroke="#D6C7B2"
      strokeWidth="2"
      strokeDasharray="3 2"
      strokeLinecap="round"
    />

    {/* Top grab handle */}
    <path
      d="M70 24 C70 16, 90 16, 90 24"
      stroke="#422920"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden" aria-labelledby="hero-heading">
      {/* Container with relative framing */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Eyebrow Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-[#EBF3FF] text-[#397AF4] border border-[#D5E5FD] shadow-2xs">
            <span className="font-semibold">New</span>
            <span className="text-[#397AF4]/60">·</span>
            <span>Launching smart routing</span>
          </div>
        </div>

        {/* Main Central Content Block */}
        <div className="text-center max-w-3xl mx-auto relative z-10">
          <h1
            id="hero-heading"
            className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.08] tracking-tight text-[#16223B]"
          >
            <span className="block">The new frontier of</span>
            <span className="block text-[#16223B]">digital commerce</span>
          </h1>

          <p className="mt-5 text-sm sm:text-base text-[#69758A] font-sans max-w-[460px] mx-auto leading-relaxed balance">
            Robust checkout builder with built-in upsells, global payment rails, and checkout conversion flexibility.
          </p>

          <div className="mt-7 flex justify-center">
            <Button
              href="#contact"
              variant="primary"
              size="md"
              className="px-6 py-2.5 h-10 text-sm font-medium shadow-sm hover:shadow"
            >
              Book a call
            </Button>
          </div>
        </div>

        {/* Floating Product Preview Tiles (framing the headline) */}
        {/* Desktop & Tablet Floating Tiles */}
        <div className="relative mt-8 md:mt-2 min-h-[140px] md:min-h-[180px] w-full max-w-4xl mx-auto pointer-events-none">
          
          {/* Left Tile: Chair Card (Framing left of headline / CTA) */}
          <div className="md:absolute md:left-2 lg:left-0 md:-top-48 z-20 pointer-events-auto">
            <div className="w-[160px] sm:w-[170px] bg-white rounded-2xl p-2.5 shadow-lasso-tile border border-[#E6ECF4] transition-transform duration-200 hover:-translate-y-1">
              <div className="bg-[#F8FAFC] rounded-xl p-2 mb-2 flex items-center justify-center overflow-hidden">
                <ModernChairArt className="w-24 h-20 object-contain" />
              </div>
              <div className="flex items-center justify-between px-1">
                <div>
                  <div className="text-xs font-semibold text-[#16223B]">Lounge Chair</div>
                  <div className="text-[11px] text-[#69758A]">$175.00</div>
                </div>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-[#EBF3FF] text-[#397AF4]">
                  Ready
                </span>
              </div>
            </div>
          </div>

          {/* Right Tile: Backpack Card (Framing right of headline / CTA) */}
          <div className="md:absolute md:right-2 lg:right-0 md:-top-52 z-20 pointer-events-auto mt-4 md:mt-0">
            <div className="w-[190px] sm:w-[210px] bg-white rounded-2xl p-3 shadow-lasso-tile border border-[#E6ECF4] transition-transform duration-200 hover:-translate-y-1">
              <div className="bg-[#FAF6F3] rounded-xl p-2 mb-2 flex items-center justify-center overflow-hidden">
                <BackpackArt className="w-24 h-22 object-contain" />
              </div>
              <div className="space-y-1 px-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#16223B]">Nomad Pack</span>
                  <span className="text-xs font-bold text-[#16223B]">$89.00</span>
                </div>
                <div className="flex items-center gap-1.5 pt-0.5">
                  <span className="inline-flex items-center gap-1 text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-full font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    In stock
                  </span>
                  <span className="text-[10px] text-[#69758A]">Fast ship</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hairline connectors down to Trial A / Trial B (visible on md+) */}
          <div className="hidden md:block absolute inset-0 z-0">
            <svg className="w-full h-full" viewBox="0 0 800 160" fill="none" preserveAspectRatio="none">
              {/* Connector from left tile down to Trial A */}
              <path
                d="M 120 0 C 120 50, 240 70, 260 120"
                stroke="#D8E2EE"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              {/* Connector from right tile down to Trial B */}
              <path
                d="M 680 0 C 680 50, 560 70, 540 120"
                stroke="#D8E2EE"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            </svg>
          </div>

          {/* Trial A & Trial B Labels with Central Cactus / Crystal motif */}
          <div className="relative pt-6 md:pt-16 flex items-center justify-center gap-8 md:gap-24 z-10">
            {/* Trial A badge */}
            <div className="flex flex-col items-center">
              <span className="text-[11px] font-mono text-[#69758A] uppercase tracking-wider bg-white px-2.5 py-0.5 rounded-full border border-[#E6ECF4] shadow-2xs">
                Trial A
              </span>
            </div>

            {/* Central Cactus motif illustration */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#F0F6FF] border border-[#D5E5FD] flex items-center justify-center shadow-2xs">
                <CactusMark size={20} color="#397AF4" />
              </div>
            </div>

            {/* Trial B badge */}
            <div className="flex flex-col items-center">
              <span className="text-[11px] font-mono text-[#69758A] uppercase tracking-wider bg-white px-2.5 py-0.5 rounded-full border border-[#E6ECF4] shadow-2xs">
                Trial B
              </span>
            </div>
          </div>
        </div>

        {/* Small Caption Above Provider Bar */}
        <div className="mt-8 md:mt-10 text-center">
          <p className="text-xs sm:text-sm font-medium text-[#69758A]">
            Seamless integration across all your apps
          </p>
        </div>

      </div>
    </section>
  );
};
