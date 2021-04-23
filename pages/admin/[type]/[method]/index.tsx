import React from "react";
import { useRouter } from "next/router";
import Header from "components/Header";
import Footer from "components/Footer";
import SectionHeader from "components/SectionHeader";
import InputGroup from "components/InputGroup";
export default function AdminWorkPage() {
  const router = useRouter();
  const { type, method } = router.query;
  //Use GraphQL query to fetch from backend.
  const data = type === "archives" ? "woof" : "meow";

  return (
    <main className="admin-page">
      <Header />
      <div className="admin-wrapper">
        <SectionHeader text={`${method} ${method != "update" ? (method == "delete" ? "from" : "to") : ""} ${type}`} />
        <InputGroup inputType="search" inputName="search" inputPlaceholder={`Search for ${type}...`} labelText="Search" />

      </div>
      <Footer />
    </main>
  )
}
