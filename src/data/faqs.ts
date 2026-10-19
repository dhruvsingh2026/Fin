export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqList: FAQItem[] = [
  {
    id: 'what-trade',
    question: 'What can I discover or trade on Finexaa?',
    answer:
      'Finexaa is a B2B marketplace platform for footwear (including leather shoes, formal footwear, and sneakers), leather goods (such as handbags, totes, wallets, and belts), and selected apparel. Listings on this page are illustrative examples of styles and manufacturing specialties available for sourcing.',
  },
  {
    id: 'who-for',
    question: 'Who is Finexaa for?',
    answer:
      'Finexaa is designed for wholesale buyers, boutique owners, multi-brand retailers, and apparel brands seeking production partners, as well as workshops, tanneries, and manufacturers looking to establish wholesale connections.',
  },
  {
    id: 'how-explore',
    question: 'How can I explore products and suppliers?',
    answer:
      'You can browse our core product categories, review curated style line sheets, and inspect sample specifications directly on this page. To connect with specific maker profiles or discuss tailored runs, submit an enquiry using the form below.',
  },
  {
    id: 'submit-enquiry',
    question: 'Can I submit a sourcing enquiry?',
    answer:
      'Yes. The primary way to initiate trading on Finexaa is by submitting a sourcing enquiry via our contact form. You can specify your role (buyer or supplier), categories of interest, and any bespoke requirements.',
  },
  {
    id: 'pricing-moq',
    question: 'How are product prices and minimum orders determined?',
    answer:
      'All product prices, wholesale brackets, and minimum-order quantities (MOQs) displayed on this page are illustrative reference samples. Commercial terms, production volumes, and pricing schedules are negotiated and agreed upon directly per enquiry.',
  },
  {
    id: 'shipping-delivery',
    question: 'How do shipping and delivery arrangements work?',
    answer:
      'Logistics arrangements, export documentation, and freight forwarding terms depend on the supplier workshop location and are agreed directly between buyers and sellers during enquiry negotiations.',
  },
];
