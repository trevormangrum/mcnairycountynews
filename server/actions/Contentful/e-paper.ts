import { createClient } from "contentful-management";
import Formidable from "formidable";
import { deleteAssetByID, uploadDigitalEditionFile } from "./modify";
import fs from "fs";
const client = createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_KEY as string,
});

export const getDigitalEdition = async () => {
  const space = await client.getSpace(process.env.CONTENTFUL_SPACE as string);
  const environment = await space.getEnvironment("master");
  const entry = await environment.getEntry(
    process.env.DIGITAL_EDITION_ENTRY_ID
  );
  const ePaper = await environment.getAsset(
    entry.fields["ePaper"]["en-US"]["sys"]["id"]
  );
  const url = ePaper.fields["file"]["en-US"]["url"];
  return "https:" + url;
};

export const uploadDigitalEdition = async (file: Formidable.File) => {
  const space = await client.getSpace(process.env.CONTENTFUL_SPACE as string);
  const environment = await space.getEnvironment("master");
  const entry = await environment.getEntry(
    process.env.DIGITAL_EDITION_ENTRY_ID
  );
  const ePaper = await environment.getAsset(
    entry.fields["ePaper"]["en-US"]["sys"]["id"]
  );
  //Get rid of the current paper if it exists.
  console.log(ePaper);
  ePaper.fields["file"] = {
    "en-US": {
      contentType: file.type as string,
      fileName: file.name as string,
      file: fs.readFileSync(file.path),
    },
  };
  await entry.update();
};
