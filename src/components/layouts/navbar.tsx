import Link from "next/link";
import { CaretDown, Hamburger, List } from "phosphor-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="py-4 px-6 mb-4 flex items-center justify-between border-b border-gray-500">
      <span className="text-2xl font-semibold whitespace-nowrap">
        <Link href="/">EcoPlural</Link>
      </span>
      <div className="block md:hidden cursor-pointer">
        <List size={22} />
      </div>
      <ul className="items-center justify-center gap-6 hidden md:flex">
        <li className="font-semibold hover:text-gray-400 transition-colors">
          <Link href="/">Home</Link>
        </li>
        <li className="font-semibold hover:text-gray-400 transition-colors">
          <Link href="/">About</Link>
        </li>
        <li className="font-semibold hover:text-gray-400 transition-colors">
          <Link href="/" className="flex items-center justify-center gap-2">
            Discover <CaretDown size={16} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
