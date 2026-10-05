export const productKeys = ['billing', 'kvm', 'hyperv', 'containers', 'games', 'monitor'] as const;

export type ProductKey = (typeof productKeys)[number];
