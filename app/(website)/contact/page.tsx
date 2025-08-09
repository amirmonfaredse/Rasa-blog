import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import FormContact from "./FormContact";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "تماس با ما",
  description:
    "برای مشاهده ی اطلاعات تماس  و یا ارتباط مستقیم از طریق فرم ارسال پیام ، از این صفحه بازدید کنید",
};
export default function Page() {
  return (
    <Suspense>
      <div className="flex flex-col justify-center items-center md:flex-row">
        <FormContact />
        <div className="w-[90%]  md:w-[50%] mt-5 md:mt-2 md:px-7 flex flex-col justify-center items-center shadow-xl mx-10">
          <h1 className="flex items-center text-3xl h-24">تماس با ما</h1>
          <div className="my-4 flex flex-col justify-center items-center ">
            <h3 className="flex text-center px-2 md:px-0 mb-4 md:mb-0 text-lg md:text-xl text-ghost-500 ">
              با ما در شبکه های اجتماعی در ارتباط باشید{" "}
            </h3>
            <div className="flex flex-col md:flex-row justify-center gap-10 py-4">
              <Link
                href="https://t.me/devravesh"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <Image
                  src="/header/social/telegram.svg"
                  alt="لینک تلگرام"
                  width={60}
                  height={60}
                />
              </Link>
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://instagram.com/a.reza.m.s"
              >
                <Image
                  src="/header/social/instagram.svg"
                  alt="لینک اینستاگرام"
                  width={60}
                  height={60}
                />
              </Link>
              {/* <Link href="">
              <Image
                src="/svg/whatsup.svg"
                alt="لینک واتساپ"
                width={45}
                height={45}
              />
            </Link> */}
            </div>
          </div>
          <div className="flex flex-col md:flex-row p-2 px-4 shadow-lg shadow-ghost-300  bg-ghost-600 text-ghost-100 my-2">
            <h3>شماره تماس : </h3>
            <h4>09220395434</h4>
          </div>
          <div className="flex flex-col md:flex-row p-2 px-4 shadow-lg shadow-ghost-300  bg-ghost-600 text-ghost-100 my-2 mb-5">
            <h3>ایمیل : </h3>
            <h4>monfared.dev@gmail.com</h4>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
