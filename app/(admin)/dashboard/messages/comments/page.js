import { serviceCommentsGetMessages } from "@/app/_data/messages/messageServices";
import DeleteCommentButton from "./DeleteCommentButton";
import ConfirmCommentButton from "./ConfirmCommentButton";

export default async function Page() {
  const comments = await serviceCommentsGetMessages();
  return (
    <div className="flex flex-col w-full h-full text-gray-200 ">
      <h1 className="flex items-center w-full h-[100px]  text-2xl">نظرات</h1>
      {comments.map((comment, index) => (
        <div
          key={`${comment.id}-${index}`}
          className="flex flex-col border border-gray-200 rounded-xl my-3 ml-10 p-4 "
        >
          {comment.confirmed && (
            <div className="w-[100px] h-[30px]  rounded-xl flex items-center justify-center bg-green-700">
              تایید شده
            </div>
          )}
          <div className="flex w-full min-h-14  h-fit">
            <div className="flex items-center gap-2 mx-2">
              <h3 className="text-md text-gray-400">شناسه پیام : </h3>
              <h4 className="bg-gray-600 px-2 rounded-md">{comment.id}</h4>
            </div>
            <div className="flex items-center gap-3 mx-2">
              <h3 className="text-lg text-gray-400">نام : </h3>
              <h4 className="text-md flex items-center bg-gray-600 px-4  rounded-md">
                {comment.fullName}
              </h4>
            </div>
            <div className="flex items-center gap-3 mx-2">
              <h3 className="text-lg text-gray-400">آدرس ایمیل : </h3>
              <h4 className="text-md flex items-center bg-gray-600 px-4 rounded-md">
                {comment.email}
              </h4>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg text-gray-400 my-3">متن پیام : </h3>
            <p className=" w-full h-fit min-h-14 rounded-md p-2 px-4 bg-gray-600 ">
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
