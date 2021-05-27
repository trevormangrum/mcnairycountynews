import { NextPage, NextPageContext } from "next";
import Header from "components/Header";
import Footer from "components/Footer";
import SectionHeader from "components/SectionHeader";
import Link from "next/link";
import Router from "next/router";
import urls from "utils/urls";

const AdminHomePage: NextPage = () => {
  return (
    <main className="admin-page">
      <Header />
      <div className="admin-wrapper">
        <h1>MCN Admin Portal</h1>
        <SectionHeader text="Articles/Teasers" />
        <div className="admin-links">
          <Link href="/admin/articles/add">
            <a className="button button-admin" href="/admin/articles/add">
              Add Article/Teaser
            </a>
          </Link>
          <Link href="/admin/articles/delete">
            <a className="button button-admin" href="/admin/articles/delete">
              Delete Article/Teaser
            </a>
          </Link>
        </div>
        {/* <SectionHeader text="Archives" /> */}
        {/* <div className="admin-links"> */}
        {/*   <Link href="/admin/archives/add"> */}
        {/*     <a className="button button-admin" href="/admin/archives/add"> */}
        {/*       Add to archives */}
        {/*     </a> */}
        {/*   </Link> */}
        {/*   <Link href="/admin/archives/delete"> */}
        {/*     <a className="button button-admin" href="/admin/archives/delete"> */}
        {/*       Remove from archives */}
        {/*     </a> */}
        {/*   </Link> */}
        {/* </div> */}

        <SectionHeader text="Advertisements" />
        <div className="admin-links">
          <Link href="/admin/ads/add">
            <a className="button button-admin" href="/admin/ads/add">
              Add to Advertisements
            </a>
          </Link>
          <Link href="/admin/ads/delete">
            <a className="button button-admin" href="/admin/ads/delete">
              Delete from advertisements
            </a>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default AdminHomePage;

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

