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
            <Link href="/e-paper">
              <a href="/e-paper">Digital Edition Access</a>
            </Link>
            <Link href="/advertising">
              <a href="/advertising">Advertising</a>
            </Link>
            <Link href="/about">
              <a href="/about">About Us</a>
            </Link>
            <Link href="/contact">
              <a href="/contact">Contact Us</a>
            </Link>
          </div>
        </nav>
        <nav className="lower-nav">
          <div className="wrapper">
            <Link href="/">
              <img src="/updated_logo.png" className="logo" />
            </Link>
            <Link href="/">
              <a href="/">Home</a>
            </Link>
            <a
              target="_blank"
              rel="noopener"
              href="https://www.tnpublicnotice.com/"
            >
              Public Notices
            </a>

            <a
              href="https://www.shackelfordfuneraldirectors.com/obituaries/"
              target="_blank"
              rel="noopener"
            >
              Obituaries
            </a>
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
