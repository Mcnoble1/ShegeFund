import {loadStdlib} from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';

const stdlib = loadStdlib('ALGO');
stdlib.setWalletFallback(stdlib.walletFallback({
providerEnv: 'TestNet', MyAlgoConnect }));



export async function account() {
  const acc =  await stdlib.getDefaultAccount()
  return acc;
}