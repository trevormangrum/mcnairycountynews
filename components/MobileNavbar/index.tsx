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
      <Link href="/archives">
        <a href="/archives">Archives</a>
      </Link>
<<<<<<< HEAD
      <a target="_blank" rel="noopener" href="https://www.tnpublicnotice.com/">
        Public Notices
      </a>
=======
      <a href="https://www.tnpublicnotice.com/">Public Notices</a>

>>>>>>> 569b7608057bf008a45c3e704cc1eacb3aaeef1e
      <Link href="#">
        <a href="">Obituaries</a>
      </Link>
      <Link href="/login">
        <a href="/login">Login</a>
      </Link>
    </nav>
  );
};
export default MobileNavbar;
