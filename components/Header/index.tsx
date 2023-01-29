import React from "react";
import Link from "next/link";
import { useState } from "react";
import MobileNavbar from "components/MobileNavbar";
import Image from "next/image";
const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="flex flex-col z-1000">
      <div className="fixed inset-0 w-full h-fit">
        <nav className="hidden md:flex flex-row w-full justify-center bg-primary">
          <div className="w-full max-w-screen-xl flex flex-row justify-end items-center self-center text-right">
            <Link className="no-underline mx-5 my-0 text-white" href="/e-paper">
              Digital Edition Access
            </Link>
            <Link
              className="no-underline mx-5 my-0 text-white"
              href="/advertising"
            >
              Advertising
            </Link>
            <Link className="no-underline mx-5 text-white" href="/about">
              About Us
            </Link>
            <Link className="no-underline ml-5  text-white" href="/contact">
              Contact Us
            </Link>
          </div>
        </nav>
        <nav className="flex flex-row w-full font-semibold justify-center opacity-90 md:border-none bg-white border-solid border-t-4 border-primary">
          <div className="w-full max-w-screen-xl flex flex-row justify-end items-center self-center text-right">
            <Link href="/" className="w-200 h-70 mr-auto ml-5">
              <Image
                src="/updated_logo.png"
                alt="MCN Logo"
                width={200}
                height={70}
                className="w-full h-20"
              />
            </Link>
            <Link
              className="hidden md:block no-underline mx-5 text-text-primary text-right"
              href="/"
            >
              Home
            </Link>
            <a
              target="_blank"
              rel="noopener"
              className="hidden md:block no-underline mx-5 text-text-primary"
              href="https://www.tnpublicnotice.com/"
            >
              Public Notices
            </a>

            <a
              href="https://www.shackelfordfuneraldirectors.com/obituaries/"
              target="_blank"
              rel="noopener"
              className="hidden md:block no-underline mx-5 text-text-primary"
            >
              Obituaries
            </a>
            <Link
              href="/subscribe"
              className="hidden md:block no-underline ml-5 text-text-primary"
            >
              Subscribe
            </Link>
            <div
              className="md:hidden self-center flex flex-col justify-center w-10 h-20 mx-20 z-[1002] cursor-pointer relative"
              onClick={() => setOpen(!open)}
            >
              <div className="w-full h-1 mb-1 bg-primary"></div>
              <div className="w-full h-1  bg-primary"></div>
              <div className="w-full h-1 mt-1 bg-primary"></div>
            </div>
          </div>
          <MobileNavbar open={open} />
        </nav>
      </div>
      <div className="w-full h-[120px]"></div>
    </header>
  );
};

export default Header;
