import { serviceGetCategories } from "_data/blog/categories/categories.services";
import { NextResponse } from "next/server";

export async function GET() {
  const categories = await serviceGetCategories();
  return NextResponse.json(categories);
}
