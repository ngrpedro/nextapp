import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="p-4 bg-transparent rounded-lg shadow md:px-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Logo
          </span>
          <ul className="flex flex-wrap items-center gap-6 mb-6 text-sm text-gray-300 sm:mb-0">
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
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-300 sm:text-center">
          Pedro Soares . All Rights Reserved.
        </span>
      </footer>
    </>
  );
};

export default Footer;
