export interface FooterColumn {
  title: string;
  links: { label: string; href: string; isExternal?: boolean }[];
}

export const footerData = {
  brandDescription:
    'Finexaa is a curated B2B fashion and leather-goods trading marketplace connecting independent retailers, boutique merchandisers, and wholesale buyers with dedicated European and global craft producers.',
  columns: [
    {
      title: 'Marketplace',
      links: [
        { label: 'Explore Marketplace', href: '#marketplace' },
        { label: 'Sample Listings', href: '#marketplace' },
        { label: 'Suppliers & Workshops', href: '#suppliers' },
        { label: 'Sourcing Workflow', href: '#sourcing' },
      ],
    },
    {
      title: 'Categories',
      links: [
        { label: 'Leather Shoes & Loafers', href: '#categories' },
        { label: 'Sneakers & Footwear', href: '#categories' },
        { label: 'Handbags & Totes', href: '#categories' },
        { label: 'Wallets & Belts', href: '#categories' },
        { label: 'Outerwear & Apparel', href: '#categories' },
      ],
    },
    {
      title: 'Business',
      links: [
        { label: 'For Buyers & Retailers', href: '#audiences' },
        { label: 'For Suppliers & Makers', href: '#audiences' },
        { label: 'How Finexaa Works', href: '#how-it-works' },
        { label: 'Trading Questions (FAQ)', href: '#faq' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Submit Sourcing Enquiry', href: '#contact' },
        { label: 'Supplier Collaboration', href: '#contact' },
        { label: 'General Assistance', href: '#faq' },
      ],
    },
  ],
  // Optional real legal or social links; will only render when non-empty real URLs are provided
  legalLinks: [] as { label: string; href: string }[],
  socialLinks: [] as { label: string; href: string }[],
};
