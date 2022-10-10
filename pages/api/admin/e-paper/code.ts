import { NextApiRequest, NextApiResponse } from "next";
import { generateCode } from "server/actions/Contentful/code";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await generateCode();
    res.status(200).json({});
  } catch (error) {
    console.error(error);
    res.status(500).json({});
  }
}
