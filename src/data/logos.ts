export interface PaymentProvider {
  name: string;
  category: string;
}

export const paymentProviders: PaymentProvider[] = [
  { name: 'Shop Pay', category: 'Platform' },
  { name: 'Mastercard', category: 'Card Network' },
  { name: 'Klarna', category: 'BNPL' },
  { name: 'Google Pay', category: 'Digital Wallet' },
  { name: 'Apple Pay', category: 'Digital Wallet' },
  { name: 'Affirm', category: 'BNPL' },
  { name: 'Adyen', category: 'Processor' },
  { name: 'PayPal', category: 'Digital Wallet' },
  { name: 'Checkout.com', category: 'Acquirer' },
];
