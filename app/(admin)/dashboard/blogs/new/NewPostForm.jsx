"use client";

import { actionCreateBlog } from "@/app/_data/blog/blogActions";
import CustomToastContainer from "@/app/utility/CustomToastContainer";
import { useActionState, useEffect } from "react";
import { toast } from "react-toastify";
import TagInput from "../_components/TagInput";
import TextEditorCreateBlog from "../_components/TextEditorCreateBlog";
import ReleaseButton from "./ReleaseButton";

export default function NewPostForm({ categories, tagList }) {
  const [state, formAction, pending] = useActionState(actionCreateBlog, {
    status: "",
    message: "",
  });
  useEffect(() => {
    if (state?.message?.length > 0) {
      if (state?.status === "error") toast.error(state?.message);
      if (state?.status === "success") {
        toast.success(state.message);
      }
    }
  }, [state]);
  return (
    <form action={formAction} className="py-5">
      <CustomToastContainer />
      <div className="flex flex-col gap-5">
        <label className="flex flex-col gap-3">
          <h2 className="text-gray-300">عنوان:</h2>
          <input
            required
            name="blogTitle"
            type="text"
            className="w-[1000px] h-[50px] rounded-md bg-gray-500 p-2 text-xl text-gray-100"
          />
        </label>
        <label className="flex flex-col gap-3">
          <h2 className="text-gray-300">توضیحات :</h2>
          <input
            required
            name="blogDescription"
            type="text"
            className="w-[1000px] h-[50px] rounded-md bg-gray-500 p-2 text-xl text-gray-100"
          />
        </label>
        <label className="flex flex-col gap-3">
          <h2 className="text-gray-300">آدرس تصویر اصلی:</h2>
          <input
            type="text"
            name="blogImage"
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
                    className="flex  justify-start align-center"
                  >
                    {cat.title}
                    <input
                      type="checkbox"
                      className="flex m-2 text-gray-100 hover:bg-gray-600 bg-gray-600"
                      value={cat.id}
                      name="blogCategory"
                    />
                  </label>
                ))}
              </div>
            </div>
          </div>
        </label>
      </div>
      <TextEditorCreateBlog formState={state} />
      <TagInput tagList={tagList} />
      <ReleaseButton pending={pending} />
    </form>
  );
}
