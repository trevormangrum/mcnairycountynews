import { NextApiRequest, NextApiResponse } from "next";
import { SubscriptionContactInfo } from "utils/types";
import Authorize from "server/actions/Authorize";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const subInfo = JSON.parse(req.body) as SubscriptionContactInfo;
    const a = new Authorize();

    subInfo.price = "35.00";
    a.generateAcceptPage(subInfo, async function (response) {
      res.status(200).json({
        payload: response.getToken(),
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      payload: error,
    });
  }
}
