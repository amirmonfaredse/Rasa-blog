import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="border-b border-gray-700 px-8 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-4 z-10 text-4xl">LOGO</div>
        <nav className="z-10 ">
        <ul className="flex gap-16 items-center">
          <li className="hover:text-white transition-colors">
            <Link href="/">خانه</Link>
          </li>
          <li>
            <Link href="/services">خدمات من</Link>
          </li>
          <li>
            <Link href="/portfolio">نمونه کار ها</Link>
          </li>
          <li>
            <Link href="/about">درباره من</Link>
          </li>
          <li>
            <Link href="/contact">تماس با من </Link>
          </li>
        </ul>
        </nav>
      </div>
    </div>
  );
}
