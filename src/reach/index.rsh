/* eslint-disable no-use-before-define */
/* eslint-disable eqeqeq */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'reach 0.1';
// 'use strict';

const FundInfo = Object({
    target: UInt,
    deadline: UInt,
    creator: Bytes(64),
    title: Bytes(64),
    story: Bytes(64),
    picture: Bytes(256),
})


export const main = Reach.App(() => {
    setOptions({ untrustworthyMaps: true });
    // The Admin interact interface for managing funds
    const Fundraiser = Participant('Fundraiser', {
        createFundraiser: FundInfo,
        launched: Fun([Contract], Null),
        seeDonation: Fun([Address, UInt], Null),
        thankDonor: Fun([Address], Null),
        platformAddr: Address,
    });

    // const Platform = Participant('Platform', {
    //     addr: Address,
    // });

    // The Donor interact interface for making donations
    const Donor = API('Donor', {
        donate: Fun([UInt], Null),
    });

    // View for showing the fundraiser details in the Frontend
    const Info = View('Info', {
        details: FundInfo,
    });

    init();

    // Fundraiser creating, publishing the fundraiser details and deploying the contract
    Fundraiser.only(() => {
        const platformAddress = declassify(interact.platformAddr);
        const fundInfo = declassify(interact.createFundraiser);
    })
    Fundraiser.publish(platformAddress, fundInfo);
    const {target, deadline, creator, title, story, picture} = fundInfo;
    Info.details.set(fundInfo);

    // enforce(thisConsensusTime() < deadline, 'too late');
    // This contract goes onto a QR code for the raise info
    Fundraiser.interact.launched(getContract())

    const Donors = new Map(UInt);

    // Donors donating to the fundraiser using a parallel reduce for the process
    const [ done, totalDonations, howMany ] = parallelReduce([ false, 0, 0 ])
        // .invariant(Donors.size() == howMany, "howMany accurate")
        .invariant(balance() >= 0, "balance accurate")
        .while(totalDonations < target)
        .api_(Donor.donate, (amt) => {
            const platformFee = amt * 5/100;
            check(!done, "Fundraising started");
            check(amt > 0, "Must donate more than 0");
            return [amt, (ret) => {
                enforce(thisConsensusTime() < deadline, "donation period over"); 
                 Donors[this] = amt;
                ret(null);
                Fundraiser.interact.seeDonation(this, amt);
                Fundraiser.interact.thankDonor(this);
                transfer(platformFee).to(platformAddress);
                return [ false, totalDonations + amt, howMany + 1 ];
            }];
        });

    transfer(balance()).to(Fundraiser);

    commit();

    exit();
});