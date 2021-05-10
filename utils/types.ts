export interface Article {
  sys?: {
    id?: string;
  };
  title?: string;
  author?: string;
  posted?: string;
  categories?: string[];
  image?: ContentfulImage;
  teaser?: boolean;
  body?: string;
}
export interface EmailMessage {
  email: string;
  name: string;
  body: string;
  subject: string;
}

export interface ContentfulImage {
  assetID: string;
  url: string;
}
