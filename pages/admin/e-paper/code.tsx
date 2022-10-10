import Header from "components/Header";
import SectionHeader from "components/SectionHeader";
import { NextPageContext } from "next";
import Head from "next/head";
import Router from "next/router";
import React from "react";
import { getCode } from "server/actions/Contentful/code";
import urls from "utils/urls";
interface Props {
  code: string;
}
export default function AdminEPaperPage<Props>({ code }) {
  const [error, setError] = React.useState({ status: false, message: "" });
  const generateCode = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const response = await fetch("/api/admin/e-paper/code");
    if (response.status == 200) {
      window.location.reload();
    } else {
      setError({
        status: true,
        message: "Something went wrong. Please try again.",
      });
    }
  };
  return (
    <main className="admin-page">
      <Head>
        <title>Admin E-Paper Code | McNairy County News</title>
      </Head>
      <Header />
      <div className="admin-wrapper">
        <SectionHeader text="Code" />
        <p>
          Here, you can view the current code used to view the digital edition.
        </p>
        <p>
          The current code is: <strong>{code}</strong>
        </p>
        <p>
          Use the button below to generate a new code for the email edition.
        </p>
        <button className="button" onClick={generateCode}>
          Generate New Code
        </button>
      </div>
    </main>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  //Code comes from mindversity website. https://github.com/hack4impact-utk/mindversity-website/blob/develop/pages/portal/index.tsx
  const cookie = context.req?.headers.cookie;
  const code = await getCode();
  const resp = await fetch(`${urls.baseUrl}${urls.api.admin.validate}`, {
    headers: {
      cookie: cookie!,
    },
  });
  //If the cookie is not present, redirect to the login page.
  if (resp.status === 401 && !context.req) {
    void Router.replace(`${urls.baseUrl}${urls.pages.login}`);
    return { props: {} };
  }
  if (resp.status === 401 && context.req) {
    context.res?.writeHead(302, {
      Location: `${urls.baseUrl}`,
    });
    context.res?.end();
    return { props: {} };
  }
  return { props: { code: code } };
}
