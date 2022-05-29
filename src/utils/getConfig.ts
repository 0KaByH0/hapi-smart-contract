import { KeyStore } from 'near-api-js/lib/key_stores';
import { NetworkTypes } from '../const/network';

export const getConfig = (networkId: NetworkTypes, keyStore: KeyStore) => ({
  networkId,
  keyStore,
  nodeUrl: `https://rpc.${networkId}.near.org`,
  walletUrl: `https://wallet.${networkId}.near.org`,
  helperUrl: `https://helper.${networkId}.near.org`,
  explorerUrl: `https://explorer.${networkId}.near.org`,
  headers: {},
});
