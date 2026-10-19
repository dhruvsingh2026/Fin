import React, { useState } from 'react';
import { faqList } from '../data/faqs.ts';
import { SectionHeading } from './SectionHeading.tsx';
import { Plus } from 'lucide-react';

export const FAQ: React.FC = () => {
  // First item open by default as suggested
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'how-it-works': true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="faq" className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 mb-24 md:mb-32">
      {/* Two-Line Heading */}
      <SectionHeading
        line1="You have questions,"
        line2="we have answers."
        subtitle="Book a call if you're looking for something more"
        className="mb-12"
      />

      {/* Narrow Accordion Container (~720px max width) */}
      <div className="max-w-[720px] mx-auto bg-white rounded-2xl border border-[#E6ECF4] shadow-lasso-card divide-y divide-[#E6ECF4] overflow-hidden">
        {faqList.map((item) => {
          const isOpen = !!openItems[item.id];

          return (
            <div key={item.id} className="transition-colors hover:bg-[#FAFBFD]/60">
              <h3>
                <button
                  type="button"
                  id={`faq-btn-${item.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                  onClick={() => toggleItem(item.id)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between text-left gap-4 group cursor-pointer focus-visible:outline-2 focus-visible:outline-[#397AF4]"
                >
                  <span className="font-sans font-medium text-xs sm:text-sm text-[#16223B] group-hover:text-[#397AF4] transition-colors">
                    {item.question}
                  </span>
                  <span
                    className={`shrink-0 w-6 h-6 rounded-full bg-[#F0F6FF] text-[#397AF4] flex items-center justify-center transition-transform duration-200 ${
                      isOpen ? 'rotate-45 bg-[#E2ECF8]' : 'rotate-0'
                    }`}
                    aria-hidden="true"
                  >
                    <Plus className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </span>
                </button>
              </h3>

              {isOpen && (
                <div
                  id={`faq-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-btn-${item.id}`}
                  className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#69758A] leading-relaxed animate-in fade-in duration-200"
                >
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
