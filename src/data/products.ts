export const productKeys = ['billing', 'kvm', 'hyperv', 'containers', 'games', 'dcim', 'monitor'] as const;

export type ProductKey = (typeof productKeys)[number];
