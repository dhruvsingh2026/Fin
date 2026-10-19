export interface AudienceCardData {
  id: string;
  title: string;
  categoryBadge: string;
  description: string;
  benefits: string[];
  ctaLabel: string;
  ctaHref: string;
  isLinenTheme?: boolean;
}

export interface AudiencesConfig {
  headline: string;
  subheadline: string;
  cards: AudienceCardData[];
  /*
   * EXTENSION POINT:
   * When commercial pricing tiers or commission models are formally agreed,
   * configure pricing fields here:
   *
   * pricingTiers?: {
   *   name: string;
   *   membershipFee?: string;
   *   serviceFee?: string;
   * }[];
   */
}

export const audiencesConfig: AudiencesConfig = {
  headline: 'Built for both sides of trade.',
  subheadline: 'Connecting specialty retailers and retail buyers with dedicated fashion makers and craft workshops.',
  cards: [
    {
      id: 'buyers',
      title: 'Buyers and Retailers',
      categoryBadge: 'Retail & Sourcing',
      description:
        'For independent boutique owners, retail merchandisers, and wholesale buyers looking to source distinctive footwear and leather goods.',
      benefits: [
        'Curate unique styles across European and international craft hubs',
        'Explore indicative wholesale volume brackets without hidden barriers',
        'Directly submit bespoke enquiries for custom colors and finishes',
        'Organize seasonal line sheets and collection candidate lists',
        'Connect directly with verified manufacturing workshops',
      ],
      ctaLabel: 'Send an enquiry',
      ctaHref: '#contact',
      isLinenTheme: true,
    },
    {
      id: 'suppliers',
      title: 'Suppliers and Sellers',
      categoryBadge: 'Makers & Workshops',
      description:
        'For artisan workshops, established footwear factories, and leather-goods producers looking to reach motivated commercial buyers.',
      benefits: [
        'Showcase workshop capabilities, artisanal materials, and line collections',
        'Receive qualified, direct trade enquiries from prospective stockists',
        'Negotiate minimum-order quantities and bespoke production runs',
        'Maintain direct client relationships and brand identity',
        'Expand distribution into new retail territories and markets',
      ],
      ctaLabel: 'Send an enquiry',
      ctaHref: '#contact',
      isLinenTheme: false,
    },
  ],
};
