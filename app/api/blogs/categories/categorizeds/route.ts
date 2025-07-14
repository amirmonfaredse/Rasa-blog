import { serviceGetCategorizeds } from "_data/blog/categories/categories.services";
import { NextResponse } from "next/server";

export async function GET() {
  const categorizeds = await serviceGetCategorizeds();
  return NextResponse.json(categorizeds);
}
