import { createClient } from "contentful-management";
import { Article } from "utils/types";
import { File } from "formidable";
import fs from "fs";
const client = createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_KEY as string,
});

/**
 * Creates a new article and uploads it to Contentful.
 * @param article
 */
export const addArticle = async (article: Article) => {
  const space = await client.getSpace(process.env.CONTENTFUL_SPACE as string);
  const environment = await space.getEnvironment("master");
  const newArticle = await environment.createEntry("article", {
    fields: {
      title: {
        "en-US": article.title,
      },
      author: {
        "en-US": article.author,
      },
      posted: {
        "en-US": article.posted,
      },
      body: {
        "en-US": article.body,
      },
      teaser: {
        "en-US": true,
      },
      image: {
        "en-US": article.image,
      },
    },
  });
  await newArticle.publish();
  if (!newArticle) throw new Error("Error creating new article.");
};

export const updateArticle = async () => {
  const space = await client.getSpace(process.env.CONTENTFUL_SPACE as string);
  const environment = await space.getEnvironment("master");
};
/**
 * Delete an article by it's system id in Contentful.
 * @param id The id of the article to be deleted.
 */
export const deleteArticle = async (id: string) => {
  const space = await client.getSpace(process.env.CONTENTFUL_SPACE as string);
  const environment = await space.getEnvironment("master");
  const entry = await environment.getEntry(id);
  if (entry.fields.image) {
    const image = entry.fields.image["en-US"];
    deleteAssetByID(image.assetID);
  }
  await entry.unpublish();
  await entry.delete();
};

/**
 * @param ID ID of the Contentful Asset to be deleted.
 */
export async function deleteAssetByID(ID: string) {
  const space = await client.getSpace(process.env.CONTENTFUL_SPACE as string);
  const environment = await space.getEnvironment("master");
  const asset = await environment.getAsset(ID);

  //Before an asset can be deleted, it has to be unpublished.
  await asset.unpublish();
  await asset.delete();
}
/**
 * @param image Image file of type Formidable.File to be uploaded.
 * @returns An object containing the uploaded image's asset ID and url.
 * @throws  Error if resource creation is unsuccessful
 */
export async function uploadImage(image: File) {
  const space = await client.getSpace(process.env.CONTENTFUL_SPACE as string);
  const environment = await space.getEnvironment("master");
  let asset = await environment.createAssetFromFiles({
    fields: {
      title: {
        "en-US": image.name,
      },
      description: {
        "en-US": "Image description",
      },
      file: {
        "en-US": {
          contentType: image.type,
          fileName: image.name,
          file: fs.readFileSync(image.path),
        },
      },
    },
  });

  asset = await asset.processForAllLocales();
  asset = await asset.publish();

  if (!asset) {
    throw new Error("Asset creation unsuccessful.");
  } else {
    //Delete image from local storage before ending upload
    fs.unlinkSync(image.path);
    //The url is returned without the http/https, so it's added here.
    return {
      url: "https:" + asset.fields.file["en-US"].url,
      assetID: asset.sys.id,
    };
  }
}
