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
