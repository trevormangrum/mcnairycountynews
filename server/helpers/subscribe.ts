import { SubscriptionContactInfo } from "utils/types";

export const calculateSubscriptionPrice = (
  subInfo: SubscriptionContactInfo
) => {};

//TODO: when calculating price for subscription, check zip code to see if it's in county or out of county.
//TODO: Also check, if state is not TN, then you know they are out of county.
