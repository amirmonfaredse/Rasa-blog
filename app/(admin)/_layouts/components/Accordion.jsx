"use client";
import Link from "next/link";
import { useState } from "react";

function Accordion({ children, subTabs }) {
  const [tabIsOpen, setTabIsOpen] = useState(false);
  return (
    <li
      className="flex flex-col justify-center  w-[200px] h-[50px] bg-folly-200 shadow-md  text-ghost-1000  m-2 rounded-full hover:scale-x-95 hover:shadow-2xl duration-300  cursor-pointer"
      onClick={() => {
        if (subTabs) setTabIsOpen(!tabIsOpen);
      }}
    >
      {children}
    </li>
  );
}

export default Accordion;
