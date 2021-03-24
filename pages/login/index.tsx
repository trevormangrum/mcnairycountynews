import React from "react";
import Link from "next/link";

export default function LoginPage() {
    return (
        <main className="layout-container login-container">
            <div className="wrapper">
                <form className="login-box">
                    <h1>Login</h1>
                    <Link href='/'><a href='/'>Go Back</a></Link>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" placeholder="Email Address" />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="Password" />
                    <button className="button" type='submit'>Login</button>
                </form>
            </div>
        </main>
    );
}
