"use client";

import { actionCommentsSendMessage } from "@/app/_data/messages/messageActions";
import SpinnerLoader from "@/app/utility/SpinnerLoader";
import { useActionState, useEffect } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";

export default function CommentForm({ blogId }: { blogId: string }) {
  const [state, formAction, pending] = useActionState(
    actionCommentsSendMessage,
    {
      status: "",
      message: "",
    }
  );
  useEffect(() => {
    if (state?.message?.length > 0) {
      if (state?.status === "error") toast.error(state?.message);
      if (state?.status === "success") {
        toast.success(state.message);
      }
    }
  }, [state]);

  return (
    <form
      action={formAction}
      className="w-full flex flex-col items-start px-2 md:px-0 mt-5 md:mt-2 md:my-5 "
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <div className="w-full flex flex-col md:flex-row gap-5">
        <input
          defaultValue={blogId}
          type="number"
          hidden
          name="blogId"
          required
        />
        <label
          htmlFor="fullName"
          className="w-full md:w-[50%] h-[100px] flex flex-col justify-evenly text-ghost-900"
        >
          نام :{" "}
          <input
            className="w-full border-2 border-transparent  p-2 rounded-md bg-avocado-100 outline-none focus:border-avocado-900 focus:border-2"
            type="text"
            name="fullName"
            required
          />
        </label>
        <label
          htmlFor="fullName"
          className="w-full md:w-[50%] h-[100px] flex flex-col justify-evenly "
        >
          ایمیل :{" "}
          <input
            className="w-full border-2 border-transparent  p-2 rounded-md bg-avocado-100 outline-none focus:border-avocado-900 focus:border-2"
            type="eamil"
            name="email"
            required
          />
        </label>
      </div>
      <label
        htmlFor="message"
        className="w-full md:w-full h-fit flex flex-col justify-evenly gap-3 my-2 "
      >
        متن نظر :{" "}
        <textarea
          className="w-full h-[200px] md:h-[150px] lg:h-[100px] border-2   border-transparent md: p-2 rounded-md bg-avocado-100 outline-none focus:border-avocado-900 focus:border-2 resize-none"
          name="message"
        />
      </label>

      <button
        className="w-full h-[40px] bg-cles-400 text-white  py-2 px-4 my-4 rounded-md cursor-pointer hover:bg-folly-300 transition-colors duration-400"
        type="submit"
        disabled={pending}
      >
        {pending ? <SpinnerLoader /> : "ارسال پیام"}
      </button>
    </form>
  );
}
