"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import NavbarMobile from "./NavbarMobile";
import { useState } from "react";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className="px-4 py-4 absolute z-10 w-full animate-from-top">
      <nav className="flex relative z-20 items-center justify-between max-container px-4">
        <Link href={"/#home"} className="text-primary font-bold text-[1.5rem]">
          KANKY
        </Link>

        <ul className="flex gap-4 items-center text-slate-500 max-lg:hidden">
          <li>
            <Link href={"/#home"} className="hover-navigation">
              Home
            </Link>
          </li>
          <li>
            <Link href={"/#about-us"} className="hover-navigation">
              About Us
            </Link>
          </li>

          <li>
            <Link href={"/#products"} className="hover-navigation">
              Products
            </Link>
          </li>

          <li>
            <Link href={"/#contact-us"} className="hover-navigation">
              Contact Us
            </Link>
          </li>
        </ul>

        <a
          target="_blank"
          href={"https://www.instagram.com/sepatukanky/"}
          className="max-lg:hidden"
        >
          Explore Now
        </a>

        <div
          className="hidden max-lg:block cursor-pointer"
          onClick={() => setToggleMenu((togle) => !togle)}
        >
          {toggleMenu ? <X /> : <Menu />}
        </div>
      </nav>
      <NavbarMobile toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
    </header>
  );
}
