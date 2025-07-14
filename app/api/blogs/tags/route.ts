import { serviceGetTags } from "_data/blog/tags/tags.services";
import { NextResponse } from "next/server";

export async function GET() {
  const tags = await serviceGetTags();
  return NextResponse.json(tags);
}
