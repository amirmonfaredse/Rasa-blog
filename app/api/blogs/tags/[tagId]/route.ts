import { ActionResult } from "@/types/app/data/types";
import {
  serviceDeleteTag,
  serviceGetTag,
  serviceUpdateTag,
} from "_data/blog/tags/tags.services";
import { secureAccess } from "_data/utility";
import { extractTagFields, revalidateTags } from "_lib/utility/tag.utils";
import { NextResponse } from "next/server";

export async function GET({ params }: { params: { tagId: string } }) {
  const tag = await serviceGetTag(params.tagId);
  return NextResponse.json(tag);
}
export async function PUT(request: Request): Promise<Response> {
  await secureAccess();
  const formData = await request.formData();
  const tagId = formData.get("id") as string;
  const newFields = extractTagFields(formData, tagId);
  const updateResult = await serviceUpdateTag(newFields, tagId);
  revalidateTags();
  return NextResponse.json<ActionResult[]>([updateResult]);
}
export async function DELETE({
  params,
}: {
  params: { tagId: string };
}): Promise<Response> {
  await secureAccess();
  const tagId = params.tagId;
  const deleteResult = await serviceDeleteTag(tagId);
  revalidateTags();
  return NextResponse.json<ActionResult[]>([deleteResult]);
}
