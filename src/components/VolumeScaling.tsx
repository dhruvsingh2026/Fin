import React from 'react';
import { SectionHeading } from './SectionHeading.tsx';
import { volumeCards } from '../data/volume.ts';

// Ocean wave background generator SVG
const OceanWaveArt: React.FC<{ variant?: 'wave' | 'cloud' | 'flow'; className?: string }> = ({
  variant = 'wave',
  className = '',
}) => {
  return (
    <svg
      viewBox="0 0 320 180"
      className={`w-full h-full absolute inset-0 object-cover ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id={`grad-${variant}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4A8BF7" />
          <stop offset="45%" stopColor="#2565D8" />
          <stop offset="100%" stopColor="#1B4EA8" />
        </linearGradient>
        <linearGradient id={`foam-${variant}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#C4DDFF" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* Deep blue ocean base */}
      <rect width="320" height="180" fill={`url(#grad-${variant})`} />

      {/* Layered wave crests */}
      {variant === 'wave' && (
        <>
          <path
            d="M -20 70 C 40 40, 100 95, 170 65 C 240 35, 290 85, 340 55 L 340 180 L -20 180 Z"
            fill="#1E52B5"
            opacity="0.8"
          />
          <path
            d="M -20 100 C 60 70, 120 120, 200 90 C 260 70, 300 110, 340 85 L 340 180 L -20 180 Z"
            fill="#184599"
          />
          <path
            d="M -20 70 C 40 40, 100 95, 170 65 C 240 35, 290 85, 340 55"
            stroke={`url(#foam-${variant})`}
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M 10 102 C 80 75, 130 122, 210 92 C 270 72, 310 112, 340 88"
            stroke="#9AC3FE"
            strokeWidth="2"
            opacity="0.5"
          />
        </>
      )}

      {variant === 'cloud' && (
        <>
          <path
            d="M -10 110 C 30 80, 90 90, 130 110 C 180 135, 240 80, 330 105 L 330 180 L -10 180 Z"
            fill="#1D4EA8"
            opacity="0.85"
          />
          <circle cx="80" cy="50" r="45" fill="#5895FA" opacity="0.4" />
          <circle cx="160" cy="40" r="55" fill="#6EA3FB" opacity="0.3" />
          <circle cx="240" cy="65" r="40" fill="#5895FA" opacity="0.35" />
          <path
            d="M 0 115 C 60 95, 140 130, 220 100 C 270 85, 310 110, 330 105"
            stroke="#CDE0FF"
            strokeWidth="2.5"
            opacity="0.6"
          />
        </>
      )}

      {variant === 'flow' && (
        <>
          <path
            d="M -20 90 Q 70 30, 160 85 T 340 70 L 340 180 L -20 180 Z"
            fill="#1E52B5"
            opacity="0.75"
          />
          <path
            d="M -20 120 Q 80 75, 180 115 T 340 100 L 340 180 L -20 180 Z"
            fill="#153E8A"
          />
          <path
            d="M -20 90 Q 70 30, 160 85 T 340 70"
            stroke="#A3C7FD"
            strokeWidth="2.5"
            opacity="0.65"
          />
        </>
      )}
    </svg>
  );
};

export const VolumeScaling: React.FC = () => {
  return (
    <section id="payments" className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 mb-24 md:mb-32">
      {/* Centered Two-Line Heading */}
      <SectionHeading
        line1="Send volume."
        line2="We can handle it."
        className="mb-12 sm:mb-16"
        size="lg"
      />

      {/* 3 Equal Cards in a Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* CARD 1: Smart Scaling */}
        <div className="bg-white rounded-2xl border border-[#E6ECF4] shadow-lasso-card p-4 sm:p-5 flex flex-col justify-between transition-all duration-200 hover:shadow-lasso-hover">
          {/* Blue wave visual with horizontal volume sliders */}
          <div className="relative rounded-xl overflow-hidden h-48 sm:h-52 mb-5 flex items-center justify-center p-4">
            <OceanWaveArt variant="wave" />
            
            {/* Embedded UI Preview: Volume distribution sliders */}
            <div className="relative z-10 w-full max-w-[240px] bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-md border border-white/50 space-y-2">
              <div className="flex justify-between items-center text-[11px] font-semibold text-[#16223B]">
                <span>Processor Split</span>
                <span className="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded font-mono">Auto-balanced</span>
              </div>

              {/* Slider 1: Stripe */}
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] text-[#16223B]">
                  <span className="font-medium">Stripe</span>
                  <span className="font-mono text-[#69758A]">60%</span>
                </div>
                <div className="h-1.5 w-full bg-[#E2ECF8] rounded-full overflow-hidden">
                  <div className="h-full bg-[#397AF4] rounded-full" style={{ width: '60%' }} />
                </div>
              </div>

              {/* Slider 2: Adyen */}
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] text-[#16223B]">
                  <span className="font-medium">Adyen</span>
                  <span className="font-mono text-[#69758A]">25%</span>
                </div>
                <div className="h-1.5 w-full bg-[#E2ECF8] rounded-full overflow-hidden">
                  <div className="h-full bg-[#10B981] rounded-full" style={{ width: '25%' }} />
                </div>
              </div>

              {/* Slider 3: Shop Pay */}
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] text-[#16223B]">
                  <span className="font-medium">Shop Pay</span>
                  <span className="font-mono text-[#69758A]">15%</span>
                </div>
                <div className="h-1.5 w-full bg-[#E2ECF8] rounded-full overflow-hidden">
                  <div className="h-full bg-[#8B5CF6] rounded-full" style={{ width: '15%' }} />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg text-[#16223B]">
              {volumeCards[0].title}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#69758A] leading-relaxed">
              {volumeCards[0].description}
            </p>
          </div>
        </div>

        {/* CARD 2: 400+ Payment Methods */}
        <div className="bg-white rounded-2xl border border-[#E6ECF4] shadow-lasso-card p-4 sm:p-5 flex flex-col justify-between transition-all duration-200 hover:shadow-lasso-hover">
          {/* Blue cloud/wave visual with floating payment pills */}
          <div className="relative rounded-xl overflow-hidden h-48 sm:h-52 mb-5 flex items-center justify-center p-4">
            <OceanWaveArt variant="cloud" />
            
            {/* Floating Pills Cluster */}
            <div className="relative z-10 w-full flex flex-col items-center gap-2.5">
              <div className="px-4 py-2 rounded-xl bg-white/95 backdrop-blur-md shadow-md border border-white/60 flex items-center gap-2 transition-transform hover:scale-105">
                <span className="px-2 py-0.5 rounded bg-[#FFB3C7] text-black font-bold text-xs">Klarna.</span>
                <span className="text-[11px] font-medium text-[#16223B]">Pay in 4</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="px-3.5 py-1.5 rounded-xl bg-[#0A0A0A]/90 text-white text-xs font-medium flex items-center gap-1.5 shadow-md">
                  <span></span> Pay
                </div>
                <div className="px-3.5 py-1.5 rounded-xl bg-white/95 text-[#16223B] text-xs font-bold border border-[#D5DFEC] shadow-md flex items-center gap-1">
                  <span className="text-[#003087]">PayPal</span>
                </div>
              </div>

              <div className="px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm text-[10px] font-semibold text-[#16223B] border border-white/40">
                +412 local APMs active
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg text-[#16223B]">
              {volumeCards[1].title}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#69758A] leading-relaxed">
              {volumeCards[1].description}
            </p>
          </div>
        </div>

        {/* CARD 3: Smart Routing (Sessions -> Trial A / Trial B) */}
        <div className="bg-white rounded-2xl border border-[#E6ECF4] shadow-lasso-card p-4 sm:p-5 flex flex-col justify-between transition-all duration-200 hover:shadow-lasso-hover md:col-span-2 lg:col-span-1">
          {/* Blue wave visual with A/B routing node graph */}
          <div className="relative rounded-xl overflow-hidden h-48 sm:h-52 mb-5 flex items-center justify-center p-4">
            <OceanWaveArt variant="flow" />
            
            {/* Embedded Routing Graph */}
            <div className="relative z-10 w-full max-w-[240px] flex flex-col items-center">
              {/* Root Sessions node */}
              <div className="px-3.5 py-1.5 rounded-lg bg-white/95 backdrop-blur-md shadow-md border border-white/60 text-xs font-semibold text-[#16223B] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#397AF4] animate-pulse" />
                <span>Live Sessions</span>
                <span className="font-mono text-[10px] text-[#69758A]">100%</span>
              </div>

              {/* Splitting connectors SVG */}
              <div className="w-full h-8 my-1 flex justify-center">
                <svg className="w-36 h-full" viewBox="0 0 140 32" fill="none">
                  <path d="M 70 0 C 70 16, 25 16, 25 32" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="3 3" />
                  <path d="M 70 0 C 70 16, 115 16, 115 32" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="3 3" />
                </svg>
              </div>

              {/* Split targets */}
              <div className="flex justify-between w-full px-2 gap-3">
                <div className="flex-1 px-2.5 py-1.5 rounded-lg bg-white/90 backdrop-blur-md text-center shadow-md border border-white/50">
                  <div className="text-[10px] font-bold text-[#397AF4]">Trial A (60%)</div>
                  <div className="text-[9px] text-[#16223B] font-medium">1-Click Express</div>
                </div>

                <div className="flex-1 px-2.5 py-1.5 rounded-lg bg-white/90 backdrop-blur-md text-center shadow-md border border-white/50">
                  <div className="text-[10px] font-bold text-[#10B981]">Trial B (40%)</div>
                  <div className="text-[9px] text-[#16223B] font-medium">Tiered Upsell</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg text-[#16223B]">
              {volumeCards[2].title}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#69758A] leading-relaxed">
              {volumeCards[2].description}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
