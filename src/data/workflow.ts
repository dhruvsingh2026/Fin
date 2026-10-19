export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
  iconName: 'compass' | 'users' | 'send';
}

export const workflowSteps: WorkflowStep[] = [
  {
    step: '01',
    title: 'Explore Categories',
    description:
      'Browse focused fashion categories across fine leather footwear, contemporary sneakers, structured handbags, and seasonal apparel collections.',
    iconName: 'compass',
  },
  {
    step: '02',
    title: 'Discover Products and Suppliers',
    description:
      'Review representative sample listings, craftsmanship details, materials, and workshop locations to identify partners matching your brand standards.',
    iconName: 'users',
  },
  {
    step: '03',
    title: 'Start a Trading Enquiry',
    description:
      'Submit your sourcing interest directly through our enquiry channel to discuss volume tiers, bespoke leather specifications, and production timelines.',
    iconName: 'send',
  },
];
