import { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import { Article } from "utils/types";
import { uploadImage, addArticle } from "server/actions/Contentful/modify";
export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const form = new formidable.IncomingForm();
    form.parse(
      req,
      async (err: string, fields: formidable.Fields, files: any) => {
        const article: Article = fields;
        article.image = await uploadImage(files.image);
        console.log(article.image);
        await addArticle(article);
        res.status(200).json({
          payload: {},
        });
      }
    );
  } catch (error) {
    res.status(500).json({
      payload: error,
    });
  }
}
