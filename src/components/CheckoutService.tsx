import React, { useState } from 'react';
import { checkoutServices, ServiceItem } from '../data/services.ts';
import { Check, ChevronRight } from 'lucide-react';

export const CheckoutService: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>(checkoutServices[0].id);

  const activeService: ServiceItem =
    checkoutServices.find((s) => s.id === activeTabId) || checkoutServices[0];

  return (
    <section
      id="services"
      className="w-full bg-[#F0F6FF] border-y border-[#E2ECF8] py-20 md:py-28 mb-24 md:mb-32"
      aria-labelledby="caas-heading"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2
            id="caas-heading"
            className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#16223B]"
          >
            Checkout as a Service.
          </h2>
          <p className="mt-3 text-xs sm:text-base text-[#69758A] balance">
            From Shopify to custom sites — you choose the builder, we’ll handle the checkout.
          </p>
        </div>

        {/* Two-Column Grid: Selector (Left) + Multi-device Preview (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Vertical Tablist Selector (~5 cols) */}
          <div
            className="lg:col-span-5 bg-white/60 backdrop-blur-xs rounded-2xl p-2 sm:p-3 border border-[#E6ECF4]"
            role="tablist"
            aria-orientation="vertical"
            aria-label="Checkout Capabilities"
          >
            {checkoutServices.map((service, index) => {
              const isActive = service.id === activeTabId;

              return (
                <div
                  key={service.id}
                  className={`transition-all duration-200 rounded-xl mb-1.5 last:mb-0 ${
                    isActive ? 'bg-white shadow-sm border border-[#E6ECF4]' : 'hover:bg-white/40'
                  }`}
                >
                  <button
                    type="button"
                    role="tab"
                    id={`tab-${service.id}`}
                    aria-selected={isActive}
                    aria-controls={`panel-${service.id}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveTabId(service.id)}
                    className="w-full text-left p-3.5 sm:p-4 flex items-center justify-between group cursor-pointer focus-visible:outline-2 focus-visible:outline-[#397AF4] rounded-xl"
                  >
                    <span
                      className={`text-sm sm:text-base font-semibold font-display transition-colors ${
                        isActive ? 'text-[#397AF4]' : 'text-[#16223B] group-hover:text-[#397AF4]'
                      }`}
                    >
                      {service.title}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isActive ? 'rotate-90 text-[#397AF4]' : 'text-[#69758A]/40 group-hover:text-[#397AF4]'
                      }`}
                    />
                  </button>

                  {/* Expanded Active Tab Description & Bullets */}
                  {isActive && (
                    <div className="px-4 pb-4 pt-1 animate-in fade-in duration-200">
                      <p className="text-xs text-[#69758A] mb-3 leading-relaxed">
                        {service.shortDescription}
                      </p>
                      <ul className="space-y-2 text-xs text-[#16223B]">
                        {service.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <span className="shrink-0 w-4 h-4 rounded-full bg-[#EBF3FF] text-[#397AF4] flex items-center justify-center mt-0.5">
                              <Check className="w-2.5 h-2.5" strokeWidth={3} />
                            </span>
                            <span className="leading-snug">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN: Large White Rounded Panel with 3 Simulated Phone/Browser Frames (~7 cols) */}
          <div
            id={`panel-${activeService.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeService.id}`}
            className="lg:col-span-7 bg-white rounded-3xl p-5 sm:p-8 border border-[#E6ECF4] shadow-lasso-card"
          >
            {/* Top header bar for active category */}
            <div className="flex items-center justify-between border-b border-[#EDF2F8] pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeService.mockData.accentColor }} />
                <span className="text-xs font-semibold text-[#16223B]">
                  {activeService.mockData.headline}
                </span>
              </div>
              <span className="text-[11px] font-semibold text-[#397AF4] bg-[#EBF3FF] px-2.5 py-0.5 rounded-full border border-[#D5E5FD]">
                {activeService.mockData.badgeText}
              </span>
            </div>

            {/* 3-Column arrangement of simplified device checkout frames */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Frame 1: Mobile Sheet 1 (Express Wallets) */}
              <div className="bg-[#FAFBFD] rounded-2xl p-3.5 border border-[#EDF2F8] shadow-2xs flex flex-col justify-between h-[280px]">
                <div>
                  <div className="w-8 h-1 bg-[#CBD5E1] rounded-full mx-auto mb-3" />
                  <div className="h-2 w-16 bg-[#E2ECF8] rounded-full mb-3" />
                  <div className="h-1.5 w-24 bg-[#EDF2F8] rounded-full mb-4" />

                  {/* Payment pills */}
                  <div className="space-y-2">
                    <div className="w-full py-2 bg-black text-white text-[11px] font-medium rounded-lg text-center flex items-center justify-center gap-1">
                      <span></span> {activeService.mockData.primaryMethod}
                    </div>
                    <div className="w-full py-2 bg-white border border-[#CBD5E1] text-[#334155] text-[11px] font-medium rounded-lg text-center flex items-center justify-center gap-1">
                      <span className="text-[#4285F4] font-bold">G</span> {activeService.mockData.secondaryMethod}
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#EDF2F8] text-center">
                  <span className="text-[10px] text-[#69758A]">1-tap instant authorization</span>
                </div>
              </div>

              {/* Frame 2: Centered Highlighted Frame (Active Flow) */}
              <div className="bg-white rounded-2xl p-3.5 border-2 border-[#397AF4] shadow-md flex flex-col justify-between h-[280px] relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#397AF4] text-white text-[9px] font-bold px-2 py-0.5 rounded-bl">
                  ACTIVE
                </div>

                <div>
                  <div className="w-8 h-1 bg-[#94A3B8] rounded-full mx-auto mb-3" />
                  <div className="text-xs font-bold text-[#16223B] mb-1">Payment Method</div>
                  <div className="text-[10px] text-[#69758A] mb-3">Encrypted 256-bit rail</div>

                  {/* Interactive mock buttons */}
                  <div className="space-y-2">
                    <div className="p-2 rounded-lg bg-[#FFB3C7] text-black text-[11px] font-bold text-center">
                      {activeService.mockData.tertiaryMethod}
                    </div>
                    <div className="p-2 rounded-lg bg-[#FEF08A] text-amber-950 text-[11px] font-bold text-center">
                      Pay Over Time
                    </div>
                  </div>

                  {/* Skeletons */}
                  <div className="mt-3 space-y-1.5">
                    <div className="h-1.5 w-full bg-[#EDF2F8] rounded-full" />
                    <div className="h-1.5 w-3/4 bg-[#EDF2F8] rounded-full" />
                  </div>
                </div>

                <div className="pt-2 border-t border-[#EDF2F8] text-center">
                  <span className="text-[10px] font-semibold text-[#397AF4]">Zero redirect checkout</span>
                </div>
              </div>

              {/* Frame 3: Alternate Device Sheet */}
              <div className="hidden sm:flex bg-[#FAFBFD] rounded-2xl p-3.5 border border-[#EDF2F8] shadow-2xs flex-col justify-between h-[280px]">
                <div>
                  <div className="w-8 h-1 bg-[#CBD5E1] rounded-full mx-auto mb-3" />
                  <div className="h-2 w-14 bg-[#E2ECF8] rounded-full mb-3" />
                  
                  <div className="space-y-2">
                    <div className="w-full py-2 bg-white border border-[#CBD5E1] text-[#334155] text-[11px] font-medium rounded-lg text-center">
                      Card (•••• 4242)
                    </div>
                    <div className="w-full py-2 bg-[#5A31F4] text-white text-[11px] font-medium rounded-lg text-center">
                      Shop Pay
                    </div>
                  </div>

                  <div className="mt-4 space-y-1.5">
                    <div className="h-1.5 w-full bg-[#EDF2F8] rounded-full" />
                    <div className="h-1.5 w-2/3 bg-[#EDF2F8] rounded-full" />
                  </div>
                </div>

                <div className="pt-2 border-t border-[#EDF2F8] text-center">
                  <span className="text-[10px] text-[#69758A]">Smart currency detect</span>
                </div>
              </div>

            </div>

            {/* Bottom Caption */}
            <div className="mt-6 pt-4 border-t border-[#EDF2F8] flex items-center justify-between text-xs text-[#69758A]">
              <span>{activeService.mockData.deviceCaption}</span>
              <span className="font-mono text-[11px] text-[#16223B]">ISO 27001 & PCI Level 1</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
