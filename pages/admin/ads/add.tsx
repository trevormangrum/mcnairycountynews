import React from "react";
import InputGroup from "components/InputGroup";
import Header from "components/Header";
import Footer from "components/Footer";
import SectionHeader from "components/SectionHeader";
import Loader from "components/Loader";
import urls from "utils/urls";
import Router from "next/router";
import { NextPageContext } from "next";

interface IFormValues {
  businessName?: string | undefined;
  url?: string | undefined;
  image?: File | Blob | undefined;
  square?: boolean | undefined;
  submissionError?: boolean | undefined;
  [key: string]: string | Blob | Date | boolean | null | undefined;
}
export default function addAdvertisementPage() {
  const [loading, setLoading] = React.useState(false);
  const [adValues, setAdValues] = React.useState({} as IFormValues);

  const handleAdData = (e: React.SyntheticEvent) => {
    e.persist();
    const target = e.target as HTMLInputElement;
    if (target != null) {
      //Images have to be handled differently than regular input fields.
      if (target.name == "image" && target.files != null) {
        setAdValues(adValues => ({
          ...adValues,
          [target.name]: target.files?.item(0),
        }));
      } else {
        setAdValues(adValues => ({
          ...adValues,
          [target.name]: target.value,
        }));
      }
    }
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    //If there's currently a submission error, we remove it so we can try another attempt.
    if (adValues.submissionError) {
      setAdValues({ ...adValues, ["submissionError"]: false });
    }
    if (
      !adValues.businessName ||
      !adValues.image ||
      !adValues.priority ||
      !adValues.square
    ) {
      console.log(adValues);
      setAdValues({ ...adValues, ["submissionError"]: true });
      return;
    }

    const fd = new FormData();
    let key: string;
    setLoading(true);
    for (key in adValues) {
      if (typeof adValues[key] === "string") {
        fd.append(key, adValues[key] as string);
      } else {
        fd.append(key, adValues[key] as Blob);
      }
    }
    const response = await fetch("/api/admin/ads/create", {
      method: "POST",
      body: fd,
    });
    if (response.status === 200) {
      setLoading(false);
      window.location.reload();
    } else {
      setAdValues({ ...adValues, ["submissionError"]: true });
    }
  };
  return (
    <main className="admin-page">
      <Header />
      <div className="admin-wrapper">
        <SectionHeader text="Add to Advertisements" />
        <p>
          {" "}
          Here you can add advertisements to the ad system on the site. Priority
          determines where the ads go. Priority 1 ads go on the individual
          teasers page. Priority 2 ads go into the teasers column on the home
          page. Priority 3 ads go into the sidebar.
        </p>
        <form>
          <InputGroup
            inputType="text"
            inputName="businessName"
            inputPlaceholder="Business Name"
            labelText="Business Name"
            value={adValues.businessName}
            handleChange={handleAdData}
          />
          <InputGroup
            inputType="text"
            inputName="url"
            inputPlaceholder="Advertisement Link"
            labelText="Advertisement Link"
            value={adValues.url}
            handleChange={handleAdData}
          />
          <InputGroup
            inputType="file"
            inputName="image"
            inputPlaceholder="Ad Image"
            labelText="Ad Image"
            value={adValues.image}
            handleChange={handleAdData}
          />
          <InputGroup
            inputType="select"
            inputName="priority"
            inputPlaceholder="Ad Priority"
            labelText="Ad Priority"
            value={adValues.priority}
            handleChange={handleAdData}
          />
          <InputGroup
            inputType="radio"
            inputName="square"
            inputPlaceholder="Should the Ad Be Square?"
            labelText="Should the Ad Be Square?"
            value={adValues.square}
            handleChange={handleAdData}
          />
          <button type="submit" onClick={handleSubmit} className="button">
            Add to Advertisements
          </button>
          {loading && (
            <div className="admin-loader-container">
              <Loader />
            </div>
          )}
          {adValues.submissionError && (
            <p>
              Something went wrong. Please try again. Values could be missing
              from the form, so make sure every field is filled out.
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
