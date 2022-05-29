import React from 'react';
import * as nearAPI from 'near-api-js';
import { Contract, WalletConnection } from 'near-api-js';
import { NearContext } from './context/nearContext';
import { contractMethods, Methods } from './const/contract';
import { NetworkTypes } from './const/network';
import { getConfig } from './utils/getConfig';
import { NetworkInfo } from './componets/NetworkInfo';
import { ContractInfo } from './componets/ContractInfo';
import { ContractInteract } from './componets/ContractInteract';
import { AppContainer, Content } from './componets/styled/Section';

window.Buffer = window.Buffer || require('buffer').Buffer;

export const App = () => {
  const [wallet, setWallet] = React.useState<WalletConnection | null>(null);
  const [contract, setContract] = React.useState<(Contract & Methods) | null>(null);
  const [networkId, setNetworkId] = React.useState<NetworkTypes>('testnet');
  const [contractName, setContractName] = React.useState<string>('average-price.rkonoval.testnet');

  React.useEffect(() => {
    (async () => {
      const nearConnection = await nearAPI.connect(
        getConfig(networkId, new nearAPI.keyStores.BrowserLocalStorageKeyStore()),
      );
      setWallet(new nearAPI.WalletConnection(nearConnection, 'hapi'));
    })();
  }, [networkId]);

  React.useEffect(() => {
    if (wallet) {
      setContract(
        new nearAPI.Contract(
          wallet.account(),
          contractName,
          contractMethods as unknown as { viewMethods: string[]; changeMethods: string[] },
        ) as nearAPI.Contract & Methods,
      );
    }
  }, [wallet]);

  const contextValue = {
    wallet,
    setWallet,
    contract,
    setContract,
    networkId,
    setNetworkId,
    contractName,
    setContractName,
  };

  return (
    <NearContext.Provider value={contextValue}>
      <AppContainer>
        <NetworkInfo />
        <Content>
          <ContractInfo />
          <ContractInteract />
        </Content>
      </AppContainer>
    </NearContext.Provider>
  );
};
