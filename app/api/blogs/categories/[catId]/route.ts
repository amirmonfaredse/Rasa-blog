import { CategoryFieldsProps } from "@/types/app/data/types";
import {
  deleteCategory,
  getCategory,
  updateCategory,
} from "_data/services/categories.services";
import { secureAccess, throwIfError } from "_data/utils/server.utils";
import {
  extractCategoryFields,
  revalidateCategories,
} from "_data/utils/category.utils";
import { NextResponse } from "next/server";
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ catId: string }> }
) {
  const { catId } = await params;
  const result = await getCategory(catId);
  throwIfError(result);

  return NextResponse.json<CategoryFieldsProps>(result);
}
export async function PUT(
  request: Request,
  {
    params,
  }: {
    params: Promise<{ catId: string }>;
  }
): Promise<Response> {
  await secureAccess();
  const { catId } = await params;
  const formData = await request.formData();
  await getCategory(catId);
  const newFields = extractCategoryFields(formData, catId);
  const result = await updateCategory(newFields, catId);
  revalidateCategories();
  if ("code" in result) throw result;
  return NextResponse.json<CategoryFieldsProps>(result);
}
export async function DELETE(
  _request: Request,
  {
    params,
  }: {
    params: Promise<{ catId: string }>;
  }
): Promise<Response> {
  await secureAccess();
  const { catId } = await params;
  const result = await deleteCategory(catId);
  if ("code" in result) throw result;
  return NextResponse.json<CategoryFieldsProps>(result);
}
