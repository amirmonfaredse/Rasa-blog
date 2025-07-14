"use client";
import { useActionState, useEffect } from "react";

import { actionUpdateBlog } from "_data/blog/blogActions";
import { useBlog } from "_data/fetchers";
import { useParams } from "next/navigation";
import CustomToastContainer from "utility/CustomToastContainer";
import CategoriesList from "../_components/CategoriesList";
import TagInput from "../_components/TagInput";
import TextEditorEditBlog from "../_components/TextEditorEditBlog";
import { Input, Label } from "../_components/utilities";
import EditButton from "./EditButton";

export default function Page() {
  const { blogId } = useParams<{ blogId: string }>();
  const { blog } = useBlog(blogId);
  const [state, formAction, pending] = useActionState(actionUpdateBlog, {
    status: "",
    message: "",
  });

  useEffect(() => {}, []);
  return (
    <form action={formAction} className="py-5">
      <CustomToastContainer />
      <div className="flex flex-col gap-5">
        <Input
          required
          hidden
          name="id"
          type="number"
          value={blog.id}
          readOnly
        />
        <Label title="عنوان">
          <Input required name="blogTitle" defaultValue={blog.title} />
        </Label>
        <Label title="توضیحات">
          <Input
            required
            name="blogDescription"
            defaultValue={blog.description}
          />
        </Label>
        <Label title="آدرس تصویر اصلی">
          <Input name="blogImage" defaultValue={blog.image} />
        </Label>
        <CategoriesList blogId={blogId} />
      </div>
      <TextEditorEditBlog formState={state} defaultContent={blog.content} />
      <TagInput blogId={blogId} />
      <EditButton pending={pending} />
    </form>
  );
}
