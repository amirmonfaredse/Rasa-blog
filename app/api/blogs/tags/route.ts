import { ActionResult } from "@/types/app/data/types";
import {
  serviceCreateTag,
  serviceGetTags,
} from "_data/blog/tags/tags.services";
import { idRand, secureAccess } from "_data/utility";
import { extractTagFields, revalidateTags } from "_lib/utility/tag.utils";
import { NextResponse } from "next/server";

export async function GET() {
  const tags = await serviceGetTags();
  return NextResponse.json(tags);
}
export async function POST(request: Request): Promise<Response> {
  await secureAccess();
  const formData = await request.formData();
  const tagId = idRand();
  const newFields = extractTagFields(formData, tagId);
  const tagResult = await serviceCreateTag(newFields);
  revalidateTags();
  return NextResponse.json<ActionResult[]>([tagResult]);
}
