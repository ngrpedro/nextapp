import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="py-4 bg-transparent md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between px-6">
          <span className="self-center text-2xl font-semibold whitespace-nowrap block pb-6 sm:pb-0">
          EcoPlural
          </span>
          <ul className="flex flex-wrap items-center gap-6 mb-6 text-sm text-gray-800 sm:mb-0">
            <li>
              <Link href="/" className="hover:underline transition-all ">
                About
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline transition-all">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline transition-all ">
                Licensing
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline transition-all">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-600 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-800 sm:text-center">
           DispplayWeb . All Rights Reserved.
        </span>
      </footer>
    </>
  );
};

export default Footer;