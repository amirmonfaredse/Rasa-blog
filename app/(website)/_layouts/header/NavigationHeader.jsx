"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NavigationHeader = () => {
  const [isMobileMode, setIsMobileMode] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleNavResize = () => {
    setIsMobileMode(window.innerWidth < 768);
  };
  const handleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  useEffect(() => {
    handleNavResize();
    window.addEventListener("resize", handleNavResize);
    return () => {
      window.removeEventListener("resize", handleNavResize);
    };
  }, [isMobileMode]);
  return (
    <nav className="w-[70%] h-fit">
      <Image
        onClick={handleDrawer}
        className="cursor-pointer absolute left-7 top-6"
        style={{
          display: isMobileMode && !drawerOpen ? "block" : "none",
        }}
        src="/svg/humbergurmenu.svg"
        alt="ایکون منو"
        width={24}
        height={24}
      />
      {isMobileMode ? (
        <ul
          style={{
            top: drawerOpen ? "20px" : "-250px",
          }}
          className="w-fit h-[50%] flex flex-col justify-start items-center gap-2 fixed left-4 transition-all duration-300"
        >
          <div className="w-full flex justify-end mb-2 ">
            <div
              onClick={handleDrawer}
              className="w-[40px] h-[40px] flex justify-center items-center bg-gray-800 rounded-full border border-gray-50 cursor-pointer"
            >
              <Image
                src="/svg/close.svg"
                alt="بستن منو"
                width={24}
                height={24}
              />
            </div>
          </div>

          {/* <Link
            href="/"
            className="w-24 h-12 mb-2 flex justify-center items-center bg-gray-50 px-3 py-1 rounded-lg text-gray-600"
          >
            خانه
          </Link> */}

          <Link
            prefetch={true}
            href="/blogs"
            className="w-24 h-12 mb-2 flex justify-center items-center bg-gray-50 px-3 py-1 rounded-lg  text-gray-600"
          >
            وبلاگ
          </Link>

          <Link
            prefetch={true}
            href="/contact"
            className=" w-24 h-12 mb-2 flex justify-center items-center bg-gray-50 px-3 py-1 rounded-lg text-gray-600"
          >
            تماس {isMobileMode ? "" : "با ما"}{" "}
          </Link>
          <Link
            prefetch={true}
            href="/about"
            className=" w-24 h-12 mb-2 flex justify-center items-center bg-gray-50 px-3 py-1 rounded-lg text-gray-600"
          >
            درباره {isMobileMode ? "" : "ما"}{" "}
          </Link>
          {/* <li>
            <Link href="/services">خدمات من</Link>
          </li>
          <li>
            <Link href="/portfolio">نمونه کار ها</Link>
          </li>
          
          */}
        </ul>
      ) : (
        <ul className="flex gap-16 items-center ">
          {/* <li className="hover:text-white transition-colors">
            <Link href="/">خانه</Link>
          </li> */}
          <li className="hover:text-white transition-colors">
            <Link href="/blogs">وبلاگ</Link>
          </li>
          {/* <li>
              <Link href="/services">خدمات من</Link>
            </li>
            <li>
              <Link href="/portfolio">نمونه کار ها</Link>
            </li>
           
            */}
          <li>
            <Link href="/about">درباره ما</Link>
          </li>
          <li>
            <Link href="/contact">تماس با ما </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavigationHeader;
