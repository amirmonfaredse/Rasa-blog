"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

export default function SideTab({ title, href = "", subs }) {
  const [openList, setOpenList] = useState(false);
  const onNavClick = () => {
    setOpenList(!openList);
  };

  return (
    <motion.div className="flex flex-col justify-center items-center duration-200">
      <Link
        href={href}
        onClick={onNavClick}
        className="flex justify-center items-center w-[200px] h-[50px] bg-ghost-800 shadow-md  text-ghost-100  m-2 rounded-full hover:scale-x-95 hover:shadow-2xl duration-300  cursor-pointer"
      >
        {title}
      </Link>
      <div className="w-full h-full flex flex-col items-center justify-start overflow-hidden">
        {openList &&
          subs?.length > 0 &&
          subs.map((sub, index) => (
            <motion.div
              initial={{ top: -200, position: "relative" }}
              animate={{
                top: 0,
                transition: { delay: 0.09 + index / 100 },
              }}
              className="w-full h-10 my-1"
              key={`${index}-${Math.floor(Math.random() * 100)}`}
            >
              <Link
                href={sub.path}
                className=" w-full h-full flex self-center items-center justify-center bg-ghost-500 text-ghost-100 rounded-xl shadow-xl  my-1 hover:bg-ghost-700 hover:text-orange-100 duration-200 "
              >
                {sub.title}
              </Link>
            </motion.div>
          ))}
      </div>
    </motion.div>
  );
}
