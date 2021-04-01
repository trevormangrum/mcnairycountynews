import { gql } from "@apollo/client";
export default {
  articles: {
    createArticle: gql`query createArticle {
        }`,
    updateArticle: gql`query updateArticle {
        }`,
    archiveArticle: gql`query archiveArticle {
        }`,
    getTeasers: gql`
      query getTeasers {
        articlesCollction(where: { teaser_contains: "true" }) {
          items {
            title
            posted
            categories
          }
        }
      }
    `,
  },
  subscribers: {},
};
