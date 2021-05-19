import { SubscriptionContactInfo } from "utils/types";

export const calculateSubscriptionPrice = (
  subInfo: SubscriptionContactInfo
): string  => {
  let cost: number = 0.00;
  if(subInfo.subOption == "email") return "15.00";
  //At this point, we know that it is a standard subscription. So we need to check if they are in county or not for a base price.
  if(inCounty(subInfo)) {
    cost = 30;
  } else {
    cost = 35;
  }

  //If they are a veteran or 60 or older, then they get a 2 dollar discount. (discounts don't stack)
  if(subInfo.veteran == "Yes" || sixtyOrOlder(subInfo)){
    cost = cost - 2;
  }
  return cost.toFixed(2);
};


const inCounty = (subInfo: SubscriptionContactInfo): boolean => {
  //Zip codes in McNairy County. If the zip code passed in isn't in here, then they aren't in the county.
  const zips = ["38375", "38310", "38315", "38357", "38367", "38334", "38379", "38061", "38332", "38044", "38339", "38376", "38359", "38393"];
  if(zips.includes(subInfo.zip as string)) return true;
  return false;
}



const sixtyOrOlder  = (subInfo: SubscriptionContactInfo): boolean => {
  const dob = new Date(subInfo.dob as string);
  const currentDate = new Date();
  console.log(currentDate.getFullYear() - dob.getFullYear());
  if(currentDate.getFullYear() - dob.getFullYear() >= 60) {
    return true
  }
  return false;
}
//TODO: when calculating price for subscription, check zip code to see if it's in county or out of county.
//TODO: Also check, if state is not TN, then you know they are out of county.
