import React from 'react';
import { BASE_URL } from '../../const/main';
import { NearContext, NearContextType } from '../../context/nearContext';
import { filterNumbers } from '../../utils/filterNumbers';
import { Button } from '../styled/Button';
import { Input } from '../styled/Input';
import { Label, UserName } from '../styled/Label';
import { InteractSection } from '../styled/Section';

export const ContractInteract: React.FC = () => {
  const { wallet, contract, contractName, setWallet } =
    React.useContext<NearContextType>(NearContext);
  const [isSignedIn, setIsSignedIn] = React.useState<boolean>(false);
  const [gas, setGas] = React.useState<number>(300000000000000);
  const [near, setNear] = React.useState<number>(1);
  const [price, setPrice] = React.useState<number>(1);

  React.useEffect(() => {
    if (wallet) {
      setIsSignedIn(wallet.isSignedIn());
    }
  }, [wallet]);

  const onGasChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setGas(filterNumbers(e.target.value));

  const onNearChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNear(filterNumbers(e.target.value));

  const onPriceChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPrice(filterNumbers(e.target.value));

  return (
    <InteractSection>
      {isSignedIn ? (
        <>
          <UserName>{wallet.account().accountId}</UserName>
          <Button
            onClick={async () => {
              await wallet.signOut();
              setWallet(wallet);
              setIsSignedIn(wallet.isSignedIn());
            }}>
            Sign Out
          </Button>
          <Label>Price</Label>
          <Input value={price} onChange={onPriceChange}></Input>
          <Label>Gas</Label>
          <Input value={gas} onChange={onGasChange}></Input>
          <Label>YoctoNEAR</Label>
          <Input value={near} onChange={onNearChange}></Input>
          <Button
            onClick={() =>
              contract.set_last_price({ price: price }, gas.toString(), near.toString())
            }>
            Set last Price
          </Button>
        </>
      ) : (
        <Button
          onClick={async () => {
            if (!wallet.isSignedIn()) {
              await wallet.requestSignIn(contractName, 'Hapi Test App', BASE_URL);
              setWallet(wallet);
              setIsSignedIn(wallet.isSignedIn());
            }
          }}>
          Sign In
        </Button>
      )}
    </InteractSection>
  );
};
