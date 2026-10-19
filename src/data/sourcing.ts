export interface SourcingStage {
  id: string;
  title: string;
  shortDescription: string;
  bullets: string[];
  mockData: {
    headline: string;
    sublabel: string;
    itemTitle: string;
    itemDetails: string;
    categoryTag: string;
    actionLabel: string;
  };
}

export const sourcingStages: SourcingStage[] = [
  {
    id: 'discover-products',
    title: 'Discover Products',
    shortDescription:
      'Search through curated sample listings across footwear, leather accessories, and apparel.',
    bullets: [
      'Filter by category, construction welt, and hide type.',
      'Review indicative minimum-order quantities and wholesale brackets.',
      'Save candidate lines into seasonal sourcing boards.',
    ],
    mockData: {
      headline: 'Product Sourcing Feed',
      sublabel: 'Illustrative Sample Range',
      itemTitle: 'Burnished Penny Loafer',
      itemDetails: 'Box calf · Goodyear welted · Northampton, UK',
      categoryTag: 'Footwear',
      actionLabel: 'View Product Details',
    },
  },
  {
    id: 'explore-suppliers',
    title: 'Explore Suppliers',
    shortDescription:
      'Connect with independent workshops, historic tanneries, and specialized leather-goods makers.',
    bullets: [
      'Browse maker profiles by manufacturing region and material specialty.',
      'Review artisan capabilities, production capacity, and lead times.',
      'Direct communication channel for custom trade specifications.',
    ],
    mockData: {
      headline: 'Artisan Workshop Profile',
      sublabel: 'Illustrative Maker Profile',
      itemTitle: 'Atelier Toscana',
      itemDetails: 'Specialty: Vegetable-tanned bags & bridle belts · Florence',
      categoryTag: 'Leather Workshop',
      actionLabel: 'Explore Supplier Line',
    },
  },
  {
    id: 'compare-collections',
    title: 'Compare Collections',
    shortDescription:
      'Evaluate complementary styles and seasonal color stories before finalizing assortment choices.',
    bullets: [
      'Side-by-side comparison of materials, hardware, and stitching styles.',
      'Assortment planning across multi-category leather suites.',
      'Consolidate sample requests into unified enquiry packs.',
    ],
    mockData: {
      headline: 'Seasonal Assortment Suite',
      sublabel: 'Curated Collection Mock',
      itemTitle: 'Autumn Earth Tones Collection',
      itemDetails: '8 Coordinated styles: Loafers, Totes, Bridle Belts',
      categoryTag: 'Capsule Suite',
      actionLabel: 'Review Collection',
    },
  },
  {
    id: 'review-details',
    title: 'Review Product Details',
    shortDescription:
      'Inspect comprehensive design breakdowns, leather grades, hardware alloys, and packaging options.',
    bullets: [
      'High-resolution silhouette and cross-section material reviews.',
      'Sizing runs, carton pack sizes, and custom branding options.',
      'Indicative pricing matrices based on volume tiers.',
    ],
    mockData: {
      headline: 'Detailed Product Specification',
      sublabel: 'Technical Specification',
      itemTitle: 'Full-Grain Bifold Wallet',
      itemDetails: '6 Card slots · Saddle-stitched edge · Vegetable-tanned',
      categoryTag: 'Small Leather Goods',
      actionLabel: 'Request Swatches',
    },
  },
  {
    id: 'send-enquiry',
    title: 'Send an Enquiry',
    shortDescription:
      'Initiate direct communication with makers regarding pricing, bespoke adjustments, and sample delivery.',
    bullets: [
      'Tailored enquiry builder with target units, destination, and notes.',
      'Direct dialogue with makers and distributors without intermediaries.',
      'Terms, sample delivery, and pricing finalized per enquiry.',
    ],
    mockData: {
      headline: 'Trading Enquiry Dispatch',
      sublabel: 'Direct Maker Communication',
      itemTitle: 'Custom Wholesale Enquiry',
      itemDetails: 'Target MOQ: 50 units · Custom embossed stamp request',
      categoryTag: 'Trade Request',
      actionLabel: 'Send Enquiry',
    },
  },
  {
    id: 'manage-opportunities',
    title: 'Manage Opportunities',
    shortDescription:
      'Keep track of open conversations, received line sheets, and ongoing seasonal relationships.',
    bullets: [
      'Centralized communication overview for retail buyers and distributors.',
      'Organized catalog of supplier responses and agreed terms.',
      'Establish lasting long-term partnerships with trusted fashion producers.',
    ],
    mockData: {
      headline: 'Partnership Overview',
      sublabel: 'Ongoing Sourcing Dialogues',
      itemTitle: 'Active Maker Conversations',
      itemDetails: '3 Suppliers contacted · Awaiting line sheet updates',
      categoryTag: 'Relationship Log',
      actionLabel: 'Review Enquiries',
    },
  },
];
