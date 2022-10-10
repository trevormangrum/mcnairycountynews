import { createClient } from "contentful-management";
import Formidable from "formidable";
import { deleteAssetByID, uploadAsset } from "./modify";
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
  const url = entry.fields["dEdition"]["en-US"]["url"];
  return url;
};

export const uploadDigitalEdition = async (file: Formidable.File) => {
  const space = await client.getSpace(process.env.CONTENTFUL_SPACE as string);
  const environment = await space.getEnvironment("master");
  const entry = await environment.getEntry(
    process.env.DIGITAL_EDITION_ENTRY_ID
  );
  if (entry.fields.dEdition) {
    const dEdition = entry.fields.dEdition["en-US"];
    await deleteAssetByID(dEdition.assetID);
  }
  //Get rid of the current paper if it exists.
  const f = await uploadAsset(file);
  entry.fields["dEdition"] = { "en-US": f };
  await entry.update();
};
