import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import Sidebar from "components/Sidebar";

interface Props {
  options?: {
    pageTitle: boolean;
    pageTitleText: string;
  };
}
const Layout: React.FC<Props> = ({ options, children }) => {
  return (
    <main className="w-full min-h-screen flex flex-col">
      <Header />
      <div className="layout-grid">
        <section className="content">
          {options && options.pageTitle && (
            <h1 className="page-header">{options.pageTitleText}</h1>
          )}
          {children}
        </section>
        <Sidebar pageTitle={options && options.pageTitle ? true : false} />
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
