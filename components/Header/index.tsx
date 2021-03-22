import React from "react";
import Link from "next/link";
const Header: React.FC = () => {
    return( 
    <header className="navigation">
        <div className="container">
            <nav className="upper-nav">
                <div className="wrapper">
                    <Link href="#"><a href="">Advertising</a></Link>
                    <Link href="#"><a href="">Archives</a></Link>
                    <Link href="#"><a href="">About Us</a></Link>
                    <Link href="#"><a href="">Contact Us</a></Link>
                    <Link href="#"><a href="">Login</a></Link>
                </div>
            </nav>
            <nav className="lower-nav">
                <div className="wrapper">
                    <Link href="#"><a href="">Home</a></Link>
                    <Link href="#"><a href="">News</a></Link>
                    <Link href="#"><a href="">Sports</a></Link>
                    <Link href="#"><a href="">Public Notices</a></Link>
                    <Link href="#"><a href="">Obituaries</a></Link>
                    <Link href="#"><a href="">Subscribe</a></Link>
                </div>
            </nav>
        </div>
            <div className="spacer"></div>
    </header>
      );
};



export default Header;
