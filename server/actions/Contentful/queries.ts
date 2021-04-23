import { gql } from "@apollo/client";

export default {
  articles: {
    getTeasers: gql`
      query getTeasers {
        articleCollection(where: { teaser: true }) {
          items {
            title
            posted
            image {
              url
            }
            categories
          }
        }
      }
    `,
    getTeaserByTitle: gql`
      query getTeaserByTitle($title: String!) {
        articleCollection(where: { title_contains: $title }, limit: 1) {
          items {
            title
            author
            image {
              url
            }
            posted
            body {
              json
            }
          }
        }
      }
    `,
  },
  subscribers: {},
  ads: {
    getAds: gql`
      query getAds {
        adCollection {
          items {
            image
            url
          }
        }
      }
    `,
  },
  archives: {
    getArchivedPapers: gql`
      query getArchivedPapers {
        archivesCollection {
          items {
            date
            pdf {
              url
            }
          }
        }
      }
    `,
  },
};
