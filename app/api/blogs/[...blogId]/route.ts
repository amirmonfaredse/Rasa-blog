import { serviceGetBlog } from "_data/blog/blogServices";
import { NextResponse } from "next/server";

export async function GET({ params }: { params: { blogId: string } }) {
  const blog = await serviceGetBlog(params.blogId);
  return NextResponse.json(blog);
}
