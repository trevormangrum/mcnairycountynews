import { createClient } from "contentful-management";
import { Article, Archive, Advertisement } from "utils/types";
import { File } from "formidable";
import fs from "fs";
const client = createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_KEY as string,
});

/**
 * Creates a new article and uploads it to Contentful.

 * @param article The article object containing information to be used in creation.

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
      highPrio: {
        "en-US": article.highPrio == "Yes" ? true : false,
      },
    },
  });
  await newArticle.publish();
  if (!newArticle) throw new Error("Error creating new article.");
};

/**
 * Update article information.
 * @params Article containing updated information.
 */
export const updateArticle = async () => {
  const space = await client.getSpace(process.env.CONTENTFUL_SPACE as string);
  const environment = await space.getEnvironment("master");
};
/**
 * Delete an article by it's system id in Contentful.

 * @param id The id of the article/archive to be deleted.
 */
export const deleteEntry = async (id: string) => {
  const space = await client.getSpace(process.env.CONTENTFUL_SPACE as string);
  const environment = await space.getEnvironment("master");
  const entry = await environment.getEntry(id);
  if (entry.fields.image) {
    const image = entry.fields.image["en-US"];
    deleteAssetByID(image.assetID);
  }

  if (entry.fields.pdf) {
    const pdf = entry.fields.pdf["en-US"];
    deleteAssetByID(pdf.assetID);
  }

  await entry.unpublish();
  await entry.delete();
};

/**
 * Deletes an asset in Contentful by ID
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

 * @param asset file of type Formidable.File to be uploaded.
 * @returns An object containing the uploaded image's asset ID and url.
 * @throws  Error if resource creation is unsuccessful
 */
export async function uploadAsset(asset: File) {
  const space = await client.getSpace(process.env.CONTENTFUL_SPACE as string);
  const environment = await space.getEnvironment("master");
  let newAsset = await environment.createAssetFromFiles({
    fields: {
      title: {
        "en-US": asset.name as string,
      },
      description: {
        "en-US": "Image description",
      },
      file: {
        "en-US": {
          contentType: asset.type as string,
          fileName: asset.name as string,
          file: fs.readFileSync(asset.path),
        },
      },
    },
  });

  newAsset = await newAsset.processForAllLocales();
  newAsset = await newAsset.publish();

  if (!newAsset) {
    throw new Error("Asset creation unsuccessful.");
  } else {
    //Delete image from local storage before ending upload
    fs.unlinkSync(asset.path);
    //The url is returned without the http/https, so it's added here.
    return {
      url: "https:" + newAsset.fields.file["en-US"].url,
      assetID: newAsset.sys.id,
    };
  }
}
export async function uploadDigitalEditionFile(asset: File) {
  const space = await client.getSpace(process.env.CONTENTFUL_SPACE as string);
  const environment = await space.getEnvironment("master");
  let newAsset = await environment.createAssetFromFiles({
    fields: {
      title: {
        "en-US": asset.name as string,
      },
      description: {
        "en-US": "Image description",
      },
      file: {
        "en-US": {
          contentType: asset.type as string,
          fileName: asset.name as string,
          file: fs.readFileSync(asset.path),
        },
      },
    },
  });

  newAsset = await newAsset.processForAllLocales();
  newAsset = await newAsset.publish();

  if (!newAsset) {
    throw new Error("Asset creation unsuccessful.");
  } else {
    //Delete image from local storage before ending upload
    fs.unlinkSync(asset.path);
    //The url is returned without the http/https, so it's added here.
    return newAsset;
  }
}

/**
 * Add to archives.
 * @params archive archive object containing the data to be used in archive creation.
 * @throws an error if creation is unsuccessful.
 */
export const addArchive = async (archive: Archive) => {
  const space = await client.getSpace(process.env.CONTENTFUL_SPACE as string);
  const environment = await space.getEnvironment("master");
  const newArchive = await environment.createEntry("archives", {
    fields: {
      date: {
        "en-US": archive.date,
      },
      pdf: {
        "en-US": archive.pdf,
      },
    },
  });
  await newArchive.publish();
  if (!newArchive) throw new Error("Error creating new archive.");
};

/**
 * Add to advertisements.
 */
export const addAdvertisement = async (ad: Advertisement) => {
  const space = await client.getSpace(process.env.CONTENTFUL_SPACE as string);
  const environment = await space.getEnvironment("master");
  const newAd = await environment.createEntry("ad", {
    fields: {
      businessName: {
        "en-US": ad.businessName,
      },
      url: {
        "en-US": ad.url ? ad.url : "#",
      },
      image: {
        "en-US": ad.image,
      },
      priority: {
        "en-US": ad.priority,
      },
      square: {
        "en-US": ad.square === "Yes" ? true : false,
      },
    },
  });
  await newAd.publish();
  if (!newAd) throw new Error("Error creating new ad.");
};
