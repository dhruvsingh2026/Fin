import React, { useState, useRef } from 'react';
import { sourcingStages, SourcingStage } from '../data/sourcing.ts';
import { Button } from './Button.tsx';
import { Check, ChevronRight, Layers, Building2, Send, Search } from 'lucide-react';

export const SourcingWorkflow: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>(sourcingStages[0].id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeIndex = sourcingStages.findIndex((s) => s.id === activeTabId);
  const activeStage: SourcingStage = sourcingStages[activeIndex] || sourcingStages[0];

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      nextIndex = (index + 1) % sourcingStages.length;
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      nextIndex = (index - 1 + sourcingStages.length) % sourcingStages.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = sourcingStages.length - 1;
    } else {
      return;
    }

    setActiveTabId(sourcingStages[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section
      id="sourcing"
      className="w-full bg-linen border-y border-border py-20 md:py-28 mb-24 md:mb-32"
      aria-labelledby="sourcing-heading"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2
            id="sourcing-heading"
            className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink"
          >
            From discovery to trade.
          </h2>
          <p className="mt-3 text-xs sm:text-base text-muted-linen text-balance">
            Explore collections, compare relevant products, and connect with the right trading opportunities.
          </p>
        </div>

        {/* Two-Column Grid: Vertical Tablist (Left) + Single Clean Preview Panel (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Vertical Tablist Selector (~5 cols) */}
          <div
            className="lg:col-span-5 bg-white/70 backdrop-blur-xs rounded-2xl p-2 sm:p-3 border border-border"
            role="tablist"
            aria-orientation="vertical"
            aria-label="Sourcing Stages"
          >
            {sourcingStages.map((stage, index) => {
              const isActive = stage.id === activeTabId;

              return (
                <div
                  key={stage.id}
                  className={`transition-all duration-200 rounded-xl mb-1.5 last:mb-0 ${
                    isActive ? 'bg-white shadow-sm border border-border' : 'hover:bg-white/50'
                  }`}
                >
                  <button
                    ref={(el) => {
                      tabRefs.current[index] = el;
                    }}
                    type="button"
                    role="tab"
                    id={`tab-${stage.id}`}
                    aria-selected={isActive}
                    aria-controls={`panel-${stage.id}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveTabId(stage.id)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="w-full text-left p-3.5 sm:p-4 flex items-center justify-between group cursor-pointer focus-visible:outline-2 focus-visible:outline-ink rounded-xl"
                  >
                    <span
                      className={`text-sm sm:text-base font-semibold font-display transition-colors ${
                        isActive ? 'text-ink' : 'text-ink/80 group-hover:text-ink'
                      }`}
                    >
                      {stage.title}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isActive ? 'rotate-90 text-leather' : 'text-muted/40 group-hover:text-ink'
                      }`}
                    />
                  </button>

                  {/* Expanded Active Tab Description & Bullets */}
                  {isActive && (
                    <div className="px-4 pb-4 pt-1 fade-in">
                      <p className="text-xs text-muted mb-3 leading-relaxed">
                        {stage.shortDescription}
                      </p>
                      <ul className="space-y-2 text-xs text-ink">
                        {stage.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <span className="shrink-0 w-4 h-4 rounded-full bg-leather-tint text-ink flex items-center justify-center mt-0.5">
                              <Check className="w-2.5 h-2.5 text-leather" strokeWidth={3} />
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

          {/* RIGHT COLUMN: Single Clean Preview Panel (~7 cols) */}
          <div
            id={`panel-${activeStage.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeStage.id}`}
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-border shadow-card flex flex-col justify-between min-h-[360px]"
          >
            <div>
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-leather" />
                  <span className="text-xs font-semibold text-ink">
                    {activeStage.mockData.headline}
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-ink bg-leather-tint px-2.5 py-0.5 rounded-full border border-leather-border">
                  {activeStage.mockData.sublabel}
                </span>
              </div>

              {/* Main Card View */}
              <div className="bg-surface-soft rounded-2xl p-5 border border-border space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-semibold text-muted uppercase tracking-wider block mb-0.5">
                      {activeStage.mockData.categoryTag}
                    </span>
                    <h4 className="text-base font-display font-bold text-ink">
                      {activeStage.mockData.itemTitle}
                    </h4>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-leather bg-white px-2 py-0.5 rounded border border-border">
                    Illustrative Mockup
                  </span>
                </div>

                <p className="text-xs text-muted leading-relaxed">
                  {activeStage.mockData.itemDetails}
                </p>

                {/* Sourcing Details Mock Box */}
                <div className="pt-3 border-t border-border flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2 text-muted">
                    <span className="w-2 h-2 rounded-full bg-ink" />
                    <span>Enquiry-first trading model</span>
                  </div>
                  <span className="text-[11px] font-medium text-ink bg-white px-2.5 py-1 rounded border border-border">
                    Terms agreed per enquiry
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Action Area */}
            <div className="mt-8 pt-4 border-t border-border flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-muted">
                Interested in this sourcing capability?
              </span>
              <Button
                href="#contact"
                variant="primary"
                size="sm"
                className="text-xs"
              >
                Send an enquiry
              </Button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
