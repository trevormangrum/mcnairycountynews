import React from "react";
import Layout from "components/Layout";
import SectionHeader from "components/SectionHeader";
import InputGroup from "components/InputGroup";
export default function EPaperPage() {
  const [code, setCode] = React.useState("");
  const [error, setError] = React.useState({ status: false, message: "" });

  const handleChange = (e: React.SyntheticEvent) => {
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
    const response = await fetch("/api/e-paper", {
      method: "POST",
      body: code,
    });
  };
  return (
    <Layout>
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
      <button className="button" onClick={handleSubmit}>
        Submit Code
      </button>
      {error.status && <p style={{ color: "red" }}>{error.message}</p>}
    </Layout>
  );
}
