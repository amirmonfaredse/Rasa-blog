import { actionContactSendMessage } from "@/app/_data/messages/messageActions";
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
      <form
        action={actionContactSendMessage}
        className="w-full md:w-[50%] flex flex-col items-center px-2 md:px-0 mt-5 md:mt-2 md:mx-auto "
      >
        <label htmlFor="fullName" className="w-full">
          نام و نام خانوادگی :{" "}
        </label>
        <input
          className="w-full border-2 my-4 p-2  border-ghost-600 bg-ghost-100 shadow-xl outline-none"
          type="text"
          name="fullName"
          required
        />
        <label htmlFor="email" className="w-full">
          ایمیل :{" "}
        </label>
        <input
          className="w-full border-2 my-4 p-2  border-ghost-600 bg-ghost-100 shadow-xl outline-none"
          type="email"
          name="email"
        />
        <label htmlFor="message" className="w-full">
          متن پیام :{" "}
        </label>
        <textarea
          className="w-full border-2 my-4 p-2  border-ghost-600 bg-ghost-100 shadow-xl outline-none"
          name="message"
          rows={10}
        />
        <input
          className="w-full md:w-[300px] bg-ghost-800 text-ghost-100 py-4  my-4 rounded-md cursor-pointer hover:bg-ghost-600 transition-colors duration-400"
          type="submit"
          value="ارسال پیام"
        />
      </form>
    </div>
  );
}
