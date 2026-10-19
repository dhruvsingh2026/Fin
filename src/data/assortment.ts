export interface AssortmentCard {
  id: string;
  title: string;
  description: string;
  materialStyle: 'leather-grain' | 'linen-weave' | 'suede-brown';
  productType: 'loafer' | 'wallet' | 'apparel';
  illustrativeTag: string;
}

export const assortmentCards: AssortmentCard[] = [
  {
    id: 'shoes',
    title: 'A broader assortment',
    description:
      'Explore handcrafted loafers, oxfords, and classic formal footwear made with premium calfskins and durable welting.',
    materialStyle: 'leather-grain',
    productType: 'loafer',
    illustrativeTag: 'Footwear Collection · Sample',
  },
  {
    id: 'leather-goods',
    title: 'Materials and styles',
    description:
      'Curate fine leather goods including bifold wallets, cardholders, and belts constructed from vegetable-tanned hides.',
    materialStyle: 'suede-brown',
    productType: 'wallet',
    illustrativeTag: 'Leather Goods · Sample',
  },
  {
    id: 'apparel',
    title: 'Relevant to your business',
    description:
      'Source tailored leather overshirts and suede outerwear designed for contemporary retail assortments.',
    materialStyle: 'linen-weave',
    productType: 'apparel',
    illustrativeTag: 'Outerwear & Apparel · Sample',
  },
];
