import React from "react";
import Link from "next/link";
const Header: React.FC = () => {
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
            <Link href="/categories/news">
              <a href="/categories/news">News</a>
            </Link>
            <Link href="/categories/sports">
              <a href="/categories/sports">Sports</a>
            </Link>
            <Link href="#">
              <a href="">Public Notices</a>
            </Link>
            <Link href="#">
              <a href="">Obituaries</a>
            </Link>
            <Link href="/subscribe">
              <a href="/subscribe">Subscribe</a>
            </Link>
            <div className="nav-button">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </nav>
      </div>
      <div className="spacer"></div>
    </header>
  );
};

export default Header;
