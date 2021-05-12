import { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import { uploadAsset, addArchive } from "server/actions/Contentful/modify";
import { Archive } from "utils/types";
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
        const archive: Archive = fields;
        archive.pdf = await uploadAsset(files.pdf);
        await addArchive(archive);
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
