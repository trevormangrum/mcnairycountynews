import Head from "next/head";
import Layout from "components/Layout";
import SectionHeader from "components/SectionHeader";
import { useQuery } from "@apollo/client";
import { client } from "server/actions/Contentful";
import queries from "server/actions/Contentful/queries";
import Teaser from "components/Teaser";
export default function Home() {
  const { loading, data, error } = useQuery(queries.articles.getTeasers, {
    client: client,
    pollInterval: 3600000,
  });
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
          data.articleCollection.items.map((article, index) => {
            if (index == 0) {
              return <Teaser article={article} large={true} />;
            } else {
              return <Teaser article={article} large={false} />;
            }
          })}
      </Layout>
    </div>
  );
}
