export interface FooterColumn {
  title: string;
  links: { label: string; href: string; isExternal?: boolean }[];
}

export const footerData = {
  brandDescription:
    'Lasso powers your online checkout flow. From global payment methods to fully built cart-customization tools, get the tools and analytics you need to make better decisions. See checkout, every channel.',
  columns: [
    {
      title: 'Product',
      links: [
        { label: 'Platform', href: '#platform' },
        { label: 'Payments', href: '#payments' },
        { label: 'Orchestration', href: '#orchestration' },
        { label: 'Users', href: '#services' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'FAQs', href: '#faq' },
      ],
    },
    {
      title: 'Learn',
      links: [
        { label: 'User Guide', href: '#sync' },
        { label: 'Book a demo', href: '#contact' },
        { label: 'Documentation', href: '#services' },
        { label: 'API Reference', href: '#orchestration' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#platform' },
        { label: 'Privacy Policy', href: 'https://policies.google.com/privacy', isExternal: true },
        { label: 'Terms of Service', href: 'https://policies.google.com/terms', isExternal: true },
        { label: 'Acceptable Use Policy', href: '#faq' },
        { label: 'Service Level Agreement', href: '#pricing' },
        { label: 'Sub-processor Appendix', href: '#payments' },
      ],
    },
    {
      title: 'Socials',
      links: [
        { label: 'Twitter / X', href: 'https://twitter.com', isExternal: true },
        { label: 'LinkedIn', href: 'https://linkedin.com', isExternal: true },
        { label: 'GitHub', href: 'https://github.com', isExternal: true },
        { label: 'YouTube', href: 'https://youtube.com', isExternal: true },
      ],
    },
  ],
};
