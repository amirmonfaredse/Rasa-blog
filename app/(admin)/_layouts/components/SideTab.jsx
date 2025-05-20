"use client";

import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

export default function SideTab({ title, href = "", subs }) {
  const [openList, setOpenList] = useState(false);
  const onNavClick = () => {
    setOpenList(!openList);
  };

  return (
    <div className="flex flex-col justify-center items-center duration-200">
      <Link
        href={href}
        onClick={onNavClick}
        className="flex justify-center items-center w-[200px] h-[50px] bg-folly-200 shadow-md  text-ghost-1000  m-2 rounded-full hover:scale-x-95 hover:shadow-2xl duration-300  cursor-pointer"
      >
        {title}
      </Link>
      {openList &&
        subs?.length > 0 &&
        subs.map((sub, index) => (
          <Link
            href={sub.path}
            className="w-3/4  h-10 flex self-center items-center justify-center bg-orange-300 text-avocado-900 rounded-xl shadow-xl  my-1 hover:bg-avocado-900 hover:text-orange-100 duration-200 "
            key={`${index}-${Math.floor(Math.random() * 100)}`}
          >
            {sub.title}
          </Link>
        ))}
    </div>
  );
}
