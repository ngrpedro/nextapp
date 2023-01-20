import Link from "next/link";
import { CaretDown, Hamburger, List } from "phosphor-react";
import React, { useState } from "react";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  const [openMenu, setOpenMenu] = useState();

  return (
    <div className="py-4 mb-4 flex items-center justify-between border-b border-gray-500">
      <span className="text-2xl font-semibold whitespace-nowrap">
        <Link
          href="/"
          className="text-3xl tracking-tight font-extrabold text-pink-600"
        >
          EcoPlural
        </Link>
      </span>
      <div className="dropdown dropdown-end block md:hidden cursor-pointer">
        <label
          tabIndex={0}
          className="btn m-1 bg-transparent border-none text-gray-900 hover:bg-transparent"
        >
          <List size={22} />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            {session ? (
              <button onClick={() => signOut()} className="btn text-white">
                Sair
              </button>
            ) : (
              <Link href="/auth/login" className="btn text-white">
                Entrar
              </Link>
            )}
          </li>
        </ul>
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
        <li>
          {session ? (
            <button onClick={() => signOut()} className="btn">
              Sair
            </button>
          ) : (
            <Link href="/auth/login" className="btn">
              Entrar
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
