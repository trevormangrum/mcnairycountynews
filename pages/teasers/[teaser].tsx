import { NextPage } from "next";
import { useRouter } from "next/router";
import { Advertisement, Article } from "utils/types";

import Layout from "components/Layout";
import { client } from "server/actions/Contentful";
import { useQuery } from "@apollo/client";
import queries from "server/actions/Contentful/queries";
import { GetStaticPropsContext } from "next";
import DigitalAdPlaceholder from "components/DigitalAdPlaceholder";
import { randomizeAds } from "server/helpers/ads";
import Ad from "components/Ad";

interface Props {
  teaser: Article;
}
const IndividualTeaserPage: NextPage<Props> = ({ teaser }) => {
  const { data: adData, loading: adLoading, error: adError } = useQuery(
    queries.ads.getAdsByPriority,
    {
      client: client,
      variables: { prio: "1" },
    }
  );
  const ads: Advertisement[] =
    adData && randomizeAds(adData.adCollection.items.slice(0));

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
          <p>
            {new Date(teaser.posted as string).toLocaleDateString("en-US", {
              timeZone: "UTC",
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p>Written by: {teaser.author}</p>
          {ads.length > 0 ? (
            <Ad
              imageUrl={ads[0].image?.url as string}
              url={ads[0].url as string}
            />
          ) : (
            <DigitalAdPlaceholder />
          )}
          <article
            className="blogContent"
            dangerouslySetInnerHTML={{ __html: teaser.body as string }}
          ></article>

          {ads.length > 1 ? (
            <Ad
              imageUrl={ads[1].image?.url as string}
              url={ads[1].url as string}
            />
          ) : (
            <DigitalAdPlaceholder />
          )}
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
