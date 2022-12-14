# ShegeFund
A Decentralized Fundraising/Crowdfunding Platform deployed on the Polygon Testnet. Users can create fundraising causes and people can make donations to different causes inasmuch as they have the contract information of those causes. The funds are transferred from the contract to the fundraiser when the fund target set is reached. Our platform charges 5% of every donation made to a cause.

# Tech Stack
- Reach Lang
- ReactJs
- IPFS
- Polygon Testnet
- Ethereum

# Use of Product
Crowdfunding and Fundraising
Savings Circle - AJO (Coming soon).

# Description
Decentralized Fundraising Platform That our Shege may be well Funded

### Create Funding Cause (Fundraiser)
- Connect your metamask wallet to create a cause
- Fill in your fundingraising details and make your story compelling
- Share your contract information with people to make donations

### Donate to a Cause (Donor)
- Connect your wallet
- Paste in the contract information to attach
- Donate to the cause. 

Saving Circle (AJO)
Create and join automated saving circles with your friends (coming soon).

# Todo
- Users being able to add pictures and upload a crowdfunding video

# Demo Video 
 [ShegeFund](https://www.youtube.com/watch?v=PLJduXuj-GA)


### Getting Started with ShegeFund locally

Clone the repo `git clone`

Navigate into the project folder `cd ShegeFund`

`npm start`

This runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


https://user-images.githubusercontent.com/40045755/205604153-d5657181-d7ba-42c5-bd6e-1c3b9b85a25c.mp4


`npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### File Structure
- The smart contracts are written in reach and is located in the `reach folder` named as `index.rsh` file
- You can navigate there using `cd ShegeFund/src/reach` 
- It is compiled down to `index.main.mjs` and the solidity equivalent `index,main.sol` which are both located in the `build` folder
- You can navigate there using `cd ShegeFund/src/reach/build`
