export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  bullets: string[];
  mockData: {
    accentColor: string;
    headline: string;
    badgeText: string;
    primaryMethod: string;
    secondaryMethod: string;
    tertiaryMethod: string;
    deviceCaption: string;
  };
}

export const checkoutServices: ServiceItem[] = [
  {
    id: 'online-payments',
    title: 'Online Payments',
    shortDescription: 'Accept cards, wallets, and alternative payment methods globally with zero friction.',
    bullets: [
      'Accept cards, wallets, and alternative payment methods.',
      'Smart routing for higher approval rates across 180+ countries.',
      'PCI-compliant tokenization and automated fee optimization.',
    ],
    mockData: {
      accentColor: '#397AF4',
      headline: 'Multi-Rail Payment Gateway',
      badgeText: '99.99% Routing Uptime',
      primaryMethod: 'Apple Pay',
      secondaryMethod: 'Google Pay',
      tertiaryMethod: 'Klarna',
      deviceCaption: 'Universal 1-click payment sheet with local currency detection.',
    },
  },
  {
    id: 'checkout-flow',
    title: 'Checkout Flow',
    shortDescription: 'Frictionless, branded checkout experiences designed to lift cart conversion.',
    bullets: [
      'Pre-filled customer address details & instant wallet recognition.',
      'Custom color themes, logos, and custom domain white-labeling.',
      'Full compatibility with headless commerce and static storefronts.',
    ],
    mockData: {
      accentColor: '#10B981',
      headline: 'Branded Dynamic Checkout',
      badgeText: '2.4s Faster Checkout',
      primaryMethod: 'Shop Pay',
      secondaryMethod: 'Apple Pay',
      tertiaryMethod: 'Credit Card',
      deviceCaption: 'Custom styled accordion checkout with inline field validation.',
    },
  },
  {
    id: 'orchestration-engine',
    title: 'Orchestration Engine',
    shortDescription: 'Intelligent multi-processor routing, failover recovery, and lowest fee selection.',
    bullets: [
      'Zero-latency cascading failover if primary gateway reports error.',
      'Dynamic routing based on currency, BIN country, and transaction risk.',
      'Real-time load balancing to prevent processor rate-limiting.',
    ],
    mockData: {
      accentColor: '#6366F1',
      headline: 'Intelligent Gateway Dispatcher',
      badgeText: '+18.4% Net Authorizations',
      primaryMethod: 'Adyen Routing',
      secondaryMethod: 'Stripe Direct',
      tertiaryMethod: 'Checkout.com',
      deviceCaption: 'Real-time rule engine directing transactions to optimal rails.',
    },
  },
  {
    id: 'fraud-and-risk',
    title: 'Fraud and Risk',
    shortDescription: 'Deep behavioural machine-learning intelligence that blocks fraud without rejecting real buyers.',
    bullets: [
      'Dynamic 3D Secure 2 step-up authentication only when necessary.',
      'Device fingerprinting and velocity tracking across merchant networks.',
      'Configurable risk thresholds per product category and region.',
    ],
    mockData: {
      accentColor: '#EF4444',
      headline: 'Predictive Fraud Shield',
      badgeText: '0.04% Chargeback Rate',
      primaryMethod: 'Verified 3DS2',
      secondaryMethod: 'Risk Score: 12 (Low)',
      tertiaryMethod: 'Tokenized ID',
      deviceCaption: 'Zero-friction validation for trusted shoppers, strict blocks for bad actors.',
    },
  },
  {
    id: 'chargeback-management',
    title: 'Chargeback Management',
    shortDescription: 'Automated evidence compilation and instant representment to win disputes back.',
    bullets: [
      'Automatic compilation of shipping tracking, IP logs, and order histories.',
      'Direct integration with Visa Compelling Evidence 3.0 and Mastercard dispute APIs.',
      'Over 74% dispute win rate across standard merchant categories.',
    ],
    mockData: {
      accentColor: '#F59E0B',
      headline: 'Automated Dispute Recovery',
      badgeText: '74.2% Dispute Win Rate',
      primaryMethod: 'Evidence Pack',
      secondaryMethod: 'Instant Filing',
      tertiaryMethod: 'Visa CE 3.0',
      deviceCaption: 'Dispute packages generated and submitted automatically within 2 hours.',
    },
  },
  {
    id: 'customer-insights',
    title: 'Customer Insights',
    shortDescription: 'Granular analytics revealing cohort lifetime value, drop-off triggers, and processor fees.',
    bullets: [
      'Visual checkout funnels highlighting exact drop-off points.',
      'Interchange fee analysis to uncover processor overcharging.',
      'Customer lifetime value tracking segmented by initial payment method.',
    ],
    mockData: {
      accentColor: '#8B5CF6',
      headline: 'Full-Funnel Commerce Telemetry',
      badgeText: 'Real-time Cohorts',
      primaryMethod: 'Funnel Audit',
      secondaryMethod: 'Cohort LTV',
      tertiaryMethod: 'Interchange Breakdown',
      deviceCaption: 'Actionable performance dashboards designed for high-scale operators.',
    },
  },
];
