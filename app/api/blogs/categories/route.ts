import { ActionResult, CategoryFieldsProps } from "@/types/app/data/types";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategory,
  updateCategory,
} from "_data/services/categories.services";
import { idRand, secureAccess } from "_data/utility";
import {
  extractCategoryFields,
  revalidateCategories,
} from "_lib/utility/category.utils";
import { NextResponse } from "next/server";

export async function GET() {
  const result = await getCategories();
  if ("code" in result) throw result;
  return NextResponse.json<CategoryFieldsProps[]>(result);
}
export async function POST(request: Request): Promise<Response> {
  await secureAccess();
  const formData = await request.formData();
  const catId = idRand();
  const newField = extractCategoryFields(formData, catId);
  const result = await createCategory(newField);
  revalidateCategories();
  if ("code" in result) throw result;
  return NextResponse.json<CategoryFieldsProps>(result);
}
