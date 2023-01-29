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
    <main className="w-full min-h-screen flex flex-col bg-[#f0f7fc]">
      <Header />
      <div className="w-full max-w-screen-xl self-center grid gap-10 justify-center grid-cols-1 mb-10 md:grid-cols-layout">
        <section className="flex flex-col">
          {options && options.pageTitle && (
            <h1 className="text-text-primary font-light text-3xl tracking-wide">
              {options.pageTitleText}
            </h1>
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
