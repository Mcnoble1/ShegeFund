import { loadStdlib, ask } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const stdlib = loadStdlib();

stdlib.setWalletFallback(stdlib.walletFallback({
  providerEnv: {
    ETH_NODE_URI: 'https://matic-mumbai.chainstacklabs.com',
  }
}));


let done = false;
const Funding = [];
let fundInfo = null;

  const target = await ask.ask(
    'What is your fund target?',
    stdlib.parseCurrency,
  );
  const deadline = await ask.ask(
    'When is the deadline?',
    (x => x)
  );
  const creator = await ask.ask(
    'What is your Name?',
    (x => x)
  );
  const title = await ask.ask(
    'Give the Fundraise a title',
    (x => x)
  );
  const story = await ask.ask(
    'Tell us your shege story',
    (x => x)
  );
  const picture = await ask.ask(
    'Attach your shege picture',
    (x => x)
  );

  fundInfo = { target, deadline, creator, title, story, picture };

const isFundraiser = await ask.ask(
  'Are you a Fundraiser',
  ask.yesno
)

const who = isFundraiser ? 'Fundraiser' : 'Donor';

console.log(`Welcome to the ShegeFund as ${who}`);

// console.log(`Welcome to the Funding Platform`);

const accFundraiser = await stdlib.newAccountFromMnemonic('advice jewel celery goddess explain color thumb length uphold confirm resource tribe');
accFundraiser.setDebugLabel('Fundraiser');

// const accFundraiser = await stdlib.newTestAccount(stdlib.parseCurrency(1000));
// const myGasLimit = 5000000;
// accFundraiser.setGasLimit(myGasLimit);
const getBalance = async () => stdlib.formatCurrency(await stdlib.balanceOf(accFundraiser)); // get the balance
console.log(`Your balance before is ${await getBalance()}`); 

console.log(`Creating the Fundraising Campaign`);


const startFunding = async () => {
    const runFunding = async(who) => {
      // const { target, deadline, story, picture } = fundInfo;
  
      // const acc = await stdlib.newTestAccount(stdlib.parseCurrency(1000));

      const acc = await stdlib.newAccountFromMnemonic('advice jewel celery goddess explain color thumb length uphold confirm resource tribe');
      acc.setDebugLabel('Donor'); // set the debug label 
      Funding.push([who, acc]);
      const info = await ask.ask(
                 'Please paste the contract information: ',
                  (x => x)
             );
      const ctc = acc.contract(backend, info);
      const getBalance = async () => stdlib.formatCurrency(await stdlib.balanceOf(acc)); // get the balance

      // try {
        const { target } = await ctc.unsafeViews.Info.details();
        const { deadline } = await ctc.unsafeViews.Info.details();
        const { creator } = await ctc.unsafeViews.Info.details();
        const { title } = await ctc.unsafeViews.Info.details();
        const { story } = await ctc.unsafeViews.Info.details();
        const { picture } = await ctc.unsafeViews.Info.details();
  
        console.log(`FundRaise Details:
                    target: ${stdlib.formatCurrency(target)} ${stdlib.standardUnit}
                    deadline: ${deadline}
                    creator: ${creator}
                    title: ${title}
                    story: ${story}
                    picture: ${picture}
                    ` 
                  );
      // } catch (e) {
      //   console.log(`${who} failed to make a donation because target reached.`); 
      // }
      
      const amount = await ask.ask(
        'How much would you like to donate?',
        stdlib.parseCurrency,
      );  
      
      try {
        const myGasLimit = 10000000;
        acc.setGasLimit(myGasLimit); 
      await ctc.apis.Donor.donate(amount); 
        console.log(`${who} donated ${stdlib.formatCurrency(amount)} ${stdlib.standardUnit} to the campaign`);
        console.log(`Your balance after donation is ${await getBalance()}`);
      } catch (e) {
        console.log(e);
        // console.log(`${who} failed to make a donation because target reached.`); 
      };
      console.log(`${who} balance after is ${await getBalance()}`); // log the balance
  
    }
      await runFunding("Alice");
      await runFunding("Bob");
      await runFunding("Carol");
      await runFunding("Dave");
      while (!done) {
      await stdlib.wait(0);
      }
  };
  
  try {
    const ctcFundraiser = accFundraiser.contract(backend);
    ctcFundraiser.getInfo().then((info) => {
        console.log(`Your contract is deployed as = ${JSON.stringify(info)}`);
        // ctcinfo = info;
      });

  await ctcFundraiser.participants.Fundraiser({
          // implement Fundraiser's interact object here
    ...stdlib.hasRandom,
    createFundraiser: fundInfo,
    
    launched: (contract) => {
      console.log(`The event is ready to start accepting donations ${contract}.`);
      startFunding();
    },
    thankDonor: (who) => {
      console.log(`${stdlib.formatAddress(who)} is thanked for the donation.`);
    },
    seeDonation: (who, amount) => {
      console.log(`${stdlib.formatAddress(who)} donated ${stdlib.formatCurrency(amount)} ${stdlib.standardUnit} to the campaign`);
    },
  });
  } catch (e) {
    console.log(e);
  }
  
  
  for (const [name, acc] of Funding) {
    console.log(`${name} with the address ${stdlib.formatAddress(acc)} made a donation.`);
    }
  
  const after = await getBalance();
  console.log(`Your balance is now ${after}`);
  
  console.log('Goodbye, Fundraiser and Donor!');
  ask.done();
  
  done = true;
  