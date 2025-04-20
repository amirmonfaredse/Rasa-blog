import { serviceGetBlog } from "@/app/_data/blog/blogServices";
import { sanitizeHTMLOnServer } from "@/app/utility/jsDOM";
import React from "react";

export default async function Page({ params }) {
  const { blogId } = await params;
  const blog = await serviceGetBlog(blogId);
  return (
    <div className="w-full h-fit sm:px-10">
      <h1 className="text-2xl">{blog.title}</h1>
      <div
        className="mt-10 leading-9"
        dangerouslySetInnerHTML={{ __html: sanitizeHTMLOnServer(blog.content) }}
      />
    </div>
  );
}
