import React from "react";
import Layout from "components/Layout";
import Head from "next/head";
import SectionHeader from "components/SectionHeader";
import Link from "next/link";

export default function AdvertisingPage() {
  const options = {
    pageTitle: true,
    pageTitleText: "Advertising Rates",
  };
  return (
    <Layout options={options}>
      <Head>
        <title>Advertising Rates | McNairy County News</title>
        <meta
          name="description"
          content="McNairy County News offers digital and paper advertising. Contact us for your advertising needs!"
        />
      </Head>
      <SectionHeader text="Digital Advertising" />
      <p>
        We offer digital advertisements on our website. Advertisements can be
        made in a variety of sizes, and placed in specific places on the
        website.
      </p>
      <p>
        If you are interested in having a digital advertisement, email us at{" "}
        <a href="mailto:suzanne@mcnairycountynews.com" className="inline-link">
          suzanne@mcnairycountynews.com
        </a>{" "}
        or call us at{" "}
        <a href="tel:7316457048" className="inline-link">
          731-645-7048
        </a>
        .
      </p>
      <SectionHeader text="Advertising Rate Card" />
      <iframe className="embedded-pdf" src="/rates-2024.pdf"></iframe>
    </Layout>
  );
}
