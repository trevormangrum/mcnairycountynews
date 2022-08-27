import { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import { Article } from "utils/types";
import { uploadAsset, addArticle } from "server/actions/Contentful/modify";
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
        console.log(article);
        if (article.image) {
          console.log("Image is there");
        }
        if (files.image != undefined) {
          article.image = await uploadAsset(files.image);
        }
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
