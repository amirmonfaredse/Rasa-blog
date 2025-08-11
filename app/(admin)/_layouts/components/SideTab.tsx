"use client";
import { SideTabProps } from "@/types/app/admin/types";
import Link from "next/link";
import { useState } from "react";

export default function SideTab({ title, href = "/", subs }: SideTabProps) {
  const [listIsOpen, setListIsOpen] = useState<boolean>(false);

  const onSideList = () => {
    setListIsOpen(!listIsOpen);
  };
  return (
    <div className="flex flex-col justify-center items-center duration-200">
      <Link
        href={href}
        onClick={onSideList}
        className="flex justify-center items-center w-[200px] h-[50px] bg-ghost-800 shadow-md  text-ghost-100  m-2 rounded-full hover:scale-x-95 hover:shadow-2xl duration-300  cursor-pointer"
      >
        {title}
      </Link>
      <div className="w-full h-full flex flex-col items-center justify-start overflow-hidden">
        {listIsOpen &&
          subs &&
          subs?.map((sub, index) => (
            <div
              className="w-full h-10 my-1"
              key={`${index}-${Math.floor(Math.random() * 100)}`}
            >
              <Link
                href={sub.path}
                className=" w-full h-full flex self-center items-center justify-center bg-ghost-500 text-ghost-100 rounded-xl shadow-xl  my-1 hover:bg-ghost-700 hover:text-orange-100 duration-200 "
              >
                {sub.title}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
