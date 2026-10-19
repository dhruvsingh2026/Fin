import React from 'react';

export const PaymentPartnerStrip: React.FC = () => {
  return (
    <section className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24" aria-label="Supported Payment Methods">
      <div className="bg-white rounded-2xl border border-[#E6ECF4] shadow-lasso-card py-4 px-6 md:px-10 overflow-hidden">
        <div className="flex items-center justify-between gap-6 md:gap-8 overflow-x-auto no-scrollbar py-2">
          
          {/* 1. Shop Pay */}
          <div className="shrink-0 flex items-center justify-center h-8" title="Shop Pay">
            <svg viewBox="0 0 90 28" className="h-6 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="90" height="28" rx="6" fill="#5A31F4" />
              <text x="45" y="18" fill="white" fontFamily="system-ui, sans-serif" fontWeight="bold" fontSize="13" textAnchor="middle" letterSpacing="-0.5">
                shop <tspan fill="#A5C7FF">pay</tspan>
              </text>
            </svg>
          </div>

          {/* 2. Mastercard */}
          <div className="shrink-0 flex items-center justify-center h-8" title="Mastercard">
            <svg viewBox="0 0 38 24" className="h-6 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="#EB001B" />
              <circle cx="26" cy="12" r="10" fill="#F79E1B" fillOpacity="0.9" />
              <path d="M19 4.8A10 10 0 0 1 22 12a10 10 0 0 1-3 7.2A10 10 0 0 1 16 12a10 10 0 0 1 3-7.2Z" fill="#FF5F00" />
            </svg>
          </div>

          {/* 3. Klarna */}
          <div className="shrink-0 flex items-center justify-center h-8" title="Klarna">
            <svg viewBox="0 0 74 24" className="h-5 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="74" height="24" rx="4" fill="#FFB3C7" />
              <text x="37" y="16.5" fill="#0A0A0A" fontFamily="system-ui, sans-serif" fontWeight="bold" fontSize="12" textAnchor="middle" letterSpacing="-0.3">
                Klarna.
              </text>
            </svg>
          </div>

          {/* 4. Google Pay */}
          <div className="shrink-0 flex items-center justify-center h-8" title="Google Pay">
            <svg viewBox="0 0 68 24" className="h-5 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.2 12a4.8 4.8 0 0 1-.1-1.1h-4.7v2.1h2.7a2.4 2.4 0 0 1-1 1.6v1.3h1.7c1-1 1.6-2.4 1.4-3.9Z" fill="#4285F4" />
              <path d="M5.4 16.8c1.3 0 2.4-.4 3.2-1.2l-1.6-1.3c-.5.3-1 .5-1.6.5-1.2 0-2.3-.8-2.7-1.9H1v1.3a4.7 4.7 0 0 0 4.4 2.6Z" fill="#34A853" />
              <path d="M2.7 12.9a2.8 2.8 0 0 1 0-1.8V9.8H1A4.8 4.8 0 0 0 1 14.2l1.7-1.3Z" fill="#FBBC04" />
              <path d="M5.4 7.2c.7 0 1.4.3 1.9.8l1.4-1.4A4.8 4.8 0 0 0 1 9.8l1.7 1.3c.4-1.1 1.5-1.9 2.7-1.9Z" fill="#EA4335" />
              <text x="36" y="16.5" fill="#3C4043" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="13">
                Pay
              </text>
            </svg>
          </div>

          {/* 5. Apple Pay */}
          <div className="shrink-0 flex items-center justify-center h-8" title="Apple Pay">
            <svg viewBox="0 0 64 24" className="h-5 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Apple icon */}
              <path d="M12.3 8.3a2.6 2.6 0 0 0 .6-1.9 2.7 2.7 0 0 0-1.8.9 2.4 2.4 0 0 0-.6 1.8 2.3 2.3 0 0 0 1.8-.8Z" fill="#16223B" />
              <path d="M12.9 9.3c-1 0-1.8.6-2.3.6-.5 0-1.2-.5-2-.5a3 3 0 0 0-2.6 1.5 5 5 0 0 0-.8 2.8c0 2 1.3 4.4 2.6 4.4.5 0 .8-.3 1.4-.3.6 0 .9.3 1.4.3 1.3 0 2.2-2.1 2.2-2.1a3 3 0 0 1-1.5-2.6 3 3 0 0 1 1.6-2.6 3.1 3.1 0 0 0-2.6-1.5Z" fill="#16223B" />
              <text x="32" y="16.5" fill="#16223B" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="13">
                Pay
              </text>
            </svg>
          </div>

          {/* 6. Affirm */}
          <div className="shrink-0 flex items-center justify-center h-8" title="Affirm">
            <svg viewBox="0 0 66 24" className="h-5 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 6a7 7 0 0 1 7 7h-2.5a4.5 4.5 0 0 0-9 0H3a7 7 0 0 1 7-7Z" fill="#004BFF" />
              <text x="21" y="16.5" fill="#0F172A" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="12">
                affirm
              </text>
            </svg>
          </div>

          {/* 7. Adyen */}
          <div className="shrink-0 flex items-center justify-center h-8" title="Adyen">
            <svg viewBox="0 0 64 24" className="h-5 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="4" width="56" height="16" rx="3" fill="#0ABF53" />
              <text x="32" y="16" fill="white" fontFamily="system-ui, sans-serif" fontWeight="bold" fontSize="11" textAnchor="middle" letterSpacing="0.5">
                adyen
              </text>
            </svg>
          </div>

          {/* 8. PayPal */}
          <div className="shrink-0 flex items-center justify-center h-8" title="PayPal">
            <svg viewBox="0 0 74 24" className="h-5 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 4h6.5c3.2 0 5 1.5 4.5 4.5-.6 3.2-3 5-6.2 5H10l-1.5 8H5L8 4Z" fill="#003087" />
              <path d="M11.5 7.5h6.5c3 0 4.8 1.4 4.3 4.2-.6 3-2.8 4.8-5.8 4.8H13.5l-1.2 6H9l2.5-15Z" fill="#0079C1" fillOpacity="0.85" />
              <text x="44" y="17" fill="#003087" fontFamily="system-ui, sans-serif" fontWeight="bold" fontSize="12">
                PayPal
              </text>
            </svg>
          </div>

          {/* 9. Checkout.com */}
          <div className="shrink-0 flex items-center justify-center h-8" title="Checkout.com">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#16223B]">
              <span className="text-[#397AF4] font-bold text-sm tracking-tighter">CKO</span>
              <span className="hidden sm:inline text-[11px] text-[#69758A]">checkout</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
