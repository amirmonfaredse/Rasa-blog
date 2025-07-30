"use client";

import SpinnerLoader from "utility/loaders/SpinnerLoader";
import { useSendMessage } from "_data/mutate";
import InputBlackBorder from "./InputBlackBorder";
import TextAreaBlackBorder from "./TextAreaBlackBorder";

function FormContact() {
  const { trigger, response, isMutating } = useSendMessage();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    await trigger(formData);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:w-[50%] flex flex-col items-center px-2 md:px-0 mt-5 md:mt-2 md:mx-auto "
    >
      <label htmlFor="fullName" className="w-full">
        نام و نام خانوادگی :{" "}
      </label>
      <InputBlackBorder type="text" name="fullName" required />

      <label htmlFor="email" className="w-full">
        ایمیل :{" "}
      </label>
      <InputBlackBorder type="email" name="email" />
      <label htmlFor="message" className="w-full">
        متن پیام :{" "}
      </label>
      <TextAreaBlackBorder name="message" />
      <button
        className="w-full md:w-[300px] h-12 flex items-center justify-center  bg-ghost-800 text-ghost-100  my-4 rounded-md cursor-pointer hover:bg-ghost-600 transition-colors duration-400"
        disabled={isMutating}
      >
        {isMutating ? <SpinnerLoader /> : "ارسال پیام"}
      </button>
    </form>
  );
}

export default FormContact;
