export interface CategoryLink {
  id: string;
  name: string;
  href: string;
  iconName: 'shoe' | 'sneaker' | 'bag' | 'shirt' | 'wallet' | 'collection';
}

export const categoryLinks: CategoryLink[] = [
  { id: 'shoes', name: 'Leather Shoes', href: '#marketplace', iconName: 'shoe' },
  { id: 'sneakers', name: 'Sneakers', href: '#marketplace', iconName: 'sneaker' },
  { id: 'handbags', name: 'Handbags', href: '#marketplace', iconName: 'bag' },
  { id: 'apparel', name: 'Apparel', href: '#marketplace', iconName: 'shirt' },
  { id: 'accessories', name: 'Wallets & Belts', href: '#marketplace', iconName: 'wallet' },
  { id: 'collections', name: 'Wholesale Collections', href: '#marketplace', iconName: 'collection' },
];
