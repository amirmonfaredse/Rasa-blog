"use client";

import { actionContactSendMessage } from "@/app/_data/messages/messageActions";
import { useActionState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import InputBlackBorder from "./InputBlackBorder";
import TextAreaBlackBorder from "./TextAreaBlackBorder";
import SpinnerLoader from "@/app/utility/SpinnerLoader";

function FormContact() {
  const [state, formAction, pending] = useActionState(
    actionContactSendMessage,
    {
      status: "",
      message: "",
    }
  );

  useEffect(() => {
    if (pending) toast("درحال ارسال");
  }, [pending]);
  useEffect(() => {
    if (state?.status === "success") toast("پیام با موفقیت ارسال شد");
    if (state?.status === "error") toast(state.message);
  }, [state]);

  return (
    <form
      action={formAction}
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
        disabled={pending}
      >
        {pending ? <SpinnerLoader /> : "ارسال پیام"}
      </button>
    </form>
  );
}

export default FormContact;
