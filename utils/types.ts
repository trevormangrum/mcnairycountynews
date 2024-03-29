export interface Article {
  sys?: {
    id?: string;
  };
  title?: string;
  author?: string;
  posted?: string;
  categories?: string[];
  image?: ContentfulAsset;
  teaser?: boolean;
  body?: string;
  highPrio?: string;
}
export interface EmailMessage {
  email: string;
  name: string;
  body: string;
  subject: string;
}

export interface ContentfulAsset {
  assetID: string;
  url: string;
}

export interface Archive {
  sys?: {
    id?: string;
  };
  date?: string;
  pdf?: ContentfulAsset;
}

export interface Advertisement {
  sys?: {
    id?: string;
  };
  businessName?: string;
  priority?: string;
  url?: string;
  square?: string;
  image?: ContentfulAsset;
}

export interface SubscriptionContactInfo {
  dob?: string;
  veteran?: string;
  gift?: string;
  renewal?: string;
  price?: number | string;
}

export interface User {
  username: string;
  pass: string;
  role?: string;
}
