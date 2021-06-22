import React from "react";
import Link from "next/link";
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer-section">
          <h2 className="footer-header">McNairy County News</h2>
          <Link href="/subscribe">
            <a className="footer-link" href="">
              Subscribe
            </a>
          </Link>
          {/* <Link href="/archives"><a className="footer-link" href="">Archives</a></Link> */}
          <Link href="/advertising">
            <a className="footer-link" href="">
              Advertising
            </a>
          </Link>
          <Link href="/login">
            <a className="footer-link" href="">
              Login
            </a>
          </Link>
        </div>
        <div className="footer-section">
          <h2 className="footer-header">County Information</h2>
          <a
            className="footer-link"
            target="_blank"
            rel="noopener"
            href="https://www.tnpublicnotice.com/"
          >
            Public Notices
          </a>
          <a
            className="footer-link"
            href="https://www.shackelfordfuneraldirectors.com/obituaries/"
            target="_blank"
            rel="noopener"
          >
            Obituaries
          </a>
        </div>
        <div className="footer-section">
          <h2 className="footer-header">About</h2>
          <Link href="/about">
            <a className="footer-link" href="">
              About Us
            </a>
          </Link>
          <Link href="/contact">
            <a className="footer-link" href="">
              Contact Us
            </a>
          </Link>
          <Link href="/privacy">
            <a className="footer-link" href="">
              Privacy Policy
            </a>
          </Link>
        </div>
      </div>
      <div className="wrapper">
        <span>
          Website by{" "}
          <a className="footer-link" href="https://mangrumtech.com">
            Mangrum Tech
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
