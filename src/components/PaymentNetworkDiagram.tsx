import React from 'react';
import { SectionHeading } from './SectionHeading.tsx';
import { CactusMark } from './Logo.tsx';

interface HubNode {
  id: string;
  label: string;
  color: string;
  icon: React.ReactNode;
  side: 'left' | 'right';
  yOffset: number; // relative placement in arc
}

export const PaymentNetworkDiagram: React.FC = () => {
  // Left nodes
  const leftNodes = [
    {
      id: 'klarna',
      label: 'Klarna',
      icon: (
        <span className="font-bold text-[10px] text-black bg-[#FFB3C7] px-1 py-0.5 rounded">
          K.
        </span>
      ),
      yOffset: -70,
    },
    {
      id: 'gpay',
      label: 'Google Pay',
      icon: <span className="font-bold text-xs text-[#4285F4]">G</span>,
      yOffset: -25,
    },
    {
      id: 'applepay',
      label: 'Apple Pay',
      icon: <span className="font-bold text-xs text-white bg-black px-1.5 py-0.5 rounded-full"></span>,
      yOffset: 25,
    },
    {
      id: 'paypal',
      label: 'PayPal',
      icon: <span className="font-bold text-xs text-[#003087]">P</span>,
      yOffset: 70,
    },
  ];

  // Right nodes
  const rightNodes = [
    {
      id: 'adyen',
      label: 'Adyen',
      icon: (
        <span className="font-bold text-[10px] text-white bg-[#0ABF53] px-1 py-0.5 rounded">
          Ad
        </span>
      ),
      yOffset: -70,
    },
    {
      id: 'shopify',
      label: 'Shop Pay',
      icon: <span className="font-bold text-xs text-white bg-[#5A31F4] px-1.5 py-0.5 rounded">S</span>,
      yOffset: -25,
    },
    {
      id: 'stripe',
      label: 'Stripe',
      icon: <span className="font-bold text-xs text-white bg-[#635BFF] px-1.5 py-0.5 rounded">S</span>,
      yOffset: 25,
    },
    {
      id: 'mastercard',
      label: 'Mastercard',
      icon: (
        <div className="flex -space-x-1">
          <div className="w-2.5 h-2.5 rounded-full bg-[#EB001B]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#F79E1B]" />
        </div>
      ),
      yOffset: 70,
    },
  ];

  return (
    <section id="orchestration" className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 mb-24 md:mb-32">
      {/* Centered Heading & Subtitle */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#16223B]">
          No transaction left behind.
        </h2>
        <p className="mt-4 text-xs sm:text-sm text-[#69758A] leading-relaxed balance">
          With hundreds of payment methods available, Lasso facilitates smart routing for every transaction based on customizable rules. Using the right payment services provider at the right time increases your approval percentage and ensures you capture every sale possible.
        </p>
      </div>

      {/* Hub-and-Spoke Diagram Container */}
      <div className="relative w-full max-w-[900px] mx-auto min-h-[380px] sm:min-h-[420px] flex items-center justify-center">
        
        {/* DESKTOP / TABLET SVG CONNECTORS (hidden on mobile) */}
        <div className="hidden sm:block absolute inset-0 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 900 420" fill="none">
            {/* Center hub is at x: 450, y: 210, width ~200, height ~140 */}
            
            {/* Left curved connectors */}
            <path d="M 400 170 C 320 150, 220 90, 160 85" stroke="#D5DFEC" strokeWidth="1.5" strokeDasharray="3 3" />
            <path d="M 380 190 C 300 180, 220 150, 130 155" stroke="#D5DFEC" strokeWidth="1.5" />
            <path d="M 380 230 C 300 240, 220 270, 130 265" stroke="#D5DFEC" strokeWidth="1.5" />
            <path d="M 400 250 C 320 270, 220 330, 160 335" stroke="#D5DFEC" strokeWidth="1.5" strokeDasharray="3 3" />

            {/* Right curved connectors */}
            <path d="M 500 170 C 580 150, 680 90, 740 85" stroke="#D5DFEC" strokeWidth="1.5" strokeDasharray="3 3" />
            <path d="M 520 190 C 600 180, 680 150, 770 155" stroke="#D5DFEC" strokeWidth="1.5" />
            <path d="M 520 230 C 600 240, 680 270, 770 265" stroke="#D5DFEC" strokeWidth="1.5" />
            <path d="M 500 250 C 580 270, 680 330, 740 335" stroke="#D5DFEC" strokeWidth="1.5" strokeDasharray="3 3" />
          </svg>
        </div>

        {/* LEFT NODES COLUMN (Desktop/Tablet) */}
        <div className="hidden sm:flex flex-col justify-between h-[300px] absolute left-4 md:left-12 z-10">
          {leftNodes.map((node) => (
            <div
              key={node.id}
              className="flex items-center gap-3 transition-transform duration-200 hover:scale-105"
            >
              <div className="w-12 h-12 rounded-full bg-white border border-[#E6ECF4] shadow-lasso-card flex items-center justify-center p-1.5">
                {node.icon}
              </div>
              <span className="text-xs font-semibold text-[#16223B] bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-md border border-[#E6ECF4] shadow-2xs">
                {node.label}
              </span>
            </div>
          ))}
        </div>

        {/* CENTER HUB TILE (~200x140px blue tile with wave art & cactus) */}
        <div className="relative z-20 w-[200px] h-[140px] sm:w-[220px] sm:h-[150px] rounded-2xl overflow-hidden shadow-lasso-hover border-2 border-white flex flex-col justify-between p-4 transition-transform duration-200 hover:scale-102">
          {/* Deep blue ocean gradient base */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#397AF4] via-[#2463D6] to-[#16449C]" />
          
          {/* Subtle wave ripples */}
          <svg className="absolute inset-0 w-full h-full opacity-35" viewBox="0 0 200 140" fill="none">
            <path d="M -10 60 Q 40 40, 100 65 T 210 50 L 210 140 L -10 140 Z" fill="#FFFFFF" />
            <path d="M -10 90 Q 50 70, 110 95 T 210 80" stroke="#FFFFFF" strokeWidth="2" />
          </svg>

          {/* Wordmark at top */}
          <div className="relative z-10 flex items-center justify-center pt-2">
            <span className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight lowercase">
              lasso
            </span>
          </div>

          {/* Cactus mark at bottom base */}
          <div className="relative z-10 flex justify-center pb-1">
            <div className="bg-white/20 backdrop-blur-xs p-1.5 rounded-full border border-white/30">
              <CactusMark size={20} color="#FFFFFF" />
            </div>
          </div>
        </div>

        {/* RIGHT NODES COLUMN (Desktop/Tablet) */}
        <div className="hidden sm:flex flex-col justify-between h-[300px] absolute right-4 md:right-12 z-10">
          {rightNodes.map((node) => (
            <div
              key={node.id}
              className="flex items-center flex-row-reverse gap-3 transition-transform duration-200 hover:scale-105"
            >
              <div className="w-12 h-12 rounded-full bg-white border border-[#E6ECF4] shadow-lasso-card flex items-center justify-center p-1.5">
                {node.icon}
              </div>
              <span className="text-xs font-semibold text-[#16223B] bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-md border border-[#E6ECF4] shadow-2xs">
                {node.label}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* MOBILE COMPACT NODES GRID (below 640px) */}
      <div className="sm:hidden mt-8 grid grid-cols-4 gap-3 max-w-sm mx-auto">
        {[...leftNodes, ...rightNodes].map((node) => (
          <div key={node.id} className="flex flex-col items-center gap-1.5 p-2 bg-white rounded-xl border border-[#E6ECF4] shadow-2xs">
            <div className="w-9 h-9 rounded-full bg-[#FAFBFD] border border-[#E6ECF4] flex items-center justify-center">
              {node.icon}
            </div>
            <span className="text-[10px] font-medium text-[#16223B] truncate max-w-[64px]">
              {node.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
