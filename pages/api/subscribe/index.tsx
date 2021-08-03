import { NextApiRequest, NextApiResponse } from "next";
import { SubscriptionContactInfo } from "utils/types";
import { calculateSubscriptionPrice } from "server/helpers/subscribe";
import Authorize from "server/actions/Authorize";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const subInfo = JSON.parse(req.body) as SubscriptionContactInfo;
    const a = new Authorize();
    const cost = calculateSubscriptionPrice(subInfo);
    a.generateAcceptPage(cost, subInfo.gift, async function (response) {
      res.status(200).json({
        payload: {
          token: response.getToken(),
          cost: cost,
        }
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      payload: error,
    });
  }
}
