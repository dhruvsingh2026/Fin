export interface PricingPlan {
  name: string;
  badge?: string;
  feeNote: string;
  price: {
    monthly: { amount: string; original?: string; period: string };
    annual: { amount: string; original?: string; period: string };
  };
  description: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  isPopular?: boolean;
}

export interface PricingConfig {
  headline: string;
  subheadline: string;
  annualDiscountBadge: string;
  plans: {
    growth: PricingPlan;
    enterprise: PricingPlan;
  };
}

export const pricingConfig: PricingConfig = {
  headline: 'Pricing that pays for itself',
  subheadline: 'Everything you need to convert more and lose less.',
  annualDiscountBadge: '-25%',
  plans: {
    growth: {
      name: 'Growth',
      feeNote: '1% fee per transaction',
      price: {
        monthly: {
          amount: '$199',
          original: '$249',
          period: 'per month, billed monthly',
        },
        annual: {
          amount: '$149',
          original: '$199',
          period: 'per month, billed annually',
        },
      },
      description: 'For modern and scaling e-commerce businesses ready to unlock maximum authorization rates.',
      features: [
        'Smart failover routing',
        'Upsells, downsells & order bumps',
        'Subscription & recurring billing',
        '400+ payment methods supported',
        'Real-time analytics dashboard',
        'Built-in machine learning fraud protection',
        'Shopify, WooCommerce, Webflow integrations',
        'Custom white-label domain checkout',
        'A/B split testing engine',
        'Standard 24/7 priority support',
      ],
      ctaText: 'Get Started',
      ctaHref: '#contact',
      isPopular: true,
    },
    enterprise: {
      name: 'Enterprise',
      feeNote: 'Fee rate based on volume',
      price: {
        monthly: {
          amount: 'Custom',
          period: 'custom invoicing tailored to volume',
        },
        annual: {
          amount: 'Custom',
          period: 'custom annual contract & volume tiers',
        },
      },
      description: 'For high-growth merchants doing over $5M/month in global transaction volume.',
      features: [
        'Everything in Growth plan',
        'Significantly lower fee per transaction',
        'Dedicated account director & payment engineer',
        'Custom multi-acquirer routing contracts',
        'Guaranteed 99.999% SLA uptime agreement',
        'Direct interchange++ transparent pass-through',
      ],
      ctaText: 'Contact Sales',
      ctaHref: '#contact',
      isPopular: false,
    },
  },
};
