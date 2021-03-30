import React from "react";
import Layout from "components/Layout";
import Head from "next/head";
import SubscriptionOptions from "components/SubscriptionOptions";
import SectionHeader from "components/SectionHeader";
import InputGroup from "components/InputGroup";
export default function SubscribePage() {
  const options = {
    pageTitle: true,
    pageTitleText: "Subscribe",
  };
  return (
    <Layout options={options}>
      <Head>
        <title>Subscribe to McNairy County News | McNairy County News</title>
      </Head>
      <form>
        <SectionHeader text="Choose a Subscription" />
        <p>Please select a subscription type.</p>
        <SubscriptionOptions />
        <SectionHeader text="Contact Information" />
        <p>Please enter your contact information into the fields below.</p>
        <InputGroup
          inputName="name"
          inputType="text"
          inputPlaceholder="Full Name"
          labelText="Full Name"
        />
        <InputGroup
          inputName="phone"
          inputType="tel"
          inputPlaceholder="Phone Number"
          labelText="Phone Number"
        />
        <InputGroup
          inputName="email"
          inputType="email"
          inputPlaceholder="Email Address"
          labelText="Email Address"
        />
        <InputGroup
          inputName="address"
          inputType="text"
          inputPlaceholder="Address"
          labelText="Address"
        />
        <InputGroup
          inputName="city"
          inputType="text"
          inputPlaceholder="City"
          labelText="City"
        />
        <InputGroup
          inputPlaceholder="State"
          inputName="state"
          inputType="select"
          labelText="State"
        />
        <InputGroup
          inputName="zip"
          inputType="text"
          inputPlaceholder="Zip Code"
          labelText="Zip Code"
        />
        <button className="button">Proceed to payment</button>
      </form>
    </Layout>
  );
}
