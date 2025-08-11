import { BlogFieldProps } from "@/types/app/data/types";
import { deleteBlog, getBlog, updateBlog } from "_data/services/blogs.services";
import { secureAccess } from "_data/utils/server.utils";
import { extractBlogFields, revalidateBlogs } from "_data/utils/blogs.utils";
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

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ blogId: string }> }
): Promise<Response> {
  await secureAccess();
  const { blogId } = await params;
  const formData = await request.formData();
  const newFields = extractBlogFields(formData, blogId);
  const result = await updateBlog(newFields, blogId);
  if ("code" in result) throw result;
  revalidateBlogs();
  return NextResponse.json<BlogFieldProps>(result);
}
export async function DELETE(
  _request: Request,
  {
    params,
  }: {
    params: Promise<{ blogId: string }>;
  }
): Promise<Response> {
  await secureAccess();
  const { blogId } = await params;
  const result = await deleteBlog(blogId);
  revalidateBlogs();
  if ("code" in result) throw result;
  return NextResponse.json<BlogFieldProps>(result);
}
