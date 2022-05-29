import { NetworkTypes } from '../const/network';

export const normalizeNetwork = (network: NetworkTypes): string => {
  const networkName = network.substring(0, network.indexOf('net'));
  return networkName.charAt(0).toUpperCase() + networkName.slice(1) + ' Net';
};
