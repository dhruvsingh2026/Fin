import React from 'react';
import { workflowSteps } from '../data/workflow.ts';
import { Compass, Users, Send } from 'lucide-react';

export const Workflow: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'compass':
        return <Compass className="w-5 h-5 text-ink" strokeWidth={1.8} />;
      case 'users':
        return <Users className="w-5 h-5 text-ink" strokeWidth={1.8} />;
      case 'send':
      default:
        return <Send className="w-5 h-5 text-ink" strokeWidth={1.8} />;
    }
  };

  return (
    <section id="how-it-works" className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 mb-24 md:mb-32">
      {/* Centered Heading */}
      <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
        <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink">
          How Finexaa works.
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-muted">
          A transparent, enquiry-first pathway connecting retailers, brands, and skilled leathercraft producers.
        </p>
      </div>

      {/* 3 Understated Workflow Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {workflowSteps.map((step) => (
          <div
            key={step.step}
            className="bg-white rounded-2xl p-6 sm:p-7 border border-border shadow-card transition-all duration-200 hover:shadow-card-hover flex flex-col justify-between"
          >
            <div>
              {/* Step Icon & Number */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-linen border border-border flex items-center justify-center">
                  {getIcon(step.iconName)}
                </div>
                <span className="text-xs font-semibold text-muted/60">
                  {step.step}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display font-semibold text-lg sm:text-xl text-ink mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
