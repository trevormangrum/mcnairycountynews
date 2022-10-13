import { createClient } from "contentful-management";
import { randomBytes } from "crypto";
const client = createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_KEY as string,
});

export const codeValid = async (code: string) => {
  const space = await client.getSpace(process.env.CONTENTFUL_SPACE as string);
  const environment = await space.getEnvironment("master");
  const entry = await environment.getEntry(process.env.CODE_ENTRY_ID);
  if (code === entry.fields["code"]["en-US"]) {
    return true;
  }
  return false;
};

export const generateCode = async () => {
  const code = randomBytes(3).toString("hex");
  const space = await client.getSpace(process.env.CONTENTFUL_SPACE as string);
  const environment = await space.getEnvironment("master");
  const entry = await environment.getEntry(process.env.CODE_ENTRY_ID);
  entry.fields["code"]["en-US"] = code;
  await entry.update();
};

export const getCode = async () => {
  const space = await client.getSpace(process.env.CONTENTFUL_SPACE as string);
  const environment = await space.getEnvironment("master");
  const entry = await environment.getEntry(process.env.CODE_ENTRY_ID);
  return entry.fields["code"]["en-US"];
};
