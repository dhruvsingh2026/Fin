/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { PaymentPartnerStrip } from './components/PaymentPartnerStrip.tsx';
import { FeatureGrid } from './components/FeatureGrid.tsx';
import { VolumeScaling } from './components/VolumeScaling.tsx';
import { PaymentNetworkDiagram } from './components/PaymentNetworkDiagram.tsx';
import { CheckoutService } from './components/CheckoutService.tsx';
import { Pricing } from './components/Pricing.tsx';
import { FAQ } from './components/FAQ.tsx';
import { Workflow } from './components/Workflow.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#16223B] flex flex-col font-sans selection:bg-[#397AF4] selection:text-white">
      {/* Accessible Skip-to-content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#397AF4] focus:text-white focus:rounded-md focus:shadow-md focus:outline-none"
      >
        Skip to main content
      </a>

      {/* 6.1 Header (normal flow, NOT sticky, clean white) */}
      <Header />

      {/* Main Content Landmark */}
      <main id="main-content" className="flex-1">
        {/* 6.2 Hero */}
        <Hero />

        {/* 6.3 Payment-provider strip */}
        <PaymentPartnerStrip />

        {/* 6.4 Feature grid (asymmetric) */}
        <FeatureGrid />

        {/* 6.5 "Send volume. We can handle it." */}
        <VolumeScaling />

        {/* 6.6 "No transaction left behind." network diagram */}
        <PaymentNetworkDiagram />

        {/* 6.7 Checkout as a Service (full-width pale-blue band) */}
        <CheckoutService />

        {/* 6.8 Pricing that pays for itself */}
        <Pricing />

        {/* 6.9 FAQ ("You have questions, / we have answers.") */}
        <FAQ />

        {/* 6.10 "Sync." onboarding */}
        <Workflow />
      </main>

      {/* 6.11 Footer (Upper contact form + columns, Lower alpine mountain art + oversized wordmark) */}
      <Footer />
    </div>
  );
}
