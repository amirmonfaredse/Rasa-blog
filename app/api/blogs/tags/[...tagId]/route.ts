import { serviceGetTag } from "_data/blog/tags/tags.services";
import { NextResponse } from "next/server";

export async function GET({ params }: { params: { tagId: string } }) {
  const tag = await serviceGetTag(params.tagId);
  return NextResponse.json(tag);
}
