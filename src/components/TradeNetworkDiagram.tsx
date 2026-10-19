import React from 'react';
import { FinexaaMark } from './Logo.tsx';
import {
  Store,
  Users,
  Building2,
  Handshake,
  Factory,
  Footprints,
  ShoppingBag,
  Layers,
} from 'lucide-react';

export const TradeNetworkDiagram: React.FC = () => {
  // Left nodes: Commercial trade participants
  const leftNodes = [
    {
      id: 'retailers',
      label: 'Retailers',
      icon: <Store className="w-5 h-5 text-ink" strokeWidth={1.8} />,
    },
    {
      id: 'buyers',
      label: 'Buyers',
      icon: <Users className="w-5 h-5 text-ink" strokeWidth={1.8} />,
    },
    {
      id: 'wholesalers',
      label: 'Wholesalers',
      icon: <Building2 className="w-5 h-5 text-ink" strokeWidth={1.8} />,
    },
    {
      id: 'suppliers',
      label: 'Suppliers',
      icon: <Handshake className="w-5 h-5 text-ink" strokeWidth={1.8} />,
    },
  ];

  // Right nodes: Production & category specializations
  const rightNodes = [
    {
      id: 'manufacturers',
      label: 'Manufacturers',
      icon: <Factory className="w-5 h-5 text-ink" strokeWidth={1.8} />,
    },
    {
      id: 'footwear',
      label: 'Footwear',
      icon: <Footprints className="w-5 h-5 text-ink" strokeWidth={1.8} />,
    },
    {
      id: 'leather-goods',
      label: 'Leather Goods',
      icon: <ShoppingBag className="w-5 h-5 text-ink" strokeWidth={1.8} />,
    },
    {
      id: 'apparel',
      label: 'Apparel',
      icon: <Layers className="w-5 h-5 text-ink" strokeWidth={1.8} />,
    },
  ];

  return (
    <section id="suppliers" className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 mb-24 md:mb-32">
      {/* Centered Heading & Subtitle */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink">
          A network built around fashion trade.
        </h2>
        <p className="mt-4 text-xs sm:text-sm text-muted leading-relaxed text-balance">
          Connect with independent brands, specialty boutiques, wholesalers, and artisanal workshops across key European and international leather-crafting centers.
        </p>
      </div>

      {/* Hub-and-Spoke Diagram Container */}
      <div className="relative w-full max-w-[900px] mx-auto min-h-[380px] sm:min-h-[420px] flex items-center justify-center">
        
        {/* DESKTOP / TABLET SVG CONNECTORS */}
        <div className="hidden sm:block absolute inset-0 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 900 420" fill="none">
            {/* Left curved connectors */}
            <path d="M 400 170 C 320 150, 220 90, 160 85" stroke="#E7E6E0" strokeWidth="1.5" strokeDasharray="3 3" />
            <path d="M 380 190 C 300 180, 220 150, 130 155" stroke="#E7E6E0" strokeWidth="1.5" />
            <path d="M 380 230 C 300 240, 220 270, 130 265" stroke="#E7E6E0" strokeWidth="1.5" />
            <path d="M 400 250 C 320 270, 220 330, 160 335" stroke="#E7E6E0" strokeWidth="1.5" strokeDasharray="3 3" />

            {/* Right curved connectors */}
            <path d="M 500 170 C 580 150, 680 90, 740 85" stroke="#E7E6E0" strokeWidth="1.5" strokeDasharray="3 3" />
            <path d="M 520 190 C 600 180, 680 150, 770 155" stroke="#E7E6E0" strokeWidth="1.5" />
            <path d="M 520 230 C 600 240, 680 270, 770 265" stroke="#E7E6E0" strokeWidth="1.5" />
            <path d="M 500 250 C 580 270, 680 330, 740 335" stroke="#E7E6E0" strokeWidth="1.5" strokeDasharray="3 3" />
          </svg>
        </div>

        {/* LEFT NODES COLUMN */}
        <div className="hidden sm:flex flex-col justify-between h-[300px] absolute left-4 md:left-12 z-10">
          {leftNodes.map((node) => (
            <div
              key={node.id}
              className="flex items-center gap-3 transition-transform duration-200 hover:scale-105"
            >
              <div className="w-12 h-12 rounded-full bg-white border border-border shadow-card flex items-center justify-center p-1.5">
                {node.icon}
              </div>
              <span className="text-xs font-semibold text-ink bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md border border-border shadow-2xs">
                {node.label}
              </span>
            </div>
          ))}
        </div>

        {/* CENTER HUB TILE in Ink with leather texture accent & FinexaaMark */}
        <div className="relative z-20 w-[200px] h-[140px] sm:w-[220px] sm:h-[150px] rounded-2xl overflow-hidden shadow-card-hover border-2 border-white flex flex-col justify-between p-4 transition-transform duration-200 hover:scale-102">
          {/* Deep Ink background */}
          <div className="absolute inset-0 bg-[#172A25]" />
          
          {/* Subtle leather grain & stitch lines */}
          <svg className="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 200 140" fill="none">
            <line x1="10" y1="130" x2="190" y2="130" stroke="#C5A77A" strokeWidth="1.5" strokeDasharray="3 2" />
            <path d="M 0 50 Q 50 40, 100 55 T 200 45" stroke="#EFE6D6" strokeWidth="1" strokeDasharray="2 3" />
          </svg>

          {/* Wordmark at top */}
          <div className="relative z-10 flex items-center justify-center pt-2">
            <span className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
              Finexaa
            </span>
          </div>

          {/* FinexaaMark at bottom base */}
          <div className="relative z-10 flex justify-center pb-1">
            <div className="bg-white/10 backdrop-blur-xs p-1.5 rounded-full border border-white/20">
              <FinexaaMark size={20} stemColor="#FFFFFF" stitchColor="#C5A77A" />
            </div>
          </div>
        </div>

        {/* RIGHT NODES COLUMN */}
        <div className="hidden sm:flex flex-col justify-between h-[300px] absolute right-4 md:right-12 z-10">
          {rightNodes.map((node) => (
            <div
              key={node.id}
              className="flex items-center flex-row-reverse gap-3 transition-transform duration-200 hover:scale-105"
            >
              <div className="w-12 h-12 rounded-full bg-white border border-border shadow-card flex items-center justify-center p-1.5">
                {node.icon}
              </div>
              <span className="text-xs font-semibold text-ink bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md border border-border shadow-2xs">
                {node.label}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* MOBILE COMPACT NODES GRID */}
      <div className="sm:hidden mt-8 grid grid-cols-4 gap-2.5 max-w-sm mx-auto">
        {[...leftNodes, ...rightNodes].map((node) => (
          <div key={node.id} className="flex flex-col items-center gap-1.5 p-2 bg-white rounded-xl border border-border shadow-2xs text-center">
            <div className="w-9 h-9 rounded-full bg-surface-soft border border-border flex items-center justify-center">
              {node.icon}
            </div>
            <span className="text-[10px] font-medium text-ink truncate max-w-[64px]">
              {node.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
