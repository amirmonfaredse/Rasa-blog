import { BlogFieldProps } from "@/types/app/data/types";

import { createBlog, getBlogs } from "_data/services/blogs.services";
import { secureAccess } from "_data/utility";
import { extractBlogFields, revalidateBlogs } from "_lib/utility/blogs.utils";
import { NextResponse } from "next/server";

export async function GET(): Promise<Response> {
  const result = await getBlogs();
  if ("code" in result) throw result;
  return NextResponse.json<BlogFieldProps[]>(result);
}
export async function POST(request: Request): Promise<Response> {
  await secureAccess();
  const formData = await request.formData();
  const newFields = extractBlogFields(formData);
  const result = await createBlog(newFields);
  if ("code" in result) throw result;
  revalidateBlogs();
  return NextResponse.json<BlogFieldProps>(result);
}
