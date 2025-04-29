"use client";

import Image from "next/image";
import Link from "next/link";

function NavLink({ src, alt, title, href = "/" }) {
  return (
    <Link
      href={href}
      className="w-full h-full mb-2 flex justify-center items-center gap-2  md:shadow hover:shadow-2xl hover:rounded-3xl transition-all duration-500"
    >
      <Image alt={alt} src={src} width={25} height={25} className=" " />

      <h1 className="text-md">{title}</h1>
    </Link>
  );
}

function NavList({ drawerOpen ,isMobileMode}) {
  return (
    <ul
      style={{
        backgroundColor: drawerOpen
          ? "rgb(75 73 101 / var(--tw-bg-opacity, 1))"
          : "transparent",
      }}
      className="flex flex-col md:flex md:flex-row relative bg-opacity-5 md:bg-opacity-0 px-2 py-4 md:bg-none md:p-0 justify-start md:justify-center gap-3 md:gap-10 items-center transition-all duration-300 delay-150"
    >
      <li
        style={{ left: isMobileMode && (drawerOpen ? 0 : "-200px") }}
        className="w-24 h-12 relative bg-ghost-100 shadow md:shadow-none duration-300"
      >
        <NavLink
          title="خانه"
          src="/header/navigation/home.svg"
          alt="لینک بازگشت به خانه"
        />
      </li>
      <li
        style={{ left: isMobileMode && (drawerOpen ? 0 : "-200px") }}
        className="w-24 h-12 relative bg-ghost-100 shadow md:shadow-none duration-300 delay-100"
      >
        <NavLink
          title="بلاگ"
          src="/header/navigation/blog.svg"
          alt="لینک ورود به وبلاگ"
        />
      </li>
      <li
        style={{ left: isMobileMode && (drawerOpen ? 0 : "-200px") }}
        className="w-24 h-12 relative bg-ghost-100 shadow md:shadow-none duration-300 delay-150"
      >
        <NavLink
          title="درباره"
          src="/header/navigation/about.svg"
          alt="لینک ورود به صفحه درباره ما"
        />
      </li>
      <li
        style={{ left: isMobileMode && (drawerOpen ? 0 : "-200px") }}
        className="w-24 h-12 relative bg-ghost-100 shadow md:shadow-none duration-300 delay-200"
      >
        <NavLink
          title="تماس"
          src="/header/navigation/contact.svg"
          alt="لینک ورود به صفحه تماس"
        />
      </li>
    </ul>
  );
}

export default NavList;
