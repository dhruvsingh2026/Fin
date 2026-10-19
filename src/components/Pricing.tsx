import React, { useState } from 'react';
import { pricingConfig } from '../data/pricing.ts';
import { Button } from './Button.tsx';
import { CactusMark } from './Logo.tsx';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'annual' | 'monthly'>('annual');

  const { headline, subheadline, annualDiscountBadge, plans } = pricingConfig;
  const { growth, enterprise } = plans;

  return (
    <section id="pricing" className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 mb-24 md:mb-32">
      {/* Centered Heading */}
      <div className="text-center max-w-xl mx-auto mb-10">
        <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#16223B]">
          {headline}
        </h2>
        <p className="mt-3 text-xs sm:text-base text-[#69758A]">
          {subheadline}
        </p>

        {/* Segmented Annual / Monthly Billing Switch */}
        <div className="mt-8 inline-flex items-center p-1 bg-[#F0F6FF] rounded-full border border-[#D5E5FD] shadow-2xs">
          <button
            type="button"
            role="radio"
            aria-checked={billingCycle === 'annual'}
            onClick={() => setBillingCycle('annual')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${
              billingCycle === 'annual'
                ? 'bg-[#397AF4] text-white shadow-2xs'
                : 'text-[#69758A] hover:text-[#16223B]'
            }`}
          >
            <span>Annual</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                billingCycle === 'annual' ? 'bg-white/25 text-white' : 'bg-[#EBF3FF] text-[#397AF4]'
              }`}
            >
              {annualDiscountBadge}
            </span>
          </button>

          <button
            type="button"
            role="radio"
            aria-checked={billingCycle === 'monthly'}
            onClick={() => setBillingCycle('monthly')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 cursor-pointer ${
              billingCycle === 'monthly'
                ? 'bg-[#397AF4] text-white shadow-2xs'
                : 'text-[#69758A] hover:text-[#16223B]'
            }`}
          >
            Monthly
          </button>
        </div>
      </div>

      {/* Two Pricing Cards (Max Width ~860px) */}
      <div className="max-w-[860px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        
        {/* GROWTH PLAN (Pale Blue Card) */}
        <div className="bg-[#F0F6FF] rounded-3xl p-6 sm:p-8 border border-[#D9E7FA] shadow-lasso-card flex flex-col justify-between relative transition-all duration-200 hover:shadow-lasso-hover">
          <div>
            {/* Top Row: Icon + Fee Note */}
            <div className="flex items-center justify-between mb-5">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#D9E7FA] flex items-center justify-center shadow-2xs">
                <CactusMark size={20} color="#397AF4" />
              </div>
              <span className="text-[11px] font-medium text-[#397AF4] bg-white px-2.5 py-1 rounded-full border border-[#D9E7FA] shadow-2xs">
                {growth.feeNote}
              </span>
            </div>

            {/* Plan Name */}
            <h3 className="font-display font-bold text-2xl text-[#16223B]">
              {growth.name}
            </h3>

            {/* Price Row */}
            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-display font-extrabold text-4xl sm:text-5xl text-[#16223B] tracking-tight">
                {growth.price[billingCycle].amount}
              </span>
              {growth.price[billingCycle].original && (
                <span className="text-sm font-medium text-[#69758A] line-through">
                  {growth.price[billingCycle].original}
                </span>
              )}
            </div>
            <div className="text-xs text-[#69758A] mt-1 font-medium">
              {growth.price[billingCycle].period}
            </div>

            <p className="mt-4 text-xs text-[#69758A] leading-relaxed pb-6 border-b border-[#D9E7FA]">
              {growth.description}
            </p>

            {/* Features List */}
            <div className="mt-6 mb-8">
              <span className="text-[11px] font-semibold text-[#16223B] uppercase tracking-wider block mb-3">
                Everything included:
              </span>
              <ul className="space-y-2.5">
                {growth.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs text-[#16223B]">
                    <span className="shrink-0 w-4 h-4 rounded-full bg-[#397AF4]/10 text-[#397AF4] flex items-center justify-center">
                      <Check className="w-2.5 h-2.5" strokeWidth={3} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card Button */}
          <Button
            href={growth.ctaHref}
            variant="primary"
            size="lg"
            className="w-full text-sm font-semibold shadow-sm"
          >
            {growth.ctaText}
          </Button>
        </div>

        {/* ENTERPRISE PLAN (White Card with Subtle Border) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E6ECF4] shadow-lasso-card flex flex-col justify-between relative transition-all duration-200 hover:shadow-lasso-hover">
          <div>
            {/* Top Row: Orange Icon + Fee Note */}
            <div className="flex items-center justify-between mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#FFF7ED] border border-[#FED7AA] flex items-center justify-center shadow-2xs">
                <CactusMark size={20} color="#F97316" />
              </div>
              <span className="text-[11px] font-medium text-[#D97706] bg-[#FFFBEB] px-2.5 py-1 rounded-full border border-[#FDE68A]">
                {enterprise.feeNote}
              </span>
            </div>

            {/* Plan Name */}
            <h3 className="font-display font-bold text-2xl text-[#16223B]">
              {enterprise.name}
            </h3>

            {/* Price Row */}
            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-display font-extrabold text-4xl sm:text-5xl text-[#16223B] tracking-tight">
                {enterprise.price[billingCycle].amount}
              </span>
            </div>
            <div className="text-xs text-[#69758A] mt-1 font-medium">
              {enterprise.price[billingCycle].period}
            </div>

            <p className="mt-4 text-xs text-[#69758A] leading-relaxed pb-6 border-b border-[#E6ECF4]">
              {enterprise.description}
            </p>

            {/* Features List */}
            <div className="mt-6 mb-8">
              <span className="text-[11px] font-semibold text-[#16223B] uppercase tracking-wider block mb-3">
                Dedicated capabilities:
              </span>
              <ul className="space-y-2.5">
                {enterprise.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs text-[#16223B]">
                    <span className="shrink-0 w-4 h-4 rounded-full bg-[#EA580C]/10 text-[#EA580C] flex items-center justify-center">
                      <Check className="w-2.5 h-2.5" strokeWidth={3} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card Button */}
          <Button
            href={enterprise.ctaHref}
            variant="secondary"
            size="lg"
            className="w-full text-sm font-semibold border-[#E6ECF4] text-[#16223B] hover:text-[#397AF4] hover:border-[#397AF4]"
          >
            {enterprise.ctaText}
          </Button>
        </div>

      </div>
    </section>
  );
};
