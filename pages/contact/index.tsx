import React from "react";
import Layout from "components/Layout";
import Head from "next/head";
import { FaFax, FaPhone, FaMapMarker, FaEnvelope } from "react-icons/fa";
import SectionHeader from "components/SectionHeader";
export default function ContactPage() {
  const options = {
    pageTitle: true,
    pageTitleText: "Contact Us",
  };
  return (
    <Layout options={options}>
      <Head>
        <title>Contact McNairy County News | McNairy County News</title>
      </Head>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.841019246642!2d-88.5950632071757!3d35.1658029642024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x887dccf9bca448e3%3A0xe76698f8a4d361ed!2sMcNairy%20County%20News!5e0!3m2!1sen!2sus!4v1616616787974!5m2!1sen!2sus"
        className="map"
      ></iframe>
        <SectionHeader text="Our Contact Information" />
      <div className="contact-info">
        <FaMapMarker className="contact-icon" />
        <span>252 Mulberry Avenue, Selmer TN, 38375</span>
      </div>
      <div className="contact-info">
        <FaEnvelope className="contact-icon" />
        <a href="mailto:news@mcnairycountynews.com">
          news@mcnairycountynews.com
        </a>
        <span>(News)</span>
      </div>
      <div className="contact-info">
        <FaEnvelope className="contact-icon" />
        <a href="mailto:suzanne@mcnairycountynews.com">
          suzanne@mcnairycountynews.com
        </a>
        <span>(Ads)</span>
      </div>
      <div className="contact-info">
        <FaPhone className="contact-icon" />
        <a href="tel:7316457048">731-645-7048</a>
        <span>(Office)</span>
      </div>
      <div className="contact-info">
        <FaFax className="contact-icon" />
        <span>731-645-7048</span>
        <span>(Fax)</span>
      </div>
    </Layout>
  );
}
