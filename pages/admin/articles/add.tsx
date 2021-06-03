import React from "react";
import dynamic from "next/dynamic";
import queries from "server/actions/Contentful/queries";
import Delta from "quill";
import { Sources } from "quill";
import Head from "next/head";
import SectionHeader from "components/SectionHeader";
import Header from "components/Header";
import Footer from "components/Footer";
import InputGroup from "components/InputGroup";
import  Router, { useRouter } from "next/router";
import { NextPageContext } from "next";
import urls from "utils/urls";

import Loader from "components/Loader";

const ReactQuill = dynamic(import("react-quill"), { ssr: false });

interface IFormValues {
  title?: string | undefined;
  author?: string | undefined;
  date?: string | Date | undefined;
  image?: File | Blob | undefined;
  body?: string | undefined;
  error?: boolean | undefined;
  submissionError?: boolean | undefined;
  [key: string]: string | Blob | boolean | Date | null | undefined;
}

export default function CreateArticlePage() {
  const [articleValues, setArticleValues] = React.useState({} as IFormValues);
  const [imageURL, setImageURL] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const handleArticleData = (e: React.SyntheticEvent) => {
    e.persist();
    const target = e.target as HTMLInputElement;
    if (target != null) {
      if (target.name == "image" && target.files != null) {
        setArticleValues(articleValues => ({
          ...articleValues,
          [target.name]: target.files?.item(0),
        }));
        handleImageURL(target.files[0]);
      } else {
        setArticleValues(articleValues => ({
          ...articleValues,
          [target.name]: target.value,
        }));
      }
    }
  };
  const handleImageURL = (image: File) => {
    const fr = new FileReader();
    //If the user cancels their file upload, an error is thrown by NextJS. To fix this, we just check to make sure that a file has been uploaded before doing any URL processing.
    if (image != null) {
      fr.onloadend = function (e: ProgressEvent<FileReader>) {
        if (e.target != null) {
          setImageURL(e.target.result as string);
        }
      };
      fr.readAsDataURL(image);
    }
  };
  const handleChange = (
    content: string,
    delta: Delta,
    source: Sources,
    editor: any
  ) => {
    //If the editor is empty, the only thing in it is a newline character. We don't want to send just newlines to the backend, so we do this.
    if (editor.getText() != "\n") {
      if (articleValues.body) {
        delete articleValues.error;
      }
      setArticleValues(articleValues => ({
        ...articleValues,
        ["body"]: editor.getHTML(),
      }));
    } else {
      delete articleValues.body;
    }
  };
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (articleValues.submissionError) {
      setArticleValues({ ...articleValues, ["submissionError"]: false });
    }
    if (!articleValues.image) {
      setArticleValues({ ...articleValues, ["submissionError"]: true });
      return;
    }
    if (!articleValues.body) {
      setArticleValues({ ...articleValues, ["error"]: true });
      return;
    }

    const fd = new FormData();
    let key: string;
    setLoading(true);
    for (key in articleValues) {
      if (typeof articleValues[key] === "string") {
        fd.append(key, articleValues[key] as string);
      } else {
        fd.append(key, articleValues[key] as Blob);
      }
    }
    const response = await fetch("/api/admin/articles/create", {
      method: "POST",
      body: fd,
    });
    if (response.status === 200) {
      setLoading(false);
     router.push(`${urls.baseUrl}${urls.pages.admin.index}`) 
    } else {
      setArticleValues({ ...articleValues, ["submissionError"]: true });
    }
  };
  return (
    <main className="admin-page">
      <Head>
        <title>Admin Portal | McNairy County News</title>
      </Head>
      <link rel="stylesheet" href="//cdn.quilljs.com/1.2.6/quill.snow.css" />
      <Header />
      <div className="admin-wrapper">
        <SectionHeader text="Add to Articles" />

        <form>
          <p>
            Here you can add teasers to the website. Fill out the fields below and press the button to create a teaser. You will be redirected to the admin dashboard if creation was successful. Please do NOT add dashes (-) into the title.  
          </p>
          <InputGroup
            inputType="text"
            inputName="title"
            inputPlaceholder="Article Title"
            labelText="Article Title"
            value={articleValues.title}
            handleChange={handleArticleData}
          />
          <InputGroup
            inputType="text"
            inputName="author"
            inputPlaceholder="Author"
            labelText="Author"
            value={articleValues.author}
            handleChange={handleArticleData}
          />
          <InputGroup
            inputType="date"
            inputName="posted"
            inputPlaceholder="mm-dd-yyyy"
            labelText="Date Posted"
            value={articleValues.date}
            handleChange={handleArticleData}
          />
          <InputGroup
            inputType="file"
            inputName="image"
            inputPlaceholder="image"
            labelText="Article Image"
            value={articleValues.image}
            handleChange={handleArticleData}
          />
          <InputGroup
            inputType="radio"
            inputName="highPrio"
            inputPlaceholder="highPrio"
            labelText="High Priority?"
            value={articleValues.highPrio}
            handleChange={handleArticleData}
          />
          <ReactQuill
            theme="snow"
            placeholder="Enter the body of your teaser here..."
            className="editor"
            onChange={handleChange}
          />
          <button type="submit" className="button" onClick={handleSubmit}>
            Create Teaser
          </button>

          {loading && (
            <div className="admin-loader-container">
              <Loader />
            </div>
          )}
          {articleValues.submissionError && (
            <p>
              Something went wrong. Please try again. Please make sure that all
              fields are filled out.
            </p>
          )}
        </form>
      </div>
      <Footer />
    </main>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  //Code comes from mindversity website. https://github.com/hack4impact-utk/mindversity-website/blob/develop/pages/portal/index.tsx
  const cookie = context.req?.headers.cookie;
  const resp = await fetch(`${urls.baseUrl}${urls.api.admin.validate}`, {
    headers: {
      cookie: cookie!,
    }
  })
  //If the cookie is not present, redirect to the login page.
  if(resp.status === 401 && !context.req) {
    void Router.replace(`${urls.baseUrl}${urls.pages.login}`);
    return { props: {} };
  }
  if(resp.status === 401 && context.req) {
    context.res?.writeHead(302, {
      Location: `${urls.baseUrl}`,
    });
    context.res?.end();
    return { props: {} };
  }
  return { props: {} }
}

