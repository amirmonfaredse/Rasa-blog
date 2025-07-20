import { getCategorizedList } from "_data/blog/categories/categories.services";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ blogId: string }> }
) {
  const { blogId } = await params;
  let categorized = await getCategorizedList();
  console.log("blogId ", blogId);
  if (!("message" in categorized)) {
    console.log("categorized  ", categorized);
    categorized = categorized.filter((catez) => Number(catez.blogId) === Number(blogId));
    console.log("categorized  ", categorized);
  }

  return NextResponse.json(categorized);
}
