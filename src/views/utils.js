import {loadStdlib} from '@reach-sh/stdlib';
// import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';

const stdlib = loadStdlib();

stdlib.setWalletFallback(stdlib.walletFallback({
  providerEnv: {
    ETH_NODE_URI: 'https://matic-mumbai.chainstacklabs.com',
  }
}));

export async function account() {
  const acc =  await stdlib.getDefaultAccount()
  return acc;
}