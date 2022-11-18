'reach 0.1';

// 1. Start your fundraiser
// Set your fundraiser goal
// Set your fundraiser deadline
// Tell your story and how it'll make an impact
// Publish your fundraiser
// Add a picture or video
// Watch a video tutorial on how shegeFund Works

//  Fundraise as a group

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


export const main = Reach.App(() => {
    const Beggar = Participant('Beggar', {
        target: UInt,
        deadline: UInt,
        deadlineReached: Fun([], Null),
        goalReached: Fun([], Null),
        shegeStory: Fun([], Null),
        shegePicture: Fun([], Null),
        shegeVideo: Fun([], Null),
        thankYou: Fun([], Null),
        withdraw: Fun([], UInt),
        convert: Fun([], UInt),
    });

    const Donor = API('Donor', {
        donate: Fun([UInt], Null),
    });
});