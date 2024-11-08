import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav className="sticky bg-white top-0 w-full flex justify-between items-center text-center border-b-2 border-gray p-6">
        <Link className="text-xl font-bold" href="/">
          Mark McGuire
        </Link>
        <div className="flex gap-5 font-medium">
          <Link className="opacity-80 hover:opacity-100" href="/">
            Home
          </Link>
          <Link className="opacity-80 hover:opacity-100" href="/blogs">Blogs</Link>
          <Link className="opacity-80 hover:opacity-100" href="/resume">Resume</Link>
          <Link className="opacity-80 hover:opacity-100" href="/about">Contact Me</Link>
        </div>
      </nav>
    </header>
  );
}
