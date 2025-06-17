"use client";

import { actionCreateBlog } from "@/app/_data/blog/blogActions";
import CustomToastContainer from "@/app/utility/CustomToastContainer";
import { useActionState, useEffect } from "react";
import { toast } from "react-hot-toast";
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
    <form
      action={formAction}
      className="w-full h-fit flex flex-col justify-center items-center py-5 pt-10 md:pt-5 px-1 "
    >
      <CustomToastContainer />
      <div className="w-[95%] lg:w-[90%] flex flex-col gap-5">
        <label className="w-full flex flex-col gap-3">
          <h2 className="w-full text-ghost-900">عنوان:</h2>
          <input
            required
            name="blogTitle"
            type="text"
            className="w-full h-12 border-2 border-ghost-1000 text-ghost-900  rounded-sm p-2"
          />
        </label>
        <label className="w-full flex flex-col gap-3">
          <h2 className="text-ghost-900">توضیحات :</h2>
          <input
            required
            name="blogDescription"
            type="text"
            className="w-full h-12 border-2 border-ghost-1000 text-ghost-900  rounded-sm p-2"
          />
        </label>
        <label className="w-full flex flex-col gap-3">
          <h2 className="w-full text-ghost-900">آدرس تصویر اصلی:</h2>
          <input
            type="text"
            name="blogImage"
            className="w-full h-12 border-2 border-ghost-1000 text-ghost-900  rounded-sm p-2"
          />
        </label>
        <label className="flex flex-col gap-3">
          <h2 className="text-ghost-900">دسته بندی ها:</h2>
          <div className="w-full max-w-sm min-w-[200px]">
            <div className="w-full h-36 flex flex-col gap-1 overflow-y-scroll text-ghost-900 text-sm border-2 border-ghost-1000 rounded p-2 py-1.5  ">
              {categories.map((cat, index) => (
                <label
                  key={`${index}-${cat.id}`}
                  className="flex bg-ghost-100 items-center justify-start px-2 cursor-pointer"
                >
                  {cat.title}
                  <input
                    type="checkbox"
                    className="flex m-2"
                    value={cat.id}
                    name="blogCategory"
                  />
                </label>
              ))}
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
