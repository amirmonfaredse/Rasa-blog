import {
  CategorizedProps,
  CategoryFieldProps,
  getCategoryServiceProps,
} from "@/types/app/data/types";
import { type PostgrestError } from "@supabase/supabase-js";

import { supabase } from "_data/supabase";

// POST / Category
export async function createCategory(
  newCategory: CategoryFieldProps
): Promise<PostgrestError | CategoryFieldProps> {
  const { data, error } = await supabase
    .from("blog-categories")
    .insert([newCategory])
    .select()
    .single();
  return error ?? data!;
}
// GET / Categories
export async function getCategories(): Promise<
  PostgrestError | getCategoryServiceProps[]
> {
  const { data, error } = await supabase.from("blog-categories").select("*");
  return error ?? data!;
}
export async function getCategory(
  catId: string
): Promise<PostgrestError | getCategoryServiceProps> {
  const { data, error } = await supabase
    .from("blog-categories")
    .select()
    .eq("id", catId)
    .single();

  return error ?? data!;
}

// PUT / Category
export async function updateCategory(
  updatedFields: CategoryFieldProps,
  id: string
): Promise<PostgrestError | CategoryFieldProps> {
  const { error, data } = await supabase
    .from("blog-categories")
    .update(updatedFields)
    .eq("id", id)
    .select()
    .single();
  return error ?? data!;
}

// DELETE / Category
export async function deleteCategory(
  id: string
): Promise<PostgrestError | CategoryFieldProps> {
  const { error, data } = await supabase
    .from("blog-categories")
    .delete()
    .eq("id", id)
    .select()
    .single();
  return error ?? data!;
}
export async function categorize(
  newField: CategorizedProps
): Promise<PostgrestError | CategorizedProps> {
  const { error, data } = await supabase
    .from("categorizing-blogs")
    .insert([newField])
    .select()
    .single();
  return error ?? data!;
}
export async function getCategorizedList(): Promise<
  PostgrestError | CategorizedProps[]
> {
  const { data, error } = await supabase.from("categorizing-blogs").select("*");
  return error ?? data!;
}
export async function deleteCategorized(
  blogId: string
): Promise<PostgrestError | CategorizedProps> {
  const { error, data } = await supabase
    .from("categorizing-blogs")
    .delete()
    .eq("blogId", blogId)
    .select()
    .single();
  return error ?? data!;
}
