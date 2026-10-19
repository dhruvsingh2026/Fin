import React from 'react';
import { InlineIconChip } from './InlineIconChip.tsx';
import { featureGridData } from '../data/features.ts';
import { Check, ShieldAlert, ArrowUpRight } from 'lucide-react';

// SVG Headphones art for the Checkout card mockup
const HeadphonesArt: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 100 100"
    className={`w-full h-auto ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Studio Wireless Headphones"
  >
    {/* Headband */}
    <path
      d="M20 54 C20 28, 80 28, 80 54"
      stroke="#1E293B"
      strokeWidth="7"
      strokeLinecap="round"
    />
    <path
      d="M26 50 C26 32, 74 32, 74 50"
      stroke="#475569"
      strokeWidth="3"
      strokeLinecap="round"
    />
    {/* Left Earcup */}
    <rect x="14" y="48" width="14" height="28" rx="7" fill="#0F172A" />
    <rect x="18" y="52" width="6" height="20" rx="3" fill="#334155" />
    {/* Right Earcup */}
    <rect x="72" y="48" width="14" height="28" rx="7" fill="#0F172A" />
    <rect x="76" y="52" width="6" height="20" rx="3" fill="#334155" />
    {/* Soft inner glow */}
    <circle cx="21" cy="62" r="2" fill="#397AF4" />
    <circle cx="79" cy="62" r="2" fill="#397AF4" />
  </svg>
);

export const FeatureGrid: React.FC = () => {
  const { checkoutCard, conversionCard, bottomRow } = featureGridData;

  return (
    <section id="platform" className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-28">
      {/* Outer pale blue container */}
      <div className="bg-[#F0F6FF] rounded-3xl p-4 sm:p-6 lg:p-7 border border-[#E2ECF8]">
        
        {/* ROW 1: 2fr / 1fr Desktop Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5">
          
          {/* Large Checkout Card (~8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-5 sm:p-7 border border-[#E6ECF4] shadow-lasso-card transition-all duration-200 hover:shadow-lasso-hover flex flex-col justify-between">
            {/* Mockup Container */}
            <div className="bg-[#FAFBFD] rounded-xl p-4 sm:p-5 border border-[#EDF2F8] mb-6">
              
              {/* Checkout Header with Fake Store Brand */}
              <div className="flex items-center justify-between border-b border-[#EDF2F8] pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#397AF4]" />
                  <span className="text-xs font-semibold text-[#16223B]">Aura Audio Store</span>
                </div>
                <span className="text-[11px] text-[#69758A] font-mono">Order #8921</span>
              </div>

              {/* Product Row */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                <div className="sm:col-span-3 bg-white rounded-lg p-2 border border-[#E6ECF4] flex items-center justify-center">
                  <HeadphonesArt className="w-20 h-20" />
                </div>
                
                <div className="sm:col-span-5 space-y-1.5">
                  <div className="text-xs font-semibold text-[#16223B]">Studio Wireless Max</div>
                  <div className="text-[11px] text-[#69758A]">Midnight Black · Space Audio</div>
                  {/* Skeleton details */}
                  <div className="flex gap-1.5 pt-1">
                    <div className="h-1.5 w-16 bg-[#EDF2F8] rounded-full" />
                    <div className="h-1.5 w-10 bg-[#EDF2F8] rounded-full" />
                  </div>
                </div>

                <div className="sm:col-span-4 text-left sm:text-right">
                  <div className="text-sm font-bold text-[#16223B]">$249.00</div>
                  <div className="text-[10px] text-emerald-600 font-medium">Free Express Shipping</div>
                </div>
              </div>

              {/* 1-Click Payment Pills inside Checkout */}
              <div className="mt-4 pt-3 border-t border-[#EDF2F8] flex flex-wrap items-center gap-2">
                <div className="px-3.5 py-1.5 rounded-lg bg-[#0A0A0A] text-white text-[11px] font-medium flex items-center gap-1.5 shadow-2xs">
                  <span className="text-xs"></span> Pay
                </div>
                <div className="px-3.5 py-1.5 rounded-lg bg-white border border-[#D5DFEC] text-[#3C4043] text-[11px] font-medium flex items-center gap-1 shadow-2xs">
                  <span className="font-bold text-[#4285F4]">G</span> Pay
                </div>
                <div className="px-3.5 py-1.5 rounded-lg bg-[#FFB3C7] text-[#0A0A0A] text-[11px] font-bold shadow-2xs">
                  Klarna.
                </div>
                <span className="text-[11px] text-[#69758A] ml-auto font-medium">or pay with card</span>
              </div>
            </div>

            {/* Card Caption */}
            <div>
              <h3 className="font-display font-semibold text-lg sm:text-xl text-[#16223B] flex items-center flex-wrap">
                {checkoutCard.titleLead}
                <InlineIconChip type={checkoutCard.chipIcon} />
                {checkoutCard.titleTail}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#69758A] leading-relaxed">
                {checkoutCard.description}
              </p>
            </div>
          </div>

          {/* Narrow Conversion Rate Card (~4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-5 sm:p-7 border border-[#E6ECF4] shadow-lasso-card transition-all duration-200 hover:shadow-lasso-hover flex flex-col justify-between">
            {/* Conversion Chart Mockup */}
            <div className="bg-[#FAFBFD] rounded-xl p-4 border border-[#EDF2F8] mb-6">
              <div className="text-[11px] font-medium text-[#69758A]">{conversionCard.sublabel}</div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="font-display font-bold text-3xl sm:text-4xl text-[#16223B] tracking-tight">
                  {conversionCard.metric}
                </span>
                <span className="inline-flex items-center gap-0.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                  <ArrowUpRight className="w-3 h-3 text-emerald-600" />
                  {conversionCard.changeTag}
                </span>
              </div>

              {/* Blue Area Chart SVG */}
              <div className="mt-4 h-24 w-full">
                <svg viewBox="0 0 200 80" className="w-full h-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#397AF4" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#397AF4" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  {/* Fill Area */}
                  <path
                    d="M 0 65 Q 40 55, 70 45 T 130 35 T 200 15 L 200 80 L 0 80 Z"
                    fill="url(#chartGradient)"
                  />
                  {/* Main Line */}
                  <path
                    d="M 0 65 Q 40 55, 70 45 T 130 35 T 200 15"
                    stroke="#397AF4"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  {/* Key data point marker */}
                  <circle cx="200" cy="15" r="3.5" fill="#397AF4" />
                  <circle cx="200" cy="15" r="7" fill="#397AF4" fillOpacity="0.2" />
                </svg>
              </div>

              <div className="flex justify-between items-center text-[10px] text-[#69758A] pt-1">
                <span>Mon</span>
                <span>Wed</span>
                <span>Fri</span>
                <span className="font-medium text-[#16223B]">Today</span>
              </div>
            </div>

            {/* Card Caption */}
            <div>
              <h3 className="font-display font-semibold text-lg sm:text-xl text-[#16223B] flex items-center flex-wrap">
                {conversionCard.titleLead}
                <InlineIconChip type={conversionCard.chipIcon} />
                {conversionCard.titleTail}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#69758A] leading-relaxed">
                {conversionCard.description}
              </p>
            </div>
          </div>

        </div>

        {/* ROW 2: Three Equal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Card 1: Grow with insights */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E6ECF4] shadow-lasso-card transition-all duration-200 hover:shadow-lasso-hover flex flex-col justify-between">
            {/* Arc / Nodes Mockup */}
            <div className="bg-[#FAFBFD] rounded-xl p-4 border border-[#EDF2F8] mb-5 h-36 flex flex-col justify-center items-center">
              <div className="relative w-full max-w-[200px] h-20 flex items-center justify-center">
                {/* Arc Line */}
                <svg viewBox="0 0 160 70" className="w-full h-full" fill="none">
                  <path
                    d="M 20 60 A 60 60 0 0 1 140 60"
                    stroke="#E2ECF8"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 20 60 A 60 60 0 0 1 125 35"
                    stroke="#397AF4"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute top-4 text-center">
                  <span className="text-xl font-bold font-display text-[#16223B]">95.4%</span>
                  <span className="block text-[9px] text-[#69758A] uppercase font-semibold">Pass Rate</span>
                </div>
              </div>
              <div className="flex justify-between w-full px-4 text-xs">
                <div className="text-center">
                  <span className="text-[10px] text-[#69758A] block">Sessions</span>
                  <span className="font-bold text-[#16223B]">937</span>
                </div>
                <div className="text-center">
                  <span className="text-[10px] text-[#69758A] block">Approved</span>
                  <span className="font-bold text-[#397AF4]">894</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-display font-semibold text-base sm:text-lg text-[#16223B] flex items-center flex-wrap">
                {bottomRow[0].titleLead}
                <InlineIconChip type={bottomRow[0].chipIcon} />
                {bottomRow[0].titleTail}
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-[#69758A] leading-relaxed">
                {bottomRow[0].description}
              </p>
            </div>
          </div>

          {/* Card 2: Protect revenue from threats */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E6ECF4] shadow-lasso-card transition-all duration-200 hover:shadow-lasso-hover flex flex-col justify-between">
            {/* Orders List with Flagged Chip */}
            <div className="bg-[#FAFBFD] rounded-xl p-3 border border-[#EDF2F8] mb-5 h-36 flex flex-col justify-center space-y-2">
              <div className="flex items-center justify-between text-[11px] p-1.5 bg-white rounded-lg border border-[#EBF1F8]">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="font-medium text-[#16223B]">Nike Blazer Mid</span>
                </div>
                <span className="font-bold text-[#16223B]">$110.00</span>
              </div>

              <div className="flex items-center justify-between text-[11px] p-1.5 bg-white rounded-lg border border-[#EBF1F8]">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="font-medium text-[#16223B]">Yeti Rambler</span>
                </div>
                <span className="font-bold text-[#16223B]">$35.00</span>
              </div>

              <div className="flex items-center justify-between text-[11px] p-1.5 bg-red-50/70 rounded-lg border border-red-200">
                <div className="flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-red-500" />
                  <span className="font-medium text-red-800">MacBook Air M3</span>
                </div>
                <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-red-100 text-red-700">
                  BLOCKED
                </span>
              </div>
            </div>

            <div>
              <h3 className="font-display font-semibold text-base sm:text-lg text-[#16223B] flex items-center flex-wrap">
                {bottomRow[1].titleLead}
                <InlineIconChip type={bottomRow[1].chipIcon} />
                {bottomRow[1].titleTail}
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-[#69758A] leading-relaxed">
                {bottomRow[1].description}
              </p>
            </div>
          </div>

          {/* Card 3: Earn more from every sale */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E6ECF4] shadow-lasso-card transition-all duration-200 hover:shadow-lasso-hover flex flex-col justify-between">
            {/* Cart with Upsell Bump */}
            <div className="bg-[#FAFBFD] rounded-xl p-3 border border-[#EDF2F8] mb-5 h-36 flex flex-col justify-center">
              <div className="text-[10px] font-semibold text-[#69758A] uppercase mb-1">Cart Summary (1 item)</div>
              <div className="flex items-center justify-between text-xs font-medium text-[#16223B] pb-2 border-b border-[#EDF2F8]">
                <span>Knee Brace Pro</span>
                <span>$49.00</span>
              </div>

              {/* Order Bump Box */}
              <div className="mt-2 p-2 bg-[#EBF3FF]/60 rounded-lg border border-[#D0E2FF] flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded bg-[#397AF4] text-white flex items-center justify-center">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-[#16223B]">Matching Knee Sleeve</div>
                    <div className="text-[9px] text-[#397AF4] font-medium">+ $19.00 (Save 30%)</div>
                  </div>
                </div>
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-white text-[#397AF4] border border-[#D0E2FF]">
                  Added
                </span>
              </div>
            </div>

            <div>
              <h3 className="font-display font-semibold text-base sm:text-lg text-[#16223B] flex items-center flex-wrap">
                {bottomRow[2].titleLead}
                <InlineIconChip type={bottomRow[2].chipIcon} />
                {bottomRow[2].titleTail}
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-[#69758A] leading-relaxed">
                {bottomRow[2].description}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
