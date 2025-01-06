import { createAboutAction } from "@/app/_data/actions";

export default function Page() {
  return (
    <form action={createAboutAction} className="flex flex-col">
      <label htmlFor="title"> عنوان : </label>
      <input
        name="title"
        className="w-[500px] border-2  border-transparent my-4 p-2 rounded-md bg-gray-600 outline-none focus:border-gray-500 focus:border-2"
        type="text"
      />
      <label htmlFor="media"> لینک رسانه : </label>
      <input
        name="media"
        className="w-[500px] border-2  border-transparent my-4 p-2 rounded-md bg-gray-600 outline-none focus:border-gray-500 focus:border-2"
        type="text"
      />
      <label htmlFor="content"> محتوا : </label>
      <textarea
        name="content"
        className="w-[500px] border-2  border-transparent my-4 p-2 rounded-md bg-gray-600 outline-none focus:border-gray-500 focus:border-2 resize-none"
        rows={10}
      />
      <input
        type="submit"
        className="bg-gray-400 text-gray-800 w-[200px] py-2 px-4 my-4 rounded-md cursor-pointer hover:bg-gray-600 transition-colors duration-400"
        value="ایجاد + "
      />
    </form>
  );
}
