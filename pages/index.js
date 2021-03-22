import Head from 'next/head'
import Header from "components/Header";


export default function Home() {
  return (
    <div>
      <Head>
        <title>McNairy County News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header/>
        <h1>Hello</h1>
        
    </div>

  )
}
