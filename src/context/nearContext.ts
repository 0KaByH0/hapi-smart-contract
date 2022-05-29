import React from 'react';
import * as nearAPI from 'near-api-js';
import { Methods } from '../const/contract';
import { NetworkTypes } from '../const/network';

export type NearContextType =
  | {
      contract: nearAPI.Contract & Methods;
      setContract: (contract: nearAPI.Contract & Methods) => void;
      wallet: nearAPI.WalletConnection;
      setWallet: (wallet: nearAPI.WalletConnection) => void;
      networkId: NetworkTypes;
      setNetworkId: (network: NetworkTypes) => void;
      contractName: string;
      setContractName: (name: string) => void;
    }
  | undefined;

export const NearContext = React.createContext<NearContextType>(null);
