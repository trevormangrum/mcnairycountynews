import React from "react";
import Layout from "components/Layout";
import Head from "next/head";

export default function SubscribePage() {
    const options = {
        pageTitle: true,
        pageTitleText: "Subscribe",
    }
    return (
        <Layout options={options}>
            <Head>
                <title>Subscribe to McNairy County News | McNairy County News</title>
            </Head>
        </Layout>
    );
}
