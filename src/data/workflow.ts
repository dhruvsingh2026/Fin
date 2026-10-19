export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
  iconName: 'user-plus' | 'sliders' | 'git-branch';
}

export const workflowSteps: WorkflowStep[] = [
  {
    step: '01',
    title: 'Create Account',
    description:
      'Create your account and safely connect your current payment processing accounts or apply for new merchant accounts. Lasso is connected with 20+ payment processing solutions, so having our own accounts ensures redundancy and reliability.',
    iconName: 'user-plus',
  },
  {
    step: '02',
    title: 'Customize Checkout',
    description:
      'Design and tailor your cart and checkout flows to match your brand. Add optimizers to increase your AOV. Split test and scale.\n\nOptimizers: Upsells, Down Sells, Order Bumps, Subscriptions.',
    iconName: 'sliders',
  },
  {
    step: '03',
    title: 'Set Payment Rules',
    description:
      'Route more payments based on tools that customers' +
      ' ' +
      'increasing approvals. Split volume between processors to maintain solvency and decrease risk. Automatically route failed payments to the next available processor in real time.',
    iconName: 'git-branch',
  },
];
