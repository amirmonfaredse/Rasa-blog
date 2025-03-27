import { createPortfolioAction } from "@/app/_data/actions";

export default function Page() {
  return (
    <form action={createPortfolioAction} className="flex flex-col">
      <label htmlFor="title"> عنوان : </label>
      <input
        name="title"
        className="w-[500px] border-2  border-transparent my-4 p-2 rounded-md bg-gray-600 outline-none focus:border-gray-500 focus:border-2"
        type="text"
        required
      />
      <label htmlFor="media"> لینک رسانه : </label>
      <input
        name="media"
        className="w-[500px] border-2  border-transparent my-4 p-2 rounded-md bg-gray-600 outline-none focus:border-gray-500 focus:border-2"
        type="text"
        required
      />
      <label htmlFor="dependencies"> وابستگی ها : </label>
      <input
        name="dependencies"
        className="w-[500px] border-2  border-transparent my-4 p-2 rounded-md bg-gray-600 outline-none focus:border-gray-500 focus:border-2"
        type="text"
      />
      <label htmlFor="links"> لینک ها : </label>
      <input
        name="links"
        className="w-[500px] border-2  border-transparent my-4 p-2 rounded-md bg-gray-600 outline-none focus:border-gray-500 focus:border-2"
        type="text"
      />
      <label htmlFor="description"> محتوا : </label>
      <textarea
        name="description"
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
