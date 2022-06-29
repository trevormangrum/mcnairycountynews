import React from "react";
import Layout from "components/Layout";
import Head from "next/head";
import SubscriptionOptions from "components/SubscriptionOptions";
import SectionHeader from "components/SectionHeader";
import InputGroup from "components/InputGroup";
import urls from "utils/urls";
interface IFormValues {
  subOption: string;
  dob?: string;
  veteran?:  string; // Yes or No
  //Used to determine price if in state/out of state.
  state?: string;
  address?: string;
  zip?: string;
  gift?: string;
  renewal?: string;
  submissionError?: boolean; 
  [key: string]: string | boolean | null | undefined;
}
export default function SubscribePage() {
  const options = {
    pageTitle: true,
    pageTitleText: "Subscribe",
  };
  const [values, setValues] = React.useState({} as IFormValues);
  const [token, setToken] = React.useState("");
  const [subCost, setSubCost] = React.useState("");

  const handleChange = (e: React.SyntheticEvent) => {
    e.persist();
    const target = e.target as HTMLInputElement;

    if (target != null) {
      setValues(values => ({
        ...values,
        [target.name]: target.value,
      }));
    }
  };
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    //Clear the submission error before attempting to submit again.
    if (values.submissionError) {
      delete values.submissionError;
    }
    console.log(values)
      //If there's a key in the values object that has no value, then we return and display an error.
      if (!values["zip"] || !values["subOption"] || 
          !values["dob"] || !values["veteran"] || 
          !values["renewal"] ||
          !values["gift"]) {
          console.log("error");
        setValues(values => ({ ...values, ["submissionError"]: true }));
        return;
      }
    const response = await fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify(values),
    });
    if (response.status === 200) {
      const data = await response.json();
      //Set the token needed to redirect to the payment form here.
      setToken(data.payload.token);
      setSubCost(data.payload.cost);
    }
    if (response.status === 500) {
      console.error("BAD");
    }
  };
  return (
    <Layout options={options}>
      <Head>
        <title>Subscribe to McNairy County News | McNairy County News</title>
        <meta name="description" content="McNairy County News offers physical and digital subscription services. Subscribe today to receive McNairy County News weekly! "/>
      </Head>
      <form>
        <SectionHeader text="Choose a Subscription" />
        <p>Please select a subscription type.</p>
        <SubscriptionOptions setValues={setValues} />
        <SectionHeader text="Discount Information" />
        <p>Please fill out the fields below. You may qualify for a discount on your subscription.</p>
        <InputGroup
          inputName="dob"
          inputType="date"
          inputPlaceholder="Date of Birth"
          labelText="Date of Birth"
          value={values.dob}
          handleChange={handleChange}
        />
        <InputGroup
          inputName="veteran"
          inputType="radio"
          inputPlaceholder="I am a veteran."
          labelText="Are you a veteran?"
          value={values.veteran}
          handleChange={handleChange}
        />
        <InputGroup
          inputName="gift"
          inputType="radio"
          inputPlaceholder="Yes"
          labelText="Is this a gift?"
          value={values.gift}
          handleChange={handleChange}
        />
        <InputGroup
          inputName="renewal"
          inputType="radio"
          inputPlaceholder="Yes"
          labelText="Are you renewing your subscription?"
          value={values.renewal}
          handleChange={handleChange}
        />
        <InputGroup
          inputName="zip"
          inputType="text"
          inputPlaceholder="Zip Code"
          labelText="Zip Code"
          value={values.zip}
          handleChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit} className="button">
          Continue
        </button>
        {values.submissionError && (
        <p>Error submitting form. Please ensure that all fields have been filled out.</p>
        )}
      </form>
      {token != "" && (
        <form method="POST" action={urls.authorizeSubscribe}>
          <SectionHeader text="Proceed to Payment" />
          <p>Your subscription cost will be: ${subCost}. Clicking the button below will redirect you to the checkout screen, hosted by Authorize.Net. <b>NOTE: If you are purchasing as a gift, please enter the address of the gift recipient into the shipping address fields.</b></p>
          <input type="hidden" name="token" value={token} />
          <button type="submit" className="button">
            Proceed to payment
          </button>
        </form>
      )}
    </Layout>
  );
}
