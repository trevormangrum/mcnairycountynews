import React from "react";
import Layout from "components/Layout";
import NextPage from "next";
import Head from "next/head";
import SectionHeader from "components/SectionHeader";

export default function AdvertisingPage() {
    const options = {
        pageTitle: true,
        pageTitleText: "Advertising Rates",
    }
    return (
        <Layout options={options}>
            <Head>
                <title>Advertising Rates | McNairy County News</title>
            </Head>
            <SectionHeader text="General Advertising"/>
            <SectionHeader text="Legal Advertising"/>
            <SectionHeader text="Classified Advertising"/>
            <SectionHeader text="Lifestyle Advertising"/>
            <SectionHeader text="Digital Advertising"/>
            <SectionHeader text="Use of Color (All Advertising)"/>
            <SectionHeader text="Placement"/>
            <SectionHeader text="Deadline"/>
            <SectionHeader text="Pre-Printed Inserts"/>
            <SectionHeader text="Format"/>
            <SectionHeader text="Copy Regulations"/>
            <SectionHeader text="Submission Guidelines"/>
            <SectionHeader text="Email"/>
        </Layout>
    );
}
