import React from "react";
import Layout from "components/Layout";
import Head from "next/head";
import SectionHeader from "components/SectionHeader";
import Link from "next/link";

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
            <SectionHeader text="Digital Advertising"/>
            <p>We offer digital advertisements on our website. Advertisements can be made in a variety of sizes, and placed on specific pages.</p>
            <p>Pricing: </p>
            <p>If you are interested in having a digital advertisement, click the button below.</p>
            <Link href='/advertising/digital'><a className="button" href='/advertising/digital'>Get Started</a></Link>
            <SectionHeader text="Advertising Rate Card"/> 
            <iframe className="embedded-pdf" src="/rates.pdf"></iframe>
        </Layout>
    );
}
