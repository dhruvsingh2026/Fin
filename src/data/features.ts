export interface FeatureData {
  id: string;
  chipIcon: 'card' | 'chart' | 'analytics' | 'shield' | 'cart';
  titleLead: string;
  titleTail: string;
  description: string;
}

export const featureGridData = {
  checkoutCard: {
    chipIcon: 'card' as const,
    titleLead: 'Checkout',
    titleTail: 'your way. Boost your profit margin.',
    description: 'Customize your cart and checkout flow to match your brand and boost conversions across every sales channel.',
  },
  conversionCard: {
    chipIcon: 'chart' as const,
    titleLead: 'Scale',
    titleTail: 'without limits.',
    description: 'Route payments across multiple providers as you grow with automated volume balancing and instant failover.',
    metric: '7.35%',
    changeTag: '+1.62%',
    sublabel: 'Checkout Conversion Rate',
  },
  bottomRow: [
    {
      id: 'insights',
      chipIcon: 'analytics' as const,
      titleLead: 'Grow',
      titleTail: 'revenue with insights.',
      description: 'Advanced sales insights and funnel metrics to see exactly where customers convert or fall off.',
      metrics: [
        { label: 'Visitors', value: '937' },
        { label: 'Conversion', value: '95.43%' },
      ],
    },
    {
      id: 'protection',
      chipIcon: 'shield' as const,
      titleLead: 'Protect',
      titleTail: 'revenue from any threat.',
      description: 'Real-time AI fraud detection and automatic chargeback mitigation built into every checkout step.',
      orders: [
        { id: '#4821', item: 'Nike Blazer Mid', status: 'verified', amount: '$110.00' },
        { id: '#4822', item: 'Yeti Rambler 26oz', status: 'verified', amount: '$35.00' },
        { id: '#4823', item: 'MacBook Air M3', status: 'flagged', amount: '$1,299.00' },
      ],
    },
    {
      id: 'upsell',
      chipIcon: 'cart' as const,
      titleLead: 'Earn',
      titleTail: 'more from every sale.',
      description: 'Add one-click upsells, order bumps, and flexible subscriptions to any e-commerce builder seamlessly.',
      cartItem: { name: 'Knee Brace Pro', price: '$49.00', quantity: 1 },
      bumpItem: { name: 'Matching Compression Sleeve', price: '$19.00', discount: 'Save 30%' },
    },
  ],
};
