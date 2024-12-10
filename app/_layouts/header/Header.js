import Link from "next/link";
import React from "react";

export default function Header({ children }) {
  return (
    <div className="bg-purple-100 text-blue-700">
      <div
        style={{
          width: "100%",
          height: 40,
          backgroundColor: "yellow",
        }}
      >
        <ul
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            columnGap: 10,
          }}
        >
          <li>
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
      </div>

      {children}
    </div>
  );
}
