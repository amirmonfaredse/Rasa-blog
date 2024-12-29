import Link from "next/link";
import React from "react";

export default function SideLayout() {
  return (
    <div className="h-full w-auto bg-gray-800">
      <div className="flex flex-col justify-start items-start p-2 pe-5">
        <Link href="/dashboard">
          <div className="w-[200px] h-20 bg-slate-400 flex justify-center items-center m-2 rounded-md hover:bg-gray-700 hover:text-gray-200 transition-all duration-500 cursor-pointer">
            <div className="icon"></div>
            <div>پنل اصلی</div>
          </div>
        </Link>
        <Link href="/dashboard/blog">
          <div className="w-[200px] h-20 bg-slate-400 flex justify-center items-center m-2 rounded-md hover:bg-gray-700 hover:text-gray-200 transition-all duration-500 cursor-pointer">
            <div className="icon"></div>
            <div>مدیریت وبلاگ</div>
          </div>
        </Link>
        <Link href="/dashboard/services">
          <div className="w-[200px] h-20 bg-slate-400 flex justify-center items-center m-2 rounded-md hover:bg-gray-700 hover:text-gray-200 transition-all duration-500 cursor-pointer">
            <div className="icon"></div>
            <div>مدیریت خدمات</div>
          </div>
        </Link>
        <Link href="/dashboard/portfolio">
          <div className="w-[200px] h-20 bg-slate-400 flex justify-center items-center m-2 rounded-md hover:bg-gray-700 hover:text-gray-200 transition-all duration-500 cursor-pointer">
            <div className="icon"></div>
            <div>مدیریت نمونه کار ها</div>
          </div>
        </Link>
        <Link href="/dashboard/about">
          <div className="w-[200px] h-20 bg-slate-400 flex justify-center items-center m-2 rounded-md hover:bg-gray-700 hover:text-gray-200 transition-all duration-500 cursor-pointer">
            <div className="icon"></div>
            <div>مدیریت درباره من</div>
          </div>
        </Link>
        <Link href="/dashboard/contact">
          <div className="w-[200px] h-20 bg-slate-400 flex justify-center items-center m-2 rounded-md hover:bg-gray-700 hover:text-gray-200 transition-all duration-500 cursor-pointer">
            <div className="icon"></div>
            <div>مدیریت پیام ها</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
