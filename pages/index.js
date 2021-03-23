import Head from 'next/head'
import Layout from "components/Layout";
import SectionHeader from "components/SectionHeader";
export default function Home() {
  return (
    <div>
      <Head>
        <title>McNairy County News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Layout>
            <SectionHeader text="News"/>
            <SectionHeader text="Sports"/>
        </Layout>
    </div>

  )
}
