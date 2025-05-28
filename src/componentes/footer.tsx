"use client";

import Link from "next/link";
import { Logo } from "./logo";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link href="/" className="flex items-center text-white no-underline">
          <Logo />
          <span className="ml-2 text-[20px] font-bold leading-7 text-white">
            Pandem
          </span>
        </Link>

        <nav>
  <ul className="flex items-center p-0 m-0 list-none">
    <li className="mr-8 last:mr-0">
      <Link
        href="/"
        className="text-white text-sm hover:opacity-80 transition-opacity no-underline"
      >
        Contact Us
      </Link>
    </li>
    <li>
      <Link
        href="/"
        className="text-white text-sm hover:opacity-80 transition-opacity no-underline"
      >
        Terms of Service
      </Link>
    </li>
  </ul>
</nav>

      </div>
    </footer>
  );
}
