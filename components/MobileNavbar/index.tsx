import React from "react";
import Link from "next/link";
interface Props {
  open: boolean;
}
const MobileNavbar: React.FC<Props> = ({ open }) => {
  return (
    <nav
      className="mobile-navbar"
      style={open ? { right: 0 } : { right: "-100%" }}
    >
      <Link href="/">
        <a href="/">Home</a>
      </Link>
      <Link href="/about">
        <a href="">About Us</a>
      </Link>
      <Link href="/contact">
        <a href="/contact">Contact Us</a>
      </Link>
      <Link href="/subscribe">
        <a href="/subscribe">Subscribe</a>
      </Link>
      <Link href="/advertising">
        <a href="/advertising">Advertising</a>
      </Link>
      {/* <Link href="/archives"> */}
      {/*   <a href="/archives">Archives</a> */}
      {/* </Link> */}

      <a target="_blank" rel="noopener" href="https://www.tnpublicnotice.com/">
        Public Notices
      </a>

      <a
        target="_blank"
        rel="noopener"
        href="https://www.shackelfordfuneraldirectors.com/obituaries/"
      >
        Obituaries
      </a>
    </nav>
  );
};
export default MobileNavbar;
