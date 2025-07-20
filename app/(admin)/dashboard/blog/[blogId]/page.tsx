"use client";

import { useUpdateBlog } from "_data/mutate";
import TextEditorEditBlog from "../_components/TextEditorEditBlog";
import BlogFields from "./BlogFields";
import EditButton from "./EditButton";
import { useParams } from "next/navigation";

export default function Page() {
  const { blogId } = useParams<{ blogId: string }>();

  const { trigger, response, isMutating } = useUpdateBlog(blogId);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await trigger(formData);
  };
  return (
    <form onSubmit={handleSubmit} className="py-5">
      <BlogFields />
      <TextEditorEditBlog />
      {/* <TagInput blogId={blogId} /> */}
      <EditButton isMutating={isMutating} />
    </form>
  );
}
