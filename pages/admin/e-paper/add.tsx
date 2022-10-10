import Header from "components/Header";
import InputGroup from "components/InputGroup";
import { NextPageContext } from "next";
import Head from "next/head";
import Router from "next/router";
import React from "react";
import urls from "utils/urls";

interface IFormValues {
  digitalEdition?: File | Blob | undefined;
  [key: string]: File | Blob | undefined;
}
export default function AdminEPaperPage() {
  const [dEdition, setDEdition] = React.useState({} as IFormValues);
  const [error, setError] = React.useState({ status: false, message: "" });
  const [loading, setLoading] = React.useState(false);
  const uploadDigitalEdition = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!dEdition.digitalEdition) {
      setError({
        status: true,
        message: "Please supply a file for the digital edition.",
      });
      return;
    }
    setError({ status: true, message: "" });
    const fd = new FormData();
    let key: string;

    for (key in dEdition) {
      fd.append(key, dEdition[key] as Blob);
    }

    const response = await fetch("/api/admin/e-paper/add", {
      method: "POST",
      body: fd,
    });

    if (response.status == 200) {
      window.location.reload();
    } else {
      setError({
        status: false,
        message: "Something went wrong. Please try again.",
      });
    }
  };
  const handleChange = (e: React.SyntheticEvent) => {
    e.persist();
    const target = e.target as HTMLInputElement;
    if (target.name === "digitalEdition" && target.files != null) {
      setDEdition(values => ({
        ...values,
        ["digitalEdition"]: target.files?.item(0),
      }));
    }
  };
  return (
    <main className="admin-page">
      <Head>
        <title>Admin E-Paper | McNairy County News</title>
      </Head>
      <Header />
      <div className="admin-wrapper">
        <p>
          Here, you can add the current week's digital edition to the website.
          Upload the digital edition's file using the field below. It will
          automatically delete the previous week's digital edition from the
          site. The page will reload if the upload is successful.
        </p>
        <InputGroup
          inputType="file"
          labelText="Digital Edition Upload"
          inputName="digitalEdition"
          handleChange={handleChange}
          inputPlaceholder="Upload digital edition here..."
        ></InputGroup>
        <button
          className="button"
          onClick={uploadDigitalEdition}
          disabled={loading}
        >
          Upload Digital Edition
        </button>
        {error.status && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    </main>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  //Code comes from mindversity website. https://github.com/hack4impact-utk/mindversity-website/blob/develop/pages/portal/index.tsx
  const cookie = context.req?.headers.cookie;
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
  return { props: {} };
}
