import { NextApiRequest, NextApiResponse } from "next";
import { deleteArticle } from "server/actions/Contentful/modify";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const id = req.query.id as string;
    await deleteArticle(id);
    res.status(200).json({
      payload: [],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      payload: error,
    });
  }
}
