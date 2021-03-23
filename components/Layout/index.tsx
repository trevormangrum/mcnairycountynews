import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import Sidebar from "components/Sidebar";

const Layout: React.FC = ({children}) => {
    return( 
     <main className="layout-container">
         <Header />
         <div className="layout-grid">
             <section className="content">
                 {children}
             </section>
             <Sidebar />
         </div>
         <Footer />
     </main>
    );
};


export default Layout;

