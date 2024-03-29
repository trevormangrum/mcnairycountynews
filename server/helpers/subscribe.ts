import { SubscriptionContactInfo } from "utils/types";

export const calculateSubscriptionPrice = (
  subInfo: SubscriptionContactInfo
): string => {
  let cost: number = 0.0;
  if (subInfo.subOption == "email") {
    //Before, this was return "15.00";
    cost = 15 + 15 * 0.035;
    return cost.toFixed(2);
  }
  //At this point, we know that it is a standard subscription. So we need to check if they are in county or not for a base price.
  if (inCounty(subInfo)) {
    cost = 32;
  } else {
    cost = 40;
  }

  //If they are a veteran or 60 or older, then they get a 2 dollar discount. (discounts don't stack)
  if (subInfo.veteran == "Yes" || sixtyOrOlder(subInfo)) {
    cost = cost - 2;
  }

  //Add in a 3.5% upcharge for using a credit/debit card.
  cost = cost + cost * 0.035;
  return cost.toFixed(2);
};

const inCounty = (subInfo: SubscriptionContactInfo): boolean => {
  //Zip codes in McNairy County. If the zip code passed in isn't in here, then they aren't in the county.
  const zips = [
    "38375",
    "38310",
    "38315",
    "38357",
    "38367",
    "38334",
    "38379",
    "38061",
    "38332",
    "38044",
    "38339",
    "38376",
    "38359",
    "38393",
  ];
  if (zips.includes(subInfo.zip as string)) return true;
  return false;
};

const sixtyOrOlder = (subInfo: SubscriptionContactInfo): boolean => {
  const dob = new Date(subInfo.dob as string);
  const currentDate = new Date();
  if (currentDate.getFullYear() - dob.getFullYear() >= 60) {
    return true;
  }
  return false;
};
