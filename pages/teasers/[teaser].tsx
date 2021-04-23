import { NextPage } from "next";
import { useRouter } from "next/router";
import { Article } from "utils/types";
import SectionHeader from "components/SectionHeader";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from "components/Layout";
import { client } from "server/actions/Contentful";
import queries from "server/actions/Contentful/queries";
import { GetStaticPropsContext } from "next";
interface Props {
  teaser: Article;
}
const IndividualTeaserPage: NextPage<Props> = ({ teaser }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <Layout>
      {teaser && (
        <div>
          <img
            src={teaser.image ? teaser.image.url : "#"}
            className="teaser-page-image"
            alt={teaser.title}
          />
          <h1>{teaser.title}</h1>
          <p>{new Date(teaser.posted).toLocaleDateString('en-US', { timeZone: "UTC", weekday: "long", year: "numeric", month: "long", day: "numeric"})}</p>
          <p>Written by: {teaser.author}</p>

          {documentToReactComponents(teaser.body.json)}
        </div>
      )}
    </Layout>
  );
};
export default IndividualTeaserPage;

export async function getStaticProps(context: GetStaticPropsContext) {
  const title = (context.params?.teaser as string).replace(/-/g, " ");
  const response = await client.query({
    query: queries.articles.getTeaserByTitle,
    variables: { title },
  });

  return {
    props: {
      teaser: response.data.articleCollection.items[0],
    },
  };
}

export async function getStaticPaths() {
  const response = await client.query({
    query: queries.articles.getTeasers,
  });
  const paths = response.data.articleCollection.items.map(article => {
    return { params: { teaser: article.title } };
  });
  return {
    paths: paths,
    fallback: true,
  };
}
