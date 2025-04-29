"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import NavList from "./NavList";

const NavigationHeader = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isMobileMode, setIsMobileMode] = useState(window.innerWidth < 768);
  // CHANGE
  // use memo And Callback Here for Optimizing
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) setIsMobileMode(true);
      if (window.innerWidth >= 768) setIsMobileMode(false);
    });
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
  }, [isMobileMode]);

  const handleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const handleSearchBox = () => {
    setShowSearch(!showSearch);
  };
  return (
    <nav className="flex flex-col-reverse  md:flex-row md:h-16 px-3 fixed bottom-0 left-0 md:relative ">
      <div className="w-full h-fit flex md:hidden justify-end items-center z-50">
        <div className="w-fit h-fit flex flex-col gap-2 pb-2 items-center justify-center">
          <div
            onClick={handleDrawer}
            className="w-12 h-12 relative flex items-center justify-center bg-ghost-100 rounded-full shadow transition-all duration-300"
          >
            <Image
              src="/header/navigation/menu.svg"
              alt="گزینه منو"
              width={30}
              height={30}
            />
          </div>
          {!showSearch && (
            <div
              onClick={handleSearchBox}
              className="w-12 h-12 relative flex items-center justify-center bg-ghost-100 rounded-full shadow transition-all duration-300"
            >
              <Image
                src="/header/search/search.svg"
                alt="گزینه جستجو"
                width={30}
                height={30}
              />
            </div>
          )}
          {showSearch && (
            <div className="w-[100vw] h-[60px] fixed bottom-0 left-0 flex justify-center items-center  transition-all duration-300">
              <div className="relative pl-5">
                <Image
                  className="absolute -right-10 bottom-1"
                  src="/header/navigation/close.svg"
                  alt="بستن"
                  width={30}
                  height={30}
                  onClick={handleSearchBox}
                />
                <input
                  className="w-72 h-10 shadow-2xl outline-0 p-2 py-4 text-sm border-ghost-1000 border-4 bg-ghost-100"
                  type="search"
                  name=""
                  id=""
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <NavList drawerOpen={drawerOpen} isMobileMode={isMobileMode} />
    </nav>
  );
};

export default NavigationHeader;
