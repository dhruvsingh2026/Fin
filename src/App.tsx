/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { CategoryStrip } from './components/CategoryStrip.tsx';
import { FeatureGrid } from './components/FeatureGrid.tsx';
import { AssortmentShowcase } from './components/AssortmentShowcase.tsx';
import { TradeNetworkDiagram } from './components/TradeNetworkDiagram.tsx';
import { SourcingWorkflow } from './components/SourcingWorkflow.tsx';
import { Audiences } from './components/Audiences.tsx';
import { FAQ } from './components/FAQ.tsx';
import { Workflow } from './components/Workflow.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-white text-ink flex flex-col font-sans selection:bg-ink selection:text-white">
      {/* Accessible Skip-to-content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-ink focus:text-white focus:rounded-md focus:shadow-md focus:outline-none"
      >
        Skip to main content
      </a>

      {/* 1. Header (normal flow, non-sticky, clean white) */}
      <Header />

      {/* Main Content Landmark */}
      <main id="main-content" className="flex-1">
        {/* 2. Hero */}
        <Hero />

        {/* 3. Category Strip */}
        <CategoryStrip />

        {/* 4. Feature Grid (Marketplace Discovery) */}
        <FeatureGrid />

        {/* 5. Assortment Showcase (Every category, one marketplace) */}
        <AssortmentShowcase />

        {/* 6. Trade Network Diagram */}
        <TradeNetworkDiagram />

        {/* 7. Sourcing Workflow (From discovery to trade) */}
        <SourcingWorkflow />

        {/* 8. Audiences (Built for both sides of trade) */}
        <Audiences />

        {/* 9. FAQ */}
        <FAQ />

        {/* 10. How Finexaa Works */}
        <Workflow />
      </main>

      {/* 11. Footer (Enquiry form + Material still life with cropped Finexaa wordmark) */}
      <Footer />
    </div>
  );
}
