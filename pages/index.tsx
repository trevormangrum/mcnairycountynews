import Head from "next/head";
import Layout from "components/Layout";
import SectionHeader from "components/SectionHeader";
import { useQuery } from "@apollo/client";
import { client } from "server/actions/Contentful";
import queries from "server/actions/Contentful/queries";
import Teaser from "components/Teaser";
import DigitalAdPlaceholder from "components/DigitalAdPlaceholder";
import { Advertisement, Article } from "utils/types";
import { randomizeAds } from "server/helpers/ads";
import Ad from "components/Ad";

export default function Home() {
  const { loading, data, error } = useQuery(queries.articles.getTeasers, {
    client: client,
    pollInterval: 3600000,
  });
  const { data: adData, loading: adLoading, error: adError } = useQuery(
    queries.ads.getAdsByPriority,
    {
      client: client,
      variables: { prio: "2" },
    }
  );
  const ads: Advertisement[] =
    adData && randomizeAds(adData.adCollection.items.slice(0));
  return (
    <div>
      <Head>
        <title>
          By McNairy Countians, For McNairy Countians | McNairy County News
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <SectionHeader text="Teasers" />
        {data &&
          !error &&
          data.articleCollection.items.map(
            (article: Article, index: number) => {
              if (index == 0) {
                return (
                  <>
                    <Teaser article={article} large={true} />{" "}
                    {ads && ads.length > 0 ? (
                      <Ad
                        imageUrl={ads[0].image?.url as string}
                        url={ads[0].url as string}
                      />
                    ) : (
                      <DigitalAdPlaceholder />
                    )}
                  </>
                );
              }

              if (index % 3 == 0) {
                return (
                  <>
                    <Teaser article={article} large={false} />
                    {ads && ads.length > index / 3 ? (
                      <Ad
                        imageUrl={ads[index / 3].image?.url as string}
                        url={ads[index / 3].url as string}
                      />
                    ) : (
                      <DigitalAdPlaceholder />
                    )}
                  </>
                );
              }
              return <Teaser article={article} large={false} />;
            }
          )}
      </Layout>
    </div>
  );
}
