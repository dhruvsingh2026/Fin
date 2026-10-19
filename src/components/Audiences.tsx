import React from 'react';
import { audiencesConfig } from '../data/audiences.ts';
import { Button } from './Button.tsx';
import { Check, Store, Factory } from 'lucide-react';

export const Audiences: React.FC = () => {
  const { headline, subheadline, cards } = audiencesConfig;

  return (
    <section id="audiences" className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 mb-24 md:mb-32">
      {/* Centered Heading */}
      <div className="text-center max-w-xl mx-auto mb-12">
        <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink">
          {headline}
        </h2>
        <p className="mt-3 text-xs sm:text-base text-muted text-balance">
          {subheadline}
        </p>
      </div>

      {/* Two Audience Cards (Max Width ~860px) */}
      <div className="max-w-[860px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {cards.map((card) => {
          const isLinen = card.isLinenTheme;

          return (
            <div
              key={card.id}
              className={`rounded-3xl p-6 sm:p-8 border shadow-card flex flex-col justify-between relative transition-all duration-200 hover:shadow-card-hover ${
                isLinen
                  ? 'bg-linen border-[#E2DDCF]'
                  : 'bg-white border-border'
              }`}
            >
              <div>
                {/* Top Row: Icon + Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-border flex items-center justify-center shadow-2xs">
                    {card.id === 'buyers' ? (
                      <Store className="w-5 h-5 text-ink" strokeWidth={1.8} />
                    ) : (
                      <Factory className="w-5 h-5 text-ink" strokeWidth={1.8} />
                    )}
                  </div>
                  <span className="text-[11px] font-medium text-ink bg-white px-2.5 py-1 rounded-full border border-border shadow-2xs">
                    {card.categoryBadge}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="font-display font-bold text-2xl text-ink">
                  {card.title}
                </h3>

                <p className="mt-3 text-xs text-muted leading-relaxed pb-6 border-b border-border">
                  {card.description}
                </p>

                {/* Benefits List */}
                <div className="mt-6 mb-8">
                  <span className="text-[11px] font-semibold text-ink uppercase tracking-wider block mb-3">
                    Key capabilities:
                  </span>
                  <ul className="space-y-2.5">
                    {card.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-ink">
                        <span className="shrink-0 w-4 h-4 rounded-full bg-white border border-border text-ink flex items-center justify-center mt-0.5">
                          <Check className="w-2.5 h-2.5 text-leather" strokeWidth={3} />
                        </span>
                        <span className="leading-snug">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card CTA */}
              <Button
                href={card.ctaHref}
                variant={isLinen ? 'primary' : 'secondary'}
                size="lg"
                className="w-full text-sm font-semibold"
              >
                {card.ctaLabel}
              </Button>
            </div>
          );
        })}
      </div>
    </section>
  );
};
