import React from "react";
import Link from "next/link";
import InputGroup from "components/InputGroup";
import urls from "utils/urls";
import { NextPageContext } from "next";
export default function LoginPage() {
  const [values, setValues] = React.useState({});
  const handleChange = (e: React.SyntheticEvent) => {
    e.persist();
    setValues(values => ({ ...values, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const response = await fetch(`${urls.baseUrl}${urls.api.login}`, {
      method: "POST",
      body: JSON.stringify(values),
    });
    if (response.status === 200) window.location.reload();
  };

  return (
    <main className="layout-container login-container">
      <div className="wrapper">
        <form className="login-box" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <Link href="/">
            <a href="/">Go Back</a>
          </Link>
          <InputGroup
            inputType="text"
            inputName="username"
            inputPlaceholder="username"
            labelText="Username"
            value={values.username}
            handleChange={handleChange}
          />
          <InputGroup
            inputType="password"
            inputName="pass"
            inputPlaceholder="Password"
            labelText="Password"
            value={values.password}
            handleChange={handleChange}
          />
          <button className="button" type="submit">
            Login
          </button>
        </form>
      </div>
    </main>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  //Code comes from mindversity website. https://github.com/hack4impact-utk/mindversity-website/blob/develop/pages/portal/index.tsx
  const cookie = context.req?.headers.cookie;
  const resp = await fetch(`${urls.baseUrl}${urls.api.admin.validate}`, {
    headers: {
      cookie: cookie!,
    },
  });
  //If the cookie is present and valid, redirect to the admin page.
  if (resp.status === 200 && context.req) {
    return { 
      redirect: {
        permanent: false,
        destination: `${urls.baseUrl}${urls.pages.admin.index}`,
    }
    };
  }
  return { props: {} };
}
