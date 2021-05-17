import React from "react";
import Layout from "components/Layout";
import Head from "next/head";
import SubscriptionOptions from "components/SubscriptionOptions";
import SectionHeader from "components/SectionHeader";
import InputGroup from "components/InputGroup";
//TODO: Remove everything from form except for DOB, Veteran, SubOption. Gonna have to get creative on how to display the second button.
interface IFormValues {
  fname?: string | undefined;
  lname?: string | undefined;
  phone?: string | undefined;
  email?: string | undefined;
  subOption: string | undefined;
  dob?: string | undefined;
  state?: string | undefined;
  address?: string | undefined;
  zip?: string | undefined;
  submissionError?: boolean | undefined;
  [key: string]: string | boolean | null | undefined;
}
export default function SubscribePage() {
  const options = {
    pageTitle: true,
    pageTitleText: "Subscribe",
  };
  const [values, setValues] = React.useState({} as IFormValues);
  const [token, setToken] = React.useState("");

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
    for (let key in values) {
      //If there's a key in the values object that has no value, then we return and display an error.
      if (!values[key]) {
        setValues(values => ({ ...values, ["submissionError"]: true }));
        return;
      }
    }
    const response = await fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify(values),
    });
    if (response.status === 200) {
      const data = await response.json();
      setToken(data.payload);
    }
    if (response.status === 500) {
      console.error("BAD");
    }
  };
  return (
    <Layout options={options}>
      <Head>
        <title>Subscribe to McNairy County News | McNairy County News</title>
      </Head>
      <form>
        <SectionHeader text="Choose a Subscription" />
        <p>Please select a subscription type.</p>
        <SubscriptionOptions setValues={setValues} />
        <SectionHeader text="Contact Information" />
        <p>Please enter your contact information into the fields below.</p>
        <InputGroup
          inputName="fname"
          inputType="text"
          inputPlaceholder="First Name"
          labelText="First Name"
          value={values.fname}
          handleChange={handleChange}
        />
        <InputGroup
          inputName="lname"
          inputType="text"
          inputPlaceholder="Last Name"
          labelText="Last Name"
          value={values.lname}
          handleChange={handleChange}
        />
        <InputGroup
          inputName="phone"
          inputType="tel"
          inputPlaceholder="Phone Number"
          labelText="Phone Number"
          value={values.phone}
          handleChange={handleChange}
        />
        <InputGroup
          inputName="email"
          inputType="email"
          inputPlaceholder="Email Address"
          labelText="Email Address"
          value={values.email}
          handleChange={handleChange}
        />
        <InputGroup
          inputName="dob"
          inputType="date"
          inputPlaceholder="Date of Birth"
          labelText="Date of Birth"
          value={values.dob}
          handleChange={handleChange}
        />
        <InputGroup
          inputName="address"
          inputType="text"
          inputPlaceholder="Address"
          labelText="Address"
          value={values.address}
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
          inputName="city"
          inputType="text"
          inputPlaceholder="City"
          labelText="City"
          value={values.city}
          handleChange={handleChange}
        />
        <InputGroup
          inputPlaceholder="State"
          inputName="state"
          inputType="select"
          labelText="State"
          value={values.state}
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
          Proceed to payment
        </button>
      </form>
      {token != "" && (
        <form method="POST" action="https://test.authorize.net/payment/payment">
          <input type="hidden" name="token" value={token} />
          <button type="submit" className="button">
            Generate the form
          </button>
        </form>
      )}
    </Layout>
  );
}
