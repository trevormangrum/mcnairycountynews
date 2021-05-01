import React from "react";
import { useRouter } from "next/router";
import Header from "components/Header";
import Footer from "components/Footer";
import SectionHeader from "components/SectionHeader";
import InputGroup from "components/InputGroup";
import { useQuery } from "@apollo/client";
import { client } from "server/actions/Contentful";
import queries from "server/actions/Contentful/queries";
import AdminItem from "components/AdminItem";
import dynamic from "next/dynamic";
import Head from "next/head";
const ReactQuill = dynamic(import("react-quill"), { ssr: false });

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
      <Head>
        
      </Head>
      <link rel="stylesheet" href="//cdn.quilljs.com/1.2.6/quill.snow.css" />
      <Header />
      <div className="admin-wrapper">
        <SectionHeader text={`${method} ${method != "update" ? (method == "delete" ? "from" : "to") : ""} ${type}`} />
        <form>

        {method != "add" && 
          /* We don't need to display a search bar when adding an article/archive */
          <InputGroup inputType="search" inputName="search" inputPlaceholder={`Search for ${type}...`} labelText="Search" />
        }
        
        {method == "add" && type == "articles" && (
          <div>
            <p>Here you can add teasers to the website. Continue writing what this does here....</p>
            <InputGroup inputType="text" inputName="title" inputPlaceholder="Article Title" labelText="Article Title" />
            <InputGroup inputType="text" inputName="author" inputPlaceholder="Author" labelText="Author" />
            <InputGroup inputType="date" inputName="date" inputPlaceholder="mm-dd-yyyy" labelText="Date Posted" />
            <InputGroup inputType="file" inputName="image" inputPlaceholder="image" labelText="Article Image" />
            <ReactQuill theme="snow" placeholder="Enter the body of your teaser here..." className="editor" />
            <button type="button" className="button">Create Teaser</button>
          </div>
        )}

        {method == "add" && type == "archives" && (
          <div>
            <InputGroup inputType="date" inputName="date" inputPlaceholder="mm-dd-yyyy" labelText="Paper Date" />
            <InputGroup inputType="file" inputName="pdf" inputPlaceholder="Paper PDF" labelText="Paper PDF" />
            <button type="button" className="button">Add to Archives</button>
          </div>
        )}

        {data && !loading  && type == "articles" && method != "add" &&  (
          /* Display a list of articles with a button that performs an action based on method. */
          data.articleCollection?.items.map(article => {
            return <AdminItem text={article.title} method={method as string} type={type}/>
          })
        )}
        {data && !loading && type == "archives" && method != "add" &&  (
          /* Display a list of archives with a button that performs an action based on method. */
          data.archivesCollection?.items.map(archive => {
            return <AdminItem text={archive.date} method={method as string} type={type} />
          })
        )}

        </form>
      </div>
      <Footer />
    </main>
  )
}
