import React from "react";
import { useRouter } from "next/router";
import Header from "components/Header";
import Footer from "components/Footer";
import SectionHeader from "components/SectionHeader";
import InputGroup from "components/InputGroup";
import { useQuery } from "@apollo/client";
import { client } from "server/actions/Contentful";
import queries from "server/actions/Contentful/queries";
export default function AdminWorkPage() {
  const router = useRouter();
  const { type, method } = router.query;
  //Use GraphQL query to fetch from backend.
  const query = type == "articles" ? queries.articles.getTeasers : queries.archives.getArchivedPapers; 
  const {data, loading, error} = useQuery(query, {
    client: client
  })
  return (
    <main className="admin-page">
      <Header />
      <div className="admin-wrapper">
        <SectionHeader text={`${method} ${method != "update" ? (method == "delete" ? "from" : "to") : ""} ${type}`} />
        <InputGroup inputType="search" inputName="search" inputPlaceholder={`Search for ${type}...`} labelText="Search" />
        {data && !loading  && type == "articles" && (
          <h1>Articles</h1>
        )}
        {data && !loading && type == "archives" &&  (
          <h1>Archives</h1>
        )}

      </div>
      <Footer />
    </main>
  )
}
