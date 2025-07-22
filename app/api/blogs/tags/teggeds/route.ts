import { TaggedProps } from "@/types/app/data/types";
import { getTaggedList, tagging } from "_data/services/tags.services";
import { secureAccess } from "_data/utility";
import { extractTaggedFields } from "_lib/utility/tag.utils";
import { NextResponse } from "next/server";

export async function GET(): Promise<Response> {
  const result = await getTaggedList();
  if ("code" in result) throw result;
  return NextResponse.json<TaggedProps[]>(result);
}
export async function POST(request: Request): Promise<Response> {
  await secureAccess();
  const formData = await request.formData();
  const newFields = extractTaggedFields(formData);
  const results = await tagging(newFields);
  if ("code" in results) throw results;
  return NextResponse.json<TaggedProps[]>(results);
}
