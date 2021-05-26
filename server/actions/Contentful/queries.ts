import { gql } from "@apollo/client";

export default {
  articles: {
    getTeasers: gql`
      query getTeasers {
        articleCollection(
          where: { teaser: true }
          limit: 12
          order: [posted_DESC]
        ) {
          items {
            sys {
              id
            }
            title
            posted
            image
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
            image
            posted
            body
          }
        }
      }
    `,
  },
  subscribers: {},
  ads: {
    getAds: gql`
      query getAds {
        adCollection(order: [priority_ASC]) {
          items {
            sys {
              id
            }
            businessName
            image
            url
            priority
          }
        }
      }
    `,
    getAdsByPriority: gql`
      query getAdsByPriority($prio: String!) {
        adCollection(where: { priority: $prio }) {
          items {
            businessName
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
            sys {
              id
            }
            date
            pdf
          }
        }
      }
    `,
  },
};
