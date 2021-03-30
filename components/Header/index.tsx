import React from "react";
import Link from "next/link";
import { useState } from "react";
import MobileNavbar from "components/MobileNavbar";
const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="navigation">
      <div className="container">
        <nav className="upper-nav">
          <div className="wrapper">
            <Link href="/advertising">
              <a href="/advertising">Advertising</a>
            </Link>
            <Link href="/archives">
              <a href="/archives">Archives</a>
            </Link>
            <Link href="/about">
              <a href="/about">About Us</a>
            </Link>
            <Link href="/contact">
              <a href="/contact">Contact Us</a>
            </Link>
            <Link href="/login">
              <a href="/login">Login</a>
            </Link>
          </div>
        </nav>
        <nav className="lower-nav">
          <div className="wrapper">
            <Link href="/">
              <img src="mcnsvg.svg" className="logo" />
            </Link>
            <Link href="/">
              <a href="/">Home</a>
            </Link>
            <a href="https://www.tnpublicnotice.com/">Public Notices</a>

            <Link href="#">
              <a href="">Obituaries</a>
            </Link>
            <Link href="/subscribe">
              <a href="/subscribe">Subscribe</a>
            </Link>
            <div className="nav-button" onClick={() => setOpen(!open)}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <MobileNavbar open={open} />
        </nav>
      </div>
      <div className="spacer"></div>
    </header>
  );
};

export default Header;
