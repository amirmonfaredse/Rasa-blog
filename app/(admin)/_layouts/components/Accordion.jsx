"use client";
import Link from "next/link";
import { useState } from "react";

function Accordion({ children, subTabs }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-[200px] h-fit  bg-slate-400 flex justify-center items-center m-2 rounded-md hover:bg-gray-700 hover:text-gray-200 transition-all duration-500 cursor-pointer">
      <button
        className="flex flex-col justify-center "
        onClick={() => {
          if (subTabs) setIsOpen(!isOpen);
        }}
      >
        <div className="w-[200px] h-[80px] bg-blue-300 rounded flex  justify-center  items-center">
          {children}
        </div>
        <div className="flex flex-col">
          {subTabs &&
            isOpen &&
            subTabs.map((subTab, index) => (
              <div
                key={index}
                className="w-full h-[45px] flex items-center hover:bg-slate-600"
              >
                <Link
                  className="w-full h-full flex justify-start  p-2"
                  href={subTab.path}
                >
                  {subTab.title}
                </Link>
              </div>
            ))}
        </div>
      </button>
    </div>
  );
}

export default Accordion;
