import React from 'react';
import { networkConsts, NetworkTypes } from '../../const/network';
import { NearContext, NearContextType } from '../../context/nearContext';
import { normalizeNetwork } from '../../utils/normalizeNetworkName';
import { Label } from '../styled/Label';
import { NetworkSection } from '../styled/Section';
import { Select } from '../styled/Select';

export const NetworkInfo: React.FC = () => {
  const { networkId, setNetworkId } = React.useContext<NearContextType>(NearContext);

  const changeNetwork = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNetworkId(e.target.value as NetworkTypes);
  };

  return (
    <NetworkSection>
      <Label>Network</Label>
      <Select value={networkId} onChange={changeNetwork}>
        {networkConsts.map((network, index) => (
          <option key={index} value={network}>
            {normalizeNetwork(network)}
          </option>
        ))}
      </Select>
    </NetworkSection>
  );
};
