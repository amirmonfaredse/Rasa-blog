import { TaggedProps } from "@/types/app/data/types";
import { deleteTagged, getTagged } from "_data/services/tags.services";
import { secureAccess } from "_data/utils/server.utils";
import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ blogId: string }> }
): Promise<Response> {
  const { blogId } = await params;
  let result = await getTagged(blogId);
  if ("code" in result) throw result;
  return NextResponse.json<TaggedProps[]>(result);
}
export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ blogId: string }> }
): Promise<Response> {
  await secureAccess();

  const { blogId } = await params;
  const result = await deleteTagged(blogId);
  if ("code" in result) throw result;
  return NextResponse.json<TaggedProps[]>(result);
}
