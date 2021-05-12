import React from "react";
import { useRouter } from "next/router";
import Header from "components/Header";
import Footer from "components/Footer";
import SectionHeader from "components/SectionHeader";
import { useQuery } from "@apollo/client";
import { client } from "server/actions/Contentful";
import queries from "server/actions/Contentful/queries";
import AdminItem from "components/AdminItem";
import Head from "next/head";
import { Article, Archive, Advertisement } from "utils/types";

export default function AdminWorkPage() {
  const router = useRouter();
  const { type, method } = router.query;
  //Use GraphQL query to fetch from backend.
  const query =
    type == "articles"
      ? queries.articles.getTeasers
      : type === "archives"
      ? queries.archives.getArchivedPapers
      : queries.ads.getAds;
  const { data, loading, error } = useQuery(query, {
    client: client,
  });

  //Send a request to the backend based on the form action located on the button of each section.
  const handleSubmit = async (e: React.SyntheticEvent, formAction: string) => {
    e.preventDefault();
    const response = await fetch(formAction);
    if (response.status == 200) {
      window.location.reload();
    } else {
      //TODO: Implement error handler that displays message when something goes wrong. (Probably use state?)
      console.error("BAD");
    }
  };

  return (
    <main className="admin-page">
      <Head>
        <title>Admin Actions | McNairy County News</title>
      </Head>
      <Header />
      <div className="admin-wrapper">
        <SectionHeader
          text={`${method} ${
            method != "update" ? (method == "delete" ? "from" : "to") : ""
          } ${type}`}
        />
        <form>
          {data &&
            !loading &&
            type == "articles" &&
            method != "add" &&
            /* Display a list of articles with a button that performs an action based on method. */
            data.articleCollection?.items.map((article: Article) => {
              return (
                <AdminItem
                  text={article.title}
                  id={article.sys?.id}
                  method={method as string}
                  type={type}
                  handleSubmit={handleSubmit}
                />
              );
            })}
          {data &&
            !loading &&
            type == "archives" &&
            method != "add" &&
            /* Display a list of archives with a button that performs an action based on method. */
            data.archivesCollection?.items.map((archive: Archive) => {
              return (
                <AdminItem
                  text={archive.date}
                  id={archive.sys.id}
                  method={method as string}
                  type={type}
                  handleSubmit={handleSubmit}
                />
              );
            })}
          {data &&
            !loading &&
            type == "ads" &&
            method != "add" &&
            /* Display a list of archives with a button that performs an action based on method. */
            data.adCollection?.items.map((ad: Advertisement) => {
              return (
                <AdminItem
                  text={`${ad.businessName} (Priority: ${ad.priority})`}
                  id={ad.sys?.id}
                  method={method as string}
                  type={type}
                  handleSubmit={handleSubmit}
                />
              );
            })}
        </form>
      </div>
      <Footer />
    </main>
  );
}
