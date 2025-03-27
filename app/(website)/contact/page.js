import { sendContactMessageAction } from "@/app/_data/actions";
import React from "react";
export const metadata = {
  title: "تماس با من",
  description: "",
};
export default function Page() {
  return (
    <div>
      <form action={sendContactMessageAction} className="flex flex-col">
        <label htmlFor="fullName">نام و نام خانوادگی : </label>
        <input
          className="w-[500px] border-2  border-transparent my-4 p-2 rounded-md bg-gray-600 outline-none focus:border-gray-500 focus:border-2"
          type="text"
          name="fullName"
          required
        />
        <label htmlFor="email">ایمیل : </label>
        <input
          className="w-[500px] border-2  border-transparent my-4 p-2 rounded-md bg-gray-600 outline-none focus:border-gray-500 focus:border-2"
          type="email"
          name="email"
        />
        <label htmlFor="message">متن پیام : </label>
        <textarea
          className="w-[500px] border-2  border-transparent my-4 p-2 rounded-md bg-gray-600 outline-none focus:border-gray-500 focus:border-2 resize-none"
          name="message"
          rows={10}
        />
        <input
          className="bg-gray-400 text-gray-800 w-[200px] py-2 px-4 my-4 rounded-md cursor-pointer hover:bg-gray-600 transition-colors duration-400"
          type="submit"
          value="ارسال پیام"
        />
      </form>
    </div>
  );
}
