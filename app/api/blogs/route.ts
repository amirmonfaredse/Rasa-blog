import { ActionResult } from "@/types/app/data/types";

import { createBlog, getBlogs } from "_data/blog/blogServices";
import { idRand, secureAccess } from "_data/utility";
import {
  extractBlogFields,
  handleCategorizing,
  handleTagging,
  revalidateBlogs,
} from "_lib/utility/blogs.utils";
import { NextResponse } from "next/server";

export async function GET() {
  const blogs = await getBlogs();
  return NextResponse.json(blogs);
}
export async function POST(request: Request): Promise<Response> {
  await secureAccess();
  const formData = await request.formData();
  const blogId = idRand();
  const blogFields = extractBlogFields(formData, blogId);
  const blogResult = await createBlog(blogFields);
  const categorizingResult = await handleCategorizing(formData, blogId);
  // const taggingResult = await handleTagging(formData, blogId);
  revalidateBlogs();
  return NextResponse.json<ActionResult[]>([
    blogResult,
    categorizingResult,
    // taggingResult,
  ]);
}
