'reach 0.1';
// 'use strict';

// 1. Start your fundraiser
// Set your fundraiser goal
// Set your fundraiser deadline
// Tell your story and how it'll make an impact
// Publish your fundraiser
// Add a picture or video
// Watch a video tutorial on how shegeFund Works

//  Fundraise as a group

//  campaigns where the funds are refunds if the campaign fails or the fund goal isn't met  


// 2. Share with friends
// Send emails
// Send text messages
// Share on social media

// 3. Manage donations
// Accept donations
// Thank donors
// Withdraw funds
// Convert to fiat

// Donor
// Donates to a fundraiser

const FundInfo = Object({
    target: UInt,
    deadline: UInt,
    creator: Bytes(64),
    title: Bytes(64),
    story: Bytes(64),
    picture: Bytes(64),
    video: Bytes(64),
})

export const main = Reach.App(() => {

    // The Admin interact interface for managing funds
    const Fundraiser = Participant('Fundraiser', {
        createFundraiser: FundInfo,
        launched: Fun([Contract], Null),
        seeDonation: Fun([Address, UInt], Null),
        thankDonor: Fun([Address], Null),
        withdraw: Fun([], Null),
        convert: Fun([], Null),
        deadlineReached: Bool,
        goalReached: Bool,
    });

    // The Donor interact interface for making donations
    const Donor = API('Donor', {
        donate: Fun([UInt], Null),
        // amountDonated: Fun([], UInt),
    });

    // View for showing the fundraiser details in the Frontend
    const Info = View('Info', {
        details: FundInfo,
    });

    init();

    // Fundraiser creating, publishing the fundraiser details and deploying the contract
    Fundraiser.only(() => {
        const fundInfo = declassify(interact.createFundraiser);
    })
    Fundraiser.publish(fundInfo);
    const {target, deadline, creator, title, story, picture, video} = fundInfo;

    enforce(thisConsensusTime() < deadline, 'too late');
    // This contract goes onto a QR code for the raise info
    Fundraiser.interact.launched(getContract())

    Info.details.set(fundInfo);
    const Donors = new Map(Address, UInt);

    // Donors donating to the fundraiser using a parallel reduce for the process
    const [ done, totalDonations, howMany ] = parallelReduce([ false, 0, 0 ])
        // .invariant(Donors.size() == howMany, "howMany accurate")
        .invariant(balance() == totalDonations, "balance accurate")
        .while(totalDonations < target)
        // .paySpec([amt])
        .api_(Donor.donate, (amt) => {
            check(!done, "Fundraising started");
            check(amt > 0, "Must donate more than 0");
            return [amt, (ret) => {
                enforce(thisConsensusTime() < deadline, "donation period over"); 
                Donors[this] = amt;
                ret(null);
                Fundraiser.interact.seeDonation(this, amt);
                Fundraiser.interact.thankDonor(this);
                return [ false, totalDonations + amt, howMany + 1 ];
            }];
        });
    // Fundraiser withdrawing funds from the fundraiser
    // Fundraiser.interact.withdraw();
    // Fundraiser converting funds to fiat
    // Fundraiser.interact.convert();

    transfer(balance()).to(Fundraiser);

    commit();

    exit();
});