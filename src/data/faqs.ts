export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqList: FAQItem[] = [
  {
    id: 'how-it-works',
    question: 'How does Lasso work?',
    answer:
      'Lasso integrates between your e-commerce storefront (like Shopify, WooCommerce, or custom sites) and global payment processors. When a customer enters checkout, Lasso identifies their location, cart contents, and risk profile, dynamically routing the payment to the processor with the highest likelihood of approval and the lowest interchange fee.',
  },
  {
    id: 'comes-with-payments',
    question: 'Does Lasso come with payments?',
    answer:
      'Lasso provides universal orchestration rails. You can connect your existing merchant processing accounts (such as Stripe, Adyen, PayPal, BrainTree, and Checkout.com) or use Lasso’s pre-negotiated volume partner accounts to start accepting payments worldwide immediately.',
  },
  {
    id: 'bring-merchant-account',
    question: 'Can I bring my own merchant account?',
    answer:
      'Yes, absolutely. Lasso is fully processor-agnostic. You can connect multiple existing merchant accounts, configure automatic failover rules, and distribute transaction volume across them based on your exact risk appetite and fee tiers.',
  },
  {
    id: 'what-is-orchestration',
    question: 'What is payment orchestration?',
    answer:
      'Payment orchestration is a software layer that connects all components of payment processing—including gateways, risk assessment tools, fraud engines, and alternative payment methods—into a unified workflow. It dynamically selects the optimal payment route in real time for every checkout attempt.',
  },
  {
    id: 'profit-margin',
    question: 'How does Lasso increase my profit margin?',
    answer:
      'Lasso increases margins in three direct ways: First, by routing transactions to processors with lower interchange fees. Second, by recovering otherwise lost transactions through instant cascading failover (typically lifting authorization rates by 2% to 6%). Third, by boosting average order value through built-in 1-click post-purchase upsells and order bumps.',
  },
  {
    id: 'split-test',
    question: 'Why should I split test my cart and checkout?',
    answer:
      'Every audience segment behaves differently. Split testing allows you to experiment with different payment methods (e.g. showing Apple Pay vs. Klarna upfront), layout variations, discount presentations, and upsell triggers. Testing helps you uncover which combinations maximize total revenue per session.',
  },
];
