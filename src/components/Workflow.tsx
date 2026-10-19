import React from 'react';
import { workflowSteps } from '../data/workflow.ts';
import { UserPlus, Sliders, GitBranch } from 'lucide-react';

export const Workflow: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'user-plus':
        return <UserPlus className="w-5 h-5 text-[#397AF4]" strokeWidth={2} />;
      case 'sliders':
        return <Sliders className="w-5 h-5 text-[#397AF4]" strokeWidth={2} />;
      case 'git-branch':
      default:
        return <GitBranch className="w-5 h-5 text-[#397AF4]" strokeWidth={2} />;
    }
  };

  return (
    <section id="sync" className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 mb-24 md:mb-32">
      {/* Centered Heading */}
      <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
        <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#16223B]">
          Sync.
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-[#69758A]">
          Getting started is easy; simply follow the steps below to increase your revenue.
        </p>
      </div>

      {/* 3 Understated Workflow Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {workflowSteps.map((step) => (
          <div
            key={step.step}
            className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E6ECF4] shadow-lasso-card transition-all duration-200 hover:shadow-lasso-hover flex flex-col justify-between"
          >
            <div>
              {/* Step Icon & Number */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#F0F6FF] border border-[#D5E5FD] flex items-center justify-center">
                  {getIcon(step.iconName)}
                </div>
                <span className="font-mono text-xs font-semibold text-[#69758A]/60">
                  {step.step}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display font-semibold text-lg sm:text-xl text-[#16223B] mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#69758A] leading-relaxed whitespace-pre-line">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
