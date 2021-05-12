import { Advertisement } from "utils/types";

/**
 * Randomizes a collection of ads to display on the frontend.
 * @param ads The ads to be randomized.
 */
export const randomizeAds = (ads: Advertisement[]): Advertisement[] => {
  let originalLength = ads.length; //Needed to prevent duplicate ads from occuring.
  let upperBound = ads.length;
  let randomizedAds = [] as Advertisement[];
  for (let i = 0; i < originalLength; i++) {
    let randomNumber = Math.floor(Math.random() * upperBound + 1);
    randomizedAds.push(ads[randomNumber - 1]);
    //Remove the ad from the collection of ads when it is placed into the randomizedAds array.
    ads.splice(randomNumber - 1, 1);
    upperBound = ads.length;
  }
  return randomizedAds;
};
