import { NextApiRequest, NextApiResponse } from "next";
import { codeValid } from "server/actions/Contentful/code";
import { getDigitalEdition } from "server/actions/Contentful/e-paper";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log(req.body);
    const isValid = await codeValid(req.body);
    if (isValid) {
      const url = await getDigitalEdition();
      res.status(200).json({ url: url });
    } else {
      res.status(400).json({});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({});
  }
}
