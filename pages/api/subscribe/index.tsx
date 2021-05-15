import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    //TODO: when calculating price for subscription, check zip code to see if it's in county or out of county.
    //TODO: Also check, if state is not TN, then you know they are out of county.
    console.log(JSON.parse(req.body));
    res.status(200).json({
      payload: {},
    });
  } catch (error) {
    res.status(500).json({
      payload: error,
    });
  }
}
