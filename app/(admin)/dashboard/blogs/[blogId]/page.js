import {
  serviceGetBlog,
  serviceGetCategories,
} from "@/app/_data/blogService/blogServices";
import TextEditorEditBlog from "../_components/TextEditorEditBlog";
import { actionUpdateBlog } from "@/app/_data/blogService/blogActions";

export default async function Page({ params }) {
  const { blogId } = await params;
  const blog = await serviceGetBlog(blogId);
  const categories = await serviceGetCategories();

  return (
    <form action={actionUpdateBlog} className="py-5">
      <div className="flex flex-col gap-5">
        <input type="text" name="id" defaultValue={blog.id} hidden />
        <label className="flex flex-col gap-3">
          <h2 className="text-gray-300">عنوان:</h2>
          <input
            defaultValue={blog.title}
            name="blogTitle"
            className="w-[1000px] h-[50px] rounded-md bg-gray-500 p-2 text-xl text-gray-100"
          />
        </label>
        <label className="flex flex-col gap-3">
          <h2 className="text-gray-300">دسته بندی ها:</h2>
          <div className="w-full max-w-sm min-w-[200px]">
            <div className="relative">
              <div className="w-full h-auto bg-transparent placeholder:text-gray-100 text-slate-100 text-sm border border-slate-200 rounded p-2 py-1.5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-100 shadow-sm focus:shadow-md appearance-none cursor-pointer">
                {categories.map((cat, index) => (
                  <label
                    key={`${index}-${cat.id}`}
                    className="flex  justify-start align-center "
                  >
                    {cat.title}
                    <input
                      type="checkbox"
                      className="flex m-2 text-gray-100 hover:bg-gray-600 bg-gray-600"
                      value={cat.name}
                      name="blogCategory"
                      defaultChecked={blog.categories.includes(cat.name)}
                    />
                  </label>
                ))}
              </div>
            </div>
          </div>
        </label>
      </div>
      <TextEditorEditBlog defaultContent={blog.content} />
      <div className="w-full h-[100px] flex items-center justify-start">
        <button className="w-[50%] h-[40px] flex items-center justify-center rounded  bg-gray-400 hover:bg-gray-700 hover:text-gray-100 transition duration-400">
          ویرایش
        </button>
      </div>
    </form>
  );
}
