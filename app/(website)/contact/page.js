import { actionSendMessage } from "@/app/_data/contact/contactAction";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "تماس با ما",
  description:
    "برای مشاهده ی اطلاعات تماس  و یا ارتباط مستقیم از طریق فرم ارسال پیام ، از این صفحه بازدید کنید",
};
export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row">
      <div className="w-[90%]  md:w-[50%] mt-5 md:mt-2 md:px-7 flex flex-col justify-center items-center">
        <h1 className="flex items-center text-3xl h-32">تماس با ما</h1>
        <div className="my-4 flex flex-col justify-center items-center ">
          <h3 className="flex text-center px-2 md:px-0 mb-4 md:mb-0 text-lg md:text-xl text-gray-300 ">
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
                src="/svg/telegram.svg"
                alt="لینک تلگرام"
                width={45}
                height={45}
              />
            </Link>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://instagram.com/a.reza.m.s"
            >
              <Image
                src="/svg/instagram.svg"
                alt="لینک اینستاگرام"
                width={45}
                height={45}
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
        <div className="flex flex-col md:flex-row  gap-4 my-4">
          <h3>شماره تماس : </h3>
          <h4>09220395434</h4>
        </div>
        <div className="flex flex-col md:flex-row my-4 gap-4">
          <h3>ایمیل : </h3>
          <h4>monfared.dev@gmail.com</h4>
        </div>
      </div>
      <form
        action={actionSendMessage}
        className="w-full md:w-[50%] flex flex-col items-center px-2 md:px-0 mt-5 md:mt-2 md:mx-auto "
      >
        <label htmlFor="fullName" className="w-full">
          نام و نام خانوادگی :{" "}
        </label>
        <input
          className="w-full border-2  border-transparent my-4 p-2 rounded-md bg-gray-600 outline-none focus:border-gray-500 focus:border-2"
          type="text"
          name="fullName"
          required
        />
        <label htmlFor="email" className="w-full">
          ایمیل :{" "}
        </label>
        <input
          className="w-full border-2  border-transparent my-4 p-2 rounded-md bg-gray-600 outline-none focus:border-gray-500 focus:border-2"
          type="email"
          name="email"
        />
        <label htmlFor="message" className="w-full">
          متن پیام :{" "}
        </label>
        <textarea
          className="w-full border-2  border-transparent my-4 p-2 rounded-md bg-gray-600 outline-none focus:border-gray-500 focus:border-2 resize-none"
          name="message"
          rows={10}
        />
        <input
          className="w-full md:w-[200px] bg-gray-400 text-gray-800  py-2 px-4 my-4 rounded-md cursor-pointer hover:bg-gray-600 transition-colors duration-400"
          type="submit"
          value="ارسال پیام"
        />
      </form>
    </div>
  );
}
