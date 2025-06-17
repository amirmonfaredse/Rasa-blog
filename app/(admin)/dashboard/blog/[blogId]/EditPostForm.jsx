"use client";
import { actionUpdateBlog } from "@/app/_data/blog/blogActions";
import CustomToastContainer from "@/app/utility/CustomToastContainer";
import { useActionState, useEffect } from "react";
import { toast } from "react-hot-toast";
import TagInput from "../_components/TagInput";
import TextEditorEditBlog from "../_components/TextEditorEditBlog";
import EditButton from "./EditButton";

export default function EditPostForm({
  categories,
  blog,
  tagList,
  categorized,
  tagged,
}) {
  const [state, formAction, pending] = useActionState(actionUpdateBlog, {
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
        <input
          required
          hidden
          name="id"
          type="number"
          value={blog.id}
          readOnly
          className="w-full border-2 border-ghost-1000 text-ghost-900 h-12 rounded-sm p-2"
        />
        <label className="flex flex-col gap-3">
          <h2 className="text-ghost-900">عنوان:</h2>
          <input
            required
            name="blogTitle"
            type="text"
            defaultValue={blog.title}
            className="w-full border-2 border-ghost-1000 text-ghost-900 h-12 rounded-sm p-2"
          />
        </label>

        <label className="flex flex-col gap-3">
          <h2 className="text-ghost-900">توضیحات :</h2>
          <input
            required
            name="blogDescription"
            defaultValue={blog.description}
            type="text"
            className="w-full border-2 border-ghost-1000 text-ghost-900 h-12 rounded-sm p-2"
          />
        </label>
        <label className="flex flex-col gap-3">
          <h2 className="text-ghost-900">آدرس تصویر اصلی:</h2>
          <input
            type="text"
            name="blogImage"
            defaultValue={blog.image}
            className="w-full border-2 border-ghost-1000 text-ghost-900 h-12 rounded-sm p-2"
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
                    defaultChecked={categorized.some(
                      (obj) => Number(obj.categoryId) === Number(cat.id)
                    )}
                    name="blogCategory"
                  />
                </label>
              ))}
            </div>
          </div>
        </label>
      </div>
      <TextEditorEditBlog formState={state} defaultContent={blog.content} />
      <TagInput tagList={tagList} tagged={tagged} />
      <EditButton pending={pending} />
    </form>
  );
}
