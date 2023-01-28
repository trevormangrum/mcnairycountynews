import React from "react";
import Link from "next/link";
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer-section">
          <h2 className="footer-header">McNairy County News</h2>
          <Link href="/subscribe">Subscribe</Link>
          <Link href="/advertising">Advertising</Link>
          <Link href="/login">Login</Link>
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
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/privacy">Privacy Policy</Link>
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
