import Link from "next/link";
import { CaretDown } from "phosphor-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="py-4 px-6 mb-4 flex items-center justify-between border border-gray-500 rounded-lg shadow-md">
      Logo
      <ul className="flex items-center justify-center gap-6">
        <li className="font-semibold hover:text-gray-200 transition-colors">
          <Link href="/">Home</Link>
        </li>
        <li className="font-semibold hover:text-gray-200 transition-colors">
          <Link href="/">About</Link>
        </li>
        <li className="font-semibold hover:text-gray-200 transition-colors">
          <Link href="/" className="flex items-center justify-center gap-2">
            Discover <CaretDown size={16} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
