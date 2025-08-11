import React from "react";
import { Td } from "../../_components/utilities";
import Link from "next/link";
import DeleteButtonBlog from "../../_components/buttons/DeleteButtonBlog";
import { BlogFieldProps } from "@/types/app/data/types";

export default function TRowBlog({
  blog,
  index,
}: {
  blog: BlogFieldProps;
  index: number;
}) {
  return (
    <tr className="w-fit h-12 flex items-center justify-start cursor-default bg-ghost-100 text-ghost-600 my-5 p-2  rounded">
      <Td row>{index + 1}</Td>
      <Td>{blog.title}</Td>
      <Td center>{blog.author}</Td>
      <Td center>{blog.created_at}</Td>
      <Td center>
        <Link
          href={`/blogs/${blog.id}`}
          className="w-fit md: text-xs text-green-600 p-2 rounded-lg"
        >
          مشاهده
        </Link>
        <Link
          href={`/dashboard/blog/${blog.id}`}
          className="text-xs text-green-600 p-2 rounded-lg"
        >
          ویرایش
        </Link>
        <DeleteButtonBlog blogId={blog.id} />
      </Td>
    </tr>
  );
}
