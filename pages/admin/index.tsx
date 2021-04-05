import { NextPage } from "next";
import Header from "components/Header";
import Footer from "components/Footer";
import SectionHeader from "components/SectionHeader";
import Link from "next/link";
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
          <Link href="/admin/articles/update">
            <a className="button button-admin" href="/admin/articles/update">
                Update Article/Teaser
            </a>
          </Link>
          <Link href="/admin/articles/delete">
            <a className="button button-admin" href="/admin/articles/delete">
                    Delete Article/Teaser
            </a>
          </Link>
        </div>
        <SectionHeader text="Archives" />
        <div className="admin-links">
          <Link href="/admin/archives/add">
            <a className="button button-admin" href="/admin/archives/add">
              Add to archives
            </a>
          </Link>
          <Link href="/admin/archives/delete">
            <a className="button button-admin" href="/admin/archives/delete">
                Remove from archives
            </a>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default AdminHomePage;
