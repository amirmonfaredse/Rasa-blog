import { type PostgrestError } from "@supabase/supabase-js";
import {
  BlogFieldProps,
  UpdatedBlogProps,
} from "../../../types/app/data/types";
import { supabase } from "../supabase";

export async function createBlog(
  newBlog: BlogFieldProps
): Promise<PostgrestError | BlogFieldProps> {
  const { error, data } = await supabase
    .from("blogs")
    .insert([newBlog])
    .select()
    .single();
  return error ?? data!;
}

export async function getBlogs(): Promise<PostgrestError | BlogFieldProps[]> {
  const { data, error } = await supabase.from("blogs").select("*");
  return error ?? data!;
}

export async function getBlog(
  id: string
): Promise<PostgrestError | BlogFieldProps> {
  const { data, error } = await supabase
    .from("blogs")
    .select()
    .eq("id", id)
    .single();
  return error ?? data!;
}

export async function updateBlog(
  updatedFields: UpdatedBlogProps,
  id: string
): Promise<PostgrestError | BlogFieldProps> {
  const { data, error } = await supabase
    .from("blogs")
    .update(updatedFields)
    .eq("id", id)
    .select()
    .single();
  return error ?? data!;
}

export async function deleteBlog(
  blogId: string
): Promise<PostgrestError | BlogFieldProps> {
  const { data, error } = await supabase
    .from("blogs")
    .delete()
    .eq("id", blogId)
    .select()
    .single();
  return error ?? data!;
}
