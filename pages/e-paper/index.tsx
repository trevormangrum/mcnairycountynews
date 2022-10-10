import React from "react";
import Layout from "components/Layout";
import SectionHeader from "components/SectionHeader";
import InputGroup from "components/InputGroup";
import { useRouter } from "next/router";
import Loader from "components/Loader";
import Head from "next/head";
export default function EPaperPage() {
  const [code, setCode] = React.useState("");
  const [error, setError] = React.useState({ status: false, message: "" });
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const handleChange = (e: React.SyntheticEvent) => {
    e.persist();
    const target = e.target as HTMLInputElement;
    setCode(target.value);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(code);
    if (code == "") {
      setError({ status: true, message: "Please enter a code." });
      return;
    }
    setError({ status: false, message: "" });
    const response = await fetch("/api/e-paper", {
      method: "POST",
      body: code,
    });
    if (response.status == 200) {
      const data = await response.json();
      if (!data) {
        setLoading(true);
      }
      setLoading(false);
      router.push(data.url);
    } else if (response.status == 400) {
      setError({ status: true, message: "The code you entered was invalid." });
    } else {
      setError({
        status: true,
        message: "Something went wrong. Please try again later.",
      });
    }
  };
  return (
    <Layout>
      <Head>
        <title>Access the Digital Edition | McNairy County News</title>
        <meta
          name="description"
          content="This page allows digital edition subscribers to access the digital edition of MCN."
        />
      </Head>
      <SectionHeader text={"Digital Edition Access"} />
      <p>
        Here, if you are a subscriber, you can access the digital edition of
        McNairy County News. Enter the code that you received via email into the
        field below to access the digital edition of the paper.
      </p>
      <InputGroup
        inputType="text"
        labelText="Digital Access Code"
        inputName="code"
        inputPlaceholder="Enter code here..."
        value={code}
        handleChange={handleChange}
      />
      <button className="button" onClick={handleSubmit} disabled={loading}>
        Submit Code
      </button>
      {loading && <Loader />}
      {error.status && <p style={{ color: "red" }}>{error.message}</p>}
    </Layout>
  );
}
