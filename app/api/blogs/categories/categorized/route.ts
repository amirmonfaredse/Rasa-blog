import { CategorizedProps } from "@/types/app/data/types";
import {
  categorize,
  getCategorizedList,
} from "_data/services/categories.services";
import { secureAccess } from "_data/utility";
import { extractCategorizingFields } from "_lib/utility/category.utils";
import { NextResponse } from "next/server";

export async function GET() {
  const result = await getCategorizedList();
  if ("code" in result) throw result;
  return NextResponse.json<CategorizedProps[]>(result);
}
export async function POST(request: Request): Promise<Response> {
  await secureAccess();
  const formData = await request.formData();
  const newFields = extractCategorizingFields(formData);
  const results = await categorize(newFields);
  if ("code" in results) throw results;
  return NextResponse.json<CategorizedProps[]>(results);
}
