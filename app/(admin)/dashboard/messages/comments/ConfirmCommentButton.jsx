"use client";
import { actionCommentsConfirmMessage } from "@/app/_data/messages/messageActions";

function ConfirmCommentButton({ id }) {
  return (
    <button
      onClick={async () => {
        const confirmed = confirm("مطمئنی ؟");
        if (confirmed) actionCommentsConfirmMessage(id);
      }}
      className="w-[50%] h-[40px] flex justify-center items-center rounded-lg bg-green-900 hover:bg-green-300 hover:text-green-900 transition-colors duration-500"
    >
      تایید
    </button>
  );
}

export default ConfirmCommentButton;
