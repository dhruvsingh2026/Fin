import { ChipIconType } from '../components/InlineIconChip.tsx';

export interface FeaturedDiscovery {
  chipIcon: ChipIconType;
  titleLead: string;
  titleTail: string;
  description: string;
}

export const marketplaceFeatures = {
  mainDiscovery: {
    chipIcon: 'bag' as ChipIconType,
    titleLead: 'Discover',
    titleTail: 'the pieces you trade.',
    description:
      'Explore sample listings across footwear, leather goods, bags and apparel. Connect directly with sellers through targeted sourcing enquiries.',
  },
  categoryOverview: {
    chipIcon: 'search' as ChipIconType,
    titleLead: 'Browse',
    titleTail: 'every category.',
    description:
      'Curate sourcing requirements by category, construction type, and core leather materials.',
    categories: [
      { name: 'Leather Shoes & Loafers', tag: 'Footwear' },
      { name: 'Low-Top & Cupsole Sneakers', tag: 'Footwear' },
      { name: 'Trapeze & Structured Handbags', tag: 'Leather Goods' },
      { name: 'Bifold Wallets & Cardholders', tag: 'Accessories' },
      { name: 'Bridle & Vegetable-Tanned Belts', tag: 'Accessories' },
      { name: 'Tailored Suede & Leather Apparel', tag: 'Apparel' },
    ],
  },
  bottomRow: [
    {
      id: 'styles',
      chipIcon: 'footwear' as ChipIconType,
      titleLead: 'Discover',
      titleTail: 'styles.',
      description: 'Review silhouettes and finishing details across multiple product families.',
      items: [
        { name: 'Burnished Penny Loafer', tag: 'Footwear', artKey: 'loafer' as const },
        { name: 'Low-Top Cupsole Sneaker', tag: 'Footwear', artKey: 'sneaker' as const },
        { name: 'Tailored Suede Overshirt', tag: 'Apparel', artKey: 'apparel' as const },
      ],
    },
    {
      id: 'suppliers',
      chipIcon: 'handshake' as ChipIconType,
      titleLead: 'Find',
      titleTail: 'suppliers.',
      description: 'Explore verified maker profiles and regional atelier hubs producing fine goods.',
      supplierSamples: [
        { name: 'Atelier Toscana', region: 'Tuscany, Italy', focus: 'Handcrafted Handbags & Totes' },
        { name: 'Norte Footwear Lab', region: 'Porto, Portugal', focus: 'Goodyear Welted & Sneakers' },
        { name: 'Ubrique Leather Studio', region: 'Ubrique, Spain', focus: 'Small Leather Goods & Belts' },
      ],
    },
    {
      id: 'collections',
      chipIcon: 'layers' as ChipIconType,
      titleLead: 'Organise',
      titleTail: 'collections.',
      description: 'Group candidate items into seasonal merchandising collections before sending enquiries.',
      collectionSample: {
        title: 'Autumn Leather Curation',
        itemCount: '12 sample styles',
        materials: 'Calfskin, Bridle, Suede',
        status: 'Sample Collection',
      },
    },
  ],
};
