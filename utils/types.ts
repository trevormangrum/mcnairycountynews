export interface Article {
  title: string;
  author?: string;
  posted: string;
  categories: string[];
  image: {
    url: string;
  };
  teaser?: boolean;
  body?: string;
}
export interface EmailMessage {
  email: string;
  name: string;
  body: string;
  subject:string;
}
