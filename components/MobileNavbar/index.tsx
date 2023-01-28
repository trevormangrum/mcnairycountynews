import React from "react";
import Link from "next/link";
interface Props {
  open: boolean;
}
const MobileNavbar: React.FC<Props> = ({ open }) => {
  return (
    <nav
      className="absolute flex flex-col flex-wrap w-full h-screen bg-white z-[1001] md:hidden ease-in-out duration-300"
      style={open ? { right: 0 } : { right: "-100%" }}
    >
      <div className="pt-[120px] flex flex-col flex-wrap overflow-y-auto max-h-screen">
        <Link
          href="/"
          className="text-text-primary self-end no-underline text-[20px] mr-5 mb-10 ease duration-300 hover:text-primary"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-text-primary self-end no-underline text-[20px] mr-5 mb-10 ease duration-300 hover:text-primary"
        >
          About Us
        </Link>
        <Link
          href="/contact"
          className="text-text-primary self-end no-underline text-[20px] mr-5 mb-10 ease duration-300 hover:text-primary"
        >
          Contact Us
        </Link>
        <Link
          href="/subscribe"
          className="text-text-primary self-end no-underline text-[20px] mr-5 mb-10 ease duration-300 hover:text-primary"
        >
          Subscribe
        </Link>
        <Link
          href="/advertising"
          className="text-text-primary self-end no-underline text-[20px] mr-5 mb-10 ease duration-300 hover:text-primary"
        >
          Advertising
        </Link>
        <Link
          href="/e-paper"
          className="text-text-primary self-end no-underline text-[20px] mr-5 mb-10 ease duration-300 hover:text-primary"
        >
          Digital Edition Access
        </Link>

        <a
          target="_blank"
          rel="noopener"
          href="https://www.tnpublicnotice.com/"
          className="text-text-primary self-end no-underline text-[20px] mr-5 mb-10 ease duration-300 hover:text-primary"
        >
          Public Notices
        </a>

        <a
          target="_blank"
          rel="noopener"
          href="https://www.shackelfordfuneraldirectors.com/obituaries/"
          className="text-text-primary self-end no-underline text-[20px] mr-5 mb-10 ease duration-300 hover:text-primary"
        >
          Obituaries
        </a>
      </div>
    </nav>
  );
};
export default MobileNavbar;
