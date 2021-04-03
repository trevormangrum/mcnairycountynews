import { gql } from "@apollo/client";


export default {
  articles: {
    getTeasers: gql`
      query getTeasers {
        articleCollection(where: { teaser: true }) {
          items {
            title
            posted
            categories
          }
        }
      }`,
    getTeaserByTitle: gql`
    query getTeaserByTitle($title: String!) {
        articleCollection(where: { title_contains: $title }, limit: 1) {
            items {
                title
                author
                posted
                body {
                    json
                }
            }
        }
    }`,
  },
  subscribers: {},
};
