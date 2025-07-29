"use client";

import { useUpdateBlog } from "_data/mutate";
import { useParams } from "next/navigation";
import TextEditorEditBlog from "../_components/textEditor/TextEditorEditBlog";
import EditButton from "./EditButton";
import { useBlog } from "_data/fetchers";
import { Input, Label } from "../_components/utilities";
import CategoriesList from "../_components/CategoriesList";
import TagInputUpdate from "../_components/tagInput/TagInputUpdate";

export default function Page() {
  const { blogId } = useParams<{ blogId: string }>();
  const { blog } = useBlog(blogId);
  const { trigger, response, isMutating } = useUpdateBlog(blogId);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await trigger(formData);
  };
  return (
    <form onSubmit={handleSubmit} className="py-5">
      <div className="flex flex-col gap-5">
        {blog && (
          <>
            <Input
              required
              hidden
              name="id"
              type="text"
              defaultValue={blog?.id}
              readOnly
            />
            <Label title="عنوان">
              <Input required name="blogTitle" defaultValue={blog?.title} />
            </Label>
            <Label title="توضیحات">
              <Input
                required
                name="blogDescription"
                defaultValue={blog?.description}
              />
            </Label>
            <Label title="آدرس تصویر اصلی">
              <Input name="blogImage" defaultValue={blog?.image} />
            </Label>
            <CategoriesList />
          </>
        )}
      </div>
      <TextEditorEditBlog />
      <TagInputUpdate />
      <EditButton isMutating={isMutating} />
    </form>
  );
}
