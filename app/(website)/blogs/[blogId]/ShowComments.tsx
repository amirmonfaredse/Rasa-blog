import { CommentFieldProps } from "@/types/app/data/types";

function ShowComments({ comment }: { comment: CommentFieldProps }) {
  return (
    <div className="flex flex-col gap-2 border border-avocado-500 text-ghost-800 rounded-sm p-4">
      <div className="w-full flex gap-2">
        <h3>نام : </h3>
        <h3>{comment.fullName}</h3>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <h3>متن پیام : </h3>
        <h3 className="bg-avocado-100 bg-opacity-30 text-ghost-800 p-2 ">
          {comment.message}
        </h3>
      </div>
    </div>
  );
}

export default ShowComments;
