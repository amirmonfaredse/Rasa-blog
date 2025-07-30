import { TagFieldProps } from "@/types/app/data/types";
import { createTag, getTags } from "_data/services/tags.services";
import { idRand, secureAccess } from "_data/utils/server.utils";
import { extractTagFields, revalidateTags } from "_lib/utility/tag.utils";
import { NextResponse } from "next/server";

export async function GET(): Promise<Response> {
  const result = await getTags();
  if ("code" in result) throw result;
  return NextResponse.json<TagFieldProps[]>(result);
}
export async function POST(request: Request): Promise<Response> {
  await secureAccess();
  const formData = await request.formData();
  const tagId = idRand();
  const newFields = extractTagFields(formData, tagId);
  const result = await createTag(newFields);
  revalidateTags();
  if ("code" in result) throw result;
  return NextResponse.json<TagFieldProps>(result);
}
