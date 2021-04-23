import React from "react";
import Link from "next/link";
import InputGroup from "components/InputGroup";
export default function LoginPage() {
    return (
        <main className="layout-container login-container">
            <div className="wrapper">
                <form className="login-box">
                    <h1>Login</h1>
                    <Link href='/'><a href='/'>Go Back</a></Link>
                    <InputGroup inputType="text" inputName="username" inputPlaceholder="username" labelText="Username" />
                    <InputGroup inputType="password" inputName="pass" inputPlaceholder="Password" labelText="Password" />
                    <button className="button" type='submit'>Login</button>
                </form>
            </div>
        </main>
    );
}
