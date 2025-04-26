function ShowComments({ comment }) {
  return (
    <div className="border border-gray-50 rounded-sm p-4">
      <div className="w-full flex gap-2">
        <h3>نام : </h3>
        <h3>{comment.fullName}</h3>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <h3>متن پیام : </h3>
        <h3 className="bg-gray-700 p-2 ">{comment.message}</h3>
      </div>
    </div>
  );
}

export default ShowComments;
