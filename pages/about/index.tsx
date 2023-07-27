import React from "react";
import Layout from "components/Layout";
import Head from "next/head";
import SectionHeader from "components/SectionHeader";
import Employee from "components/Employee";
export default function AboutPage() {
  const options = {
    pageTitle: true,
    pageTitleText: "About Us",
  };
  return (
    <Layout options={options}>
      <Head>
        <title>About Us | McNairy County News</title>
        <meta
          name="description"
          content="
            Founded in 2008, the McNairy County News is truly a “county paper”. The employees take pride in publishing a weekly paper that highlights real happenings in McNairy and the surrounding counties."
        />
      </Head>
      <SectionHeader text="By McNairy Countians, For McNairy Countians" />
      <img
        className="mcn-img"
        src="new_storefront.jpg"
        alt="McNairy County News"
      />
      <p>
        Founded in 2008, the McNairy County News is truly a “county paper”. The
        employees take pride in publishing a weekly paper that highlights real
        happenings in McNairy and the surrounding counties. The McNairy County
        News is published each week on Thursday and covers all of McNairy County
        with machine and rack sales as well as subscriptions both in-county and
        the surrounding counties including all of West Tennessee. The McNairy
        County News Facebook page has the largest following of any weekly
        newspaper in Tennessee with over 20,800 followers. The employees of the
        McNairy County News are all lifelong residents of the county with a
        multitude of talents that are an asset to the newspaper. Advertising
        rates are the lowest in the area and with a wider format paper,
        businesses get more ad space. Contact us today to see what we can do for
        you.
      </p>
      <SectionHeader text="Our Team" />
      <div className="employee-grid">
        <Employee
          name="Melanie King"
          image="melanie.jpg"
          position="Owner/Publisher/Advertising Sales"
          email="melanie@mcnairycountynews.com"
          phone="7316979149"
        />
        <Employee
          name="Suzanne Ingle"
          image="suzanne.jpg"
          position="Office Manager/Graphics Design and Layout"
          email="suzanne@mcnairycountynews.com"
        />
        <Employee
          name="Drew Wheeler"
          email="news@mcnairycountynews.com"
          image="drew.jpg"
          position="Editor"
        />
        <Employee
          name="Ashton Rich"
          email="sports@mcnairycountynews.com"
          position="Sports Writer"
          image="ashton.jpg"
        />
        <Employee
          name="Tom Evans"
          image="tom.JPG"
          position="Founder/Sports Writer"
          email="tom@mcnairycountynews.com"
        />
      </div>
    </Layout>
  );
}
