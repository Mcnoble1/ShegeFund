import {loadStdlib} from '@reach-sh/stdlib';
// import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';

const stdlib = loadStdlib();

stdlib.setWalletFallback(stdlib.walletFallback({
  providerEnv: {
    ETH_NODE_URI: 'https://matic-mumbai.chainstacklabs.com',
    // ETH_NODE_URI: 'https://empty-white-moon.matic-testnet.discover.quiknode.pro/90709286830e40dee035bab0a479bbf836af753d/',
  }
}));

export async function account() {
  const acc =  await stdlib.getDefaultAccount()
  return acc;
}