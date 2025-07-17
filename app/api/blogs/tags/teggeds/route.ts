import { getTaggedList } from "_data/blog/tags/tags.services";
import { NextResponse } from "next/server";

export async function GET(): Promise<Response> {
  const taggeds = await getTaggedList();
  return NextResponse.json(taggeds);
}
