export interface ProductItem {
  id: string;
  name: string;
  category: string;
  material: string;
  artKey: 'handbag' | 'sneaker' | 'loafer' | 'wallet' | 'belt' | 'apparel';
  imageSrc?: string;
  alt: string;
  indicativePrice: string;
  indicativeMoq?: string;
  origin?: string;
  tag: string;
}

export const sampleProducts: ProductItem[] = [
  {
    id: 'prod-tote',
    name: 'Saddle Leather Trapeze Tote',
    category: 'Handbags',
    material: 'Full-Grain Calfskin & Solid Brass',
    artKey: 'handbag',
    alt: 'Sample listing of saddle leather trapeze tote bag with brass hardware',
    indicativePrice: '$185 / unit',
    indicativeMoq: 'MOQ 25 units (Illustrative)',
    origin: 'Tuscany, Italy',
    tag: 'Handbags',
  },
  {
    id: 'prod-sneaker',
    name: 'Low-Top Cupsole Sneaker',
    category: 'Sneakers',
    material: 'Vachetta & Milled Nappa',
    artKey: 'sneaker',
    alt: 'Sample listing of minimalist low-top leather sneaker',
    indicativePrice: '$78 / pair',
    indicativeMoq: 'MOQ 50 pairs (Illustrative)',
    origin: 'Porto, Portugal',
    tag: 'Footwear',
  },
  {
    id: 'prod-loafer',
    name: 'Burnished Penny Loafer',
    category: 'Leather Shoes',
    material: 'Box Calf & Goodyear Welted Leather',
    artKey: 'loafer',
    alt: 'Sample listing of handcrafted burnished leather penny loafer',
    indicativePrice: '$110 / pair',
    indicativeMoq: 'MOQ 30 pairs (Illustrative)',
    origin: 'Northamptonshire, UK',
    tag: 'Footwear',
  },
  {
    id: 'prod-wallet',
    name: 'Bifold Gusset Cardholder',
    category: 'Wallets & Small Goods',
    material: 'Vegetable-Tanned Saddle Leather',
    artKey: 'wallet',
    alt: 'Sample listing of full-grain bifold leather wallet',
    indicativePrice: '$32 / unit',
    indicativeMoq: 'MOQ 100 units (Illustrative)',
    origin: 'León, Mexico',
    tag: 'Accessories',
  },
  {
    id: 'prod-belt',
    name: 'Burnished Bridle Belt',
    category: 'Belts',
    material: 'English Bridle & Sand-Cast Brass',
    artKey: 'belt',
    alt: 'Sample listing of vegetable-tanned bridle leather belt',
    indicativePrice: '$28 / unit',
    indicativeMoq: 'MOQ 50 units (Illustrative)',
    origin: 'Ubrique, Spain',
    tag: 'Accessories',
  },
  {
    id: 'prod-apparel',
    name: 'Tailored Suede Overshirt',
    category: 'Apparel',
    material: 'Velvety Goat Suede & Horn Buttons',
    artKey: 'apparel',
    alt: 'Sample listing of tailored suede leather overshirt jacket',
    indicativePrice: '$240 / unit',
    indicativeMoq: 'MOQ 20 units (Illustrative)',
    origin: 'Florence, Italy',
    tag: 'Apparel',
  },
];
