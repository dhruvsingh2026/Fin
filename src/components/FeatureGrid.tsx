import React from 'react';
import { InlineIconChip } from './InlineIconChip.tsx';
import { marketplaceFeatures } from '../data/features.ts';
import { ProductImage } from './ProductImage.tsx';
import { Button } from './Button.tsx';
import { ArrowUpRight, Building2, Layers } from 'lucide-react';

export const FeatureGrid: React.FC = () => {
  const { mainDiscovery, categoryOverview, bottomRow } = marketplaceFeatures;

  return (
    <section id="marketplace" className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-28">
      {/* Outer soft linen panel */}
      <div className="bg-linen rounded-3xl p-4 sm:p-6 lg:p-7 border border-border">
        
        {/* ROW 1: Asymmetric 2/3 and 1/3 Desktop Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5">
          
          {/* Large Product Discovery Card (~8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-5 sm:p-7 border border-border shadow-card transition-all duration-200 hover:shadow-card-hover flex flex-col justify-between">
            {/* Product Discovery Mockup Container */}
            <div className="bg-surface-soft rounded-xl p-4 sm:p-5 border border-border mb-6">
              
              {/* Mockup Header */}
              <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-ink" />
                  <span className="text-xs font-semibold text-ink">B2B Sourcing Preview</span>
                </div>
                <span className="text-[11px] text-muted uppercase font-medium bg-white px-2 py-0.5 rounded border border-border">
                  Sample listing
                </span>
              </div>

              {/* Product Row */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                <div className="sm:col-span-4 bg-white rounded-lg p-2 border border-border flex items-center justify-center">
                  <ProductImage
                    artKey="handbag"
                    alt="Saddle Leather Trapeze Tote"
                    aspectClassName="w-full h-28"
                  />
                </div>
                
                <div className="sm:col-span-5 space-y-1.5">
                  <div className="text-sm font-semibold text-ink">Saddle Leather Trapeze Tote</div>
                  <div className="text-xs text-muted">Full-Grain Calfskin · Brass Hardware</div>
                  <div className="flex items-center gap-2 pt-1 text-[11px]">
                    <span className="px-2 py-0.5 rounded bg-leather-tint text-ink border border-leather-border">
                      Handbags
                    </span>
                    <span className="text-muted">Origin: Tuscany, Italy</span>
                  </div>
                </div>

                <div className="sm:col-span-3 text-left sm:text-right space-y-1">
                  <div className="text-base font-bold text-ink">$185 / unit</div>
                  <div className="text-[10px] text-muted">MOQ 25 units · Indicative</div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="mt-4 pt-3 border-t border-border flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs text-muted">
                  <span className="w-2 h-2 rounded-full bg-leather" />
                  <span>Available for wholesale enquiries</span>
                </div>
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

            {/* Card Caption */}
            <div>
              <h3 className="font-display font-semibold text-lg sm:text-xl text-ink flex items-center flex-wrap">
                {mainDiscovery.titleLead}
                <InlineIconChip type={mainDiscovery.chipIcon} />
                {mainDiscovery.titleTail}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
                {mainDiscovery.description}
              </p>
            </div>
          </div>

          {/* Narrow Category Overview Card (~4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-5 sm:p-7 border border-border shadow-card transition-all duration-200 hover:shadow-card-hover flex flex-col justify-between">
            {/* Category List Mockup */}
            <div className="bg-surface-soft rounded-xl p-4 border border-border mb-6">
              <div className="flex items-center justify-between text-[11px] font-semibold text-muted uppercase tracking-wider pb-2 border-b border-border">
                <span>Categories</span>
                <span>Division</span>
              </div>

              <div className="divide-y divide-border text-xs">
                {categoryOverview.categories.map((cat, idx) => (
                  <div key={idx} className="py-2 flex items-center justify-between group">
                    <span className="text-ink font-medium group-hover:text-leather transition-colors">
                      {cat.name}
                    </span>
                    <span className="text-[10px] text-muted bg-white px-2 py-0.5 rounded border border-border">
                      {cat.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card Caption */}
            <div>
              <h3 className="font-display font-semibold text-lg sm:text-xl text-ink flex items-center flex-wrap">
                {categoryOverview.titleLead}
                <InlineIconChip type={categoryOverview.chipIcon} />
                {categoryOverview.titleTail}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
                {categoryOverview.description}
              </p>
            </div>
          </div>

        </div>

        {/* ROW 2: Three Equal Lower Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Card 1: Discover styles */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-border shadow-card transition-all duration-200 hover:shadow-card-hover flex flex-col justify-between">
            <div className="bg-surface-soft rounded-xl p-3 border border-border mb-5 h-36 flex items-center justify-around gap-2">
              {bottomRow[0].items?.map((item, idx) => (
                <div key={idx} className="flex-1 bg-white rounded-lg p-1.5 border border-border text-center shadow-2xs">
                  <ProductImage
                    artKey={item.artKey}
                    alt={item.name}
                    aspectClassName="w-full h-16"
                  />
                  <div className="text-[10px] font-semibold text-ink truncate mt-1">{item.name}</div>
                  <div className="text-[9px] text-muted">{item.tag}</div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="font-display font-semibold text-base sm:text-lg text-ink flex items-center flex-wrap">
                {bottomRow[0].titleLead}
                <InlineIconChip type={bottomRow[0].chipIcon} />
                {bottomRow[0].titleTail}
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-muted leading-relaxed">
                {bottomRow[0].description}
              </p>
            </div>
          </div>

          {/* Card 2: Find suppliers */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-border shadow-card transition-all duration-200 hover:shadow-card-hover flex flex-col justify-between">
            <div className="bg-surface-soft rounded-xl p-3 border border-border mb-5 h-36 flex flex-col justify-center space-y-2">
              {bottomRow[1].supplierSamples?.map((sup, idx) => (
                <div key={idx} className="flex items-center justify-between text-[11px] p-2 bg-white rounded-lg border border-border">
                  <div className="flex items-center gap-2 truncate">
                    <Building2 className="w-3.5 h-3.5 text-leather shrink-0" />
                    <div className="truncate">
                      <span className="font-semibold text-ink block truncate">{sup.name}</span>
                      <span className="text-[10px] text-muted block truncate">{sup.region}</span>
                    </div>
                  </div>
                  <span className="text-[9px] font-semibold uppercase px-1.5 py-0.5 rounded bg-leather-tint text-ink border border-leather-border shrink-0">
                    Sample
                  </span>
                </div>
              ))}
            </div>

            <div>
              <h3 className="font-display font-semibold text-base sm:text-lg text-ink flex items-center flex-wrap">
                {bottomRow[1].titleLead}
                <InlineIconChip type={bottomRow[1].chipIcon} />
                {bottomRow[1].titleTail}
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-muted leading-relaxed">
                {bottomRow[1].description}
              </p>
            </div>
          </div>

          {/* Card 3: Organise collections */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-border shadow-card transition-all duration-200 hover:shadow-card-hover flex flex-col justify-between">
            <div className="bg-surface-soft rounded-xl p-3 border border-border mb-5 h-36 flex flex-col justify-center">
              <div className="text-[10px] font-semibold text-muted uppercase mb-1">
                Curated Line Sheet (Illustrative)
              </div>
              <div className="p-3 bg-white rounded-lg border border-border space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-ink">
                    {bottomRow[2].collectionSample?.title}
                  </span>
                  <span className="text-[10px] text-leather font-semibold">
                    {bottomRow[2].collectionSample?.status}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-muted">
                  <Layers className="w-3 h-3 text-muted" />
                  <span>{bottomRow[2].collectionSample?.itemCount}</span>
                  <span>·</span>
                  <span>{bottomRow[2].collectionSample?.materials}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-display font-semibold text-base sm:text-lg text-ink flex items-center flex-wrap">
                {bottomRow[2].titleLead}
                <InlineIconChip type={bottomRow[2].chipIcon} />
                {bottomRow[2].titleTail}
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-muted leading-relaxed">
                {bottomRow[2].description}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
