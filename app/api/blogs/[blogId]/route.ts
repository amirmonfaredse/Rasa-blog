import { BlogFieldProps } from "@/types/app/data/types";
import { deleteBlog, getBlog, updateBlog } from "_data/services/blogs.services";
import { secureAccess } from "_data/utility";
import { extractBlogFields, revalidateBlogs } from "_lib/utility/blogs.utils";
import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ blogId: string }> }
) {
  const { blogId } = await params;
  const result = await getBlog(blogId);
  if ("code" in result) throw result;

  return NextResponse.json<BlogFieldProps>(result);
}

export async function PUT(request: Request): Promise<Response> {
  await secureAccess();
  const formData = await request.formData();
  const blogId = formData.get("id") as string;
  const newFields = extractBlogFields(formData, blogId);
  const result = await updateBlog(newFields, blogId);
  if ("code" in result) throw result;
  revalidateBlogs();
  return NextResponse.json<BlogFieldProps>(result);
}
export async function DELETE({
  params,
}: {
  params: { blogId: string };
}): Promise<Response> {
  await secureAccess();
  const blogId = params.blogId;
  const result = await deleteBlog(blogId);
  revalidateBlogs();
  if ("code" in result) throw result;
  return NextResponse.json<BlogFieldProps>(result);
}
