"use client";
import { useComments } from "_data/fetchers";
import ConfirmCommentButton from "./ConfirmCommentButton";
import DeleteCommentButton from "./DeleteCommentButton";

export default function Page() {
  const { comments } = useComments();
  return (
    <div className="flex flex-col w-full h-full text-ghost-1000 ">
      <h1 className="w-full h-28 flex items-center text-2xl">نظرات</h1>
      {comments &&
        comments.map((comment, index) => (
          <div
            key={`${comment.id}-${index}`}
            className="flex flex-col border border-avocado-700 rounded-xl my-3 ml-10 p-4 "
          >
            {comment.confirmed && (
              <div className="w-full  h-[50px] flex items-center justify-center rounded  bg-avocado-400 text-white my-1">
                تایید شده
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </div>
            )}
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-0 w-full min-h-14  h-fit">
              <div className="flex  items-center lg:gap-2 lg:mx-2">
                <h3 className="text-lg text-ghost-400">شناسه پیام : </h3>
                <h4 className=" px-2 rounded-lg">{comment.id}</h4>
              </div>
              <div className="flex items-center lg:gap-3 lg:mx-2">
                <h3 className="text-lg text-ghost-400">نام : </h3>
                <h4 className="text-lg flex items-center">
                  {comment.fullName}
                </h4>
              </div>
              <div className="flex items-center lg:gap-3 lg:mx-2">
                <h3 className="text-lg text-ghost-400">آدرس ایمیل : </h3>
                <h4 className="text-md flex items-center">{comment.email}</h4>
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg text-ghost-400 my-3">متن پیام : </h3>
              <p className=" w-full h-fit min-h-14 rounded-md p-2 px-4 bg-avocado-100 bg-opacity-70 ">
                {comment.message}
              </p>
            </div>
            <div className="w-full flex gap-5 mt-5">
              <DeleteCommentButton id={comment.id} />
              {!comment.confirmed && <ConfirmCommentButton id={comment.id} />}
            </div>
          </div>
        ))}
    </div>
  );
}
