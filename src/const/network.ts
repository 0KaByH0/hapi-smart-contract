export const networkConsts = ['testnet', 'mainnet', 'betanet', 'localnet'] as const;

export type NetworkTypes = typeof networkConsts[number];
