import formidable from "formidable";
import { NextApiRequest, NextApiResponse } from "next";
import { uploadDigitalEdition } from "server/actions/Contentful/e-paper";

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const form = new formidable.IncomingForm();
    form.parse(
      req,
      async (err: string, fields: formidable.Fields, files: any) => {
        await uploadDigitalEdition(files.digitalEdition);
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
