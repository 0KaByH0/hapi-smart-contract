import React from 'react';
import * as nearAPI from 'near-api-js';
import { NearContext, NearContextType } from '../../context/nearContext';
import { contractMethods, Methods } from '../../const/contract';
import { Button } from '../styled/Button';
import { Input } from '../styled/Input';
import { Label } from '../styled/Label';
import { InfoSection } from '../styled/Section';
import { ErrorRow } from '../styled/Errors';

export const ContractInfo: React.FC = () => {
  const { wallet, contract, contractName, setContract, setContractName } =
    React.useContext<NearContextType>(NearContext);

  const [price, setPrice] = React.useState<number>(0);
  const [error, setError] = React.useState<boolean>(false);

  const connectContract = () => {
    if (wallet && contractName) {
      setContract(
        new nearAPI.Contract(
          wallet.account(),
          contractName,
          contractMethods as unknown as { viewMethods: string[]; changeMethods: string[] },
        ) as nearAPI.Contract & Methods,
      );
    }
  };

  const onContractNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setContractName(e.target.value);

  const getAveragePrice = async () => {
    try {
      const price = await contract.get_average_price();
      setPrice(price);
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <InfoSection>
      <Label>Contract name</Label>
      <Input value={contractName} onChange={onContractNameChange}></Input>
      {/* Should be response to get contract methods from backend ??? */}
      {/* <Button onClick={connectContract}>Connect contract</Button> */}
      <div>
        Avarage Price: <span>{price}</span>
      </div>
      <Button onClick={getAveragePrice}>Get Average Price</Button>
      {error && <ErrorRow>There are some error</ErrorRow>}
    </InfoSection>
  );
};
