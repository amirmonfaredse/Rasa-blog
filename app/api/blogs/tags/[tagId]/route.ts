import { ActionResult, TagFieldProps } from "@/types/app/data/types";
import { deleteTag, getTag, updateTag } from "_data/services/tags.services";
import { secureAccess } from "_data/utility";
import { extractTagFields, revalidateTags } from "_lib/utility/tag.utils";
import { NextResponse } from "next/server";

export async function GET({ params }: { params: Promise<{ tagId: string }> }) {
  const { tagId } = await params;
  const result = await getTag(tagId);
  if ("code" in result) throw result;
  return NextResponse.json<TagFieldProps>(result);
}
export async function PUT(request: Request): Promise<Response> {
  await secureAccess();
  const formData = await request.formData();
  const tagId = formData.get("id") as string;
  const newFields = extractTagFields(formData, tagId);
  const result = await updateTag(newFields, tagId);
  revalidateTags();
  if ("code" in result) throw result;
  return NextResponse.json<TagFieldProps>(result);
}
export async function DELETE({
  params,
}: {
  params: Promise<{ tagId: string }>;
}): Promise<Response> {
  const { tagId } = await params;
  await secureAccess();
  const result = await deleteTag(tagId);
  revalidateTags();
  if ("code" in result) throw result;
  return NextResponse.json<TagFieldProps>(result);
}
