import { ActionResult } from "@/types/app/data/types";
import { getBlog, updateBlog } from "_data/blog/blogs.services";
import { deleteCategorized } from "_data/blog/categories/categories.services";
import { deleteTagged } from "_data/blog/tags/tags.services";
import { secureAccess } from "_data/utility";
import {
  extractBlogFields,
  handleCategorizing,
  handleTagging,
  revalidateBlogs,
} from "_lib/utility/blogs.utils";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ blogId: string }> }
) {
  const { blogId } = await params;
  const blog = await getBlog(blogId);
  return NextResponse.json(blog);
}
export async function PUT(request: Request): Promise<Response> {
  await secureAccess();
  const formData = await request.formData();
  const blogId = formData.get("id") as string;
  await getBlog(blogId);
  const blogFields = extractBlogFields(formData, blogId);
  const updateResult = await updateBlog(blogFields, blogId);
  await deleteCategorized(blogId);
  await deleteTagged(blogId);
  const categorizingResult = await handleCategorizing(formData, blogId);
  const taggingResult = await handleTagging(formData, blogId);
  revalidateBlogs();
  return NextResponse.json<ActionResult[]>([
    updateResult,
    categorizingResult,
    taggingResult,
  ]);
}
// export async function DELETE({
//   params,
// }: {
//   params: { blogId: string };
// }): Promise<Response> {
//   await secureAccess();
//   const blogId = params.blogId;
//   const deleteResult = await deleteBlog(blogId);
//   revalidateBlogs();
//   return NextResponse.json<ActionResult[]>([deleteResult]);
// }
