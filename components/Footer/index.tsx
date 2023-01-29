import React from "react";
import Link from "next/link";
const Footer: React.FC = () => {
  return (
    <footer className="mt-auto w-full flex flex-col items-center text-white bg-secondary">
      <div className="w-full max-w-screen-xl flex flex-row justify-evenly flex-wrap overflow-wrap">
        <div className="flex flex-col items-start min-h-[300px]">
          <h2 className="font-normal uppercase text-2xl mt-2">
            McNairy County News
          </h2>
          <Link
            className="no-underline text-white brightness-75 my-1"
            href="/subscribe"
          >
            Subscribe
          </Link>
          <Link
            className="no-underline text-white brightness-75 my-1"
            href="/advertising"
          >
            Advertising
          </Link>
          <Link
            className="no-underline text-white brightness-75 my-1"
            href="/login"
          >
            Login
          </Link>
        </div>
        <div className="flex flex-col items-start min-h-[300px]">
          <h2 className="font-normal uppercase text-2xl mt-2">
            County Information
          </h2>
          <a
            className="no-underline text-white brightness-75 my-1"
            target="_blank"
            rel="noopener"
            href="https://www.tnpublicnotice.com/"
          >
            Public Notices
          </a>
          <a
            className="no-underline text-white brightness-75 my-1"
            href="https://www.shackelfordfuneraldirectors.com/obituaries/"
            target="_blank"
            rel="noopener"
          >
            Obituaries
          </a>
        </div>
        <div className="flex flex-col items-start min-h-[300px]">
          <h2 className="font-normal text-2xl uppercase mt-2">About</h2>
          <Link
            className="no-underline text-white brightness-75 my-1"
            href="/about"
          >
            About Us
          </Link>
          <Link
            className="no-underline text-white brightness-75 my-1"
            href="/contact"
          >
            Contact Us
          </Link>
          <Link
            className="no-underline text-white brightness-75 my-1"
            href="/privacy"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
      <div className="max-w-screen-xl w-full flex flex-row justify-end items-center text-right self-center">
        <span className="my-1">
          Website by{" "}
          <a
            className="no-underline text-white brightness-75 my-1"
            href="https://mangrumtech.com"
          >
            Mangrum Tech
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
