import { serviceGetTaggeds } from "_data/blog/tags/tags.services";
import { NextResponse } from "next/server";

export async function GET() {
  const taggeds = await serviceGetTaggeds();
  return NextResponse.json(taggeds);
}
