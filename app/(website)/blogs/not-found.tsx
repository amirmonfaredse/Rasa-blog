"use client";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-[500px] flex flex-col items-center justify-center gap-5">
      <Image
        src="/svg/error.svg"
        alt="با خطا مواجه شده اید"
        width={100}
        height={100}
      />
      <p className="text-2xl my-5">صفحه مورد نظر وجود ندارد</p>
      <div className="flex gap-5">
        <Link href="/blogs" className="bg-gray-50 text-gray-800 rounded-lg p-3">
          بازگشت به وبلاگ
        </Link>
        <Link href="/" className="bg-gray-50 text-gray-800 rounded-lg p-3">
          بازگشت به خانه
        </Link>
      </div>
    </div>
  );
}
