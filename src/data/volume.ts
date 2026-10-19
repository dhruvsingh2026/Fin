export interface VolumeCard {
  id: string;
  title: string;
  description: string;
  type: 'scaling' | 'methods' | 'routing';
}

export const volumeCards: VolumeCard[] = [
  {
    id: 'scaling',
    title: 'Smart scaling',
    description: 'Spread volume across processors. Scale without processing errors or rate limits as traffic peaks.',
    type: 'scaling',
  },
  {
    id: 'methods',
    title: '400+ payment methods',
    description: 'Offer local payment methods matched to your customers’ location and purchasing habits automatically.',
    type: 'methods',
  },
  {
    id: 'routing',
    title: 'Smart routing',
    description: 'Automatically send traffic through personalized A/B checkout tests to capture maximum approval rates.',
    type: 'routing',
  },
];
