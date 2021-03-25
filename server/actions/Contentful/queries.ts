import {gql} from "@apollo/client";
export default {
    articles: {
        createArticle: gql`query createArticle {
        }`,
        updateArticle: gql`query updateArticle {
        }`,
        archiveArticle: gql`query archiveArticle {
        }`
    },
    subscribers: {
    }
}
