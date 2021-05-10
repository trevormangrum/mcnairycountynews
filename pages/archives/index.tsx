import React from "react";
import Layout from "components/Layout";
import InputGroup from "components/InputGroup";
import { useQuery } from "@apollo/client";
import { client } from "server/actions/Contentful";
import queries from "server/actions/Contentful/queries";
export default function archivesPage() {
  const { loading, data, error } = useQuery(
    queries.archives.getArchivedPapers,
    {
      client: client,
      pollInterval: 3600000,
    }
  );
  //TODO: Filter the arrays.
  const sortedArchives =
    data &&
    data.archivesCollection.items.slice().sort((a, b) => a.date - b.date);
  return (
    <Layout options={{ pageTitle: true, pageTitleText: "Archives" }}>
      <InputGroup
        inputType="search"
        inputName="search"
        labelText="Search"
        inputPlaceholder="Search for archives here..."
      />
      {sortedArchives && !loading && !error &&
        sortedArchives.map(archive => {
          return (
            <a rel="noopener" target="_blank" href={archive.pdf.url}>
              {new Date(archive.date).toLocaleString("en-US", {
                timeZone: "UTC",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </a>
          );
        })}
    </Layout>
  );
}
