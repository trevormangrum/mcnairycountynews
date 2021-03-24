import React from "react";
import Link from "next/link";
const Footer: React.FC = () => {
    return( 
        <footer className="footer">
            <div className="wrapper">
                <div className="footer-section">
                    <h2 className="footer-header">McNairy County News</h2>
                    <Link href="/categories/news"><a className="footer-link" href="">News</a></Link>
                    <Link href="/categories/news"><a className="footer-link" href="">Sports</a></Link>
                    <Link href="/subscribe"><a className="footer-link" href="">Subscribe</a></Link>
                    <Link href="/archives"><a className="footer-link" href="">Archives</a></Link>
                    <Link href="/advertising"><a className="footer-link" href="">Advertising</a></Link>
                </div>
                <div className="footer-section">
                    <h2 className="footer-header">County Information</h2>
                    <Link href="/events"><a className="footer-link" href="">Events</a></Link>
                    <Link href="#"><a className="footer-link" href="">Public Notices</a></Link>
                    <Link href="#"><a className="footer-link" href="">Obituaries</a></Link>
                </div>
                <div className="footer-section">
                    <h2 className="footer-header">About</h2>
                    <Link href="/about"><a className="footer-link" href="">About Us</a></Link>
                    <Link href="/contact"><a className="footer-link" href="">Contact Us</a></Link>
                    <Link href="/privacy"><a className="footer-link" href="">Privacy Policy</a></Link>
                </div>
            </div>
            <div className="wrapper">
                <span>Website by <a className="footer-link" href="https://mangrumtech.com">Mangrum Tech</a></span>
            </div>
        </footer>
    );
}

export default Footer;
